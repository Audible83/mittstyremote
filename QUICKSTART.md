# 🚀 Quick Start Guide

Get **Mitt Styremøte** running in 5 minutes with Docker.

## Prerequisites

- Docker & Docker Compose installed
- HuggingFace account (free)
- OpenAI API key

## Step-by-Step Setup

### 1. Get HuggingFace Token

```bash
# 1. Go to https://huggingface.co/join
# 2. Create free account
# 3. Go to https://huggingface.co/settings/tokens
# 4. Create new token (read access)
# 5. Go to https://huggingface.co/pyannote/speaker-diarization-3.1
# 6. Click "Agree and access repository"
```

### 2. Get OpenAI API Key

```bash
# 1. Go to https://platform.openai.com/api-keys
# 2. Create new secret key
# 3. Copy and save it (shows only once)
```

### 3. Clone and Configure

```bash
# Clone repository
cd mittstyremote

# Copy environment file
cp .env.example .env

# Create OpenAI key file
mkdir -p storage/app
echo "sk-YOUR-OPENAI-KEY" > storage/app/openai_api.key

# Set HuggingFace token in .env
# Add this line to .env:
echo "HUGGINGFACE_TOKEN=hf_YOUR_TOKEN" >> .env
```

### 4. Start Application

```bash
# Start all services
docker-compose up -d

# Install dependencies (first time only)
docker-compose exec app composer install
docker-compose exec app php artisan key:generate
docker-compose exec app php artisan migrate
docker-compose exec app npm install
docker-compose exec app npm run build

# Set storage permissions
docker-compose exec app chown -R www-data:www-data storage bootstrap/cache
```

### 5. Access Application

```
🌐 Web Application: http://localhost:8080
🐍 Diarization API: http://localhost:8000
🗄️ Database: localhost:3306 (user: root, pass: secret)
📮 Redis: localhost:6379
```

## First Meeting Test

1. Open http://localhost:8080
2. Click **"Start demo"**
3. Fill in company info (or use "Slå opp" with org.nr)
4. Add meeting details
5. Add participants
6. Accept consent
7. Click **"Start opptak"** (allow microphone access)
8. Speak for 10-30 seconds
9. Click **"Stopp opptak"**
10. Wait 2-5 minutes for processing
11. Download PDFs!

## Troubleshooting

### Diarization fails with 401

```bash
# Check HuggingFace token
docker-compose logs diarization

# Make sure you accepted model conditions at:
# https://huggingface.co/pyannote/speaker-diarization-3.1
```

### OpenAI API errors

```bash
# Verify key file exists
cat storage/app/openai_api.key

# Check Laravel logs
docker-compose logs app
tail -f storage/logs/laravel.log
```

### Recording doesn't start

- Use HTTPS (or localhost)
- Grant microphone permissions in browser
- Try Chrome/Firefox (best compatibility)

### Docker services won't start

```bash
# Check logs
docker-compose logs

# Restart services
docker-compose down
docker-compose up -d

# Rebuild if needed
docker-compose down
docker-compose build --no-cache
docker-compose up -d
```

## Production Notes

### Before deploying to production:

1. **Security**
   ```bash
   # Change all secrets in .env
   php artisan key:generate
   # Set APP_ENV=production
   # Set APP_DEBUG=false
   ```

2. **HTTPS Required**
   - Browser recording requires HTTPS
   - Get SSL certificate (Let's Encrypt)

3. **Storage**
   - Configure S3/Spaces for audio/PDF files
   - Set up automated backups

4. **Queue Workers**
   - Use Supervisor to manage queue workers
   - Run `php artisan horizon` for monitoring

5. **Cron Jobs**
   ```bash
   * * * * * cd /path-to-app && php artisan schedule:run >> /dev/null 2>&1
   ```

## Useful Commands

```bash
# View logs
docker-compose logs -f app
docker-compose logs -f diarization

# Access shell
docker-compose exec app bash
docker-compose exec diarization sh

# Run artisan commands
docker-compose exec app php artisan migrate
docker-compose exec app php artisan queue:work
docker-compose exec app php artisan horizon

# Clear caches
docker-compose exec app php artisan cache:clear
docker-compose exec app php artisan config:clear
docker-compose exec app php artisan view:clear

# Database
docker-compose exec db mysql -uroot -psecret mittstyremote

# Stop services
docker-compose down

# Stop and remove volumes (⚠️ deletes data)
docker-compose down -v
```

## Next Steps

- Read full [README.md](README.md) for detailed documentation
- Configure Vipps login for production
- Customize PDF templates in `resources/views/pdf/`
- Adjust Norwegian prompts in `app/Services/OpenAIService.php`
- Set up monitoring and alerts

## Support

Issues? Check:
- GitHub Issues
- Laravel logs: `storage/logs/laravel.log`
- Diarization logs: `docker-compose logs diarization`
- Browser console for frontend errors

Happy board meeting transcription! 🎉
