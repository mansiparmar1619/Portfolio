# Setup Guide

Follow these steps to set up your portfolio website:

## Step 1: Install Node.js Dependencies

```bash
npm install
```

## Step 2: Set Up MySQL Database

1. Make sure MySQL is running on your system
2. Open MySQL command line or phpMyAdmin
3. Run the SQL script:

```bash
mysql -u root -p < database/schema.sql
```

Or manually:
- Create a database named `portfolio_db`
- Import the `database/schema.sql` file

## Step 3: Configure Database Connection

Edit `api/config.php` and update these lines:

```php
define('DB_HOST', 'localhost');  // Your MySQL host
define('DB_USER', 'root');       // Your MySQL username
define('DB_PASS', '');           // Your MySQL password
define('DB_NAME', 'portfolio_db'); // Database name
```

## Step 4: Start PHP Server

Open a terminal and navigate to the `api` directory:

```bash
cd api
php -S localhost:8000
```

Keep this terminal open.

## Step 5: Start React Development Server

Open a new terminal in the project root:

```bash
npm run dev
```

## Step 6: Access Your Website

Open your browser and go to: `http://localhost:3000`

## Troubleshooting

### Database Connection Error
- Check if MySQL is running
- Verify database credentials in `api/config.php`
- Make sure the database `portfolio_db` exists

### API Not Working
- Check if PHP server is running on port 8000
- Verify CORS settings in `api/.htaccess`
- Check browser console for errors

### Port Already in Use
- Change the port in `vite.config.js` (frontend)
- Change the port in PHP server command (backend)

## Production Deployment

1. Build the React app:
```bash
npm run build
```

2. Deploy the `dist` folder to your web server
3. Deploy the `api` folder to your PHP server
4. Update API URLs in production if needed

