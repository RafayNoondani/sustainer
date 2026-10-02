@echo off
title Sustainer Tech - Website Launcher
echo ========================================================
echo   SUSTAINER TECH - SMALL BUSINESS AUTOMATION WEBSITE
echo ========================================================
echo.
echo Launching your local preview server...
echo.

cd /d "%~dp0"

REM Try to launch browser at localhost:3000 after 2 seconds in background
start "" cmd /c "timeout /t 2 /nobreak >nul & start http://localhost:3000"

REM Check if Node.js / npm is installed
where npm >nul 2>nul
if %ERRORLEVEL% equ 0 (
    echo [INFO] Node.js detected. Starting local server...
    if exist "node_modules" (
        npm run preview
    ) else (
        echo [INFO] Installing required packages first...
        npm install && npm run preview
    )
    goto end
)

REM Fallback: Check if Python is installed
where python >nul 2>nul
if %ERRORLEVEL% equ 0 (
    echo [INFO] Python detected. Starting lightweight HTTP server on port 3000...
    if exist "dist" (
        python -m http.server 3000 --directory dist
    ) else (
        python -m http.server 3000
    )
    goto end
)

REM Fallback 2: Check python3
where python3 >nul 2>nul
if %ERRORLEVEL% equ 0 (
    echo [INFO] Python 3 detected. Starting lightweight HTTP server on port 3000...
    if exist "dist" (
        python3 -m http.server 3000 --directory dist
    ) else (
        python3 -m http.server 3000
    )
    goto end
)

echo.
echo [NOTICE] Neither Node.js nor Python were found in your PATH.
echo To run modern web applications, please install Node.js from https://nodejs.org
echo Opening the pre-built files in your browser...
start "" "%~dp0dist\index.html"
echo.

:end
pause
