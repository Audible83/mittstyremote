#!/bin/bash

echo "================================================"
echo "  Mitt Styremøte - Installation Script"
echo "================================================"
echo ""

# Colors
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Check if Docker is installed
if ! command -v docker &> /dev/null; then
    echo -e "${RED}❌ Docker is not installed. Please install Docker first.${NC}"
    exit 1
fi

if ! command -v docker-compose &> /dev/null; then
    echo -e "${RED}❌ Docker Compose is not installed. Please install Docker Compose first.${NC}"
    exit 1
fi

echo -e "${GREEN}✓ Docker found${NC}"

# Create .env if it doesn't exist
if [ ! -f .env ]; then
    echo "Creating .env file..."
    cp .env.example .env
    echo -e "${GREEN}✓ .env created${NC}"
else
    echo -e "${YELLOW}⚠ .env already exists, skipping${NC}"
fi

# Prompt for OpenAI API key
echo ""
echo "================================================"
echo "  OpenAI API Key Setup"
echo "================================================"
echo "Get your API key from: https://platform.openai.com/api-keys"
echo ""
read -p "Enter your OpenAI API key: " openai_key

if [ -z "$openai_key" ]; then
    echo -e "${RED}❌ OpenAI API key is required${NC}"
    exit 1
fi

mkdir -p storage/app
echo "$openai_key" > storage/app/openai_api.key
echo -e "${GREEN}✓ OpenAI API key saved${NC}"

# Prompt for HuggingFace token
echo ""
echo "================================================"
echo "  HuggingFace Token Setup"
echo "================================================"
echo "1. Create account at: https://huggingface.co/join"
echo "2. Get token from: https://huggingface.co/settings/tokens"
echo "3. Accept conditions at: https://huggingface.co/pyannote/speaker-diarization-3.1"
echo ""
read -p "Enter your HuggingFace token: " hf_token

if [ -z "$hf_token" ]; then
    echo -e "${RED}❌ HuggingFace token is required${NC}"
    exit 1
fi

# Add to .env
if grep -q "HUGGINGFACE_TOKEN=" .env; then
    sed -i.bak "s/HUGGINGFACE_TOKEN=.*/HUGGINGFACE_TOKEN=$hf_token/" .env
else
    echo "HUGGINGFACE_TOKEN=$hf_token" >> .env
fi
echo -e "${GREEN}✓ HuggingFace token saved${NC}"

# Start Docker services
echo ""
echo "================================================"
echo "  Starting Docker Services"
echo "================================================"
docker-compose up -d

echo -e "${GREEN}✓ Docker services started${NC}"

# Wait for services to be ready
echo ""
echo "Waiting for services to be ready..."
sleep 10

# Install Composer dependencies
echo ""
echo "================================================"
echo "  Installing PHP Dependencies"
echo "================================================"
docker-compose exec -T app composer install
echo -e "${GREEN}✓ Composer dependencies installed${NC}"

# Generate application key
echo ""
echo "Generating application key..."
docker-compose exec -T app php artisan key:generate
echo -e "${GREEN}✓ Application key generated${NC}"

# Run migrations
echo ""
echo "================================================"
echo "  Setting Up Database"
echo "================================================"
docker-compose exec -T app php artisan migrate --force
echo -e "${GREEN}✓ Database migrations complete${NC}"

# Install NPM dependencies
echo ""
echo "================================================"
echo "  Installing Frontend Dependencies"
echo "================================================"
docker-compose exec -T app npm install
echo -e "${GREEN}✓ NPM dependencies installed${NC}"

# Build assets
echo ""
echo "Building frontend assets..."
docker-compose exec -T app npm run build
echo -e "${GREEN}✓ Frontend assets built${NC}"

# Set permissions
echo ""
echo "Setting storage permissions..."
docker-compose exec -T app chown -R www-data:www-data storage bootstrap/cache
docker-compose exec -T app chmod -R 775 storage bootstrap/cache
echo -e "${GREEN}✓ Permissions set${NC}"

# Done!
echo ""
echo "================================================"
echo -e "  ${GREEN}Installation Complete! 🎉${NC}"
echo "================================================"
echo ""
echo "Your application is now running at:"
echo -e "  ${GREEN}🌐 Web: http://localhost:8080${NC}"
echo -e "  ${GREEN}🐍 Diarization API: http://localhost:8000${NC}"
echo ""
echo "To view logs:"
echo "  docker-compose logs -f app"
echo "  docker-compose logs -f diarization"
echo ""
echo "To stop services:"
echo "  docker-compose down"
echo ""
echo "To restart services:"
echo "  docker-compose restart"
echo ""
echo -e "${YELLOW}Next steps:${NC}"
echo "  1. Open http://localhost:8080 in your browser"
echo "  2. Click 'Start demo'"
echo "  3. Create your first board meeting!"
echo ""
echo "For detailed documentation, see README.md"
echo ""
