#!/usr/bin/env python3
"""
TaskFlow — Academic Backend Portfolio Server
Course Assignment: Web Programming for Data Science

This is an OPTIONAL, beginner-friendly Python server designed to demonstrate a baseline
backend setup for local static file serving. In an advanced coursework, this script would
be expanded to act as a microservice API to sync tasks to a relational Database (e.g., SQLite/PostgreSQL).
"""

import os
import sys
import http.server
import socketserver

PORT = 3000
DIRECTORY = os.path.abspath(os.path.join(os.path.dirname(__file__), '..'))

class TaskHeaderStaticServer(http.server.SimpleHTTPRequestHandler):
    """
    Subclasses SimpleHTTPRequestHandler to customize cache control headers 
    and output client request tracking in an educational sandbox format.
    """
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=DIRECTORY, **kwargs)

    def end_headers(self):
        # Configure local development environment headers to disable aggressive caching
        self.send_header('Cache-Control', 'no-store, no-cache, must-revalidate, max-age=0')
        self.send_header('Pragma', 'no-cache')
        self.send_header('Expires', '0')
        super().end_headers()

    def log_message(self, format, *args):
        # Professional terminal tracker logs
        sys.stderr.write("[TaskFlow Info] - CLIENT REQUEST: %s - %s\n" %
                         (self.address_string(), format % args))

def start_server():
    """
    Spins up the TCP custom handler on Port 3000.
    """
    # Force single-threaded bindings to prevent port collisions on close
    socketserver.TCPServer.allow_reuse_address = True
    
    try:
        with socketserver.TCPServer(("0.0.0.0", PORT), TaskHeaderStaticServer) as httpd:
            print("=" * 70)
            print("🎓 TaskFlow Academic Python Backend Server Initiated.")
            print(f"👉 Root Workspace Directory Served: {DIRECTORY}")
            print(f"🔗 Local Web Server Access URL: http://0.0.0.0:{PORT}")
            print("=" * 70)
            print("Press Ctrl+C to terminate server execution safely.")
            
            httpd.serve_forever()
            
    except KeyboardInterrupt:
        print("\n[SIGINT] Terminating TaskFlow Python server execution gracefully. Goodbye!")
        sys.exit(0)
    except Exception as e:
        print(f"\n[Error] Failed to bind server on Port {PORT}: {e}", file=sys.stderr)
        sys.exit(1)

if __name__ == "__main__":
    start_server()
