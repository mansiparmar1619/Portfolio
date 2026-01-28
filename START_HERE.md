# 🚀 START HERE - Quick Fix for "localhost refused to connect"

## ✅ Dependencies Installed!

Your npm packages have been installed. Now follow these steps:

## Step 1: Start the Servers

You have **TWO options**:

### Option A: Use the Batch Script (Easiest)

1. **Double-click** `start-dev.bat` in the project folder
2. Two command windows will open
3. **Keep both windows open!**
4. Wait 5-10 seconds
5. Your browser should open automatically to `http://localhost:3000`

### Option B: Manual Start (If script doesn't work)

**Open TWO separate terminal/command prompt windows:**

**Window 1 - PHP Server:**
```bash
cd C:\Users\Mansi\OneDrive\Desktop\new\api
php -S localhost:8000
```
You should see: `PHP Development Server started`

**Window 2 - React Server:**
```bash
cd C:\Users\Mansi\OneDrive\Desktop\new
npm run dev
```
You should see: `Local: http://localhost:3000`

**Then open your browser to:** `http://localhost:3000`

## ⚠️ Important Notes

1. **Keep both servers running** - Don't close the terminal windows
2. **Access the correct URL** - Use `http://localhost:3000` (not file://)
3. **If PHP is not found** - Install XAMPP or WAMP, or add PHP to your PATH

## 🔍 Still Not Working?

1. Check if ports are in use:
   - Port 3000 (React)
   - Port 8000 (PHP)

2. Check browser console (F12) for errors

3. See `TROUBLESHOOTING.md` for more help

## 📝 Next Steps After It's Running

1. Set up the database (see `SETUP.md`)
2. Customize your portfolio (see `README.md`)

