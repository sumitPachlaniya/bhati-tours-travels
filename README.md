# Bhati Tours & Travels – Website & Booking System

Official website for **Bhati Tours & Travels, Ujjain** (`ujjaintaxiservices.com`).

## Project Folder Structure

```text
bhati-tours-travels/
├── index.html             # Main website & booking interface
├── site-config.js         # Local configuration (phone, email, cars, packages, asset paths)
├── assets/                # Local images folder (drop photos here & reference in site-config.js)
├── cloudflare-worker.js   # Cloudflare Worker backend proxy (PIN verification & WhatsApp alerts)
└── README.md              # Project setup & deployment guide
```

## How to Update Phone Numbers, Email & Images Locally

1. **Add Images:** Drop your car, temple, logo, or banner photos inside the `assets/` folder (for example, `assets/innova.jpg`).
2. **Edit Configuration:** Open `site-config.js` in VS Code and update:
   - `dispatchWa` (WhatsApp alert number)
   - `callPhone` (Public call & enquiry number)
   - `adminEmail` (Booking notification email)
   - `heroImage`, `websiteLogo`, `fleet`, or `packages` image paths (e.g. `'assets/innova.jpg'`)
3. **Push to GitHub:**
   ```cmd
   git add .
   git commit -m "Update contact details and images"
   git push origin main
   ```
   Hostinger will automatically deploy your updates live.

## Cloudflare Worker Secrets

In your Cloudflare Dashboard (`Workers & Pages -> bhati-tours-travels -> Settings -> Variables and Secrets`), add:
- `ADMIN_PIN`: Security key for the Admin panel
- `RECORDS_PIN`: Security key for the Booking Records Vault
