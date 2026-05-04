@echo off
echo ========================================
echo   Notetaking App - Complete Setup
echo ========================================
echo.

echo Step 1: Installing dependencies...
call npm install
if %errorlevel% neq 0 (
    echo ❌ Failed to install dependencies
    pause
    exit /b 1
)
echo ✅ Dependencies installed

echo.
echo Step 2: Setting up Git repository...
if not exist .git (
    git init
    echo ✅ Git repository initialized
) else (
    echo ✅ Git repository already exists
)

echo.
echo Step 3: Adding all files to Git...
git add .
echo ✅ Files added to Git

echo.
echo Step 4: Creating initial commit...
git commit -m "Initial commit: Beautiful notetaking app with GitHub Actions APK build" || echo "No changes to commit"

echo.
echo ========================================
echo   Setup Complete!
echo ========================================
echo.
echo Next steps:
echo 1. Create a repository on GitHub.com
echo 2. Run: git remote add origin YOUR_GITHUB_URL
echo 3. Run: git push -u origin main
echo 4. Go to Actions tab and build your APK!
echo.
echo Or run: setup-git.bat for more detailed instructions
echo.
pause
