@echo off
cd /d "%~dp0"

where php >nul 2>&1
if %errorlevel%==0 (
    echo Starting PHP built-in server on http://localhost:8000
    php -S localhost:8000
    goto end
)

where node >nul 2>&1
if %errorlevel%==0 (
    echo Starting Node server on http://localhost:3000
    npm start
    goto end
)

echo ERROR: Neither PHP nor Node.js was found on this system.
echo Please install one of them first, or use XAMPP/WAMP.
echo
echo Installing Node.js: https://nodejs.org/
echo Installing PHP: https://windows.php.net/download/
:end
pause
