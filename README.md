# Mitt Styremøte

**Norwegian Board Meeting Transcription and Documentation System**

An AI-powered web application for recording board meetings, automatically transcribing with speaker diarization, and generating professional Norwegian meeting minutes, action items, and decision logs.

## 🎯 Features

- **📹 Meeting Recording**: Record board meetings directly from browser with chunked upload support
- **👥 Speaker Diarization**: AI-powered speaker identification using pyannote.audio
- **🗣️ Transcription**: Norwegian speech-to-text using OpenAI Whisper API
- **📄 Document Generation**: Automated generation of:
  - Formal meeting minutes (møteprotokoll)
  - Action items list (tiltaksliste)
  - Decision log (beslutningslogg)
- **🏢 Company Lookup**: Automatic company information from Proff.no
- **🔗 Secure Sharing**: Token-based sharing links with expiration
- **🔒 Privacy-First**: Consent required, encrypted storage, automatic demo cleanup (48h)
- **📱 Mobile-First**: Responsive design for mobile and desktop

## 🏗️ Architecture

### Backend (Laravel 11)
- PHP 8.3+ with Laravel 11
- MySQL database
- Redis for queues and caching
- Horizon for queue management
- DomPDF for PDF generation

### AI Services
- **OpenAI Whisper API**: Speech-to-text transcription
- **OpenAI GPT-4o-mini**: Norwegian summarization with governance prompts
- **Pyannote.audio 3.1**: Speaker diarization (Python FastAPI sidecar)

### Frontend
- Blade templates with Tailwind CSS
- Vue 3 for interactive components
- Web Audio API for recording
- Vite for asset bundling

## 📋 Prerequisites

- PHP 8.3+
- Composer
- Node.js 18+ & npm
- MySQL 8.0+
- Redis
- Docker & Docker Compose (recommended)
- Python 3.11+ (for diarization service)

## 🚀 Installation

### Option 1: Docker (Recommended)

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd mittstyremote
   ```

2. **Set up environment**
   ```bash
   cp .env.example .env
   ```

3. **Configure environment variables**
   Edit `.env` and add:
   - OpenAI API key in `storage/app/openai_api.key`
   - HuggingFace token for pyannote: `HUGGINGFACE_TOKEN=your_token_here`
   - Database credentials (already configured for Docker)

4. **Get HuggingFace Token**
   - Create account at https://huggingface.co/
   - Generate token at https://huggingface.co/settings/tokens
   - Accept conditions for `pyannote/speaker-diarization-3.1`

5. **Add OpenAI API Key**
   ```bash
   mkdir -p storage/app
   echo "sk-your-openai-api-key" > storage/app/openai_api.key
   ```

6. **Start services**
   ```bash
   docker-compose up -d
   ```

7. **Install dependencies and setup**
   ```bash
   docker-compose exec app composer install
   docker-compose exec app php artisan key:generate
   docker-compose exec app php artisan migrate
   docker-compose exec app npm install
   docker-compose exec app npm run build
   ```

8. **Access the application**
   - Web: http://localhost:8080
   - Diarization API: http://localhost:8000

### Option 2: Local Development

1. **Clone and setup**
   ```bash
   git clone <repository-url>
   cd mittstyremote
   cp .env.example .env
   ```

2. **Install PHP dependencies**
   ```bash
   composer install
   php artisan key:generate
   ```

3. **Configure database**
   - Create MySQL database `mittstyremote`
   - Update `.env` with database credentials

4. **Run migrations**
   ```bash
   php artisan migrate
   ```

5. **Install frontend dependencies**
   ```bash
   npm install
   npm run dev  # or npm run build for production
   ```

6. **Setup Python diarization service**
   ```bash
   cd python-diarization
   python3 -m venv venv
   source venv/bin/activate  # or venv\Scripts\activate on Windows
   pip install -r requirements.txt
   export HUGGINGFACE_TOKEN=your_token_here
   python app.py
   ```

7. **Start Laravel**
   ```bash
   php artisan serve
   php artisan queue:work  # In separate terminal for job processing
   ```

8. **Access the application**
   - Web: http://localhost:8000
   - Diarization API: http://localhost:8000 (Python service)

## 🔧 Configuration

### OpenAI Setup

Create `storage/app/openai_api.key`:
```bash
mkdir -p storage/app
echo "sk-your-openai-api-key" > storage/app/openai_api.key
```

Or set in `.env`:
```env
OPENAI_KEY_FILE=storage/app/openai_api.key
```

### Pyannote.audio Setup

1. Get HuggingFace token from https://huggingface.co/settings/tokens
2. Accept model conditions at https://huggingface.co/pyannote/speaker-diarization-3.1
3. Set environment variable:
   ```bash
   export HUGGINGFACE_TOKEN=hf_your_token_here
   ```

### Storage Configuration

For production, configure S3 or DigitalOcean Spaces in `.env`:
```env
FILESYSTEM_DISK=s3
AWS_ACCESS_KEY_ID=your_key
AWS_SECRET_ACCESS_KEY=your_secret
AWS_DEFAULT_REGION=eu-north-1
AWS_BUCKET=your_bucket
```

## 📖 Usage

### Creating a Meeting

1. **Navigate to wizard**: Click "Start demo" on homepage
2. **Company info**: Enter organization number and click "Slå opp" for automatic lookup
3. **Meeting details**: Fill in date, location, chair name, quorum status
4. **Participants**: Add all participants with their roles
5. **Consent**: Confirm all participants have consented to recording
6. **Record**: Start recording and speak naturally
7. **Process**: Stop recording to trigger AI processing pipeline

### Processing Pipeline

When you stop recording, the system automatically:
1. **Assembles** audio chunks into single file
2. **Diarizes** to identify speakers (pyannote)
3. **Transcribes** to Norwegian text (Whisper)
4. **Maps** speaker labels to participant names
5. **Summarizes** into minutes, actions, and decisions (GPT)
6. **Generates** three PDF documents
7. **Marks** meeting as ready

### Sharing Results

1. Navigate to meeting results
2. Click "Del" (Share) button
3. Choose audience: minutes, actions, decisions, or all
4. Set expiration time (optional)
5. Copy share link to send to recipients

## 🔐 Security & Privacy

- **Consent Gate**: All participants must consent before recording
- **Encryption**: Audio and data stored with server-side encryption
- **Demo Retention**: Demo meetings auto-deleted after 48 hours
- **Audit Logs**: All significant actions logged with IP and timestamp
- **Access Control**: Tokenized share links with expiration
- **GDPR Compliance**: Data minimization, right to deletion

## 🧪 Testing

Run tests:
```bash
php artisan test
```

## 📊 Queue Management

Monitor queues with Horizon:
```bash
php artisan horizon
```

Access dashboard: http://localhost/horizon

## 🐛 Troubleshooting

### Diarization Service Not Working

**Problem**: 503 error from diarization endpoint

**Solutions**:
1. Check HuggingFace token is set: `echo $HUGGINGFACE_TOKEN`
2. Accept pyannote model conditions
3. Check Python service logs: `docker-compose logs diarization`
4. Verify models downloaded (first run takes time)

### OpenAI API Errors

**Problem**: Transcription or summarization fails

**Solutions**:
1. Verify API key in `storage/app/openai_api.key`
2. Check API quota and billing
3. Check Laravel logs: `storage/logs/laravel.log`

### Recording Not Starting

**Problem**: Browser doesn't start recording

**Solutions**:
1. Grant microphone permissions in browser
2. Use HTTPS (required for getUserMedia)
3. Check browser compatibility (Chrome/Firefox/Safari)

### Upload Fails

**Problem**: Chunks not uploading

**Solutions**:
1. Increase `upload_max_filesize` in `php.ini`
2. Increase `post_max_size` in `php.ini`
3. Check storage permissions: `chmod -R 775 storage`

## 🔄 Production Deployment

### Requirements

- PHP 8.3+ with required extensions
- MySQL 8.0+
- Redis
- SSL certificate (required for recording)
- Sufficient storage for audio files

### Optimization

1. **Cache configuration**
   ```bash
   php artisan config:cache
   php artisan route:cache
   php artisan view:cache
   ```

2. **Build assets**
   ```bash
   npm run build
   ```

3. **Queue workers**
   Set up supervisor to manage `php artisan queue:work`

4. **Scheduler**
   Add to crontab:
   ```
   * * * * * cd /path-to-app && php artisan schedule:run >> /dev/null 2>&1
   ```

### Environment

Set in production `.env`:
```env
APP_ENV=production
APP_DEBUG=false
QUEUE_CONNECTION=redis
CACHE_STORE=redis
SESSION_DRIVER=redis
FILESYSTEM_DISK=s3
```

## 📝 API Documentation

### Company Lookup
```
POST /api/company/lookup
{
  "orgnr": "123456789",  // or
  "name": "Company Name"
}
```

### Create Meeting
```
POST /api/meetings
{
  "company_name": "...",
  "company_orgnr": "...",
  "meeting_datetime": "2024-03-15T14:00:00",
  ...
}
```

### Upload Audio Chunk
```
POST /api/meetings/{id}/upload
multipart/form-data:
  - chunk: File
  - seq: Integer
  - is_last: Boolean
```

### Create Share Link
```
POST /api/meetings/{id}/share
{
  "audience": "all",  // minutes|actions|decisions|all
  "ttl_hours": 168    // optional
}
```

## 🤝 Contributing

Contributions welcome! Please:
1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests
5. Submit a pull request

## 📄 License

MIT License - See LICENSE file for details

## 🙏 Acknowledgments

- **OpenAI**: Whisper and GPT APIs
- **Pyannote.audio**: Speaker diarization
- **Laravel**: Web framework
- **Tailwind CSS**: Styling

## 📞 Support

For issues and questions:
- GitHub Issues: [repository-url]/issues
- Email: support@mittstyremote.no

---

**Built with ❤️ for Norwegian board meetings**
