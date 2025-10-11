# Creating New Blog Posts

This guide explains how to create new blog posts for your site.

## Quick Method (Using Script)

The easiest way to create a new post is using the `new-post.sh` script:

```bash
./new-post.sh "Your Post Title"
```

This will:

1. Create a new HTML file in the `posts/` directory
2. Use your post title and current date
3. Generate a URL-friendly slug
4. Provide instructions for the next steps

### Example

```bash
./new-post.sh "Understanding Bitcoin Taproot"
```

This creates: `posts/understanding-bitcoin-taproot.html`

## Step-by-Step Process

### Step 1: Create the HTML File

Run the script:

```bash
./new-post.sh "Your Amazing Post Title"
```

Or manually copy the template:

```bash
cp posts/bitcoin-lightning-network.html posts/your-post-slug.html
```

### Step 2: Edit the HTML File

Open `posts/your-post-slug.html` and update:

1. **Title tag** (line 6):

```html
<title>Your Post Title - Ruben Beck</title>
```

2. **Post heading** (around line 31):

```html
<h1>Your Post Title</h1>
```

3. **Date and category** (around line 33-35):

```html
<span class="date">October 11, 2025</span>
<span class="category"><a href="../category.html?cat=bitcoin">Bitcoin</a></span>
```

4. **Content** (inside `<div class="post-content">`):
   - Replace all the content between `<div class="post-content">` and `</div>`
   - Keep the same HTML structure (h2, h3, p, ul, pre, code, etc.)

### Step 3: Add Post Metadata

Edit `data/posts.json` and add your post to the array:

```json
{
  "id": "your-post-slug",
  "title": "Your Post Title",
  "date": "2025-10-11",
  "category": "Bitcoin",
  "excerpt": "A brief description of your post (1-2 sentences)",
  "content": "posts/your-post-slug.html"
}
```

**Important**:

- Add a comma after the previous post entry
- Match the category name exactly with one in `data/categories.json`
- Use the same slug in the filename and `id` field

### Step 4: Test Your Post

1. Start the server:

```bash
./start.sh
```

2. Navigate to `http://localhost:3000`

3. Your post should appear in the "Writings" section

4. Click on it to view the full post

## Post Structure Reference

### Basic HTML Structure

```html
<div class="post-content">
  <h2>Main Section Heading</h2>
  <p>Your paragraph text here.</p>

  <h3>Subsection Heading</h3>
  <p>More text.</p>

  <ul>
    <li>List item 1</li>
    <li>List item 2</li>
  </ul>

  <h2>Code Examples</h2>
  <p>Here's some code:</p>

  <pre><code>function example() {
  console.log('Hello, World!');
  return true;
}</code></pre>

  <h2>Links</h2>
  <p>Check out <a href="https://example.com">this link</a>.</p>
</div>
```

### Styling Elements

The following HTML elements are pre-styled:

- `<h2>` - Major section headings with `##` prefix
- `<h3>` - Subsection headings with `▸` prefix
- `<p>` - Regular paragraphs
- `<ul>` / `<ol>` - Unordered and ordered lists
- `<li>` - List items
- `<pre><code>` - Code blocks (green text on black background)
- `<code>` - Inline code snippets
- `<strong>` - Bold text
- `<a>` - Links (underlined on hover)

### Code Blocks

For code examples, use the `<pre>` tag with a language class for automatic language display:

```html
<!-- JavaScript example -->
<pre class="language-javascript"><code>const bitcoin = true;
console.log('Hello, Bitcoin!');</code></pre>

<!-- Python example -->
<pre class="language-python"><code>def hello():
    print("Hello, Bitcoin!")
    return True</code></pre>
```

**Supported Languages:**
The language name will be automatically displayed in the code block header!

- `language-javascript` or `language-js` → "> JAVASCRIPT"
- `language-python` or `language-py` → "> PYTHON"
- `language-rust` or `language-rs` → "> RUST"
- `language-bash` or `language-sh` → "> BASH"
- `language-html` → "> HTML"
- `language-css` → "> CSS"
- `language-json` → "> JSON"
- `language-typescript` or `language-ts` → "> TYPESCRIPT"
- `language-go` → "> GO"
- `language-c` → "> C"
- `language-cpp` → "> C++"
- `language-java` → "> JAVA"

**If no language class is provided:**

```html
<pre><code>// Generic code block
// Will show "> CODE"</code></pre>
```

**Tips for code blocks**:

- Always add a language class when possible (e.g., `class="language-python"`)
- Escape HTML characters: `<` becomes `&lt;`, `>` becomes `&gt;`
- Code blocks have good spacing (line-height: 2.0)
- Always styled with green text on black background for maximum contrast
- Black background works in both light and dark modes

## Categories

Available categories (from `data/categories.json`):

- Bitcoin
- Lightning Network
- Cryptography
- Blockchain
- Performance
- Software Engineering
- Security
- Protocols

To add a new category, edit `data/categories.json`:

```json
{
  "id": "new-category",
  "name": "New Category",
  "slug": "new-category"
}
```

## Post Metadata Fields

| Field      | Description                                | Example                           |
| ---------- | ------------------------------------------ | --------------------------------- |
| `id`       | Unique identifier (same as filename slug)  | `"bitcoin-taproot"`               |
| `title`    | Post title (shown in list and header)      | `"Understanding Bitcoin Taproot"` |
| `date`     | Publication date (YYYY-MM-DD)              | `"2025-10-11"`                    |
| `category` | Category name (must match categories.json) | `"Bitcoin"`                       |
| `excerpt`  | Short description (shown on homepage)      | `"A deep dive into..."`           |
| `content`  | Path to HTML file                          | `"posts/bitcoin-taproot.html"`    |

## Tips for Writing Posts

### 1. Use Clear Headings

Structure your content with `<h2>` for main sections and `<h3>` for subsections.

### 2. Break Up Text

Use short paragraphs (2-4 sentences) for better readability.

### 3. Add Code Examples

Use `<pre><code>` blocks for code. They're well-spaced and easy to read.

### 4. Include Lists

Use `<ul>` or `<ol>` to organize information:

```html
<ul>
  <li><strong>Point 1:</strong> Description</li>
  <li><strong>Point 2:</strong> Description</li>
</ul>
```

### 5. Link to Resources

Add relevant links:

```html
<p>For more information, see <a href="https://bitcoin.org">Bitcoin.org</a>.</p>
```

## Common Issues

### Post doesn't appear on homepage

- Check that you added it to `data/posts.json`
- Ensure JSON is valid (no missing commas, brackets)
- Make sure the `content` path is correct

### Category filter not working

- Category name in `posts.json` must exactly match one in `categories.json`
- Category names are case-sensitive

### Broken styling

- Make sure you included the CSS links in the `<head>`:
  ```html
  <link rel="stylesheet" href="../css/style.css" />
  <link rel="stylesheet" href="../css/post.css" />
  ```

### Code not displaying correctly

- Escape HTML characters: `<` → `&lt;`, `>` → `&gt;`
- Use `<pre><code>` wrapper for code blocks

## Manual Post Creation (Without Script)

If you prefer to create posts manually:

1. **Copy the template:**

   ```bash
   cp posts/bitcoin-lightning-network.html posts/my-new-post.html
   ```

2. **Edit the file:**
   - Update `<title>`
   - Update post `<h1>`
   - Update date and category
   - Replace all content

3. **Add to data/posts.json:**

   ```json
   {
     "id": "my-new-post",
     "title": "My New Post",
     "date": "2025-10-11",
     "category": "Bitcoin",
     "excerpt": "Post description",
     "content": "posts/my-new-post.html"
   }
   ```

4. **Test:**
   ```bash
   ./start.sh
   ```

## Example: Complete New Post

Here's a complete example of creating a post about Bitcoin mining:

```bash
# 1. Create the post
./new-post.sh "Bitcoin Mining Explained"

# 2. Edit posts/bitcoin-mining-explained.html
# (Update content as needed)

# 3. Add to data/posts.json:
{
  "id": "bitcoin-mining-explained",
  "title": "Bitcoin Mining Explained",
  "date": "2025-10-11",
  "category": "Bitcoin",
  "excerpt": "A comprehensive guide to understanding how Bitcoin mining works.",
  "content": "posts/bitcoin-mining-explained.html"
}

# 4. Start server and test
./start.sh
```

## Need Help?

- See the template: `posts/bitcoin-lightning-network.html`
- Check existing posts for examples
- Validate JSON: https://jsonlint.com/
- Test locally before deploying

Happy blogging! 📝
