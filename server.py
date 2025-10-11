#!/usr/bin/env python3
"""
Simple HTTP server with custom 404 page support
Usage: python3 server.py [port]
Default port: 3000
"""

import http.server
import socketserver
import os
import sys
from pathlib import Path

# Get port from command line or use default
PORT = int(sys.argv[1]) if len(sys.argv) > 1 else 3000

class CustomHTTPRequestHandler(http.server.SimpleHTTPRequestHandler):
    """Custom handler that serves 404.html for missing files"""
    
    def end_headers(self):
        # Add CORS headers for local development
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
        self.send_header('Access-Control-Allow-Headers', 'Content-Type')
        super().end_headers()
    
    def do_GET(self):
        # Translate the path
        path = self.translate_path(self.path)
        
        # Check if path exists
        if os.path.exists(path):
            # If it's a directory, try index.html
            if os.path.isdir(path):
                index_path = os.path.join(path, 'index.html')
                if os.path.exists(index_path):
                    super().do_GET()
                else:
                    self.serve_404()
            else:
                # File exists, serve it normally
                super().do_GET()
        else:
            # File doesn't exist, serve 404 page
            self.serve_404()
    
    def serve_404(self):
        """Serve the custom 404.html page"""
        try:
            # Try to read and serve 404.html
            with open('404.html', 'rb') as f:
                content = f.read()
                self.send_response(404)
                self.send_header('Content-type', 'text/html')
                self.send_header('Content-Length', str(len(content)))
                self.end_headers()
                self.wfile.write(content)
        except FileNotFoundError:
            # Fallback if 404.html doesn't exist
            self.send_response(404)
            self.send_header('Content-type', 'text/html')
            self.end_headers()
            self.wfile.write(b'<h1>404 - Page Not Found</h1>')
    
    def log_message(self, format, *args):
        """Custom log format"""
        # Add colors for different status codes
        status = args[1] if len(args) > 1 else '000'
        if status.startswith('2'):
            color = '\033[92m'  # Green
        elif status.startswith('3'):
            color = '\033[94m'  # Blue
        elif status.startswith('4'):
            color = '\033[93m'  # Yellow
        else:
            color = '\033[91m'  # Red
        
        reset = '\033[0m'
        print(f"{color}[{self.log_date_time_string()}] {format % args}{reset}")

def main():
    """Start the server"""
    try:
        with socketserver.TCPServer(("", PORT), CustomHTTPRequestHandler) as httpd:
            print("\n" + "="*60)
            print(f"  🚀 Server running at http://localhost:{PORT}")
            print(f"  📁 Serving files from: {os.getcwd()}")
            print(f"  🔧 Custom 404 page enabled")
            print("="*60)
            print("\n  Press Ctrl+C to stop the server\n")
            httpd.serve_forever()
    except KeyboardInterrupt:
        print("\n\n  Server stopped by user")
        sys.exit(0)
    except OSError as e:
        if e.errno == 48 or e.errno == 98:  # Address already in use
            print(f"\n  ❌ Error: Port {PORT} is already in use")
            print(f"  Try a different port: python3 server.py 3001\n")
            sys.exit(1)
        else:
            raise

if __name__ == '__main__':
    main()
