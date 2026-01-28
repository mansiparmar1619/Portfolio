# Deployment Guide

## Quick Deploy Options

### Option 1: Vercel (Recommended - Free & Easy)

1. **Build your project:**
   ```bash
   npm run build
   ```

2. **Install Vercel CLI:**
   ```bash
   npm install -g vercel
   ```

3. **Deploy:**
   ```bash
   vercel
   ```
   Or connect your GitHub repo at [vercel.com](https://vercel.com)

4. **Your site will be live at:** `https://your-portfolio.vercel.app`

### Option 2: Netlify (Free)

1. **Build your project:**
   ```bash
   npm run build
   ```

2. **Drag and drop the `dist` folder** to [netlify.com/drop](https://app.netlify.com/drop)

   Or use Netlify CLI:
   ```bash
   npm install -g netlify-cli
   netlify deploy
   ```

3. **Your site will be live at:** `https://your-portfolio.netlify.app`

### Option 3: GitHub Pages

1. **Install gh-pages:**
   ```bash
   npm install --save-dev gh-pages
   ```

2. **Add to package.json:**
   ```json
   "homepage": "https://mansiparmar1619.github.io/portfolio",
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```

3. **Deploy:**
   ```bash
   npm run deploy
   ```

4. **Your site will be live at:** `https://mansiparmar1619.github.io/portfolio`

## Important Notes for Deployment

### Backend (PHP) - Optional
- The contact form requires PHP backend
- For static hosting (Vercel/Netlify), you can:
  1. Use a service like Formspree for contact forms
  2. Use Netlify Forms (if using Netlify)
  3. Keep PHP backend separate on a service like:
     - Heroku
     - Railway
     - DigitalOcean
     - Any PHP hosting (cPanel, etc.)

### Environment Variables
- No environment variables needed for basic deployment
- If you add API keys later, set them in your hosting platform

### Build Command
- **Build command:** `npm run build`
- **Output directory:** `dist`
- **Node version:** 18.x or higher

## Quick Links

- **Local Development:** http://localhost:3000
- **Vercel:** https://vercel.com
- **Netlify:** https://netlify.com
- **GitHub Pages:** https://pages.github.com

