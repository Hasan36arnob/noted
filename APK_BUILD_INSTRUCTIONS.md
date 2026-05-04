# How to Build APK Using GitHub Actions

This guide will help you build an APK for your notetaking app using GitHub Actions.

## Quick Start (3 Steps)

### Step 1: Push Your Code to GitHub

Open terminal in the `first-app` folder and run:

```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/YOUR_USERNAME/notes-app.git
git branch -M main
git push -u origin main
```

### Step 2: Trigger the Build

1. Go to your GitHub repository
2. Click on the **"Actions"** tab
3. Click on **"Build Android APK"** workflow
4. Click **"Run workflow"** → **"Run workflow"**

### Step 3: Download Your APK

1. Wait for the build to complete (5-10 minutes)
2. Click on the workflow run
3. Scroll down to **"Artifacts"**
4. Download **"notes-app-apk"**
5. Extract the ZIP file
6. Find **"app-debug.apk"** inside

## Detailed Instructions

### Prerequisites

- GitHub account (free at github.com)
- Git installed on your computer
- Android phone (for testing the APK)

### Complete Setup Process

#### 1. Initialize Git Repository

Open Command Prompt or PowerShell in the `first-app` folder:

```cmd
cd D:\mobapps\first-app
git init
```

#### 2. Add Files to Git

```cmd
git add .
```

#### 3. Create Your First Commit

```cmd
git commit -m "Initial commit: Beautiful notetaking app"
```

#### 4. Create GitHub Repository

1. Go to https://github.com/new
2. Enter repository name (e.g., `notes-app`)
3. Choose **Private** or **Public**
4. **Don't** initialize with README
5. Click **"Create repository"**

#### 5. Connect Local Repository to GitHub

Copy the commands from GitHub and run them:

```cmd
git remote add origin https://github.com/YOUR_USERNAME/notes-app.git
git branch -M main
git push -u origin main
```

#### 6. Verify GitHub Actions Workflow

1. Go to your repository on GitHub
2. Click on **"Actions"** tab
3. You should see **"Build Android APK"** workflow
4. Click on it to verify it's working

#### 7. Trigger the APK Build

1. Click on **"Build Android APK"** workflow
2. Click the **"Run workflow"** button
3. Select **"main"** branch
4. Click **"Run workflow"**

#### 8. Wait for Build to Complete

The build process takes **5-10 minutes**. You'll see:
- ⏳ Running: Setup Node.js
- ⏳ Running: Install dependencies
- ⏳ Running: Setup Java and Android SDK
- ⏳ Running: Build Android App
- ✅ Completed: Upload APK Artifact

#### 9. Download Your APK

1. Click on the workflow run (it will have a checkmark when complete)
2. Scroll down to **"Artifacts"** section
3. Click on **"notes-app-apk"**
4. Click **"Download"** button
5. Extract the downloaded ZIP file
6. Find **"app-debug.apk"** inside

#### 10. Install on Your Phone

1. Transfer the APK to your Android phone (via USB, email, cloud storage, etc.)
2. Go to **Settings** → **Security** → Enable **"Unknown Sources"**
3. Open the APK file on your phone
4. Tap **"Install"**
5. Wait for installation to complete
6. Tap **"Open"** to launch the app!

## Troubleshooting

### Build Fails

**Common Issues:**

1. **"Repository not found"**
   - Make sure you created the repository on GitHub
   - Check your repository URL is correct
   - Ensure you're using the right branch name

2. **"Permission denied"**
   - Make sure you're logged into GitHub
   - Check your repository is accessible

3. **Build times out**
   - Try again - GitHub Actions can be slow sometimes
   - Check if there are too many builds running

4. **APK not found**
   - Wait for the build to fully complete
   - Check the "Artifacts" section
   - Look for the correct artifact name

### APK Installation Issues

1. **"App not installed"**
   - Enable "Install from Unknown Sources" in Settings
   - Try downloading the APK again
   - Clear package cache in Settings

2. **App crashes on launch**
   - Make sure you're using the debug APK
   - Check if your phone meets the minimum requirements
   - Try building again

## Advanced Options

### Build Release APK

To build a release APK instead of debug:

1. Edit `.github/workflows/build-apk.yml`
2. Change `assembleDebug` to `assembleRelease`
3. Add signing configuration

### Change App Name

Edit `capacitor.config.json`:
```json
{
  "appName": "My Notes",
  "appId": "com.mycompany.notes"
}
```

### Add Custom Icons

1. Replace icons in your project
2. Update `manifest.json`
3. Rebuild the APK

## Tips for Best Results

1. **Test locally first**: Open `index.html` in your browser
2. **Check build logs**: If build fails, check the logs for errors
3. **Keep APK size small**: Optimize images and assets
4. **Update dependencies**: Keep Capacitor and Android SDK updated
5. **Use semantic versioning**: Version your releases

## Support

If you encounter issues:

1. Check the GitHub Actions logs
2. Review the error messages carefully
3. Make sure all prerequisites are met
4. Try rebuilding after fixing issues

---

**Happy Building! 🚀**

Your beautiful notetaking app will soon be available as a mobile APK!
