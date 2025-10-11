# Server Configuration for 404 Redirects

This guide shows how to configure different web servers to redirect to the custom 404 page.

## Apache (.htaccess)

The `.htaccess` file is already included in the project root. It will work automatically on Apache servers.

```apache
ErrorDocument 404 /404.html
```

**No additional configuration needed for Apache!**

---

## Nginx

Add this to your Nginx server block configuration:

```nginx
server {
    listen 80;
    server_name yourdomain.com;
    root /path/to/homepage;
    index index.html;

    # Custom 404 page
    error_page 404 /404.html;
    location = /404.html {
        internal;
    }

    # Nostr NIP-05 support
    location /.well-known/ {
        try_files $uri $uri/ =404;
    }

    # Main location block
    location / {
        try_files $uri $uri/ =404;
    }
}
```

**Reload Nginx:**

```bash
sudo nginx -t
sudo systemctl reload nginx
```

---

## GitHub Pages

GitHub Pages automatically handles 404 pages!

**Setup:**

1. Push your code to GitHub
2. Go to Settings → Pages
3. Enable GitHub Pages
4. GitHub will automatically use `404.html` for missing pages

**No configuration needed!**

---

## Netlify

Netlify automatically detects and uses `404.html`.

**Optional: Create `netlify.toml` for more control:**

```toml
[[redirects]]
  from = "/*"
  to = "/404.html"
  status = 404
```

**No configuration needed for basic setup!**

---

## Vercel

Vercel automatically uses `404.html`.

**Optional: Create `vercel.json` for more control:**

```json
{
  "routes": [
    {
      "handle": "filesystem"
    },
    {
      "src": "/(.*)",
      "status": 404,
      "dest": "/404.html"
    }
  ]
}
```

**No configuration needed for basic setup!**

---

## Local Development

### Python HTTP Server

Python's built-in server doesn't support custom 404 pages by default, but you can create a simple wrapper:

**Create `server.py`:**

```python
#!/usr/bin/env python3
import http.server
import socketserver
import os

PORT = 3000

class CustomHTTPRequestHandler(http.server.SimpleHTTPRequestHandler):
    def do_GET(self):
        # Try to serve the file
        if os.path.exists(self.translate_path(self.path).rstrip('/')):
            super().do_GET()
        else:
            # Serve 404.html for missing files
            self.path = '/404.html'
            super().do_GET()

with socketserver.TCPServer(("", PORT), CustomHTTPRequestHandler) as httpd:
    print(f"Server running at http://localhost:{PORT}")
    httpd.serve_forever()
```

**Run it:**

```bash
chmod +x server.py
./server.py
```

### Node.js (http-server)

Install and use `http-server` with custom 404:

```bash
npm install -g http-server
http-server -p 3000 -P http://localhost:3000/404.html
```

### Live Server (npm/pnpm)

The `live-server` package in `package.json` doesn't natively support custom 404, but most hosting platforms will handle it automatically.

For local testing with proper 404 support, use the Python server above or the Node.js option.

---

## Testing 404 Page

After configuring your server, test the 404 page:

1. Start your server
2. Navigate to a non-existent page: `http://localhost:3000/this-does-not-exist`
3. You should see the custom 404 page with "Are you lost?" message

**Test URLs:**

- `http://localhost:3000/random-page`
- `http://localhost:3000/posts/nonexistent.html`
- `http://localhost:3000/category.html?cat=invalid`

---

## Cloudflare Pages

Cloudflare Pages automatically uses `404.html`.

**No configuration needed!**

---

## Firebase Hosting

**Create or update `firebase.json`:**

```json
{
  "hosting": {
    "public": ".",
    "ignore": ["firebase.json", "**/.*", "**/node_modules/**"],
    "rewrites": [
      {
        "source": "**",
        "destination": "/404.html"
      }
    ]
  }
}
```

**Deploy:**

```bash
firebase deploy
```

---

## Summary

| Hosting Platform        | Configuration Required            |
| ----------------------- | --------------------------------- |
| **Apache**              | ✅ Already configured (.htaccess) |
| **Nginx**               | 📝 Add to server config           |
| **GitHub Pages**        | ✅ Automatic                      |
| **Netlify**             | ✅ Automatic                      |
| **Vercel**              | ✅ Automatic                      |
| **Cloudflare Pages**    | ✅ Automatic                      |
| **Firebase**            | 📝 Create firebase.json           |
| **Local (Python)**      | 📝 Use custom server script       |
| **Local (http-server)** | 📝 Use -P flag                    |

---

## Troubleshooting

### 404 Page Not Showing

1. **Check file location**: Ensure `404.html` is in the root directory
2. **Check server config**: Verify your server is configured correctly
3. **Clear cache**: Clear browser cache and hard reload (Ctrl+Shift+R)
4. **Check paths**: Ensure CSS/JS paths in 404.html are correct
5. **Test locally**: Try different URLs to trigger 404

### Styles Not Loading on 404

If the 404 page appears but without styles:

1. Check that `css/style.css` path is correct in `404.html`
2. Ensure paths are relative from root: `href="css/style.css"` not `href="../css/style.css"`
3. Verify CSS files are being served correctly

### Infinite Redirect Loop

If you experience redirect loops:

1. Make sure 404.html exists and is accessible
2. Check that your server config doesn't have conflicting redirects
3. Ensure the ErrorDocument path starts with `/` (absolute path)

---

## Production Deployment

When deploying to production:

1. ✅ Ensure `.htaccess` is included (for Apache)
2. ✅ Test 404 page before going live
3. ✅ Verify all assets load correctly on 404 page
4. ✅ Check mobile responsiveness of 404 page
5. ✅ Test with various invalid URLs

---

Need help with a specific hosting platform? Check their documentation or add your configuration here!
