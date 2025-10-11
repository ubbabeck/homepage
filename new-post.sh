#!/bin/bash

# Script to create a new blog post
# Usage: ./new-post.sh "My Post Title"

if [ -z "$1" ]; then
    echo "Error: Please provide a post title"
    echo "Usage: ./new-post.sh \"My Post Title\""
    exit 1
fi

# Get the post title from argument
POST_TITLE="$1"

# Convert title to slug (lowercase, replace spaces with hyphens)
POST_SLUG=$(echo "$POST_TITLE" | tr '[:upper:]' '[:lower:]' | sed 's/ /-/g' | sed 's/[^a-z0-9-]//g')

# Get current date
CURRENT_DATE=$(date +%Y-%m-%d)

# Define file paths
POST_FILE="posts/${POST_SLUG}.html"
TEMPLATE_FILE="posts/bitcoin-lightning-network.html"

# Check if post already exists
if [ -f "$POST_FILE" ]; then
    echo "Error: Post already exists at $POST_FILE"
    exit 1
fi

# Copy template
cp "$TEMPLATE_FILE" "$POST_FILE"

# Replace title in the new post
sed -i "s/Scaling Bitcoin: The Lightning Network Revolution/$POST_TITLE/g" "$POST_FILE"
sed -i "s/October 5, 2025/$CURRENT_DATE/g" "$POST_FILE"

echo ""
echo "✅ New post created!"
echo ""
echo "📝 File: $POST_FILE"
echo "📅 Date: $CURRENT_DATE"
echo ""
echo "Next steps:"
echo "1. Edit $POST_FILE and update the content"
echo "2. Add post metadata to data/posts.json:"
echo ""
echo "  {"
echo "    \"id\": \"$POST_SLUG\","
echo "    \"title\": \"$POST_TITLE\","
echo "    \"date\": \"$CURRENT_DATE\","
echo "    \"category\": \"Bitcoin\","
echo "    \"excerpt\": \"Your post excerpt here\","
echo "    \"content\": \"posts/${POST_SLUG}.html\""
echo "  }"
echo ""
