#!/bin/bash
# Simple script to start the development server with 404 support

PORT=3000

echo "Starting development server on port $PORT..."
echo "Open http://localhost:$PORT in your browser"
echo ""

# Try different server options in order of preference
if command -v pnpm &> /dev/null; then
    echo "Using pnpm..."
    pnpm start
elif command -v npm &> /dev/null; then
    echo "Using npm..."
    npm start
elif command -v python3 &> /dev/null; then
    echo "Using Python 3 (with custom 404 support)..."
    python3 server.py $PORT
elif command -v python &> /dev/null; then
    echo "Using Python (with custom 404 support)..."
    python server.py $PORT
elif command -v php &> /dev/null; then
    echo "Using PHP..."
    php -S localhost:$PORT
else
    echo "Error: No suitable server found!"
    echo "Please install one of the following:"
    echo "  - Node.js (pnpm/npm)"
    echo "  - Python"
    echo "  - PHP"
    exit 1
fi
