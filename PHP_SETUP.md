# PHP Setup Guide

## PHP is Not Installed

Your React frontend will work, but the backend API (contact form, dynamic data) needs PHP.

## Option 1: Install PHP (Recommended)

### Windows:

1. **Download PHP:**
   - Go to https://windows.php.net/download/
   - Download PHP 8.x Thread Safe ZIP
   - Extract to `C:\php`

2. **Add to PATH:**
   - Search "Environment Variables" in Windows
   - Edit "Path" variable
   - Add `C:\php`
   - Click OK

3. **Verify:**
   ```bash
   php --version
   ```

### Alternative: Use XAMPP (Easier)

1. **Download XAMPP:**
   - Go to https://www.apachefriends.org/
   - Download and install XAMPP

2. **Use XAMPP PHP:**
   - XAMPP PHP is usually at: `C:\xampp\php\php.exe`
   - You can use it directly: `C:\xampp\php\php.exe -S localhost:8000`

3. **Or add to PATH:**
   - Add `C:\xampp\php` to your PATH

## Option 2: Use Without PHP (Frontend Only)

The website will work with **fallback data**:
- Skills will show default values
- Projects will show sample projects
- Contact form won't work (but won't break the site)

To run frontend only:
```bash
npm run dev
```

Then access: `http://localhost:3000`

## Option 3: Use a Different Backend

You can replace PHP with:
- Node.js/Express
- Python/Flask
- Or any other backend

Just update the API endpoints in the React components.

## After Installing PHP

1. Start PHP server:
   ```bash
   cd api
   php -S localhost:8000
   ```

2. Start React (in another terminal):
   ```bash
   npm run dev
   ```

3. Set up MySQL database (see `SETUP.md`)

