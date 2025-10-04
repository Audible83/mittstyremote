# 🚀 Plesk Deployment Guide

Complete guide for deploying **Mitt Styremøte** on a Plesk server with Laravel Breeze.

## Prerequisites

- Plesk Panel (Obsidian 18.0.50 or later recommended)
- PHP 8.3+ support
- MySQL 8.0+ or MariaDB 10.6+
- Git installed on server
- SSH access to server
- Domain name pointing to your Plesk server

## Pre-Deployment Checklist

- [ ] Domain added in Plesk
- [ ] SSL certificate (Let's Encrypt) configured
- [ ] Git repository accessible
- [ ] Database created in Plesk
- [ ] OpenAI API key ready
- [ ] Redis available (via Plesk Redis extension or external service)

## Step 1: Install Required Extensions

### Enable PHP Extensions in Plesk

1. Go to **Tools & Settings** → **Updates** → **PHP Settings**
2. For PHP 8.3, enable these extensions:
   - `pdo_mysql`
   - `mbstring`
   - `xml`
   - `curl`
   - `zip`
   - `gd`
   - `redis` (if using Plesk Redis)
   - `opcache`
   - `bcmath`
   - `fileinfo`

### Install Redis (if not available)

If Redis extension is not available in Plesk:

1. Go to **Extensions** → **My Extensions**
2. Search for "Redis" and install if available
3. Or use external Redis service (e.g., Redis Cloud)

## Step 2: Configure Domain in Plesk

1. **Add Domain**
   - Go to **Websites & Domains** → **Add Domain**
   - Enter your domain name (e.g., `mittstyremote.no`)

2. **Configure PHP**
   - Select domain → **PHP Settings**
   - PHP Version: **8.3**
   - PHP mode: **FPM application**
   - Memory limit: **256M** or higher
   - Max execution time: **300** seconds
   - Upload max filesize: **100M**
   - Post max size: **100M**

3. **SSL Certificate**
   - Go to **SSL/TLS Certificates**
   - Click **Install** for Let's Encrypt
   - Enable **Permanent SEO-safe 301 redirect from HTTP to HTTPS**

## Step 3: Create Database

1. Go to **Databases** → **Add Database**
2. Database name: `mittstyremote`
3. Create database user: `mittstyremote_user`
4. Set strong password
5. Note credentials for `.env` file

## Step 4: Deploy Application via Git

### Option A: Using Plesk Git Extension

1. **Install Git Extension**
   - Go to **Extensions** → **My Extensions**
   - Install "Git" if not already installed

2. **Add Git Repository**
   - Select your domain
   - Go to **Git** tab
   - Click **Add Repository**
   - Repository URL: `https://github.com/yourusername/mittstyremote.git`
   - Repository path: `/` (deploy to document root parent)
   - Branch: `main`
   - Deploy to: `/httpdocs`
   - Click **OK**

3. **Configure Deployment Actions**
   - Click **Additional Deploy Actions**
   - Add post-deployment commands:
   ```bash
   composer install --no-dev --optimize-autoloader
   npm install
   npm run build
   php artisan migrate --force
   php artisan config:cache
   php artisan route:cache
   php artisan view:cache
   ```

### Option B: Manual Deployment via SSH

```bash
# SSH into your Plesk server
ssh username@your-server-ip

# Navigate to domain directory
cd /var/www/vhosts/yourdomain.com

# Clone repository
git clone https://github.com/yourusername/mittstyremote.git httpdocs
cd httpdocs

# Install Composer dependencies
composer install --no-dev --optimize-autoloader

# Install Node dependencies and build assets
npm install
npm run build
```

## Step 5: Configure Document Root

1. Select your domain in Plesk
2. Go to **Hosting Settings**
3. Set **Document root** to: `httpdocs/public`
4. Click **OK**

## Step 6: Configure Environment File

### Via Plesk File Manager

1. Go to **Files** → **File Manager**
2. Navigate to `httpdocs/`
3. Copy `.env.example` to `.env`
4. Edit `.env` with these production settings:

```env
APP_NAME="Mitt Styremøte"
APP_ENV=production
APP_KEY=
APP_DEBUG=false
APP_TIMEZONE=Europe/Oslo
APP_URL=https://mittstyremote.no
APP_LOCALE=nb_NO
APP_FALLBACK_LOCALE=en

DB_CONNECTION=mysql
DB_HOST=localhost
DB_PORT=3306
DB_DATABASE=mittstyremote
DB_USERNAME=mittstyremote_user
DB_PASSWORD=your_database_password

BROADCAST_CONNECTION=log
FILESYSTEM_DISK=local
QUEUE_CONNECTION=redis
CACHE_STORE=redis
SESSION_DRIVER=redis
SESSION_LIFETIME=120

REDIS_HOST=127.0.0.1
REDIS_PASSWORD=null
REDIS_PORT=6379

MAIL_MAILER=smtp
MAIL_HOST=smtp.yourdomain.com
MAIL_PORT=587
MAIL_USERNAME=noreply@mittstyremote.no
MAIL_PASSWORD=your_email_password
MAIL_ENCRYPTION=tls
MAIL_FROM_ADDRESS="noreply@mittstyremote.no"
MAIL_FROM_NAME="${APP_NAME}"

# OpenAI Configuration
OPENAI_KEY_FILE=storage/app/openai_api.key
OPENAI_ORGANIZATION=

# Diarization Service (configure if using external service)
DIARIZE_URL=http://localhost:8000/diarize
DIARIZE_ENROLL_URL=http://localhost:8000/enroll
DIARIZE_IDENTIFY_URL=http://localhost:8000/identify

# Demo Retention
DEMO_RETENTION_HOURS=48

# Proff.no Lookup
PROFF_CACHE_HOURS=24
PROFF_USER_AGENT="MittStyremote/1.0"

# Vipps Login (OAuth2)
VIPPS_CLIENT_ID=
VIPPS_CLIENT_SECRET=
VIPPS_REDIRECT_URI="${APP_URL}/auth/vipps/callback"
VIPPS_ENVIRONMENT=production

# Storage (if using S3)
AWS_ACCESS_KEY_ID=
AWS_SECRET_ACCESS_KEY=
AWS_DEFAULT_REGION=eu-north-1
AWS_BUCKET=
AWS_USE_PATH_STYLE_ENDPOINT=false

# Horizon
HORIZON_DOMAIN=horizon.mittstyremote.no
```

### Via SSH

```bash
cd /var/www/vhosts/yourdomain.com/httpdocs
cp .env.example .env
nano .env
# Edit file with production values
```

## Step 7: Generate Application Key

### Via Plesk Scheduled Tasks

1. Go to **Scheduled Tasks**
2. Click **Add Task**
3. Task type: **Run a command**
4. Command:
   ```bash
   cd /var/www/vhosts/yourdomain.com/httpdocs && php artisan key:generate --force
   ```
5. Click **Run Now**
6. Delete task after completion

### Via SSH

```bash
cd /var/www/vhosts/yourdomain.com/httpdocs
php artisan key:generate --force
```

## Step 8: Run Database Migrations

### Via SSH

```bash
cd /var/www/vhosts/yourdomain.com/httpdocs
php artisan migrate --force
```

### Via Plesk Scheduled Tasks

Create a one-time task:
```bash
cd /var/www/vhosts/yourdomain.com/httpdocs && php artisan migrate --force
```

## Step 9: Set Up Storage and Permissions

### Via SSH

```bash
cd /var/www/vhosts/yourdomain.com/httpdocs

# Create storage directories
mkdir -p storage/app/audio storage/app/pdf storage/app/temp
mkdir -p storage/framework/{cache,sessions,views}
mkdir -p storage/logs

# Create symbolic link for public storage
php artisan storage:link

# Set permissions (adjust user to match your Plesk setup)
chown -R username:psacln storage bootstrap/cache
chmod -R 775 storage bootstrap/cache

# Add OpenAI API key
echo "sk-YOUR-OPENAI-KEY" > storage/app/openai_api.key
chmod 600 storage/app/openai_api.key
```

## Step 10: Configure Queue Workers

### Create Scheduled Task for Queue Worker

1. Go to **Scheduled Tasks** → **Add Task**
2. Task type: **Run a command**
3. Schedule: **Every minute** (using cron: `* * * * *`)
4. Command:
   ```bash
   cd /var/www/vhosts/yourdomain.com/httpdocs && php artisan queue:work redis --stop-when-empty --max-time=3600 >> /dev/null 2>&1
   ```

### Alternative: Use Supervisor (if available)

If your Plesk server has Supervisor installed, create configuration:

```bash
# SSH into server
sudo nano /etc/supervisor/conf.d/mittstyremote-worker.conf
```

Add:
```ini
[program:mittstyremote-worker]
process_name=%(program_name)s_%(process_num)02d
command=php /var/www/vhosts/yourdomain.com/httpdocs/artisan queue:work redis --sleep=3 --tries=3 --max-time=3600
autostart=true
autorestart=true
stopasgroup=true
killasgroup=true
user=username
numprocs=2
redirect_stderr=true
stdout_logfile=/var/www/vhosts/yourdomain.com/httpdocs/storage/logs/worker.log
```

Restart Supervisor:
```bash
sudo supervisorctl reread
sudo supervisorctl update
sudo supervisorctl start mittstyremote-worker:*
```

## Step 11: Set Up Laravel Scheduler

1. Go to **Scheduled Tasks** → **Add Task**
2. Task type: **Run a command**
3. Schedule: **Every minute** (using cron: `* * * * *`)
4. Command:
   ```bash
   cd /var/www/vhosts/yourdomain.com/httpdocs && php artisan schedule:run >> /dev/null 2>&1
   ```

## Step 12: Optimize Application

### Via SSH

```bash
cd /var/www/vhosts/yourdomain.com/httpdocs

# Cache configuration
php artisan config:cache
php artisan route:cache
php artisan view:cache

# Optimize composer autoloader
composer dump-autoload --optimize
```

## Step 13: Configure Web Server (Additional Settings)

### Create/Update .htaccess in public folder

Plesk uses Apache, ensure `public/.htaccess` has:

```apache
<IfModule mod_rewrite.c>
    <IfModule mod_negotiation.c>
        Options -MultiViews -Indexes
    </IfModule>

    RewriteEngine On

    # Handle Authorization Header
    RewriteCond %{HTTP:Authorization} .
    RewriteRule .* - [E=HTTP_AUTHORIZATION:%{HTTP:Authorization}]

    # Redirect Trailing Slashes If Not A Folder...
    RewriteCond %{REQUEST_FILENAME} !-d
    RewriteCond %{REQUEST_URI} (.+)/$
    RewriteRule ^ %1 [L,R=301]

    # Send Requests To Front Controller...
    RewriteCond %{REQUEST_FILENAME} !-d
    RewriteCond %{REQUEST_FILENAME} !-f
    RewriteRule ^ index.php [L]
</IfModule>

# Security headers
<IfModule mod_headers.c>
    Header set X-Content-Type-Options "nosniff"
    Header set X-Frame-Options "SAMEORIGIN"
    Header set X-XSS-Protection "1; mode=block"
</IfModule>

# Deny access to sensitive files
<FilesMatch "^\.">
    Order allow,deny
    Deny from all
</FilesMatch>
```

## Step 14: Python Diarization Service (Optional)

If your Plesk server supports Python applications:

1. Create Python application in Plesk
2. Set Python version: **3.11+**
3. Application root: `/var/www/vhosts/yourdomain.com/diarization`
4. Deploy diarization service from `python-diarization/` folder
5. Configure startup command: `uvicorn app:app --host 127.0.0.1 --port 8000`

Or use external diarization service and update `DIARIZE_URL` in `.env`

## Post-Deployment Verification

### Test Checklist

- [ ] Visit `https://yourdomain.com` - homepage loads
- [ ] Check SSL certificate - padlock shows in browser
- [ ] Test creating a new meeting
- [ ] Verify queue jobs are processing (check logs)
- [ ] Test file uploads
- [ ] Check database connection
- [ ] Verify Redis is working (sessions, cache)

### Check Logs

1. **Laravel Logs**
   - Via Plesk: **Files** → `httpdocs/storage/logs/laravel.log`
   - Via SSH: `tail -f storage/logs/laravel.log`

2. **PHP Error Logs**
   - Plesk: **Logs** → **Error Log**

3. **Web Server Logs**
   - Plesk: **Logs** → **Access Log**

## Updating the Application

### Via Plesk Git Extension

1. Go to domain → **Git**
2. Click **Pull Updates**
3. Deployment actions will run automatically

### Via SSH

```bash
cd /var/www/vhosts/yourdomain.com/httpdocs

# Pull latest changes
git pull origin main

# Update dependencies
composer install --no-dev --optimize-autoloader
npm install
npm run build

# Run migrations
php artisan migrate --force

# Clear and recache
php artisan config:clear
php artisan cache:clear
php artisan view:clear
php artisan config:cache
php artisan route:cache
php artisan view:cache

# Restart queue workers (if using Supervisor)
sudo supervisorctl restart mittstyremote-worker:*
```

## Troubleshooting

### 500 Internal Server Error

1. Check PHP error logs in Plesk
2. Verify `.env` file exists and `APP_KEY` is set
3. Check storage permissions: `chmod -R 775 storage bootstrap/cache`
4. Check if `.htaccess` exists in `public/` folder

### Queue Jobs Not Processing

1. Verify scheduled task for queue worker is running
2. Check Redis connection: `redis-cli ping` (should return `PONG`)
3. Check queue worker logs: `storage/logs/worker.log`

### Upload Issues

1. Check PHP settings in Plesk:
   - `upload_max_filesize = 100M`
   - `post_max_size = 100M`
   - `max_execution_time = 300`

### Database Connection Failed

1. Verify database credentials in `.env`
2. Check if database exists in Plesk
3. Test connection: `php artisan tinker` then `DB::connection()->getPdo();`

### Session/Cache Issues

1. Verify Redis is installed and running
2. Test Redis: Create scheduled task with `redis-cli ping`
3. If Redis unavailable, switch to file-based:
   ```env
   SESSION_DRIVER=file
   CACHE_STORE=file
   ```

## Backup Strategy

### Database Backup

Plesk has built-in backup tools:
1. Go to **Backup Manager**
2. Create scheduled backups (daily recommended)
3. Include database and files

### Manual Backup via SSH

```bash
# Database
mysqldump -u mittstyremote_user -p mittstyremote > backup.sql

# Files
tar -czf backup-files.tar.gz httpdocs/storage
```

## Security Best Practices

1. **Keep Plesk Updated**: Regularly update Plesk panel
2. **PHP Updates**: Use latest PHP 8.3.x version
3. **Firewall**: Configure Plesk firewall to allow only necessary ports
4. **SSL Only**: Force HTTPS redirect
5. **Database**: Use strong passwords, restrict remote access
6. **File Permissions**: Never set 777 permissions
7. **Environment File**: Ensure `.env` is not web-accessible (already protected by Laravel)

## Performance Optimization

1. **Enable OPcache** in PHP settings
2. **Use Redis** for cache and sessions
3. **Enable Gzip** compression in Apache settings
4. **CDN**: Consider using Cloudflare or similar
5. **Database**: Regular optimization in Plesk → Databases

## Support Resources

- **Plesk Documentation**: https://docs.plesk.com/
- **Laravel Documentation**: https://laravel.com/docs/11.x/deployment
- **Laravel Breeze**: https://laravel.com/docs/11.x/starter-kits#breeze

---

**Your Mitt Styremøte application is now deployed on Plesk!** 🎉
