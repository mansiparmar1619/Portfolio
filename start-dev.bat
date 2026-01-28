@echo off
echo ========================================
echo Portfolio Development Server Starter
echo ========================================
echo.

REM Check if Node.js is installed
where node >nul 2>&1
if %ERRORLEVEL% NEQ 0 (
    echo ERROR: Node.js is not installed or not in PATH
    echo Please install Node.js from https://nodejs.org/
    pause
    exit /b 1
)

REM Check if npm is installed
where npm >nul 2>&1
if %ERRORLEVEL% NEQ 0 (
    echo ERROR: npm is not installed or not in PATH
    pause
    exit /b 1
)

REM Check if PHP is installed
where php >nul 2>&1
if %ERRORLEVEL% NEQ 0 (
    echo WARNING: PHP is not found in PATH
    echo The PHP server may not start correctly
    echo Please install PHP or use XAMPP/WAMP
    echo.
    pause
)

REM Check if node_modules exists
if not exist "node_modules" (
    echo node_modules not found. Installing dependencies...
    echo.
    call npm install
    if %ERRORLEVEL% NEQ 0 (
        echo ERROR: Failed to install dependencies
        pause
        exit /b 1
    )
    echo.
)

echo Starting PHP Server on port 8000...
start "PHP Server" cmd /k "cd /d %~dp0api && echo PHP Server running on http://localhost:8000 && php -S localhost:8000"

timeout /t 3 /nobreak >nul

echo Starting React Development Server...
start "React Dev Server" cmd /k "cd /d %~dp0 && echo React Dev Server starting... && npm run dev"

echo.
echo ========================================
echo Servers are starting...
echo ========================================
echo Frontend: http://localhost:3000
echo Backend API: http://localhost:8000
echo.
echo IMPORTANT: Keep both command windows open!
echo Close them to stop the servers.
echo.
echo Waiting 5 seconds for servers to start...
timeout /t 5 /nobreak >nul

echo.
echo Opening browser...
start http://localhost:3000

echo.
echo Servers are running in separate windows.
echo Close those windows to stop the servers.
echo.
pause

