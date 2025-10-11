# Changelog

## Accessibility & UX Improvements

### Removed All Blinking/Flashing Animations
Following WCAG 2.1 guidelines for web accessibility:

- ❌ Removed glitch effect on header name
- ❌ Removed blinking `>` cursor on section headings
- ❌ Removed pulsing border animation on panes
- ❌ Removed scanning animation on header underline
- ✅ Kept smooth, non-flashing transitions (hover effects, underlines)

### Added Navigation Bar
- ✅ Added horizontal navigation bar with links to all three panes
- ✅ Smooth scroll behavior when clicking navigation links
- ✅ Proper ARIA labels for accessibility
- ✅ Keyboard navigation support with visible focus states
- ✅ Responsive design for mobile devices
- ✅ Clear visual feedback on hover and focus

### Improved Code Block Spacing
- Increased padding in code blocks from 20px to 25px
- Increased vertical margin from 30px to 40px
- Improved line-height from 1.6 to 2.0 for better readability
- Increased font-size to 0.95rem for easier reading

### Accessibility Features Added
1. **Semantic HTML**: Proper use of `<nav>`, `aria-label` attributes
2. **Keyboard Navigation**: All interactive elements are keyboard accessible
3. **Focus Indicators**: Enhanced focus outlines (3px on nav links)
4. **No Motion Sickness Triggers**: Removed all rapidly blinking/pulsing content
5. **Smooth Scrolling**: Added for better user experience when navigating
6. **Color Contrast**: Maintained high contrast ratios throughout

### Visual Changes
- Header glitch effect removed - now clean text
- Section heading cursors (>) are now static, not blinking
- Navigation bar added between header and main content
- All animations are now smooth transitions (no flashing)
- Maintained cyberpunk aesthetic without accessibility issues

## Files Modified
- `index.html` - Added navigation bar, removed glitch class
- `posts/bitcoin-lightning-network.html` - Added navigation bar, removed glitch class
- `category.html` - Added navigation bar, removed glitch class  
- `css/style.css` - Removed all blinking animations, added nav styles, smooth scroll
- `css/post.css` - Improved code block spacing and readability

## Testing Recommendations
- Test keyboard navigation (Tab through all links)
- Test with screen readers
- Verify all links are accessible
- Check smooth scrolling behavior
- Verify no flashing content remains
