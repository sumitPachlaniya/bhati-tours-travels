export default {
  async fetch(request, env) {
    const corsHeaders = {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
    };

    if (request.method === "OPTIONS") {
      return new Response(null, { headers: corsHeaders });
    }

    if (request.method !== "POST") {
      return new Response(JSON.stringify({ error: "Method not allowed" }), {
        status: 405,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    try {
      const body = await request.json();

      // 1. Server-Side Admin & Records PIN Verification
      if (body.action === "verify_pin") {
        const { role, pin } = body;
        const expectedPin = role === "records" ? env.RECORDS_PIN : env.ADMIN_PIN;

        if (!expectedPin) {
          return new Response(
            JSON.stringify({ ok: false, error: "Server PIN secret not configured in Cloudflare." }),
            { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
          );
        }

        if (String(pin || "").trim() === String(expectedPin).trim()) {
          return new Response(JSON.stringify({ ok: true }), {
            status: 200,
            headers: { ...corsHeaders, "Content-Type": "application/json" },
          });
        }

        return new Response(
          JSON.stringify({ ok: false, error: "Incorrect Security Key. Access Denied." }),
          { status: 401, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }

      // 2. Meta WhatsApp Cloud API Alert Dispatch
      const { waBodyText } = body;
      if (!waBodyText) {
        return new Response(JSON.stringify({ error: { message: "Missing waBodyText" } }), {
          status: 400,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }

      const metaRes = await fetch(
        `https://graph.facebook.com/v20.0/${env.WA_PHONE_NUMBER_ID}/messages`,
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${env.WA_ACCESS_TOKEN}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            messaging_product: "whatsapp",
            to: env.DISPATCH_PHONE || "918817278961",
            type: "text",
            text: { body: waBodyText },
          }),
        }
      );

      const metaData = await metaRes.json();
      return new Response(JSON.stringify(metaData), {
        status: metaRes.status,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    } catch (err) {
      return new Response(JSON.stringify({ error: { message: err.message } }), {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }
  },
};
