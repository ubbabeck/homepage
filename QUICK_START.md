# Quick Start Guide

## Running the Site

### Easiest Method

```bash
./start.sh
```

Then open: `http://localhost:3000`

### Manual Methods

```bash
# If you have pnpm
pnpm install && pnpm start

# If you have npm
npm install && npm start

# If you have Python 3
python3 -m http.server 3000

# If you have PHP
php -S localhost:3000
```

## Quick Edits

### Change Your Name and Info

Edit `index.html`:

- Line 8: Page title
- Line 13: Your name (appears in header)
- Line 14: Your subtitle/title
- Lines 48-51: Your contact links

### Add a New Blog Post

1. **Copy the example post:**

```bash
cp posts/bitcoin-lightning-network.html posts/my-new-post.html
```

2. **Edit your new post** (`posts/my-new-post.html`):
   - Update the title in `<title>` tag
   - Update the `<h1>` heading
   - Update the date and category in post-meta
   - Replace all content in the `post-content` div

3. **Add it to the data file** (`data/posts.json`):

```json
{
  "id": "my-new-post",
  "title": "My New Post Title",
  "date": "2025-10-11",
  "category": "Bitcoin",
  "excerpt": "Short description here",
  "content": "posts/my-new-post.html"
}
```

### Add a New Category

Edit `data/categories.json`:

```json
{
  "id": "my-category",
  "name": "My Category",
  "slug": "my-category"
}
```

### Change Colors

Edit `css/style.css` - look for the `:root` section at the top:

```css
:root {
  --bg-primary: #ffffff; /* Background color */
  --text-primary: #0a0a0a; /* Text color */
  --accent-cyan: #00ffff; /* Cyan accent */
  --accent-magenta: #ff00ff; /* Magenta accent */
  --accent-green: #00ff00; /* Green (for code) */
}
```

### Turn Off Cyberpunk Effects

To make it more minimal, edit `css/style.css` and comment out or delete:

1. **Grid background** - Remove or comment the `.cyber-grid` section
2. **Glitch effect** - Remove `.glitch::before`, `.glitch::after`, and `@keyframes glitch-*`
3. **Scan animation** - Remove `header::after` and `@keyframes scan`
4. **Pulse effects** - Remove `@keyframes pulse-border`

## File Structure Overview

```
homepage/
├── index.html              ← Homepage (edit your name/info here)
├── category.html           ← Category filter page (no editing needed)
├── posts/                  ← Your blog posts go here
│   └── *.html             ← Each post is an HTML file
├── data/                   ← Data files (edit these to add posts/categories)
│   ├── posts.json         ← List of all posts
│   └── categories.json    ← List of all categories
├── css/                    ← Styles
│   ├── style.css          ← Main styles (colors, layout)
│   └── post.css           ← Blog post styles
├── js/                     ← JavaScript (usually no editing needed)
│   ├── main.js            ← Loads homepage
│   ├── category.js        ← Handles category filtering
│   ├── data-loader.js     ← Loads JSON data
│   └── renderer.js        ← Renders HTML
└── README.md              ← Full documentation
```

## Common Tasks

### Make Text Bigger

Edit `css/style.css` and change the `font-size` in the `body` rule (around line 20).

### Change Font

Edit `css/style.css` and change the `font-family` in the `body` rule.
Current: `'Courier New', Courier, monospace`
Try: `'Arial', sans-serif` or `'Georgia', serif`

### Add Social Links

Edit `index.html` in the contact section (around line 48):

```html
<p>
  <strong>LinkedIn:</strong>
  <a href="https://linkedin.com/in/yourprofile">linkedin.com/in/yourprofile</a>
</p>
```

## Deployment

### GitHub Pages

1. Push your code to GitHub
2. Go to Settings → Pages
3. Select branch: `main`
4. Your site will be at: `https://yourusername.github.io/homepage`

### Netlify

1. Drag and drop the `homepage` folder to netlify.com
2. Your site is live!

### Any Static Host

Just upload all files to any web hosting that serves static files.

## Need Help?

- See `README.md` for full documentation
- All HTML files are well-commented
- Each JavaScript file has function documentation
