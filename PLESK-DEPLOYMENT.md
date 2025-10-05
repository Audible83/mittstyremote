# Plesk Deployment Instructions

## Clear Laravel Cache via Plesk Panel

### Method 1: Plesk Laravel Toolkit (Recommended)

1. Log into Plesk
2. Go to **Websites & Domains** → Select your domain
3. Click **Laravel** (Laravel Toolkit)
4. Under **Artisan Commands**, run these in order:

```
config:clear
config:cache
route:cache
view:cache
cache:clear
```

### Method 2: SSH Terminal in Plesk

1. In Plesk, go to **Websites & Domains** → Select your domain
2. Click **Web Terminal** or **SSH Access**
3. Navigate to your Laravel root:
```bash
cd /var/www/vhosts/yourdomain.com/httpdocs
```

4. Run artisan commands:
```bash
php artisan config:clear
php artisan config:cache
php artisan route:cache
php artisan view:cache
```

### Method 3: File Manager

If Laravel Toolkit isn't available:

1. Go to **Files** → **File Manager**
2. Navigate to `bootstrap/cache/`
3. Delete the file: `config.php`
4. The config will regenerate on next request

### Restart PHP-FPM (if needed)

In Plesk:
1. Go to **Websites & Domains** → Select your domain
2. Click **PHP Settings**
3. Click **Apply** to restart PHP-FPM

## Verify Fix

After clearing cache, visit:
- https://mittstyremøte.no/styremote/ny (should now work)
- https://mittstyremøte.no/health (should show healthier status)

## What Was Fixed

The app was configured to use Redis by default, but Redis wasn't running on your server.

**Changes made:**
- Session driver: Redis → File
- Cache driver: Redis → File
- Queue driver: Redis → Database

The app now works without Redis! 🎉
