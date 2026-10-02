#!/usr/bin/env bash
echo "========================================================"
echo "  SUSTAINER TECH - SMALL BUSINESS AUTOMATION WEBSITE"
echo "========================================================"
echo ""
echo "Starting local server..."

DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null 2>&1 && pwd )"
cd "$DIR"

# Open browser in 2 seconds
(sleep 2 && (which xdg-open > /dev/null && xdg-open http://localhost:3000 || which open > /dev/null && open http://localhost:3000)) &

if command -v npm &> /dev/null; then
    echo "[INFO] Node.js detected."
    if [ -d "node_modules" ]; then
        npm run preview
    else
        npm install && npm run preview
    fi
    exit 0
fi

if command -v python3 &> /dev/null; then
    echo "[INFO] Python 3 detected. Running on http://localhost:3000..."
    if [ -d "dist" ]; then
        python3 -m http.server 3000 --directory dist
    else
        python3 -m http.server 3000
    fi
    exit 0
fi

if command -v python &> /dev/null; then
    echo "[INFO] Python detected. Running on http://localhost:3000..."
    if [ -d "dist" ]; then
        python -m http.server 3000 --directory dist
    else
        python -m http.server 3000
    fi
    exit 0
fi

echo "[NOTICE] Neither Node.js nor Python found. Please install Node.js from https://nodejs.org"
