// Navbar component (now defined directly in this file)
// Optional icons (if you use react-icons instead of inline SVGs)

export function Navbar() {
  return (
    <nav
      className="flex flex-col sm:flex-row sm:justify-between items-center px-6 sm:px-12 py-4
                 bg-white/15 backdrop-blur-md shadow-xl sticky top-0 z-50
                 border-b border-rose-500 rounded-b-3xl transition-all duration-500
                 hover:bg-white/20 font-semibold tracking-wide"
      style={{ fontFamily: "'Montserrat', sans-serif" }}
    >

      {/* my Name */}
      <div className="mb-4 sm:mb-0 text-3xl font-extrabold text-white">
        <span className="text-amber-100">Harshit</span>{' '}
        <span className="text-amber-200">Singh</span>{' '}
        <span className="text-amber-300">Rautela</span>
      </div>



      {/* Social Icons */}
      <div className="flex gap-6 text-2xl">

        {/* 1.github */}
        <a
          href="https://github.com/rrrautela"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-rose-300 transition-colors duration-300 transform hover:scale-110"
          aria-label="GitHub"
        >
          {/* GitHub Icon - inline SVG */}
          <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.085-.744.089-.729.089-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.399.001 0 .001 0 .002 0 1.02.001 2.046.133 3.004.4c2.292-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.196-6.091 8.196-11.385 0-6.627-5.373-12-12-12z"/>
          </svg>
        </a>
        
        {/* 2.leetcode */}
        <a
          href="https://leetcode.com/rrrautela"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-lime-300 transition-colors duration-300 transform hover:scale-110"
          aria-label="LeetCode"
        >
          {/* Code Icon - inline SVG */}
          <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="currentColor">
            <path d="M14.6 16.6l4.6-4.6-4.6-4.6L16 4l6 6 2 2-8 8-1.4-1.4zm-4.6 0L5.4 12l4.6-4.6L8 4l-6 6-2 2 8 8 1.4-1.4z"/>
          </svg>
        </a>

        {/* 3.linkedin */}
        <a
          href="https://www.linkedin.com/in/harshit-singh-rautela-b31b98242/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-cyan-300 transition-colors duration-300 transform hover:scale-110"
          aria-label="LinkedIn"
        >
          {/* LinkedIn Icon - inline SVG */}
          <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="currentColor">
            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
          </svg>
        </a>

        {/* 4.twitter */}
        <a
          href="https://twitter.com/kadanealgo"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-sky-300 transition-colors duration-300 transform hover:scale-110"
          aria-label="Twitter"
        >
          {/* Twitter Icon - inline SVG */}
          <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="currentColor">
            <path d="M24 4.557a9.828 9.828 0 0 1-2.828.775 4.932 4.932 0 0 0 2.165-2.724 9.864 9.864 0 0 1-3.127 1.195 4.924 4.924 0 0 0-8.384 4.482A13.978 13.978 0 0 1 1.671 3.149a4.922 4.922 0 0 0 1.523 6.574 4.903 4.903 0 0 1-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.935 4.935 0 0 1-2.224.084 4.928 4.928 0 0 0 4.6 3.417A9.868 9.868 0 0 1 0 19.54 13.94 13.94 0 0 0 7.548 22c9.142 0 14.307-7.721 13.995-14.646A10.012 10.012 0 0 0 24 4.557z"/>
          </svg>
        </a>


      </div>
    </nav>
  );
}
