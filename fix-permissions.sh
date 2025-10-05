#!/bin/bash

# Fix permissions for Laravel on Plesk

echo "🔧 Fixing permissions..."

# Set ownership (replace 'sysuser_6' with your actual Plesk user if different)
chown -R sysuser_6:psacln storage bootstrap/cache public/build
chown -R sysuser_6:psacln public/build

# Set directory permissions
find storage bootstrap/cache public/build -type d -exec chmod 755 {} \;

# Set file permissions
find storage bootstrap/cache public/build -type f -exec chmod 644 {} \;

# Specific for build files
chmod -R 755 public/build
chmod 644 public/build/manifest.json
chmod 644 public/build/assets/*.css
chmod 644 public/build/assets/*.js

echo "✅ Permissions fixed!"

# Clear Laravel caches
php artisan config:clear
php artisan cache:clear
php artisan view:clear

echo "✅ Caches cleared!"
echo ""
echo "📋 Build files status:"
ls -la public/build/
ls -la public/build/assets/
