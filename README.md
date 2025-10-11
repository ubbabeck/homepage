# Developer Homepage

A simple, modern developer blog with white cyberpunk aesthetics. Built with pure HTML, vanilla JavaScript, and CSS.

## Features

- **Pure HTML/CSS/JS** - No frameworks, easy to edit and customize
- **Dark Mode Support** - Automatically adapts to system preferences
- **Green Accent Theme** - Matrix-inspired green accents (#00ff00)
- **Modular Structure** - Well-organized CSS and JavaScript files
- **Category Filtering** - Click categories to filter posts
- **Navigation Bar** - Jump directly to Writings, Categories, or Contact
- **Responsive** - Works on mobile, tablet, and desktop
- **Accessibility** - WCAG 2.1 compliant, no blinking animations
- **Bitcoin/Lightning Focused** - Pre-configured for Bitcoin development content
- **Nostr NIP-05** - Built-in Nostr identity verification support
- **Easy Post Creation** - Command-line script to generate new posts
- **Custom 404 Page** - User-friendly error page

## Structure

```
homepage/
├── css/
│   ├── style.css      # Main styles
│   └── post.css       # Blog post specific styles
├── js/
│   ├── main.js        # Main application logic
│   ├── data-loader.js # Data loading utilities
│   ├── renderer.js    # DOM rendering utilities
│   └── category.js    # Category page logic
├── data/
│   ├── posts.json     # Blog posts data
│   └── categories.json # Categories data
├── posts/
│   └── bitcoin-lightning-network.html # Example blog post
├── index.html         # Homepage
├── category.html      # Category filter page
└── package.json       # NPM configuration
```

## Getting Started

### Option 1: Using pnpm (Recommended)

1. Install dependencies:

```bash
pnpm install
```

2. Start the development server:

```bash
pnpm start
```

The site will open automatically at `http://localhost:3000`

### Option 2: Using npm

1. Install dependencies:

```bash
npm install
```

2. Start the development server:

```bash
npm start
```

### Option 3: Using Python (No installation required)

If you have Python installed, you can use the built-in HTTP server:

```bash
# Python 3
python3 -m http.server 3000

# Python 2
python -m SimpleHTTPServer 3000
```

Then open `http://localhost:3000` in your browser.

### Option 4: Using any other local server

You can use any local development server you prefer:

- `php -S localhost:3000`
- `ruby -run -e httpd . -p 3000`
- VS Code Live Server extension
- Any other HTTP server

**Note:** The site requires a local server to load the JSON data files. Simply opening `index.html` in a browser won't work due to CORS restrictions.

**404 Support:** The `start.sh` script and `server.py` automatically handle 404 redirects to the custom error page during local development.

## Customization

### Updating Personal Information

Edit `index.html` and update:

- Your name in the `<h1>` tag
- Your title/subtitle
- Contact information in the contact section

### Creating New Blog Posts

**Quick Method (Recommended):**

```bash
./new-post.sh "Your Post Title"
```

This command will:

- Create a new HTML file from the template
- Generate a URL-friendly slug
- Show you the next steps

**Manual Method:**

1. Copy the template: `cp posts/bitcoin-lightning-network.html posts/my-new-post.html`
2. Edit the new file and update the content
3. Add metadata to `data/posts.json`:

```json
{
  "id": "my-new-post",
  "title": "My New Post Title",
  "date": "2025-10-11",
  "category": "Bitcoin",
  "excerpt": "A brief description of the post",
  "content": "posts/my-new-post.html"
}
```

📖 **For detailed instructions, see [CREATING_POSTS.md](CREATING_POSTS.md)**

### Setting Up Nostr NIP-05

NIP-05 allows you to verify your Nostr identity with your domain name.

1. **Get your Nostr public key** (in hex format):
   - From your Nostr client, copy your public key
   - If you have npub format, convert it to hex using a tool like https://nostr.band

2. **Edit `.well-known/nostr.json`**:

```json
{
  "names": {
    "your-username": "your-hex-public-key-here"
  },
  "relays": {
    "your-hex-public-key-here": [
      "wss://relay.damus.io",
      "wss://relay.nostr.band",
      "wss://nos.lol"
    ]
  }
}
```

3. **Update your Nostr profile**:
   - Set your NIP-05 identifier to: `your-username@yourdomain.com`
   - Your client will verify it against `https://yourdomain.com/.well-known/nostr.json`

4. **Test your setup**:
   - Visit https://nostr.how/en/guides/verify-nip-05
   - Enter your NIP-05 identifier

**Example:**

If your domain is `rubenbeck.com` and username is `ruben`, your NIP-05 would be: `ruben@rubenbeck.com`

### Adding Categories

Edit `data/categories.json`:

```json
{
  "id": "unique-id",
  "name": "Category Name",
  "slug": "category-slug"
}
```

### Customizing Styles

- **Main colors**: Edit CSS variables in `css/style.css` under `:root`
- **Typography**: Change the `font-family` in `css/style.css`
- **Layout**: Adjust container widths, padding, and spacing in respective CSS files
- **Cyberpunk effects**: Modify animations and effects in `css/style.css`

## Design Philosophy

### Modern Developer Aesthetic

**Light Mode (Default):**

- Clean white background with black text
- Green accent color (#00ff00) for Matrix/terminal feel
- High contrast for readability

**Dark Mode (Automatic):**

- Dark background (#0a0a0a) with light text
- Bright green borders and accents
- Adapts automatically to system preferences

**Shared Design Elements:**

- Monospace font (Courier New) for that terminal/code feel
- Smooth hover transitions (no blinking)
- Matrix-style code blocks with green text
- Clean geometric borders
- Accessible, WCAG 2.1 compliant

### Best Practices

- **Separation of Concerns**: HTML for structure, CSS for styling, JS for behavior
- **ES6 Modules**: JavaScript uses modern module syntax
- **Semantic HTML**: Proper use of `<article>`, `<section>`, `<header>`, etc.
- **Accessibility**: Proper heading hierarchy and semantic markup
- **Performance**: Minimal dependencies, vanilla JavaScript
- **Security**: XSS prevention in rendering functions

## Scripts

- `pnpm start` or `pnpm dev` - Start development server
- Just open `index.html` in a browser for static viewing (data loading requires a server)

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- ES6 module support required
- CSS Grid and Flexbox support required

## License

MIT

## Customization Tips

### Changing Colors

Edit these CSS variables in `css/style.css`:

**Light Mode:**

```css
:root {
  --bg-primary: #ffffff; /* Main background */
  --bg-secondary: #fafafa; /* Card backgrounds */
  --text-primary: #0a0a0a; /* Main text color */
  --accent-primary: #00ff00; /* Green accent */
  --accent-secondary: #00cc00; /* Darker green */
}
```

**Dark Mode:**

```css
@media (prefers-color-scheme: dark) {
  :root {
    --bg-primary: #0a0a0a; /* Dark background */
    --text-primary: #e0e0e0; /* Light text */
    --border-primary: #00ff00; /* Green borders */
  }
}
```

### Dark Mode Support

The site automatically switches between light and dark mode based on system preferences. To test:

- **macOS**: System Preferences → General → Appearance
- **Windows**: Settings → Personalization → Colors
- **Linux**: Depends on desktop environment
- **Browser DevTools**: Some browsers allow forcing color scheme

### Adding More Pages

1. Copy the structure from `posts/bitcoin-lightning-network.html`
2. Update the content
3. Add entry to `data/posts.json`
4. Categories will automatically link to it

## Troubleshooting

**Posts not loading?**

- Make sure you're running the dev server (`pnpm start`)
- Check browser console for errors
- Verify `data/posts.json` is valid JSON

**Categories not working?**

- Ensure category names in posts match category names exactly
- Category filtering is case-insensitive

**Styles not applying?**

- Clear browser cache
- Check that CSS files are in the `css/` folder
- Verify paths in HTML `<link>` tags

**404 page not showing?**

- Check that `404.html` exists in the root directory
- For Apache: `.htaccess` should be present
- For other servers: See [SERVER_CONFIG.md](SERVER_CONFIG.md)
- Test with a non-existent URL: `http://localhost:3000/test-404`

## Server Configuration

The site includes automatic 404 redirect configuration:

- **Apache**: `.htaccess` file included (works automatically)
- **Nginx/Other servers**: See [SERVER_CONFIG.md](SERVER_CONFIG.md) for configuration
- **GitHub Pages/Netlify/Vercel**: Automatically detect `404.html`
- **Local Development**: `server.py` handles 404 redirects

📖 **For detailed server setup, see [SERVER_CONFIG.md](SERVER_CONFIG.md)**

## Contributing

Feel free to customize this blog for your own use. It's designed to be simple and hackable!
