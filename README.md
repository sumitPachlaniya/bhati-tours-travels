# Bhati Tours & Travels - Ujjain Cab Booking System

## Project Structure
- `index.html`: Fully responsive single-file cab booking web application with Admin Dashboard, Booking Records Vault, auto-swipe car/package galleries, and WhatsApp/Email automation.
- `cloudflare-worker.js`: Secure backend proxy and PIN verification worker for Cloudflare.

## Deployment Instructions

### 1. Host Website on Netlify / GitHub Pages
- **Netlify**: Drag and drop the `bhati-tours` folder into Netlify Drop (https://app.netlify.com/drop) or deploy manually.
- **GitHub Pages**: Upload `index.html` to a public repository and enable GitHub Pages under repository Settings -> Pages.

### 2. Deploy Cloudflare Worker
1. Go to Cloudflare Dashboard -> Workers & Pages -> Create Worker.
2. Paste the contents of `cloudflare-worker.js`.
3. Add the following encrypted Secrets in Worker Settings -> Variables and Secrets:
   - `ADMIN_PIN`: Your 6-digit Admin key (e.g., 896150)
   - `RECORDS_PIN`: Your 6-digit Records key (e.g., 500721)
   - `WA_ACCESS_TOKEN`: Meta WhatsApp Cloud API Token
   - `WA_PHONE_NUMBER_ID`: Meta WhatsApp Phone Number ID
   - `DISPATCH_PHONE`: 918817278961
4. Copy your Worker URL (`https://...workers.dev`) and save it inside `index.html` under `DEFAULT_WA_PROXY_URL` or via the Admin panel.
