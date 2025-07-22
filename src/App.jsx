// App.jsx - All components and data consolidated into a single file for streamlined delivery.

import { motion, AnimatePresence } from "framer-motion"; // Importing AnimatePresence for slideshow transitions
import { useState, memo } from 'react'; // Importing memo for performance optimization

import { projects } from './data/projects';


const skills = [
  { name: "React", iconPath: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm3.33 14.07L12 10.33l-3.33 5.74H5.67L12 4.93l6.33 11.14h-2.99z", category: "Frontend" },
  { name: "JavaScript", iconPath: "M0 0h24v24H0z", category: "Frontend" },
  { name: "Tailwind CSS", iconPath: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15h-2.5c-.28 0-.5-.22-.5-.5s.22-.5.5-.5H9v-2H7.5c-.28 0-.5-.22-.5-.5s.22-.5.5-.5H9v-2H7.5c-.28 0-.5-.22-.5-.5s.22-.5.5-.5H9V6h2v11z", category: "Frontend" },
  { name: "Node.js", iconPath: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15h-2.5c-.28 0-.5-.22-.5-.5s.22-.5.5-.5H9v-2H7.5c-.28 0-.5-.22-.5-.5s.22-.5.5-.5H9v-2H7.5c-.28 0-.5-.22-.5-.5s.22-.5.5-.5H9V6h2v11z", category: "Backend" },
  { name: "Python", iconPath: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15h-2.5c-.28 0-.5-.22-.5-.5s.22-.5.5-.5H9v-2H7.5c-.28 0-.5-.22-.5-.5s.22-.5.5-.5H9v-2H7.5c-.28 0-.5-.22-.5-.5s.22-.5.5-.5H9V6h2v11z", category: "Backend" },
  { name: "Git", iconPath: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15h-2.5c-.28 0-.5-.22-.5-.5s.22-.5.5-.5H9v-2H7.5c-.28 0-.5-.22-.5-.5s.22-.5.5-.5H9v-2H7.5c-.28 0-.5-.22-.5-.5s.22-.5.5-.5H9V6h2v11z", category: "Tools" },
  ];



const ProjectCard = memo(function ProjectCard({ title, desc, image, link, repo, tags = [] }) {
  const [isHovered, setIsHovered] = useState(false);

  // Define animation variants for Framer Motion for a declarative approach.
  const cardVariants = {
    initial: { scale: 1, rotateY: 0, zIndex: 0 },
    hover: { scale: 1.05, rotateY: 5, zIndex: 50 }, // Added subtle Y-axis rotation on hover
  };

  return (
    <motion.div
      variants={cardVariants} // Apply the defined animation variants
      initial="initial" // Set the initial animation state
      animate={isHovered ? "hover" : "initial"} // Control animation based on hover state
      onHoverStart={() => setIsHovered(true)} // Callback for when hover starts
      onHoverEnd={() => setIsHovered(false)}   // Callback for when hover ends
      transition={{ type: 'spring', stiffness: 300, damping: 20 }} // Defines the smooth spring animation
      className="relative group w-full max-w-sm lg:max-w-md overflow-hidden rounded-3xl shadow-lg border border-neutral-700 bg-black
                 transform-gpu hover:shadow-2xl hover:shadow-purple-500/20 transition-shadow duration-300" // Added GPU acceleration and subtle shadow
      style={{
        fontFamily: "'Poppins', sans-serif", // Specific font for design consistency
        transformOrigin: 'center', // Ensures the scale and rotation originate from the center
      }}
      role="article" // Semantic role for improved accessibility
      aria-labelledby={`${title.replace(/\s/g, '-')}-title`} // Links to the h3 for screen readers
    >
      {/* Image container with rounded top corners for aesthetic integration */}
      <div className="relative w-full h-64 overflow-hidden rounded-t-3xl">
        <img
          src={image}
          alt={`Thumbnail for ${title} project`} // Descriptive alt text for accessibility and SEO
          className="w-full h-full object-cover transition duration-500 brightness-100 group-hover:brightness-75"
          onError={(e) => {
            // Robust error handling for image loading failures
            e.target.onerror = null; // Prevents infinite loop if fallback also fails
            e.target.src = `https://placehold.co/600x400/0f0f0f/ffffff?text=Image+Not+Found`; // Professional fallback image
          }}
          loading="lazy" // Optimizes performance by deferring image loading until needed
        />
        {/* Gradient overlay for better text contrast on the image */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
      </div>

      {/* Info section, visible only on hover for a clean initial presentation */}
      <div className="absolute inset-x-0 bottom-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-5 pointer-events-none">
        <div className="pointer-events-auto"> {/* Re-enables pointer events for interactive elements within the overlay */}
          <h3 id={`${title.replace(/\s/g, '-')}-title`} className="text-xl font-semibold text-white mb-2 text-center">
            {title}
          </h3>
          <p className="text-sm text-gray-200 text-center mb-3">
            {desc}
          </p>

          {/* Tags section, dynamically rendered for flexibility */}
          <div className="flex flex-wrap gap-2 justify-center mb-4">
            {tags.map((tag) => (
              <span
                key={tag} // Unique key for each tag for React's reconciliation
                className="bg-white/10 text-xs px-3 py-1 rounded-full text-gray-200 border border-gray-600"
                aria-label={`Technology used: ${tag}`} // Accessibility label for tags
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Action buttons for live demo and repository */}
          <div className="flex justify-between gap-3 px-4">
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer" // Essential security for `target="_blank"`
              className="w-full text-center text-white bg-gradient-to-r from-purple-800 to-indigo-700 hover:from-purple-900 hover:to-indigo-800 font-semibold py-2 px-3 rounded-md shadow-lg transition-all duration-300 transform hover:scale-105"
              aria-label={`View live demo of ${title}`} // Specific accessibility label
            >
              🚀 View Live
            </a>
            <a
              href={repo}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full text-center text-white bg-neutral-800 hover:bg-white hover:text-neutral-800 font-semibold py-2 px-3 rounded-md border border-gray-600 transition-colors transform hover:scale-105"
              aria-label={`View GitHub repository for ${title}`} // Specific accessibility label
            >
              💻 View Repo
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
});

/**
 * Navbar Component
 * Displays the name and social media links.
 * Uses memo to prevent unnecessary re-renders as its props are static.
 */
const Navbar = memo(function Navbar() {
  // Array of social media links for easier management and reusability.
  // Each object contains name, href, SVG icon, and hover color.
  const socialLinks = [
    {
      name: 'GitHub',
      href: 'https://github.com/rrrautela',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em">
          <path d="M12 0C5.37 0 0 5.37 0 12a12 12 0 0 0 8.21 11.44c.6.11.82-.26.82-.58v-2.24c-3.34.73-4.04-1.42-4.04-1.42-.55-1.39-1.34-1.76-1.34-1.76-1.09-.74.09-.72.09-.72 1.21.08 1.85 1.24 1.85 1.24 1.07 1.83 2.8 1.3 3.49.99.11-.77.42-1.3.76-1.6-2.67-.31-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.13-.3-.53-1.52.12-3.17 0 0 1-.32 3.3 1.23a11.5 11.5 0 0 1 6 0C18.94 5.24 19.94 5.56 19.94 5.56c.66 1.65.25 2.87.12 3.17.77.84 1.23 1.91 1.23 3.22 0 4.61-2.8 5.62-5.48 5.92.43.37.82 1.1.82 2.23v3.29c0 .32.2.69.82.57A12 12 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
        </svg>
      ),
      color: 'hover:text-gray-400',
    },
    {
      name: 'LeetCode',
      href: 'https://leetcode.com/rrrautela',
      icon: (
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/1/19/LeetCode_logo_black.png"
          alt="LeetCode logo"
          className="w-6 h-6 p-0 mt-0 opacity-80 hover:opacity-100 grayscale hover:grayscale-0 transition duration-300"
        />
      ),
      color: '',
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
      color: 'hover:text-[#0077B5]',
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
      color: 'hover:text-[#1DA1F2]',
    },
  ];

  return (
    <nav
      className="flex flex-col sm:flex-row sm:justify-between items-center px-6 sm:px-12 py-4
                 bg-white/10 backdrop-blur-md shadow-md sticky top-0 z-50
                 border-b border-gray-300 rounded-b-2xl transition duration-300"
      style={{ fontFamily: "'Montserrat', sans-serif" }}
      aria-label="Main Navigation"
    >
      {/* Portfolio Owner's Name/Logo - Prominently displayed */}
      <div className="mb-4 sm:mb-0 text-2xl font-bold text-white tracking-wider">
        Harshit Singh Rautela
      </div>

      {/* Social Media Links Section */}
      <div className="flex gap-6 text-xl text-white">
        {socialLinks.map((social) => (
          <a
            key={social.name}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className={`${social.color} transition hover:scale-105 duration-200 p-2 rounded-full hover:bg-white/10`}
            aria-label={social.name}
          >
            {social.icon}
          </a>
        ))}
      </div>
    </nav>
  );
});


export default function App() {
  const [isTypingComplete, setIsTypingComplete] = useState(false);
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);

  // Function to handle navigation to the next project in the slideshow
  const goToNextProject = () => {
    setCurrentProjectIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  // Function to handle navigation to the previous project in the slideshow
  const goToPreviousProject = () => {
    setCurrentProjectIndex((prevIndex) =>
      (prevIndex - 1 + projects.length) % projects.length
    );
  };

  // Function to handle smooth scrolling to the projects section
  const scrollToProjects = (e) => {
    e.preventDefault(); // Prevent default anchor link behavior
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Animation sequence for the hero text
  const sentence = "Innovating at the Intersection of Code and Creativity.";
  const words = sentence.split(" ");

  // Variants for project card transitions in the slideshow
  const projectVariants = {
    enter: { opacity: 0, x: 50, scale: 0.8 },
    center: { opacity: 1, x: 0, scale: 1 },
    exit: { opacity: 0, x: -50, scale: 0.8 },
  };

  return (
    // Main container div with global styling for background, text, and font.
    <div className="min-h-screen bg-gradient-to-br from-[#0f0f0f] to-[#1a1a1a] text-white font-sans selection:bg-white/10">
      {/* Navbar Component: Provides navigation and social links */}
      <Navbar />

      {/* Hero Section: Dynamic and engaging introduction */}
      <section className="relative flex flex-col items-center justify-center min-h-[calc(100vh-80px)] text-center px-4 py-20 overflow-hidden">
        {/* Subtle background gradient animation */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-indigo-900/20 animate-pulse-slow"></div>
        {/* Decorative particles/dots */}
        <div className="absolute inset-0 z-0">
          <div className="grid-background">
            {Array.from({ length: 150 }).map((_, i) => (
              <motion.div
                key={i}
                className="grid-item"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{
                  opacity: [0, 0.1, 0],
                  scale: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 5 + Math.random() * 5,
                  repeat: Infinity,
                  repeatType: "reverse",
                  delay: Math.random() * 5,
                }}
              />
            ))}
          </div>
        </div>

        <motion.h1
          className="relative z-10 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-6 drop-shadow-lg"
          style={{ fontFamily: "'Montserrat', sans-serif" }}
        >
          {words.map((word, i) => (
            <motion.span
              key={word + i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 + 0.5, duration: 0.5, ease: "easeOut" }}
              className="inline-block mr-2"
              onAnimationComplete={() => {
                if (i === words.length - 1) {
                  setIsTypingComplete(true);
                }
              }}
            >
              {word}
            </motion.span>
          ))}
        </motion.h1>

        {isTypingComplete && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
            className="relative z-10 text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto mb-12"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            "It started in a school library—with a CS book meant for seniors, and a 14-year-old who didn’t wait—just took the chance."
          </motion.p>
        )}

        {isTypingComplete && (
          <motion.a
            href="#projects"
            onClick={scrollToProjects} // Use the new smooth scroll function
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
            className="relative z-10 bg-gradient-to-r from-purple-900 to-indigo-800 text-white font-bold py-3 px-8 rounded-full shadow-xl
                       hover:from-purple-950 hover:to-indigo-900 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
            aria-label="Explore my projects"
          >
            Explore My Work 👇
          </motion.a>
        )}
      </section>

      {/* About Me Section */}
      <section id="about" className="py-16 md:py-24 px-4 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8" style={{ fontFamily: "'Montserrat', sans-serif" }}>
          About Me
        </h2>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-lg text-gray-300 leading-relaxed mb-6"
          style={{ fontFamily: "'Poppins', sans-serif" }}
        >
          I am a thoughtful software developer who enjoys turning complex problems into clean, working code. What started as curiosity has grown into a steady drive to build things that are both useful and intuitive. I care about writing code that’s easy to understand, maintain, and scale — not just in theory, but in practice. I’m constantly learning, not just new tools, but better ways to solve problems. Whether solo or in a team, I aim to contribute with clarity, care, and consistency.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
          className="text-lg text-gray-300 leading-relaxed"
          style={{ fontFamily: "'Poppins', sans-serif" }}
        >
          My focus is on writing clean, efficient, and maintainable code that keeps both users and developers in mind. I care about performance, readability, and building things that hold up over time. I'm always up for projects that push me to think deeper and enjoy working with teams that value clarity, innovation, and good engineering over hype.
        </motion.p>
      </section>

      {/* Expertise/Skills Section */}
      <section id="skills" className="py-16 md:py-24 px-4 max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-12" style={{ fontFamily: "'Montserrat', sans-serif" }}>
          My Expertise
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: index * 0.05, duration: 0.6, ease: "easeOut" }}
              className="flex flex-col items-center p-6 bg-white/5 rounded-xl border border-gray-700 shadow-md
                         hover:bg-white/10 hover:border-purple-600 transition-all duration-300 transform hover:-translate-y-1"
            >
              {skill.iconPath && (
                <div className="text-purple-400 mb-3">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10">
                    <path d={skill.iconPath} />
                  </svg>
                </div>
              )}
              <h3 className="text-lg font-semibold text-white mb-1" style={{ fontFamily: "'Poppins', sans-serif" }}>
                {skill.name}
              </h3>
              <p className="text-xs text-gray-400">{skill.category}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Projects Section: Displays a slideshow of ProjectCard components */}
      <section
        id="projects"
        className="relative z-10 flex flex-col items-center justify-center px-4 py-16 md:py-24 max-w-4xl mx-auto"
        aria-labelledby="projects-heading"
      >
        <h2 id="projects-heading" className="text-3xl sm:text-4xl font-bold text-white text-center mb-12" style={{ fontFamily: "'Montserrat', sans-serif" }}>
          Mini Projects {/* Changed from Featured Projects */}
        </h2>

        <div className="relative w-full flex justify-center items-center">
          {/* Previous Button */}
          <button
            onClick={goToPreviousProject}
            className="absolute left-0 lg:-left-16 z-20 p-3 bg-white/10 rounded-full text-white text-2xl
                       hover:bg-white/20 transition-colors duration-200 shadow-lg"
            aria-label="Previous Project"
          >
            &#8249; {/* Left arrow character */}
          </button>

          {/* Project Card (Slideshow) */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentProjectIndex} // Key changes to trigger exit/enter animations
              variants={projectVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="w-full flex justify-center" // Ensure the card is centered within its flex container
            >
              <ProjectCard {...projects[currentProjectIndex]} />
            </motion.div>
          </AnimatePresence>

          {/* Next Button */}
          <button
            onClick={goToNextProject}
            className="absolute right-0 lg:-right-16 z-20 p-3 bg-white/10 rounded-full text-white text-2xl
                       hover:bg-white/20 transition-colors duration-200 shadow-lg"
            aria-label="Next Project"
          >
            &#8250; {/* Right arrow character */}
          </button>
        </div>
      </section>

      {/* Footer Section: Contains copyright information and build details */}
      <footer
        className="text-center text-sm text-gray-400 pb-10 pt-8
                   border-t border-gray-700 bg-white/5 backdrop-blur-lg
                   rounded-t-3xl shadow-inner mx-4 sm:mx-6 mt-16"
        style={{ fontFamily: "'Poppins', sans-serif" }}
      >
        &copy; {new Date().getFullYear()}{' '}
        <span className="text-white font-semibold">Harshit Singh Rautela</span>. Built with{' '}
        <span role="img" aria-label="laptop emoji">💻</span> React & TailwindCSS.
      </footer>

      {/* Fixed Contact Me Button: Always visible for easy access */}
      <a
        href="mailto:rautelacodes@gmail.com"
        className="fixed bottom-6 right-6 lg:bottom-10 lg:right-10
                   bg-gradient-to-br from-gray-700 to-gray-900
                   text-white px-5 py-2 rounded-full shadow-lg z-50
                   font-semibold text-sm border border-gray-600
                   transition-all duration-300 hover:scale-105
                   flex items-center gap-2"
        style={{ fontFamily: "'Montserrat', sans-serif" }}
        aria-label="Contact me via email"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="currentColor">
          <path d="M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6zm-2 0l-8 5-8-5h16zm0 12H4V8l8 5 8-5v10z" />
        </svg>
        Contact Me
      </a>

      {/* Custom Tailwind CSS for animations not directly available */}
      <style>
        {`
        @keyframes pulse-slow {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.8;
          }
        }
        .animate-pulse-slow {
          animation: pulse-slow 8s infinite ease-in-out;
        }

        .grid-background {
          position: absolute;
          width: 100%;
          height: 100%;
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(20px, 1fr));
          grid-template-rows: repeat(auto-fill, minmax(20px, 1fr));
          gap: 10px;
          opacity: 0.05;
          pointer-events: none;
        }

        .grid-item {
          width: 5px;
          height: 5px;
          background-color: #a78bfa; /* Purple color for the dots */
          border-radius: 50%;
        }
        `}
      </style>
    </div>
  );
}
