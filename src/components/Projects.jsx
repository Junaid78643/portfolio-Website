import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiExternalLink, FiGithub, FiX } from 'react-icons/fi';

const Projects = () => {
  const [filter, setFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);
  
  const categories = ['All', 'React', 'React Native', 'HTML/CSS', 'WordPress'];

  const projectsData = [
    {
      id: 1,
      title: 'Burger Bliss',
      category: 'React',
      image: '/burger_bliss.webp',
      description: 'A React-based web application that allows users to order delicious burgers online with ease. Features include browsing items, customizing orders, and adding items to cart.',
      techStack: ['React', 'React Router', 'Tailwind CSS'],
      liveLink: 'https://github.com/Junaid78643/BurgerBliss',
      githubLink: 'https://github.com/Junaid78643/BurgerBliss'
    },
    {
      id: 2,
      title: 'Recipe Mate',
      category: 'React Native',
      image: '/recipe_mate.webp',
      description: 'A complete recipe management system built with React Native Expo and Firebase. Features user authentication, real-time database integration, and favorite recipe functionality.',
      techStack: ['React Native', 'Expo', 'Firebase', 'JavaScript'],
      liveLink: 'https://github.com/Junaid78643/recipie_mate',
      githubLink: 'https://github.com/Junaid78643/recipie_mate'
    },
    {
      id: 3,
      title: 'Personal Portfolio',
      category: 'HTML/CSS',
      image: '/junaid_portfolio.png',
      description: 'My previous personal portfolio website designed and developed using HTML, CSS, and JavaScript. Showcases skills, projects, and contact information.',
      techStack: ['HTML5', 'CSS3', 'JavaScript'],
      liveLink: 'https://portfolio-eight-iota-wxzpqldbfk.vercel.app',
      githubLink: 'https://github.com/Junaid78643/portfolio'
    },
    {
      id: 4,
      title: 'Appointment Booking System',
      category: 'React',
      image: '/appointment_booking.png',
      description: 'A comprehensive medical and consulting appointment booking system. Features dynamic calendar slots, doctor profiles, and real-time scheduling.',
      techStack: ['React', 'Node.js', 'Tailwind CSS'],
      liveLink: '#',
      githubLink: '#'
    },
    {
      id: 5,
      title: 'E-Commerce Fashion Store',
      category: 'React',
      image: '/ecommerce_store.png',
      description: 'A premium fashion e-commerce platform with a modern UI. Includes product filtering, shopping cart functionality, and seamless checkout experience.',
      techStack: ['React', 'Redux', 'Tailwind CSS'],
      liveLink: '#',
      githubLink: '#'
    },
    {
      id: 6,
      title: 'Tech & Lifestyle Blog',
      category: 'WordPress',
      image: '/blog_website.png',
      description: 'A fully responsive and SEO-optimized blog website built with WordPress. Features custom themes, category filtering, and newsletter integration.',
      techStack: ['WordPress', 'PHP', 'CSS3'],
      liveLink: '#',
      githubLink: '#'
    }
  ];

  const filteredProjects = filter === 'All' ? projectsData : projectsData.filter(p => p.category === filter);

  // Close modal on escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setSelectedProject(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <section id="projects" className="py-20 bg-slate-50 dark:bg-slate-900 transition-colors relative">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h4 className="text-blue-500 font-medium mb-2 uppercase tracking-widest">My Recent Work</h4>
          <h2 className="section-title">Portfolio Projects</h2>
        </motion.div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((cat, index) => (
            <button
              key={index}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                filter === cat 
                  ? 'bg-blue-500 text-white shadow-lg shadow-blue-500/30' 
                  : 'bg-white dark:bg-dark-card text-slate-600 dark:text-slate-300 hover:bg-blue-100 dark:hover:bg-slate-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid / Masonry */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                key={project.id}
                className="bg-white dark:bg-dark-card rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group border border-slate-100 dark:border-slate-800"
              >
                <div className="relative overflow-hidden aspect-video cursor-pointer" onClick={() => setSelectedProject(project)}>
                  <div className="absolute inset-0 bg-blue-500/20 group-hover:bg-transparent transition-colors duration-500 z-10 pointer-events-none"></div>
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  
                  {/* Hover Overlay with Links */}
                  <div className="absolute inset-0 bg-slate-900/80 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                    {project.liveLink !== '#' ? (
                      <a href={project.liveLink} target="_blank" rel="noreferrer" className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white hover:bg-blue-600 hover:scale-110 transition-all" onClick={(e) => e.stopPropagation()}>
                        <FiExternalLink size={20} />
                      </a>
                    ) : (
                      <button disabled className="w-12 h-12 bg-slate-600 rounded-full flex items-center justify-center text-white/50 cursor-not-allowed transition-all" onClick={(e) => e.stopPropagation()}>
                        <FiExternalLink size={20} />
                      </button>
                    )}
                    
                    {project.githubLink !== '#' ? (
                      <a href={project.githubLink} target="_blank" rel="noreferrer" className="w-12 h-12 bg-slate-700 rounded-full flex items-center justify-center text-white hover:bg-slate-600 hover:scale-110 transition-all" onClick={(e) => e.stopPropagation()}>
                        <FiGithub size={20} />
                      </a>
                    ) : (
                      <button disabled className="w-12 h-12 bg-slate-600 rounded-full flex items-center justify-center text-white/50 cursor-not-allowed transition-all" onClick={(e) => e.stopPropagation()}>
                        <FiGithub size={20} />
                      </button>
                    )}
                  </div>
                </div>

                <div className="p-6">
                  <span className="text-sm font-medium text-blue-500 mb-2 block">{project.category}</span>
                  <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-3 cursor-pointer hover:text-blue-500 transition-colors" onClick={() => setSelectedProject(project)}>{project.title}</h3>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {project.techStack.map((tech, i) => (
                      <span key={i} className="text-xs px-3 py-1 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
            <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              exit={{ opacity: 0 }} 
              className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
              onClick={() => setSelectedProject(null)}
            ></motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-4xl bg-white dark:bg-dark-card rounded-2xl shadow-2xl overflow-hidden z-10 flex flex-col md:flex-row max-h-[90vh]"
            >
              <button 
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 z-50 p-2 bg-slate-100 dark:bg-slate-800 rounded-full text-slate-600 dark:text-slate-300 hover:bg-red-100 hover:text-red-500 transition-colors"
              >
                <FiX size={20} />
              </button>

              <div className="md:w-1/2 overflow-hidden bg-slate-100 dark:bg-slate-900">
                <img 
                  src={selectedProject.image} 
                  alt={selectedProject.title} 
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="md:w-1/2 p-8 overflow-y-auto">
                <span className="text-sm font-medium text-blue-500 mb-2 block tracking-wider uppercase">{selectedProject.category}</span>
                <h3 className="text-3xl font-bold text-slate-800 dark:text-white mb-4">{selectedProject.title}</h3>
                
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6 text-lg">
                  {selectedProject.description}
                </p>
                
                <div className="mb-8">
                  <h4 className="text-sm font-bold text-slate-800 dark:text-white mb-3 uppercase tracking-wider">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.techStack.map((tech, i) => (
                      <span key={i} className="text-sm px-4 py-2 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-lg font-medium border border-slate-200 dark:border-slate-700">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="flex gap-4 pt-4 border-t border-slate-100 dark:border-slate-800">
                  {selectedProject.liveLink !== '#' ? (
                    <a href={selectedProject.liveLink} target="_blank" rel="noreferrer" className="flex-1 btn-primary text-center flex justify-center items-center gap-2">
                      <FiExternalLink /> Live Demo
                    </a>
                  ) : (
                    <button disabled className="flex-1 btn-primary opacity-50 cursor-not-allowed text-center flex justify-center items-center gap-2">
                      <FiExternalLink /> Live Demo
                    </button>
                  )}
                  {selectedProject.githubLink !== '#' ? (
                    <a href={selectedProject.githubLink} target="_blank" rel="noreferrer" className="flex-1 btn-outline text-center flex justify-center items-center gap-2">
                      <FiGithub /> Source Code
                    </a>
                  ) : (
                    <button disabled className="flex-1 btn-outline opacity-50 cursor-not-allowed text-center flex justify-center items-center gap-2">
                      <FiGithub /> Source Code
                    </button>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
