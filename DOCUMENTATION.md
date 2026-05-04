# Notes App Documentation

## Overview

This is a beautiful, modern notetaking application built with HTML, CSS, and JavaScript. The app features a clean, intuitive interface with smooth animations and responsive design.

## Features

### Core Features
- **Create Notes**: Add new notes with titles and content
- **Edit Notes**: Modify existing notes with a beautiful editor
- **Delete Notes**: Remove notes you no longer need
- **Archive Notes**: Save notes for later without deleting them
- **Color Coding**: Notes have beautiful gradient color indicators
- **Auto-Save**: Notes are automatically saved to local storage
- **Responsive Design**: Works perfectly on mobile and desktop

### UI/UX Features
- Modern gradient design
- Smooth animations and transitions
- Floating action button for quick note creation
- Empty state for when no notes exist
- Timestamps showing when notes were last edited
- Preview text for quick note scanning

## File Structure

```
first-app/
├── index.html          # Main HTML file
├── styles.css          # All styling and animations
├── script.js           # App functionality
├── manifest.json       # PWA manifest
├── sw.js              # Service worker for offline support
├── package.json       # Dependencies and scripts
├── capacitor.config.json  # Capacitor configuration
├── .github/workflows/build-apk.yml  # GitHub Actions workflow
├── setup.bat          # Windows setup script
└── README.md          # Project documentation
```

## How It Works

### Data Storage
The app uses `localStorage` to persist notes. This means:
- Notes are saved automatically
- Data persists between page reloads
- No server required for basic functionality
- Limited to ~5-10MB of storage per domain

### Note Structure
Each note has the following properties:
```javascript
{
  id: "timestamp",           // Unique identifier
  title: "string",           // Note title
  content: "string",         // Note content
  color: "gradient",         // Color theme
  createdAt: "ISO date",     // Creation timestamp
  updatedAt: "ISO date",     // Last edit timestamp
  archived: boolean          // Archive status
}
```

### Color Themes
The app supports multiple color themes:
- **Gradient** (default): Purple to pink gradient
- **Blue**: Blue to cyan gradient
- **Green**: Green to emerald gradient
- **Purple**: Purple to violet gradient
- **Orange**: Orange to amber gradient
- **Red**: Red to crimson gradient

## Building APK

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn
- Android Studio (for full development)
- Java Development Kit (v11 or higher)

### Quick Build (GitHub Actions)
1. Push your code to GitHub
2. The workflow will automatically build the APK
3. Download the APK from the Actions artifacts

### Manual Build
1. Run `npm install` to install dependencies
2. Run `npx cap add android` to add Android platform
3. Run `npx cap sync android` to sync Capacitor
4. Open the project in Android Studio
5. Build the APK from Android Studio

## Customization

### Changing Colors
Edit `styles.css` and modify the CSS variables:
```css
:root {
    --primary-color: #6366f1;
    --secondary-color: #ec4899;
    --bg-color: #f8fafc;
    /* ... */
}
```

### Adding Features
The app is structured as a class-based JavaScript application. To add features:

1. Add new methods to the `NotetakingApp` class in `script.js`
2. Update the UI in `index.html`
3. Add styling in `styles.css`

### Example: Adding Search
```javascript
// Add to script.js
searchNotes(query) {
    const searchTerm = query.toLowerCase();
    return this.notes.filter(note => 
        note.title.toLowerCase().includes(searchTerm) ||
        note.content.toLowerCase().includes(searchTerm)
    );
}
```

## Performance

The app is optimized for performance:
- Minimal DOM manipulation
- Efficient event handling
- Lazy loading where applicable
- Local storage for fast data access
- CSS animations for smooth UI transitions

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Future Enhancements

Potential features to add:
- Search functionality
- Note categories/tags
- Dark mode
- Backup/restore functionality
- Cloud sync
- Password protection
- Export notes (PDF, Markdown)
- Rich text editing
- Image attachments
- Voice notes

## Troubleshooting

### Notes not saving
- Check browser console for errors
- Ensure localStorage is enabled
- Try clearing browser cache

### APK build fails
- Ensure Android SDK is properly installed
- Check Java version compatibility
- Verify Capacitor configuration

### App doesn't work on mobile
- Test with responsive design mode in browser
- Check viewport meta tag
- Verify CSS media queries

## License

MIT License - see LICENSE file for details.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request
