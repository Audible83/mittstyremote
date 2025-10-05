# Deployment Instructions

## After pulling latest code to production:

Run these commands on the production server:

```bash
# Clear and rebuild config cache (REQUIRED after config changes)
php artisan config:clear
php artisan config:cache

# Clear route and view caches (optional but recommended)
php artisan route:cache
php artisan view:cache

# If using OPcache, restart PHP-FPM to clear opcode cache
sudo systemctl restart php-fpm
# OR for Apache with mod_php:
sudo systemctl restart apache2
```

## Quick deployment script:

```bash
#!/bin/bash
# deploy.sh

cd /path/to/your/app

# Pull latest code
git pull origin main

# Install/update dependencies
composer install --no-dev --optimize-autoloader

# Clear all caches
php artisan config:clear
php artisan cache:clear
php artisan route:clear
php artisan view:clear

# Rebuild caches
php artisan config:cache
php artisan route:cache
php artisan view:cache

# Run migrations if any
php artisan migrate --force

# Restart services
sudo systemctl restart php-fpm
```

## Important Notes:

- **Config cache** is the most critical for this deployment (fixes Redis dependency issue)
- The app now defaults to file-based sessions/cache instead of Redis
- Redis is optional and only used if explicitly configured in `.env`
