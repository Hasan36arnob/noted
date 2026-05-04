#!/bin/bash

echo "Setting up Notes App..."

# Install dependencies
echo "Installing dependencies..."
npm install

# Initialize Capacitor
echo "Initializing Capacitor..."
npx cap init NotesApp com.example.notes --webDir=.

# Add Android platform
echo "Adding Android platform..."
npx cap add android

# Sync Capacitor
echo "Syncing Capacitor..."
npx cap sync android

echo "Setup complete!"
echo "To build APK, run: npx cap run android"
