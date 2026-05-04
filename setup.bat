@echo off
echo Setting up Notes App...

echo Installing dependencies...
npm install

echo Initializing Capacitor...
npx cap init NotesApp com.example.notes --webDir=.

echo Adding Android platform...
npx cap add android

echo Syncing Capacitor...
npx cap sync android

echo Setup complete!
pause
