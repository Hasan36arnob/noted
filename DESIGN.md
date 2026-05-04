# App Design Specifications

## Color Palette

### Primary Colors
- **Main Gradient**: `#6366f1` → `#ec4899` (Purple to Pink)
- **Secondary Gradient**: `#3b82f6` → `#0ea5e9` (Blue to Cyan)
- **Accent**: `#10b981` (Green for success)

### Background Colors
- **Page Background**: `#f8fafc` (Light gray-blue)
- **Card Background**: `#ffffff` (Pure white)
- **Surface**: `#ffffff` (White for surfaces)

### Text Colors
- **Primary Text**: `#1e293b` (Dark slate)
- **Secondary Text**: `#64748b` (Medium slate)
- **Muted Text**: `#94a3b8` (Light slate)

## Typography

### Font Family
```
Segoe UI, Tahoma, Geneva, Verdana, sans-serif
```

### Font Sizes
- **App Title**: 24px
- **Note Title**: 18-24px
- **Note Content**: 16px
- **Meta Information**: 12-14px
- **Buttons**: 14-16px

### Font Weights
- **Headers**: 700 (Bold)
- **Subheaders**: 600 (Semi-bold)
- **Body**: 400 (Regular)

## Spacing System

### Base Unit: 4px

#### Padding
- **Small**: 8px (1 unit)
- **Medium**: 16px (4 units)
- **Large**: 24px (6 units)
- **Extra Large**: 32px (8 units)

#### Margins
- **Note Cards**: 16px gap
- **Sections**: 20px padding
- **Buttons**: 12px padding

## Component Specifications

### Header
- **Height**: 60px
- **Background**: Gradient (primary to secondary)
- **Padding**: 20px horizontal
- **Shadow**: Medium (0 4px 6px -1px rgba(0,0,0,0.1))

### Note Card
- **Border Radius**: 16px
- **Padding**: 20px
- **Shadow**: Small (0 1px 2px 0 rgba(0,0,0,0.05))
- **Hover Effect**: translateY(-4px) + larger shadow
- **Color Indicator**: 4px left border with gradient

### Floating Action Button
- **Size**: 56px × 56px
- **Position**: Bottom-right (24px from edges)
- **Background**: Gradient (primary to secondary)
- **Shadow**: Extra large with opacity
- **Icon Size**: 24px

### Editor
- **Title Input**: 24px font, bold, no border
- **Content Area**: 16px font, 1.6 line height
- **Footer**: 16px padding, border-top

## Animations

### Duration
- **Fast**: 150ms
- **Normal**: 300ms
- **Slow**: 500ms

### Key Animations
1. **Note Card**: Fade in + slide up (300ms)
2. **Editor**: Slide in from right (300ms)
3. **Button Hover**: Scale 1.05 + shadow
4. **Fab**: Scale 1.1 on hover

### Easing
- **Default**: cubic-bezier(0.4, 0, 0.2, 1)
- **Entrance**: cubic-bezier(0.4, 0, 0.2, 1)
- **Exit**: cubic-bezier(0.4, 0, 0.2, 1)

## Responsive Breakpoints

### Mobile (0-480px)
- Full screen app
- 20px padding
- 56px FAB

### Tablet (481-768px)
- Centered container
- Max width: 480px
- 24px border radius

### Desktop (769px+)
- Centered container
- Max height: 800px
- 24px border radius

## Accessibility

### Contrast Ratios
- **Text on Background**: 4.5:1 minimum
- **Large Text**: 3:1 minimum
- **UI Elements**: 2:1 minimum

### Touch Targets
- **Minimum Size**: 44px × 44px
- **Buttons**: 48px × 48px recommended

### Keyboard Navigation
- Full keyboard accessibility
- Focus indicators visible
- Logical tab order

## Performance

### Optimizations
- CSS animations (GPU accelerated)
- Local storage for fast access
- Minimal DOM manipulation
- Lazy loading where applicable

### Load Times
- **Initial Load**: < 100ms
- **Note Creation**: < 50ms
- **Note Loading**: < 30ms

## Design Principles

1. **Simplicity**: Clean, uncluttered interface
2. **Consistency**: Uniform spacing, colors, typography
3. **Feedback**: Clear visual feedback for all actions
4. **Speed**: Fast, responsive interactions
5. **Beauty**: Modern gradients, smooth animations

## Icon System

### Font Awesome Classes
- **Notes**: `fa-sticky-note`
- **Plus**: `fa-plus`
- **Menu**: `fa-bars`
- **Back**: `fa-arrow-left`
- **Save**: `fa-check`
- **Delete**: `fa-trash`
- **Archive**: `fa-archive`
- **Clock**: `fa-clock`

## State Management

### Visual States
- **Default**: Normal appearance
- **Hover**: Scale + shadow
- **Active**: Scale down + color change
- **Disabled**: Reduced opacity

### Loading States
- **Skeleton Screens**: Placeholder cards
- **Spinners**: For async operations
- **Progress Bars**: For uploads

## Error Handling

### Empty States
- **No Notes**: Friendly message + FAB
- **No Results**: Search message
- **Error**: Clear error message + retry

### Validation
- **Empty Title**: Auto-focus on title
- **Empty Content**: Allow empty content
- **Long Content**: Auto-scroll

## Future Enhancements

### Planned Features
1. **Dark Mode**: System-aware theme
2. **Search**: Full-text search
3. **Categories**: Note tagging
4. **Backup**: Cloud sync
5. **Export**: PDF/Markdown export
6. **Rich Text**: Formatting options
7. **Images**: Image attachments
8. **Voice**: Voice recording

### Design Improvements
1. **Animations**: More complex transitions
2. **Micro-interactions**: Enhanced feedback
3. **Customization**: User theme selection
4. **Widgets**: Home screen widgets

---

**Design Version**: 1.0.0
**Last Updated**: May 2026
**Author**: Notetaking App Team
