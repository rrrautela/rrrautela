import React from 'react';

/**
 * Navbar Component
 * Displays the name and social media links.
 */
export function Navbar() {
  // Array of social media links for easier management and reusability
  const socialLinks = [
    {
      name: 'GitHub',
      href: 'https://github.com/rrrautela',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em">
          <path d="M12 0C5.37 0 0 5.37 0 12a12 12 0 0 0 8.21 11.44c.6.11.82-.26.82-.58v-2.24c-3.34.73-4.04-1.42-4.04-1.42-.55-1.39-1.34-1.76-1.34-1.76-1.09-.74.09-.72.09-.72 1.21.08 1.85 1.24 1.85 1.24 1.07 1.83 2.8 1.3 3.49.99.11-.77.42-1.3.76-1.6-2.67-.31-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.13-.3-.53-1.52.12-3.17 0 0 1-.32 3.3 1.23a11.5 11.5 0 0 1 6 0C18.94 5.24 19.94 5.56 19.94 5.56c.66 1.65.25 2.87.12 3.17.77.84 1.23 1.91 1.23 3.22 0 4.61-2.8 5.62-5.48 5.92.43.37.82 1.1.82 2.23v3.29c0 .32.2.69.82.57A12 12 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
        </svg>
      ),
      color: 'hover:text-gray-400', // Default hover color for GitHub if no specific brand color
    },
    {
      name: 'LeetCode',
      href: 'https://leetcode.com/rrrautela',
      icon: (
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/1/19/LeetCode_logo_black.png"
          alt="LeetCode logo" // Added alt text for image
          className="w-6 h-6 p-0 mt-0 opacity-80 hover:opacity-100 grayscale hover:grayscale-0 transition duration-300"
        />
      ),
      color: '', // No specific hover color from the original, relies on grayscale effect
    },
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/in/harshit-singh-rautela-b31b98242/',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em">
          <path d="M19 0h-14C2.24 0 0 2.24 0 5v14c0 2.76 2.24 5 5 5h14c2.76 
                  0 5-2.24 5-5V5c0-2.76-2.24-5-5-5zm-11 19H5V8h3v11zm-1.5-12.3c-.97 
                  0-1.75-.79-1.75-1.76s.78-1.76 1.75-1.76S8.75 4.97 8.75 
                  5.94s-.78 1.76-1.75 1.76zM19 19h-3v-5.6c0-3.37-4-3.12-4 0V19h-3V8h3v1.76c1.4-2.58 
                  7-2.78 7 2.48V19z" />
        </svg>
      ),
      color: 'hover:text-[#0077B5]', // LinkedIn brand color
    },
    {
      name: 'Twitter',
      href: 'https://twitter.com/kadanealgo',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em">
          <path d="M23.95 4.57a10 10 0 0 1-2.83.78 
                  4.93 4.93 0 0 0 2.17-2.71 
                  9.84 9.84 0 0 1-3.1 1.18 
                  4.92 4.92 0 0 0-8.38 4.48 
                  13.94 13.94 0 0 1-10.11-5.13 
                  4.92 4.92 0 0 0 1.52 6.57 
                  4.9 4.9 0 0 1-2.23-.62v.06 
                  a4.92 4.92 0 0 0 3.95 4.83 
                  4.9 4.9 0 0 1-2.22.08 
                  4.93 4.93 0 0 0 4.6 3.42 
                  9.87 9.87 0 0 1-6.1 2.1 
                  c-.4 0-.79-.02-1.17-.07 
                  a13.95 13.95 0 0 0 7.56 2.21 
                  c9.05 0 14-7.5 14-14 
                  0-.21 0-.42-.02-.63 
                  A10.03 10.03 0 0 0 24 4.59z" />
        </svg>
      ),
      color: 'hover:text-[#1DA1F2]', // Twitter brand color
    },
  ];

  return (
    <nav
      className="flex flex-col sm:flex-row sm:justify-between items-center px-6 sm:px-12 py-4
                 bg-white/10 backdrop-blur-md shadow-md sticky top-0 z-50
                 border-b border-gray-300 rounded-b-2xl transition duration-300"
      style={{ fontFamily: "'Montserrat', sans-serif" }}
      aria-label="Main Navigation" // Added for accessibility
    >
      {/* Name/Logo */}
      <div className="mb-4 sm:mb-0 text-2xl font-bold text-white tracking-wider">
        Harshit Singh Rautela
      </div>

      {/* Social Media Links */}
      <div className="flex gap-6 text-xl text-white">
        {socialLinks.map((social) => (
          <a
            key={social.name} // Unique key for each social link
            href={social.href}
            target="_blank"
            rel="noopener noreferrer" // Security best practice
            className={`${social.color} transition hover:scale-105 duration-200`}
            aria-label={social.name} // Accessibility label for screen readers
          >
            {social.icon} {/* Render the SVG or img icon */}
          </a>
        ))}
      </div>
    </nav>
  );
}