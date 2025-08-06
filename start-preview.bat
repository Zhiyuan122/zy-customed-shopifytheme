@echo off
echo Starting local preview server...
echo.
echo Opening SecondHand Books theme preview...
echo.
echo If the page doesn't open automatically, please open your browser and go to:
echo http://localhost:8000
echo.
echo Press Ctrl+C to stop the server
echo.

python -m http.server 8000

pause 