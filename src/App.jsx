
import { motion } from "framer-motion";
import './index.css';
import { Navbar } from './components/Navbar';
import { ProjectCard } from './components/ProjectCard';
import { projects } from './data/projects';





// Main App Component
export default function App() {
  return (
    <div className="min-h-screen bg-animated-gradient text-white font-sans selection:bg-rose-500/40">
      <Navbar />

      {/* Header */}
      {/* <header className="text-center my-20 md:my-28 px-4 animate-fade-in">
        <motion.blockquote
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
          className="max-w-3xl mx-auto px-6 py-10 sm:px-10 sm:py-14
                    border-l-4 sm:border-l-8 border-rose-500 bg-white/10
                    text-base sm:text-lg text-rose-100 italic rounded-2xl
                    shadow-2xl backdrop-blur-md animate-glow font-medium tracking-wide"
          style={{ fontFamily: "'Montserrat', sans-serif" }}
        >
          "It started in a school library—with a CS book meant for seniors, and a 14-year-old who didn’t wait—just took the chance."
        </motion.blockquote>

      </header> */}

      {/* Projects Section */}
      {/* <section className="flex flex-wrap justify-center gap-10 md:gap-14 px-4 pb-28">
        {projects.map((proj, idx) => (
          <ProjectCard key={idx} {...proj} />
        ))}
      </section> */}

      {/* Footer */}
      {/* <footer
        className="text-center text-sm text-white/70 pb-10 pt-8
                    border-t border-white/20 bg-white/10 backdrop-blur-lg
                    rounded-t-3xl shadow-xl mx-4 sm:mx-6"
        style={{ fontFamily: "'Poppins', sans-serif" }}
      >
        © 2025 <span className="text-rose-300 font-bold">Your Name</span>. Built with{' '}
        <span role="img" aria-label="laptop emoji">💻</span> using React & TailwindCSS.
      </footer> */}

      {/* Fixed "Contact Me" Button */}
      {/* <a
        href="mailto:rautelacodes@gmail.com"
        className="fixed bottom-6 right-6 lg:bottom-10 lg:right-10
                    bg-gradient-to-br from-rose-500 to-orange-400
                    text-white px-6 py-3 rounded-full shadow-2xl z-50
                    font-bold text-lg border-2 border-rose-300
                    transition-all duration-300 hover:scale-110 hover-bounce
                    flex items-center gap-2 animate-fade-in"
        style={{ fontFamily: "'Montserrat', sans-serif" }}
      >
        email i con
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="currentColor">
          <path d="M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6zm-2 0l-8 5-8-5h16zm0 12H4V8l8 5 8-5v10z"/>
        </svg>
        contact Me
      </a> */}

    </div>
  );
}
