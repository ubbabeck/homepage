# New Features Added

This document summarizes all the new features and improvements added to your homepage.

## 🌓 Dark Mode Support

The site now automatically adapts to your system's color scheme preference!

### Light Mode
- White background (#ffffff)
- Black text (#0a0a0a)
- Green accents (#00ff00)

### Dark Mode
- Dark background (#0a0a0a)
- Light text (#e0e0e0)
- Bright green borders and accents (#00ff00)

**How to test:**
- Change your system appearance settings
- The site will automatically switch themes
- No user action required!

## 🟢 Green Color Scheme

Changed from cyan/magenta to green (#00ff00) for a Matrix-inspired terminal feel:

- All accent colors now use green
- Code blocks feature bright green text
- Maintains the cyberpunk aesthetic
- Better consistency with developer/hacker themes

## 📝 Easy Post Creation

New command-line script to create blog posts quickly!

```bash
./new-post.sh "Your Post Title"
```

**What it does:**
1. Creates a new HTML file from the template
2. Generates a URL-friendly slug automatically
3. Sets the current date
4. Shows you the next steps

**Example:**
```bash
./new-post.sh "Understanding Bitcoin Taproot"
# Creates: posts/understanding-bitcoin-taproot.html
```

See [CREATING_POSTS.md](CREATING_POSTS.md) for full documentation.

## 🚫 404 Page with Automatic Redirects

Added a friendly custom 404 error page with automatic redirect configuration:

- Shows "Are you lost?" message
- Displays large "404" in green
- Includes navigation back to home
- Maintains site design and navigation
- **Automatic redirects** for all non-existent pages

**Files Added:**
- `404.html` - Custom error page
- `.htaccess` - Apache configuration (works automatically)
- `server.py` - Python server with 404 support
- `SERVER_CONFIG.md` - Configuration guide for all platforms

**How it works:**
- Visit any non-existent page → automatically shows 404.html
- Works on Apache, Nginx, GitHub Pages, Netlify, Vercel, etc.
- Local development uses `server.py` for 404 support

## 🔗 Nostr NIP-05 Support

Built-in support for Nostr identity verification!

**What is NIP-05?**
- Links your Nostr identity to your domain
- Provides a verified checkmark in Nostr clients
- Format: `username@yourdomain.com`

**Setup:**
1. Edit `.well-known/nostr.json`
2. Add your Nostr public key (hex format)
3. List your preferred relays
4. Deploy and verify!

**File location:** `.well-known/nostr.json`

Example:
```json
{
  "names": {
    "ruben": "your-hex-public-key-here"
  },
  "relays": {
    "your-hex-public-key-here": [
      "wss://relay.damus.io",
      "wss://relay.nostr.band"
    ]
  }
}
```

## 🧹 Removed Grid Background

Removed the cyberpunk grid background overlay for:
- Cleaner appearance
- Better readability
- Reduced visual noise
- Still maintains modern aesthetic with borders and accents

**Before:** Subtle cyan grid pattern overlay
**After:** Clean solid background (white or dark)

## ♿ Accessibility Improvements

All changes maintain WCAG 2.1 compliance:
- High contrast in both light and dark modes
- No blinking or flashing animations
- Proper color contrast ratios
- Keyboard navigation support
- Screen reader friendly

## 📚 New Documentation

Added comprehensive documentation:

### CREATING_POSTS.md
- Step-by-step guide for creating posts
- HTML structure reference
- Styling guidelines
- Troubleshooting tips

### NEW_FEATURES.md (this file)
- Summary of all new features
- Quick reference for recent changes

### Updated README.md
- Dark mode information
- Post creation instructions
- Nostr NIP-05 setup guide
- Updated color customization

## 🎨 Design Updates

**Maintained:**
- Monospace font (Courier New)
- Clean geometric borders
- Smooth hover transitions
- Matrix-style code blocks
- Responsive design

**Updated:**
- Color scheme: cyan/magenta → green
- Background: removed grid overlay
- Theme: added dark mode support
- Accents: unified green color

## 📂 New Files

```
homepage/
├── 404.html                    # Custom error page
├── .htaccess                   # Apache 404 configuration
├── server.py                   # Python server with 404 support
├── new-post.sh                 # Post creation script
├── CREATING_POSTS.md           # Post creation guide
├── NEW_FEATURES.md            # This file
├── SERVER_CONFIG.md           # Server configuration guide
├── .well-known/
│   └── nostr.json             # Nostr NIP-05 verification
```

## 🔧 Modified Files

**Updated for dark mode and green theme:**
- `css/style.css` - Added dark mode, changed to green
- `css/post.css` - Updated accent colors
- `index.html` - Removed grid background div
- `posts/bitcoin-lightning-network.html` - Removed grid div
- `category.html` - Removed grid div
- `README.md` - Added documentation for new features

## 🚀 Quick Start

1. **Create a new post:**
   ```bash
   ./new-post.sh "My First Post"
   ```

2. **Edit the post:**
   ```bash
   nano posts/my-first-post.html
   ```

3. **Add to posts.json:**
   ```json
   {
     "id": "my-first-post",
     "title": "My First Post",
     "date": "2025-10-11",
     "category": "Bitcoin",
     "excerpt": "My first blog post!",
     "content": "posts/my-first-post.html"
   }
   ```

4. **Test it:**
   ```bash
   ./start.sh
   ```

## 🎯 Next Steps

1. **Customize your info** in `index.html`
2. **Set up Nostr NIP-05** in `.well-known/nostr.json`
3. **Create your first post** with `./new-post.sh`
4. **Test dark mode** by changing system preferences
5. **Deploy** to your preferred hosting

## 💡 Tips

- Test both light and dark modes before deploying
- Use the `new-post.sh` script for consistency
- Keep post excerpts short (1-2 sentences)
- Match category names exactly between posts and categories
- Validate JSON files before committing

## 🐛 Known Issues

None at this time! If you find any bugs, feel free to fix them or document them here.

---

Enjoy your new features! 🎉
