// Footer.jsx
import React from "react";

export default function Footer() {
  return (
    <footer className="mt-16 bg-blue-700 text-white py-8">
      <div className="max-w-6xl mx-auto text-center">
        <h3 className="text-xl font-semibold mb-3">Connect with Us</h3>
        <div className="flex justify-center gap-6 mb-4">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-300"
          >
            Facebook
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-300"
          >
            Twitter
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-300"
          >
            Instagram
          </a>
        </div>
        <p>Email: travelplanner@example.com | Phone: +91 98765 43210</p>
        <p className="mt-3 text-sm">
          &copy; 2025 Travel Planner App. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
