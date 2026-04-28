/**
 * SustainerTech — Express Server
 * ─────────────────────────────────────────────────────────────
 * Works with: Node.js ≥ 18  |  npm install express
 *
 * Deploy targets that support this file:
 *   • Railway.app       • Render.com        • Heroku
 *   • DigitalOcean App  • Fly.io            • VPS (PM2)
 *
 * For static-only hosting (Netlify / Vercel / Cloudflare Pages)
 * you do NOT need this file — just upload sustainertech.html.
 * ─────────────────────────────────────────────────────────────
 */

const express = require('express');
const path    = require('path');

const app  = express();
const PORT = process.env.PORT || 3000;

// ── Security headers ──────────────────────────────────────────
app.use((req, res, next) => {
  res.setHeader('X-Content-Type-Options', 'nosniff');
  res.setHeader('X-Frame-Options', 'SAMEORIGIN');
  res.setHeader('X-XSS-Protection', '1; mode=block');
  res.setHeader('Referrer-Policy', 'strict-origin-when-cross-origin');
  res.setHeader('Permissions-Policy', 'camera=(), microphone=(), geolocation=()');
  next();
});

// ── Serve static files from current directory ─────────────────
app.use(express.static(__dirname, {
  extensions: ['html'],
  index:      'sustainertech.html',
  maxAge:     '1d'
}));

// ── Root route ────────────────────────────────────────────────
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'sustainertech.html'));
});

// ── Health check (used by Railway / Render / Fly.io) ──────────
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'ok', timestamp: new Date().toISOString() });
});

// ── 404 fallback ──────────────────────────────────────────────
app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, 'sustainertech.html'));
});

// ── Start ─────────────────────────────────────────────────────
app.listen(PORT, () => {
  console.log(`✅  SustainerTech running → http://localhost:${PORT}`);
});
