#!/bin/bash

echo "Starting local preview server..."
echo ""
echo "Opening SecondHand Books theme preview..."
echo ""
echo "If the page doesn't open automatically, please open your browser and go to:"
echo "http://localhost:8000"
echo ""
echo "Press Ctrl+C to stop the server"
echo ""

# Try to open the browser automatically
if command -v xdg-open &> /dev/null; then
    # Linux
    xdg-open http://localhost:8000 &
elif command -v open &> /dev/null; then
    # macOS
    open http://localhost:8000 &
fi

# Start the server
python3 -m http.server 8000 