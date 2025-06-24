// ProjectCard component (now defined directly in this file)
import { motion } from 'framer-motion'; // ✅ Required for animations

export function ProjectCard({ title, desc, image, link, tags = [] }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.05, ease: "easeOut" }}
      className="bg-white/15 backdrop-blur-md text-white rounded-3xl
                 shadow-2xl shadow-rose-900/30 overflow-hidden isolate
                 hover:shadow-rose-900/60 transition-all duration-500 w-full max-w-sm lg:max-w-md p-6
                 flex flex-col items-center border border-rose-400 font-medium"
      style={{ fontFamily: "'Poppins', sans-serif" }}
    >
      {/* Project Image Container */}
      <div className="relative w-full h-60 md:h-72 mb-5 overflow-hidden rounded-2xl shadow-xl">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover scale-100 transition-transform duration-500"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = `https://placehold.co/600x400/334155/F8FAFC?text=Image+Not+Found`;
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 to-transparent"></div>
      </div>

      <h3 className="text-3xl font-extrabold mb-2 text-center text-rose-300 drop-shadow-lg leading-tight">
        {title}
      </h3>

      <p className="text-gray-200 text-base mb-4 text-center leading-relaxed px-2 italic">
        {desc}
      </p>

      <div className="flex flex-wrap gap-2 mb-6 justify-center">
        {tags.map((tag) => (
          <span
            key={tag}
            className="bg-white/20 text-xs px-3 py-1 rounded-full text-rose-200
                       border border-amber-400 shadow-md font-semibold"
          >
            {tag}
          </span>
        ))}
      </div>

      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-auto inline-block px-7 py-3 bg-gradient-to-br from-rose-600 to-amber-500
                   text-white rounded-lg shadow-xl hover:shadow-2xl
                   transition-all duration-300 text-lg font-bold
                   hover:from-rose-700 hover:to-amber-600 focus:outline-none focus:ring-2
                   focus:ring-offset-2 focus:ring-rose-500 focus:ring-offset-gray-900"
      >
        🚀 View Project
      </a>
    </motion.div>
  );
}