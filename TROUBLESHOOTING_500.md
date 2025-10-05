# Troubleshooting 500 Internal Server Error

If you're getting a 500 error, follow these steps:

## 1. Check Laravel Logs

**Via Plesk:**
- Files → `httpdocs/storage/logs/laravel.log`

**Via SSH:**
```bash
cd /var/www/vhosts/yourdomain.com/httpdocs
tail -50 storage/logs/laravel.log
```

## 2. Common Causes & Fixes

### Missing .env File
```bash
cp .env.example .env
php artisan key:generate
```

### Database Not Configured
Edit `.env`:
```env
DB_CONNECTION=mysql
DB_HOST=localhost
DB_PORT=3306
DB_DATABASE=your_database_name
DB_USERNAME=your_database_user
DB_PASSWORD=your_database_password
```

### Permissions Issues
```bash
chmod -R 775 storage bootstrap/cache
chown -R www-data:www-data storage bootstrap/cache
```

### Redis Not Available
If Redis is not installed, change in `.env`:
```env
CACHE_STORE=file
SESSION_DRIVER=file
QUEUE_CONNECTION=database
```

### OpenAI Key Missing
The app requires OpenAI API key:
```bash
mkdir -p storage/app
echo "sk-your-openai-key-here" > storage/app/openai_api.key
chmod 600 storage/app/openai_api.key
```

Or update `.env`:
```env
OPENAI_KEY_FILE=storage/app/openai_api.key
```

### Composer Dependencies Not Installed
```bash
composer install --no-dev --optimize-autoloader
```

### Cached Config Issues
```bash
php artisan config:clear
php artisan cache:clear
php artisan route:clear
php artisan view:clear
```

## 3. Quick Health Check

Visit: `https://yourdomain.com/health`

This will show you what's broken:
```json
{
  "status": "unhealthy",
  "checks": {
    "database": {"status": "error", "message": "..."},
    "redis": {"status": "error", "message": "..."},
    "storage": {"status": "ok", "message": "..."}
  }
}
```

## 4. Enable Debug Mode (TEMPORARILY!)

**⚠️ ONLY FOR TESTING - DISABLE IN PRODUCTION!**

Edit `.env`:
```env
APP_DEBUG=true
APP_ENV=local
```

Refresh the page to see detailed error.

**Then immediately set back:**
```env
APP_DEBUG=false
APP_ENV=production
```

## 5. Check PHP Version

Ensure PHP 8.3+:
```bash
php -v
```

## 6. Check Document Root

In Plesk → Hosting Settings:
- Document root should be: `httpdocs/public`

## 7. Typical Deployment Checklist

```bash
cd /var/www/vhosts/yourdomain.com/httpdocs

# 1. Environment
cp .env.example .env
nano .env  # Configure database, Redis, OpenAI

# 2. Generate key
php artisan key:generate --force

# 3. Dependencies
composer install --no-dev --optimize-autoloader
npm install
npm run build

# 4. Database
php artisan migrate --force

# 5. Permissions
chmod -R 775 storage bootstrap/cache
chown -R www-data:www-data storage bootstrap/cache

# 6. OpenAI Key
echo "sk-YOUR-KEY" > storage/app/openai_api.key
chmod 600 storage/app/openai_api.key

# 7. Optimize
php artisan config:cache
php artisan route:cache
php artisan view:cache
```

## 8. Still Not Working?

Check Plesk error logs:
- **PHP Errors**: Domains → yourdomain.com → Logs → Error Log
- **Apache Errors**: Domains → yourdomain.com → Logs → Access Log
- **Laravel Logs**: `storage/logs/laravel.log`

## 9. Test Locally First

If using WSL or local development:
```bash
php artisan serve
```

Visit `http://localhost:8000` - if it works locally but not on Plesk, it's a server configuration issue.

## 10. Common Errors & Solutions

| Error | Solution |
|-------|----------|
| Class not found | Run `composer dump-autoload` |
| Permission denied | Fix storage permissions (step 5 above) |
| Database connection refused | Check database credentials in `.env` |
| Redis connection refused | Switch to file-based cache (step 2.4) |
| OpenAI error | Add API key (step 2.5) |
| 404 on all routes | Check document root points to `public/` |
| No input file specified | Create `public/index.php` (should exist) |
