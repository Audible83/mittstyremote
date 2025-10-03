# 🚀 Production Deployment Guide

Complete guide for deploying **Mitt Styremøte** to production.

## Pre-Deployment Checklist

- [ ] Domain name configured with DNS
- [ ] SSL certificate obtained (Let's Encrypt recommended)
- [ ] Server with minimum 4GB RAM, 2 CPU cores
- [ ] PHP 8.3+ installed with required extensions
- [ ] MySQL 8.0+ or PostgreSQL
- [ ] Redis server
- [ ] Python 3.11+ for diarization service
- [ ] SMTP server for email notifications (optional)
- [ ] S3 or compatible object storage
- [ ] OpenAI API key with sufficient credits
- [ ] HuggingFace account and token

## Server Requirements

### Minimum Specifications
- **CPU**: 2 cores
- **RAM**: 4GB (8GB recommended for diarization)
- **Storage**: 50GB SSD
- **Bandwidth**: Unlimited or high allowance

### Software Requirements
- **OS**: Ubuntu 22.04 LTS (recommended) or similar
- **Web Server**: Nginx or Apache with HTTP/2
- **PHP**: 8.3+ with extensions: pdo, mbstring, xml, curl, zip, gd, redis
- **Database**: MySQL 8.0+ or PostgreSQL 14+
- **Cache**: Redis 7+
- **Python**: 3.11+ with pip
- **Node.js**: 18+ LTS
- **Process Manager**: Supervisor
- **SSL**: Certbot (Let's Encrypt)

## Installation Steps

### 1. Server Setup

```bash
# Update system
sudo apt update && sudo apt upgrade -y

# Install required packages
sudo apt install -y nginx mysql-server redis-server supervisor git curl unzip \
    php8.3-fpm php8.3-mysql php8.3-redis php8.3-xml php8.3-mbstring \
    php8.3-curl php8.3-zip php8.3-gd php8.3-cli python3.11 python3.11-venv \
    certbot python3-certbot-nginx

# Install Composer
curl -sS https://getcomposer.org/installer | php
sudo mv composer.phar /usr/local/bin/composer

# Install Node.js (via nvm recommended)
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash
source ~/.bashrc
nvm install 18
nvm use 18
```

### 2. Create Application User

```bash
sudo adduser --disabled-password --gecos "" mittstyremote
sudo usermod -aG www-data mittstyremote
```

### 3. Deploy Application

```bash
# Switch to app user
sudo su - mittstyremote

# Clone repository
cd /var/www
git clone <repository-url> mittstyremote
cd mittstyremote

# Install dependencies
composer install --no-dev --optimize-autoloader
npm install
npm run build

# Set up environment
cp .env.example .env
php artisan key:generate

# Configure .env for production (see below)
nano .env
```

### 4. Configure Environment

Edit `/var/www/mittstyremote/.env`:

```env
APP_NAME="Mitt Styremøte"
APP_ENV=production
APP_KEY=base64:YOUR_GENERATED_KEY
APP_DEBUG=false
APP_URL=https://mittstyremote.no

# Database
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=mittstyremote
DB_USERNAME=mittstyremote_user
DB_PASSWORD=STRONG_PASSWORD_HERE

# Redis
REDIS_HOST=127.0.0.1
REDIS_PASSWORD=null
REDIS_PORT=6379

# Cache & Queue
CACHE_STORE=redis
QUEUE_CONNECTION=redis
SESSION_DRIVER=redis

# Storage (S3/Spaces)
FILESYSTEM_DISK=s3
AWS_ACCESS_KEY_ID=your_key
AWS_SECRET_ACCESS_KEY=your_secret
AWS_DEFAULT_REGION=eu-north-1
AWS_BUCKET=mittstyremote-prod
AWS_USE_PATH_STYLE_ENDPOINT=false

# OpenAI
OPENAI_KEY_FILE=storage/app/openai_api.key

# Diarization
DIARIZE_URL=http://127.0.0.1:8000/diarize

# Mail (optional)
MAIL_MAILER=smtp
MAIL_HOST=smtp.example.com
MAIL_PORT=587
MAIL_USERNAME=your_email@example.com
MAIL_PASSWORD=your_password
MAIL_ENCRYPTION=tls
MAIL_FROM_ADDRESS=noreply@mittstyremote.no
MAIL_FROM_NAME="${APP_NAME}"
```

### 5. Database Setup

```bash
# Create database and user
sudo mysql -u root -p

CREATE DATABASE mittstyremote CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
CREATE USER 'mittstyremote_user'@'localhost' IDENTIFIED BY 'STRONG_PASSWORD';
GRANT ALL PRIVILEGES ON mittstyremote.* TO 'mittstyremote_user'@'localhost';
FLUSH PRIVILEGES;
EXIT;

# Run migrations
cd /var/www/mittstyremote
php artisan migrate --force
```

### 6. Storage Setup

```bash
# Create storage directories
mkdir -p storage/app/audio storage/app/pdf storage/app/temp
mkdir -p storage/framework/{cache,sessions,views}
mkdir -p storage/logs

# Add OpenAI key
echo "sk-YOUR-OPENAI-KEY" > storage/app/openai_api.key

# Set permissions
sudo chown -R mittstyremote:www-data storage bootstrap/cache
sudo chmod -R 775 storage bootstrap/cache
```

### 7. Nginx Configuration

Create `/etc/nginx/sites-available/mittstyremote`:

```nginx
server {
    listen 80;
    server_name mittstyremote.no www.mittstyremote.no;
    return 301 https://$server_name$request_uri;
}

server {
    listen 443 ssl http2;
    server_name mittstyremote.no www.mittstyremote.no;

    root /var/www/mittstyremote/public;
    index index.php index.html;

    # SSL Configuration (will be added by Certbot)
    ssl_certificate /etc/letsencrypt/live/mittstyremote.no/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/mittstyremote.no/privkey.pem;

    # Security headers
    add_header X-Frame-Options "SAMEORIGIN" always;
    add_header X-Content-Type-Options "nosniff" always;
    add_header X-XSS-Protection "1; mode=block" always;
    add_header Referrer-Policy "no-referrer-when-downgrade" always;

    # Upload limits
    client_max_body_size 100M;

    location / {
        try_files $uri $uri/ /index.php?$query_string;
    }

    location ~ \.php$ {
        fastcgi_pass unix:/var/run/php/php8.3-fpm.sock;
        fastcgi_index index.php;
        fastcgi_param SCRIPT_FILENAME $realpath_root$fastcgi_script_name;
        include fastcgi_params;
    }

    location ~ /\.(?!well-known).* {
        deny all;
    }
}
```

Enable site and obtain SSL:

```bash
sudo ln -s /etc/nginx/sites-available/mittstyremote /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl restart nginx

# Obtain SSL certificate
sudo certbot --nginx -d mittstyremote.no -d www.mittstyremote.no
```

### 8. Python Diarization Service

```bash
# Create service directory
sudo mkdir -p /opt/diarization
sudo cp -r /var/www/mittstyremote/python-diarization/* /opt/diarization/
sudo chown -R mittstyremote:mittstyremote /opt/diarization

# Create virtual environment
cd /opt/diarization
python3.11 -m venv venv
source venv/bin/activate
pip install -r requirements.txt
deactivate

# Create .env for HuggingFace token
echo "HUGGINGFACE_TOKEN=hf_YOUR_TOKEN" | sudo tee /opt/diarization/.env
```

Create systemd service `/etc/systemd/system/diarization.service`:

```ini
[Unit]
Description=Diarization Service
After=network.target

[Service]
Type=simple
User=mittstyremote
WorkingDirectory=/opt/diarization
Environment="PATH=/opt/diarization/venv/bin"
EnvironmentFile=/opt/diarization/.env
ExecStart=/opt/diarization/venv/bin/uvicorn app:app --host 127.0.0.1 --port 8000
Restart=always
RestartSec=10

[Install]
WantedBy=multi-user.target
```

Enable and start:

```bash
sudo systemctl daemon-reload
sudo systemctl enable diarization
sudo systemctl start diarization
sudo systemctl status diarization
```

### 9. Queue Workers with Supervisor

Create `/etc/supervisor/conf.d/mittstyremote-worker.conf`:

```ini
[program:mittstyremote-worker]
process_name=%(program_name)s_%(process_num)02d
command=php /var/www/mittstyremote/artisan queue:work redis --sleep=3 --tries=3 --max-time=3600
autostart=true
autorestart=true
stopasgroup=true
killasgroup=true
user=mittstyremote
numprocs=2
redirect_stderr=true
stdout_logfile=/var/www/mittstyremote/storage/logs/worker.log
stopwaitsecs=3600
```

Create `/etc/supervisor/conf.d/mittstyremote-horizon.conf`:

```ini
[program:mittstyremote-horizon]
process_name=%(program_name)s
command=php /var/www/mittstyremote/artisan horizon
autostart=true
autorestart=true
user=mittstyremote
redirect_stderr=true
stdout_logfile=/var/www/mittstyremote/storage/logs/horizon.log
stopwaitsecs=3600
```

Start workers:

```bash
sudo supervisorctl reread
sudo supervisorctl update
sudo supervisorctl start all
```

### 10. Cron Jobs

Add to crontab for user `mittstyremote`:

```bash
sudo crontab -u mittstyremote -e
```

Add line:

```
* * * * * cd /var/www/mittstyremote && php artisan schedule:run >> /dev/null 2>&1
```

### 11. Optimize Application

```bash
cd /var/www/mittstyremote

# Cache configuration
php artisan config:cache
php artisan route:cache
php artisan view:cache

# Optimize composer
composer dump-autoload --optimize
```

## Post-Deployment

### Monitoring

1. **Application Logs**
   ```bash
   tail -f /var/www/mittstyremote/storage/logs/laravel.log
   ```

2. **Queue Workers**
   ```bash
   sudo supervisorctl status
   ```

3. **Diarization Service**
   ```bash
   sudo systemctl status diarization
   sudo journalctl -u diarization -f
   ```

4. **Nginx Access Logs**
   ```bash
   tail -f /var/log/nginx/access.log
   ```

### Backups

Create backup script `/usr/local/bin/backup-mittstyremote.sh`:

```bash
#!/bin/bash

BACKUP_DIR=/var/backups/mittstyremote
DATE=$(date +%Y%m%d_%H%M%S)

# Database backup
mysqldump -u mittstyremote_user -p'PASSWORD' mittstyremote | gzip > $BACKUP_DIR/db_$DATE.sql.gz

# Files backup (if not using S3)
tar -czf $BACKUP_DIR/files_$DATE.tar.gz /var/www/mittstyremote/storage

# Keep last 7 days
find $BACKUP_DIR -name "*.gz" -mtime +7 -delete
```

Add to crontab:

```bash
0 2 * * * /usr/local/bin/backup-mittstyremote.sh
```

### Security Hardening

1. **Firewall**
   ```bash
   sudo ufw allow 'Nginx Full'
   sudo ufw allow OpenSSH
   sudo ufw enable
   ```

2. **Fail2ban**
   ```bash
   sudo apt install fail2ban
   sudo systemctl enable fail2ban
   sudo systemctl start fail2ban
   ```

3. **Regular Updates**
   ```bash
   sudo apt update && sudo apt upgrade -y
   ```

### Health Checks

1. Test application: `https://mittstyremote.no`
2. Check diarization: `curl http://127.0.0.1:8000/`
3. Verify queue processing: Create test meeting
4. Monitor logs for errors

## Maintenance

### Updating Application

```bash
cd /var/www/mittstyremote

# Pull latest code
git pull origin main

# Update dependencies
composer install --no-dev --optimize-autoloader
npm install
npm run build

# Run migrations
php artisan migrate --force

# Clear caches
php artisan config:clear
php artisan cache:clear
php artisan view:clear

# Optimize
php artisan config:cache
php artisan route:cache
php artisan view:cache

# Restart workers
sudo supervisorctl restart all

# Restart diarization
sudo systemctl restart diarization
```

### Scaling

For higher traffic:

1. **Horizontal Scaling**: Use load balancer with multiple app servers
2. **Database**: Use managed MySQL (AWS RDS, DigitalOcean)
3. **Queue**: Separate queue worker servers
4. **Cache**: Use Redis Cluster
5. **Storage**: CDN for static assets
6. **Diarization**: Multiple GPU-enabled diarization servers

## Troubleshooting

### High Memory Usage

Check diarization service (pyannote uses ~2-4GB):
```bash
htop
sudo systemctl status diarization
```

### Queue Jobs Failing

Check worker logs:
```bash
tail -f /var/www/mittstyremote/storage/logs/worker.log
php artisan queue:failed
php artisan queue:retry all
```

### SSL Certificate Renewal

Certbot auto-renews, but test manually:
```bash
sudo certbot renew --dry-run
```

## Support

For production issues:
- Check logs first
- Review error monitoring (Sentry recommended)
- Contact support with log excerpts

---

**Good luck with your deployment!** 🚀
