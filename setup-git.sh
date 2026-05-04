#!/bin/bash

echo "=== GitHub Actions APK Setup ==="
echo ""

# Check if git is installed
if ! command -v git &> /dev/null; then
    echo "❌ Git is not installed. Please install Git first."
    exit 1
fi

# Check if .git directory exists
if [ -d ".git" ]; then
    echo "✅ Git repository already initialized"
else
    echo "Initializing Git repository..."
    git init
    echo "✅ Git repository initialized"
fi

# Check if README exists
if [ ! -f "README.md" ]; then
    echo "Creating README.md..."
    cat > README.md << 'EOF'
# Notes App

A beautiful notetaking application built with HTML, CSS, and JavaScript.

## Features
- Create, edit, and delete notes
- Beautiful gradient UI design
- Auto-save to local storage
- Mobile-responsive design
- PWA support

## How to Use
1. Open index.html in your browser
2. Click the floating + button to create a note
3. Edit and save your notes

## Build APK
This project uses GitHub Actions to automatically build an APK.

## License
MIT
EOF
    echo "✅ README.md created"
fi

echo ""
echo "=== Next Steps ==="
echo "1. Create a repository on GitHub.com"
echo "2. Run these commands (replace YOUR_USERNAME):"
echo ""
echo "   git remote add origin https://github.com/YOUR_USERNAME/notes-app.git"
echo "   git add ."
echo "   git commit -m 'Initial commit: Beautiful notetaking app'"
echo "   git branch -M main"
echo "   git push -u origin main"
echo ""
echo "3. Go to GitHub → Actions tab to see the workflow"
echo "4. Trigger the build and download your APK!"
echo ""
