# Troubleshooting Guide

## "localhost refused to connect" Error

This error means the development server isn't running. Follow these steps:

### Step 1: Check if Dependencies are Installed

First, make sure you've installed all npm packages:

```bash
npm install
```

You should see `node_modules` folder created after this command.

### Step 2: Verify Node.js and npm are Installed

Check your versions:
```bash
node --version
npm --version
```

You need Node.js v16 or higher.

### Step 3: Start the Servers Manually

**Option A: Use Two Separate Terminals**

**Terminal 1 - Start PHP Server:**
```bash
cd api
php -S localhost:8000
```
You should see: `PHP 7.x.x Development Server started at http://localhost:8000`

**Terminal 2 - Start React Dev Server:**
```bash
npm run dev
```
You should see: `Local: http://localhost:3000`

**Option B: Use the Batch Script (Windows)**

1. Make sure you're in the project root directory
2. Double-click `start-dev.bat` or run it from command prompt
3. Two command windows will open - keep both open!

### Step 4: Check What's Running

**Check if PHP is installed:**
```bash
php --version
```

If PHP is not found:
- Install PHP from https://www.php.net/downloads.php
- Or use XAMPP/WAMP which includes PHP

**Check if port 3000 is available:**
```bash
netstat -ano | findstr :3000
```

If something is using port 3000, either:
- Stop that application
- Change port in `vite.config.js`

### Step 5: Access the Correct URL

Make sure you're accessing:
- **Frontend**: `http://localhost:3000` (NOT 3001, 3002, etc.)
- **Backend API**: `http://localhost:8000`

### Common Issues and Solutions

#### Issue: "npm: command not found"
**Solution**: Install Node.js from https://nodejs.org/

#### Issue: "php: command not found"
**Solution**: 
- Install PHP and add it to PATH
- Or use XAMPP/WAMP and use their PHP

#### Issue: Port 3000 already in use
**Solution**: 
1. Find what's using it: `netstat -ano | findstr :3000`
2. Kill the process or change port in `vite.config.js`:
```js
server: {
  port: 3001, // Change to different port
}
```

#### Issue: Port 8000 already in use
**Solution**: Change PHP server port:
```bash
php -S localhost:8001
```
And update `vite.config.js` proxy target to `http://localhost:8001`

#### Issue: "Cannot find module" errors
**Solution**: 
```bash
rm -rf node_modules
npm install
```

#### Issue: React server starts but shows blank page
**Solution**: 
- Check browser console for errors (F12)
- Make sure you're accessing `http://localhost:3000` (not file://)
- Check if PHP server is running on port 8000

### Quick Diagnostic Commands

Run these to check your setup:

```bash
# Check Node.js
node --version

# Check npm
npm --version

# Check PHP
php --version

# Check if dependencies are installed
dir node_modules

# Check if servers are running
netstat -ano | findstr :3000
netstat -ano | findstr :8000
```

### Still Having Issues?

1. **Check the terminal output** - Look for error messages
2. **Check browser console** - Press F12 and look for errors
3. **Verify file structure** - Make sure all files are in place
4. **Try manual start** - Use two separate terminals instead of the batch script

