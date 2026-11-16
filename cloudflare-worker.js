// ============================================================================
// BHATI TOURS & TRAVELS - CLOUDFLARE WORKER BACKEND PROXY
// Required Cloudflare Worker Secrets (Settings -> Variables and Secrets):
//   1. ADMIN_PIN      -> Your Admin Security Key
//   2. RECORDS_PIN    -> Your Booking Records Vault Security Key
// Optional Secrets (for automated Meta WhatsApp Cloud API alerts):
//   3. WA_TOKEN       -> Meta WhatsApp Permanent Access Token
//   4. WA_PHONE_ID    -> Meta WhatsApp Phone Number ID
//   5. WA_TO_NUMBER   -> Recipient WhatsApp number (e.g. 918817278961)
// Optional KV Namespace Binding (for cross-device Booking Records sync):
//   Bind a KV namespace named BOOKINGS_KV in Worker Settings -> Bindings
// ============================================================================

const CORS_HEADERS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type',
};

function jsonResponse(data, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: {
      'Content-Type': 'application/json',
      ...CORS_HEADERS,
    },
  });
}

export default {
  async fetch(request, env) {
    if (request.method === 'OPTIONS') {
      return new Response(null, { status: 204, headers: CORS_HEADERS });
    }

    if (request.method === 'GET') {
      return jsonResponse({
        ok: true,
        service: 'Bhati Tours & Travels Backend Proxy',
        status: 'active',
      });
    }

    if (request.method !== 'POST') {
      return jsonResponse({ ok: false, error: 'Method not allowed' }, 405);
    }

    try {
      const body = await request.json();
      const action = body.action || 'send_whatsapp';

      // 1. Verify Admin or Records Security PIN
      if (action === 'verify_pin') {
        const { role, pin } = body;
        if (!pin) {
          return jsonResponse({ ok: false, error: 'Security key is required.' }, 400);
        }
        const expectedPin = role === 'admin' ? env.ADMIN_PIN : env.RECORDS_PIN;
        if (!expectedPin) {
          return jsonResponse(
            {
              ok: false,
              error: `Server secret ${role === 'admin' ? 'ADMIN_PIN' : 'RECORDS_PIN'} is not configured in Cloudflare Worker Settings.`,
            },
            500
          );
        }
        if (String(pin).trim() === String(expectedPin).trim()) {
          return jsonResponse({ ok: true });
        }
        return jsonResponse({ ok: false, error: 'Incorrect Security Key. Access Denied.' }, 401);
      }

      // 2. Save Booking Record to Cloudflare KV (if BOOKINGS_KV is bound)
      if (action === 'save_booking' && body.booking) {
        if (env.BOOKINGS_KV) {
          const existingRaw = await env.BOOKINGS_KV.get('all_bookings');
          const existing = existingRaw ? JSON.parse(existingRaw) : [];
          existing.unshift(body.booking);
          await env.BOOKINGS_KV.put('all_bookings', JSON.stringify(existing.slice(0, 200)));
          return jsonResponse({ ok: true, synced: true });
        }
        return jsonResponse({ ok: true, synced: false });
      }

      // 3. Fetch Bookings from Cloudflare KV (requires valid RECORDS_PIN)
      if (action === 'get_bookings') {
        if (!env.RECORDS_PIN || String(body.pin || '').trim() !== String(env.RECORDS_PIN).trim()) {
          return jsonResponse({ ok: false, error: 'Unauthorized' }, 401);
        }
        if (env.BOOKINGS_KV) {
          const existingRaw = await env.BOOKINGS_KV.get('all_bookings');
          return jsonResponse({ ok: true, bookings: existingRaw ? JSON.parse(existingRaw) : [] });
        }
        return jsonResponse({ ok: true, bookings: [] });
      }

      // 4. Send Automated Meta WhatsApp Cloud API Alert
      if (body.waBodyText) {
        const cleanToken = String(env.WA_TOKEN || '').replace(/^["'\s]+|["'\s]+$/g, '');
        const cleanPhoneId = String(env.WA_PHONE_ID || '').replace(/[^0-9]/g, '');
        const cleanToNumber = String(env.WA_TO_NUMBER || '').replace(/[^0-9]/g, '');

        if (!cleanToken || !cleanPhoneId || !cleanToNumber) {
          return jsonResponse(
            {
              error: {
                message: 'Meta WhatsApp API secrets not set on Worker. Use manual WhatsApp button below.',
              },
            },
            400
          );
        }

        const waRes = await fetch(
          `https://graph.facebook.com/v19.0/${cleanPhoneId}/messages`,
          {
            method: 'POST',
            headers: {
              Authorization: `Bearer ${cleanToken}`,
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              messaging_product: 'whatsapp',
              to: cleanToNumber,
              type: 'text',
              text: { body: body.waBodyText },
            }),
          }
        );

        const waData = await waRes.json();
        return jsonResponse(waData, waRes.status);
      }

      return jsonResponse({ ok: false, error: 'Unknown action' }, 400);
    } catch (err) {
      return jsonResponse({ ok: false, error: err.message || 'Invalid JSON payload' }, 400);
    }
  },
};
