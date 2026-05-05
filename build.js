const fs = require('fs');
const path = require('path');

const distDir = path.join(__dirname, 'dist');
const webFiles = ['index.html', 'script.js', 'styles.css', 'manifest.json', 'sw.js'];

// Create dist directory if it doesn't exist
if (!fs.existsSync(distDir)) {
  fs.mkdirSync(distDir, { recursive: true });
}

// Copy web files to dist
webFiles.forEach(file => {
  const src = path.join(__dirname, file);
  const dest = path.join(distDir, file);
  if (fs.existsSync(src)) {
    fs.copyFileSync(src, dest);
    console.log(`Copied ${file} to dist/`);
  }
});

console.log('Build complete!');
