# SustainerTech — Deployment Guide

## 📦 Files in This Package
| File | Purpose |
|---|---|
| `sustainertech.html` | Complete website (single-file) |
| `server.js` | Node.js/Express server (for dynamic hosting) |
| `package.json` | Node.js project config |
| `README.md` | This file |

---

## ✅ Step 1 — Connect Your Contact Form (5 minutes)

The form uses **Web3Forms** — free, no backend needed, emails go directly to your inbox.

1. Go to **https://web3forms.com** and sign up free
2. Enter your email → they send you an **Access Key**
3. Open `sustainertech.html`, find this line near the bottom:
   ```js
   const WEB3FORMS_ACCESS_KEY = 'YOUR_ACCESS_KEY_HERE';
   ```
4. Replace `YOUR_ACCESS_KEY_HERE` with your key
5. Done — all form submissions now arrive in your email inbox instantly ✓

---

## 🚀 Step 2 — Choose Your Hosting Method

### Option A: Static Hosting — FREE (Recommended for most users)
No server needed. Just upload one file.

#### Netlify (Easiest — free)
1. Go to https://netlify.com → New site
2. Drag & drop `sustainertech.html` into the deploy box
3. Your site is live in ~30 seconds
4. Add your custom domain in Site Settings → Domain Management

#### Vercel (Free)
1. Install CLI: `npm i -g vercel`
2. In the folder: `vercel`
3. Follow prompts → live instantly

#### Cloudflare Pages (Free + fastest CDN globally)
1. Go to https://pages.cloudflare.com
2. Create project → Upload `sustainertech.html`
3. Done — automatic HTTPS + global CDN

---

### Option B: Node.js Server Hosting (Railway / Render / Fly.io)

Use this if you want more control or plan to add a backend later.

#### Railway.app (Recommended — $5/mo)
1. Go to https://railway.app → New Project
2. Connect your GitHub repo (or upload files)
3. Railway auto-detects `package.json` and runs `npm start`
4. Add your domain in Settings → Domains

#### Render.com (Free tier available)
1. Go to https://render.com → New Web Service
2. Connect your GitHub repo
3. Build command: `npm install`
4. Start command: `node server.js`
5. Done

#### VPS (Ubuntu) with PM2
```bash
# On your server:
git clone <your-repo> /var/www/sustainertech
cd /var/www/sustainertech
npm install
npm install -g pm2
pm2 start server.js --name sustainertech
pm2 save && pm2 startup

# Nginx reverse proxy config:
server {
    listen 80;
    server_name yourdomain.com;
    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

---

## 🌐 Step 3 — Add Your Custom Domain

On any host, you'll need to point your domain's DNS to the host's servers.

1. In your domain registrar (Namecheap, GoDaddy, Cloudflare, etc.)
2. Add an **A record** or **CNAME** pointing to your host's IP/address
3. Enable HTTPS (all platforms above do this automatically — free)

---

## 📧 Step 4 — Set Up Your Email

The site shows `contact@sustainertech.eu` — make sure this inbox exists.

**Recommended providers:**
- **Zoho Mail** — free plan, custom domain
- **Google Workspace** — €6/mo, professional
- **Namecheap Private Email** — cheap, reliable

---

## 🔧 What's Already Done (Completed)

- ✅ Contact form backend via Web3Forms (just add your access key)
- ✅ Email typo fixed: `contact@sustainertech.eu`
- ✅ All Netherlands/KVK references removed
- ✅ "100% Guarantee" card removed from Why Us section
- ✅ "What if I'm not based in the Netherlands?" FAQ removed
- ✅ All 27 EU member states in country dropdown
- ✅ Mobile hamburger menu with slide-down drawer
- ✅ Cookie consent with 1-year expiry enforcement (GDPR Art. 7)
- ✅ Complete translations for all 6 languages (EN, NL, DE, FR, ES, PL)
- ✅ Responsive design — mobile, tablet, desktop, widescreen
- ✅ Structured data (Schema.org) updated — EU-wide, no Netherlands
- ✅ Meta description & keywords updated — no Netherlands reference
- ✅ Security headers via Express server

---

## 📱 Browser & Device Support

| Platform | Support |
|---|---|
| Chrome, Edge, Firefox, Safari | ✓ Full support |
| iOS Safari (iPhone/iPad) | ✓ Fully responsive |
| Android Chrome | ✓ Fully responsive |
| Tablet (768px–1024px) | ✓ Adapted layout |
| Desktop (1024px+) | ✓ Full layout |
| Mobile (< 560px) | ✓ Single-column, hamburger nav |

---

## 🆘 Support

Questions? WhatsApp: +31 97010 266806  
Email: contact@sustainertech.eu
