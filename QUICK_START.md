# Quick Start Guide

## 🚀 Get Started in 5 Minutes

### 1. Install Dependencies
```bash
npm install
```

### 2. Set Up Database
```bash
# Make sure MySQL is running, then:
mysql -u root -p < database/schema.sql
```

### 3. Configure Database
Edit `api/config.php` with your MySQL credentials.

### 4. Start Servers

**Option A: Use the start script (Windows)**
```bash
start-dev.bat
```

**Option B: Use the start script (Linux/Mac)**
```bash
chmod +x start-dev.sh
./start-dev.sh
```

**Option C: Manual start**
```bash
# Terminal 1 - PHP Server
cd api
php -S localhost:8000

# Terminal 2 - React Dev Server
npm run dev
```

### 5. Open Your Browser
Visit: `http://localhost:3000`

## 📝 Customize Your Portfolio

### Update Personal Info
- **Name & Title**: `src/components/Hero.jsx`
- **About Section**: `src/components/About.jsx`
- **Contact Info**: `src/components/Contact.jsx`
- **Social Links**: Update in `Hero.jsx` and `Footer.jsx`

### Add Your Projects
1. Via Database (Recommended):
```sql
INSERT INTO projects (title, description, image, technologies, github, live) 
VALUES ('Your Project', 'Description', 'image-url', '["Tech1", "Tech2"]', 'github-url', 'live-url');
```

2. Or edit `src/components/Projects.jsx` directly

### Update Skills
1. Via Database:
```sql
INSERT INTO skills (name, level, color) 
VALUES ('Skill Name', 85, 'bg-blue-500');
```

2. Or edit `src/components/Skills.jsx` defaultSkills array

## 🎨 Features

✅ Fully Responsive Design
✅ Smooth Animations (Framer Motion)
✅ Modern UI (Tailwind CSS)
✅ Contact Form with Backend
✅ Dynamic Content from Database
✅ SEO Friendly
✅ Fast Performance

## 📦 Tech Stack

- **Frontend**: React 18 + Vite
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Backend**: PHP 7.4+
- **Database**: MySQL 5.7+
- **Icons**: React Icons

## 🐛 Troubleshooting

**Database connection fails?**
- Check MySQL is running
- Verify credentials in `api/config.php`
- Ensure database exists

**API not working?**
- Check PHP server is running on port 8000
- Verify CORS settings
- Check browser console for errors

**Port conflicts?**
- Change port in `vite.config.js` (frontend)
- Change port in PHP server command (backend)

## 📚 Documentation

- Full setup: See `SETUP.md`
- Project structure: See `README.md`

