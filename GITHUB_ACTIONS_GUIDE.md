# GitHub Actions APK Build Guide

## Overview

This guide will help you set up GitHub Actions to automatically build your notetaking app into an APK file.

## Prerequisites

1. A GitHub account
2. Your code pushed to a GitHub repository
3. Node.js installed locally (for testing)

## Step-by-Step Setup

### Step 1: Initialize Git Repository

Open your terminal in the `first-app` folder and run:

```bash
# Initialize git repository
git init

# Add all files
git add .

# Create initial commit
git commit -m "Initial commit: Beautiful notetaking app"
```

### Step 2: Create GitHub Repository

1. Go to [github.com](https://github.com)
2. Click "New repository"
3. Name it (e.g., `notes-app`)
4. Make it public or private
5. Don't initialize with README
6. Click "Create repository"

### Step 3: Push Your Code

Copy the commands from GitHub and run them in your terminal:

```bash
git remote add origin https://github.com/YOUR_USERNAME/notes-app.git
git branch -M main
git push -u origin main
```

### Step 4: Verify GitHub Actions Workflow

1. Go to your repository on GitHub
2. Click on the "Actions" tab
3. You should see the "Build Android APK" workflow
4. Click on it to see the workflow status

### Step 5: Trigger the Build

The workflow will automatically run when you push to the `main` branch. You can also trigger it manually:

1. Go to the "Actions" tab
2. Click on "Build Android APK"
3. Click "Run workflow" → "Run workflow"

### Step 6: Download Your APK

1. Wait for the build to complete (usually 5-10 minutes)
2. Click on the workflow run
3. Scroll down to "Artifacts"
4. Download `notes-app-apk.zip`
5. Extract the ZIP file
6. You'll find `app-debug.apk` inside

### Step 7: Install on Your Phone

1. Transfer the APK to your Android phone
2. Go to Settings → Security → Enable "Install from Unknown Sources"
3. Open the APK file and install it
4. Launch the app!

## Workflow Configuration

The GitHub Actions workflow is configured in `.github/workflows/build-apk.yml`:

### Triggers
- Push to `main`, `master`, or `develop` branches
- Pull requests to `main` or `master`
- Manual trigger via GitHub UI

### Build Process
1. Sets up Node.js environment
2. Installs npm dependencies
3. Sets up Java 17 and Android SDK
4. Installs Capacitor dependencies
5. Initializes Capacitor project
6. Adds Android platform
7. Syncs Capacitor
8. Builds debug APK using Gradle
9. Uploads APK as artifact

### Artifacts
- **Name**: `notes-app-apk`
- **Path**: `android/app/build/outputs/apk/debug/app-debug.apk`
- **Retention**: 30 days

## Troubleshooting

### Build Fails

**Check these common issues:**

1. **Node.js version**: Ensure Node.js 16+ is used
2. **Java version**: Java 17 is required
3. **Android SDK**: Make sure Android SDK is properly installed
4. **Capacitor**: Ensure Capacitor dependencies are installed

### APK Not Found

1. Check if the build step completed successfully
2. Verify the APK path in the workflow
3. Check the "Artifacts" section after build completion

### Installation Issues

1. **Enable Unknown Sources**: Settings → Security → Unknown Sources
2. **Clear Cache**: Clear package cache in Settings
3. **Rebuild**: Try rebuilding the APK

## Advanced Configuration

### Change App Name

Edit `capacitor.config.json`:
```json
{
  "appName": "Your App Name",
  "appId": "com.yourcompany.yourapp"
}
```

### Change App Version

Edit `package.json`:
```json
{
  "version": "1.0.0"
}
```

### Build Release APK

Modify the workflow to build release instead of debug:
```yaml
- name: Build Android App
  run: |
    cd android
    ./gradlew assembleRelease --no-daemon
```

### Add Signing Configuration

Create `android/keystore.properties`:
```properties
storeFile=release-key.jks
storePassword=your_store_password
keyAlias=release-key
keyPassword=your_key_password
```

## Continuous Integration

The workflow is set up for continuous integration:

- **Every push** to main branch triggers a new build
- **Every pull request** is tested before merging
- **Manual triggers** allow on-demand builds

## Best Practices

1. **Test locally** before pushing to GitHub
2. **Check build logs** if something fails
3. **Update dependencies** regularly
4. **Use semantic versioning** for releases
5. **Keep APK size small** by optimizing assets

## Support

For issues:
1. Check GitHub Actions logs
2. Review Capacitor documentation
3. Check Android Studio logs
4. Verify all prerequisites are met

---

**Happy Building! 🚀**
