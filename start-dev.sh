#!/bin/bash

echo "Starting Portfolio Development Servers..."
echo ""

# Start PHP server in background
echo "Starting PHP Server on port 8000..."
cd api && php -S localhost:8000 > /dev/null 2>&1 &
PHP_PID=$!
cd ..

# Wait a moment
sleep 2

# Start React dev server
echo "Starting React Development Server..."
npm run dev &
REACT_PID=$!

echo ""
echo "Both servers are starting..."
echo "Frontend: http://localhost:3000"
echo "Backend API: http://localhost:8000"
echo ""
echo "Press Ctrl+C to stop both servers"

# Wait for user interrupt
trap "kill $PHP_PID $REACT_PID; exit" INT TERM
wait

