import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { Link } from 'react-scroll';
import { FiGithub, FiLinkedin, FiMail, FiArrowDown } from 'react-icons/fi';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen relative flex items-center pt-20 pb-10 overflow-hidden">
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 dark:opacity-10 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-violet-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 dark:opacity-10 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-40 w-72 h-72 bg-emerald-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 dark:opacity-10 animate-blob animation-delay-4000"></div>
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1 text-center md:text-left"
          >
            <h2 className="text-xl md:text-2xl font-medium text-blue-500 mb-2">
              Hello, I'm
            </h2>
            <h1 className="text-5xl md:text-7xl font-bold mb-4 text-slate-800 dark:text-white tracking-tight">
              Junaid Shahbaz
            </h1>
            
            <div className="text-2xl md:text-3xl font-semibold mb-6 text-slate-600 dark:text-slate-300 h-10">
              <TypeAnimation
                sequence={[
                  'Software Engineer',
                  2000,
                  'Web Developer',
                  2000,
                  'React Developer',
                  2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-violet-500"
              />
            </div>
            
            <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 max-w-xl mx-auto md:mx-0">
              I am a dedicated BS Software Engineering student at Gift University with a strong interest in building innovative web and mobile applications using modern technologies.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
              <Link to="contact" smooth={true} duration={500} className="btn-primary w-full sm:w-auto text-center cursor-pointer">
                Hire Me
              </Link>
              <Link to="projects" smooth={true} duration={500} className="btn-outline w-full sm:w-auto text-center cursor-pointer">
                View Projects
              </Link>
            </div>
          </motion.div>

          {/* Image/Visual Content */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-1 flex justify-center"
          >
            <div className="relative w-72 h-72 md:w-96 md:h-96">
              {/* Decorative border */}
              <div className="absolute inset-0 rounded-full border-2 border-dashed border-blue-500/50 animate-[spin_10s_linear_infinite]"></div>
              
              {/* Profile Image */}
              <div className="absolute inset-4 rounded-full overflow-hidden bg-gradient-to-br from-blue-100 to-violet-100 dark:from-slate-800 dark:to-slate-700 shadow-2xl flex items-center justify-center border-4 border-white dark:border-slate-800">
                <img src="/profile.jpg" alt="Junaid Shahbaz" className="w-full h-full object-cover" onError={(e) => { e.target.onerror = null; e.target.src = 'https://via.placeholder.com/400x400/3b82f6/ffffff?text=JS' }} />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Social Icons Float */}
      <div className="hidden lg:flex fixed left-6 bottom-0 flex-col items-center gap-6 z-40 after:w-px after:h-24 after:bg-slate-300 dark:after:bg-slate-700">
        <a href="https://github.com/Junaid78643" target="_blank" rel="noreferrer" aria-label="GitHub profile" className="text-slate-500 hover:text-blue-500 dark:text-slate-400 dark:hover:text-blue-400 transform hover:-translate-y-1 transition-all">
          <FiGithub size={22} />
        </a>
        <a href="https://www.linkedin.com/in/junaid-hunjra-5778a2377/" target="_blank" rel="noreferrer" aria-label="LinkedIn profile" className="text-slate-500 hover:text-blue-500 dark:text-slate-400 dark:hover:text-blue-400 transform hover:-translate-y-1 transition-all">
          <FiLinkedin size={22} />
        </a>
        <a href="mailto:junaidhunjra2808@gmail.com" aria-label="Email Junaid" className="text-slate-500 hover:text-blue-500 dark:text-slate-400 dark:hover:text-blue-400 transform hover:-translate-y-1 transition-all">
          <FiMail size={22} />
        </a>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center z-10 animate-bounce cursor-pointer">
        <Link to="about" smooth={true} duration={500}>
          <span className="text-sm font-medium text-slate-500 dark:text-slate-400 mb-2 block tracking-widest uppercase">Scroll</span>
          <FiArrowDown className="mx-auto text-blue-500" size={24} />
        </Link>
      </div>
    </section>
  );
};

export default Hero;
