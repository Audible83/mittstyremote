#!/bin/bash

# Deployment script for Plesk
# Run this on your Plesk server to update the application

echo "🚀 Starting deployment..."

# Pull latest code
echo "📥 Pulling latest code from GitHub..."
git pull origin main

# Install/update composer dependencies
echo "📦 Installing Composer dependencies..."
composer install --no-dev --optimize-autoloader

# Clear and cache config
echo "🔧 Optimizing Laravel..."
php artisan config:clear
php artisan config:cache
php artisan route:cache
php artisan view:clear

# Set permissions
echo "🔒 Setting permissions..."
chmod -R 775 storage bootstrap/cache
chown -R $USER:www-data storage bootstrap/cache

echo "✅ Deployment complete!"
echo "📋 Build files status:"
ls -la public/build/
