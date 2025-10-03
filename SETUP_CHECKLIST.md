# ✅ Setup Checklist

Use this checklist to ensure your Mitt Styremøte installation is complete and working.

## Pre-Installation

- [ ] Docker and Docker Compose installed
- [ ] Git installed
- [ ] OpenAI account created
- [ ] HuggingFace account created
- [ ] Repository cloned to local machine

## API Keys & Tokens

- [ ] OpenAI API key obtained from https://platform.openai.com/api-keys
- [ ] OpenAI API key has sufficient credits ($5+ recommended)
- [ ] HuggingFace account created at https://huggingface.co/join
- [ ] HuggingFace token generated at https://huggingface.co/settings/tokens
- [ ] Accepted pyannote conditions at https://huggingface.co/pyannote/speaker-diarization-3.1

## Configuration Files

- [ ] `.env` file created (copied from `.env.example`)
- [ ] `storage/app/openai_api.key` created with OpenAI key
- [ ] `HUGGINGFACE_TOKEN` added to `.env`
- [ ] Database credentials configured in `.env`
- [ ] `APP_URL` set correctly in `.env`

## Docker Services

- [ ] Run `docker-compose up -d`
- [ ] Verify app container running: `docker-compose ps`
- [ ] Verify db container running
- [ ] Verify redis container running
- [ ] Verify diarization container running

## Laravel Setup

- [ ] Run `docker-compose exec app composer install`
- [ ] Run `docker-compose exec app php artisan key:generate`
- [ ] Run `docker-compose exec app php artisan migrate`
- [ ] Verify database tables created: `docker-compose exec db mysql -uroot -psecret mittstyremote -e "SHOW TABLES;"`

## Frontend Build

- [ ] Run `docker-compose exec app npm install`
- [ ] Run `docker-compose exec app npm run build`
- [ ] Verify `public/build` directory exists

## Permissions

- [ ] Run `docker-compose exec app chown -R www-data:www-data storage bootstrap/cache`
- [ ] Run `docker-compose exec app chmod -R 775 storage bootstrap/cache`
- [ ] Verify storage directories writable

## Service Health Checks

### Web Application
- [ ] Visit http://localhost:8080
- [ ] Homepage loads correctly
- [ ] No JavaScript errors in browser console
- [ ] Tailwind CSS styles applied

### Diarization Service
- [ ] Visit http://localhost:8000 in browser
- [ ] Should see: `{"service":"Diarization Service","status":"running","models_loaded":true}`
- [ ] Check logs: `docker-compose logs diarization`
- [ ] No errors about missing HuggingFace token
- [ ] No errors about model access

### Database
- [ ] Run `docker-compose exec db mysql -uroot -psecret -e "SELECT 1;"`
- [ ] Should return `1`

### Redis
- [ ] Run `docker-compose exec redis redis-cli ping`
- [ ] Should return `PONG`

## Functional Tests

### Test 1: Company Lookup
- [ ] Go to http://localhost:8080/styremote/ny
- [ ] Enter org.nr: `123456789`
- [ ] Click "Slå opp"
- [ ] Check network tab for API call to `/api/company/lookup`
- [ ] Should return company data or 404 (expected for fake org.nr)

### Test 2: Meeting Creation
- [ ] Fill in company info manually
- [ ] Fill in meeting details
- [ ] Add 2-3 participants
- [ ] Accept consent
- [ ] Should progress to recording step

### Test 3: Recording (Optional - requires microphone)
- [ ] Click "Start opptak"
- [ ] Grant microphone permission
- [ ] Speak for 10-30 seconds
- [ ] Click "Stopp opptak"
- [ ] Should redirect to status page
- [ ] Processing should start

### Test 4: Status Polling
- [ ] On status page, open browser DevTools → Network
- [ ] Should see repeated calls to `/api/meetings/{id}/status`
- [ ] State should progress: uploading → diarizing → transcribing → summarizing → ready

### Test 5: Document Download (After processing)
- [ ] Results page should show 3 download buttons
- [ ] Click "Last ned protokoll"
- [ ] PDF should download
- [ ] PDF should contain Norwegian text
- [ ] Repeat for actions and decisions PDFs

### Test 6: Share Link Creation
- [ ] On results page, select audience
- [ ] Set TTL hours
- [ ] Click "Generer delingslenke"
- [ ] Copy link
- [ ] Open in new incognito window
- [ ] Should show shared content

## Troubleshooting

### Issue: Diarization service shows `models_loaded: false`

**Solution:**
```bash
# Check HuggingFace token
docker-compose logs diarization | grep -i token

# Verify token in .env
cat .env | grep HUGGINGFACE

# Make sure you accepted model conditions
# Visit: https://huggingface.co/pyannote/speaker-diarization-3.1
# Click "Agree and access repository"

# Restart service
docker-compose restart diarization
docker-compose logs -f diarization
```

### Issue: OpenAI API errors

**Solution:**
```bash
# Verify key file exists
cat storage/app/openai_api.key

# Check Laravel logs
docker-compose logs app
tail storage/logs/laravel.log

# Verify OpenAI account has credits
# Visit: https://platform.openai.com/account/billing
```

### Issue: Database connection failed

**Solution:**
```bash
# Check if MySQL is running
docker-compose ps db

# Verify credentials in .env match docker-compose.yml
cat .env | grep DB_
cat docker-compose.yml | grep MYSQL_

# Restart database
docker-compose restart db
```

### Issue: Recording doesn't start

**Solutions:**
- Use HTTPS or localhost (required for getUserMedia)
- Grant microphone permissions
- Try different browser (Chrome recommended)
- Check browser console for errors

### Issue: Upload fails

**Solution:**
```bash
# Check storage permissions
docker-compose exec app ls -la storage/app/audio

# Should be owned by www-data or have 775 permissions
docker-compose exec app chown -R www-data:www-data storage
docker-compose exec app chmod -R 775 storage
```

### Issue: Queue jobs not processing

**Solution:**
```bash
# Check if Horizon is running
docker-compose exec app php artisan horizon:status

# Start queue worker manually
docker-compose exec app php artisan queue:work

# Check failed jobs
docker-compose exec app php artisan queue:failed

# Retry failed jobs
docker-compose exec app php artisan queue:retry all
```

## Maintenance

### Daily
- [ ] Check application logs: `tail -f storage/logs/laravel.log`
- [ ] Monitor disk space: `df -h`

### Weekly
- [ ] Review failed queue jobs
- [ ] Check database size
- [ ] Review audit logs for issues

### Monthly
- [ ] Update dependencies: `composer update`, `npm update`
- [ ] Backup database
- [ ] Review and archive old demo meetings
- [ ] Check OpenAI API usage and costs

## Production Additional Checks

- [ ] SSL certificate installed and valid
- [ ] Firewall configured (ports 80, 443 open)
- [ ] Backups configured and tested
- [ ] Monitoring/alerting set up
- [ ] Queue workers managed by Supervisor
- [ ] Cron jobs configured
- [ ] Log rotation configured
- [ ] Error tracking (Sentry) configured
- [ ] Performance monitoring active

## Security Checklist

- [ ] `.env` file not in version control
- [ ] `APP_DEBUG=false` in production
- [ ] Database has strong password
- [ ] Redis is not publicly accessible
- [ ] File permissions correct (no 777)
- [ ] CSRF protection enabled
- [ ] SSL/TLS configured
- [ ] Regular security updates applied

## All Green? 🎉

If all items are checked, your installation is complete and ready to use!

Next steps:
1. Create your first board meeting
2. Test the full workflow
3. Share with colleagues for feedback
4. Review documentation for advanced features

---

**Need help?** Check:
- [README.md](README.md) - Full documentation
- [QUICKSTART.md](QUICKSTART.md) - Quick setup guide
- [DEPLOYMENT.md](DEPLOYMENT.md) - Production deployment
- GitHub Issues - Report bugs
