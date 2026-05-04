@echo off
echo === GitHub Actions APK Setup ===
echo.

REM Check if git is installed
where git >nul 2>nul
if %errorlevel% neq 0 (
    echo ❌ Git is not installed. Please install Git first.
    echo Download from: https://git-scm.com/download/win
    pause
    exit /b 1
)

REM Check if .git directory exists
if exist .git (
    echo ✅ Git repository already initialized
) else (
    echo Initializing Git repository...
    git init
    echo ✅ Git repository initialized
)

REM Create README.md if it doesn't exist
if not exist README.md (
    echo Creating README.md...
    echo # Notes App > README.md
    echo. >> README.md
    echo A beautiful notetaking application. >> README.md
    echo. >> README.md
    echo ## Features >> README.md
    echo - Create, edit, and delete notes >> README.md
    echo - Beautiful gradient UI design >> README.md
    echo - Auto-save to local storage >> README.md
    echo. >> README.md
    echo ## How to Use >> README.md
    echo 1. Open index.html in browser >> README.md
    echo 2. Click + button to create a note >> README.md
    echo. >> README.md
    echo ## Build APK >> README.md
    echo This project uses GitHub Actions. >> README.md
    echo. >> README.md
    echo ## License >> README.md
    echo MIT >> README.md
    echo ✅ README.md created
)

echo.
echo === Next Steps ===
echo 1. Create a repository on GitHub.com
echo 2. Run these commands (replace YOUR_USERNAME):
echo.
echo    git remote add origin https://github.com/YOUR_USERNAME/notes-app.git
echo    git add .
echo    git commit -m "Initial commit: Beautiful notetaking app"
echo    git branch -M main
echo    git push -u origin main
echo.
echo 3. Go to GitHub -> Actions tab to see the workflow
echo 4. Trigger the build and download your APK!
echo.
pause
