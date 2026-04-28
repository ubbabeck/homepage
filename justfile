# Build the website to build/ directory
build:
    @echo "Building website..."
    mkdir -p build
    @echo "Compiling Tailwind CSS..."
    tailwindcss -i ./input.css -o ./build/output.css --minify
    @echo "Copying files to build directory..."
    cp -r index.html category.html posts js data images build/
    @echo "Build complete!"
    @echo "Build directory contents:"
    ls -la build/

# Clean build directory
clean:
    @echo "Cleaning build directory..."
    rm -rf build

# Rebuild (clean + build)
rebuild: clean build

# Watch for changes and rebuild CSS in build/
watch:
    @echo "Watching for changes..."
    tailwindcss -i ./input.css -o ./build/output.css --watch

# Serve the website on http://localhost:8000
serve:
    @echo "Serving website on http://localhost:8000"
    cd build && python3 -m http.server 8000

# Build and serve (dev workflow)
dev: build serve
