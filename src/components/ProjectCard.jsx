

// components/ProjectCard.jsx
import { motion } from 'framer-motion'; // useAnimationControls is not strictly needed with variants
import { useState } from 'react';

export function ProjectCard({ title, desc, image, link, repo, tags = [] }) {
  const [isHovered, setIsHovered] = useState(false);

  // Define animation variants for Framer Motion
  // This makes animations more declarative and often cleaner
  const cardVariants = {
    initial: { scale: 1, zIndex: 0 },
    hover: { scale: 1.05, zIndex: 50 }, // zIndex is applied directly by Framer Motion
  };

  return (
    <motion.div
      variants={cardVariants} // Apply the defined variants
      initial="initial" // Set the initial state to 'initial' variant
      animate={isHovered ? "hover" : "initial"} // Animate to 'hover' or 'initial' based on state
      onHoverStart={() => setIsHovered(true)} // Set state on hover start
      onHoverEnd={() => setIsHovered(false)}   // Set state on hover end
      transition={{ type: 'spring', stiffness: 300, damping: 20 }} // Smooth spring transition
      className="relative group w-full max-w-sm lg:max-w-md overflow-visible rounded-3xl shadow-lg border border-neutral-700 bg-black"
      style={{
        fontFamily: "'Poppins', sans-serif",
        transformOrigin: 'top', // Ensures the scale animation originates from the top
      }}
      role="article" // Semantic role for accessibility
      aria-labelledby={`${title.replace(/\s/g, '-')}-title`} // Links to the h3 for screen readers
    >
      {/* Image container */}
      <div className="relative w-full h-64 overflow-hidden rounded-t-3xl"> {/* Added rounded-t-3xl for consistent styling */}
        <img
          src={image}
          alt={`Thumbnail for ${title} project`} // More descriptive alt text for accessibility
          className="w-full h-full object-cover transition duration-500 brightness-100 group-hover:brightness-75"
          onError={(e) => {
            // Fallback for broken images: replace with a placeholder
            e.target.onerror = null; // Prevent infinite loop if placeholder also fails
            e.target.src = `https://placehold.co/600x400/0f0f0f/ffffff?text=Image+Not+Found`;
          }}
          loading="lazy" // Optimize image loading by deferring off-screen images
        />
        {/* Gradient overlay for better text contrast on image */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
      </div>

      {/* Info section shown only on hover */}
      <div className="absolute inset-x-0 bottom-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-5 pointer-events-none">
        <div className="pointer-events-auto"> {/* Re-enable pointer events for interactive elements */}
          <h3 id={`${title.replace(/\s/g, '-')}-title`} className="text-xl font-semibold text-white mb-2 text-center">
            {title}
          </h3>
          <p className="text-sm text-gray-200 text-center mb-3">
            {desc}
          </p>

          {/* Tags section */}
          <div className="flex flex-wrap gap-2 justify-center mb-4">
            {tags.map((tag) => (
              <span
                key={tag} // Key for list items
                className="bg-white/10 text-xs px-3 py-1 rounded-full text-gray-200 border border-gray-600"
                aria-label={`Technology used: ${tag}`} // Added for accessibility
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Action buttons */}
          <div className="flex justify-between gap-3 px-4">
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer" // Security best practice for target="_blank"
              className="w-full text-center text-white bg-neutral-800 hover:bg-white hover:text-neutral-800 font-semibold py-1.5 px-3 rounded-md border border-gray-600 transition-colors"
              aria-label={`View live demo of ${title}`} // More specific aria-label
            >
              🚀 View Live
            </a>
            <a
              href={repo}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full text-center text-white bg-neutral-800 hover:bg-white hover:text-neutral-800 font-semibold py-1.5 px-3 rounded-md border border-gray-600 transition-colors"
              aria-label={`View GitHub repository for ${title}`} // More specific aria-label
            >
              💻 View Repo
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
}