import { Link } from 'react-scroll';
import { FiGithub, FiLinkedin, FiMail, FiArrowUp } from 'react-icons/fi';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 dark:bg-black text-white pt-16 pb-8 relative">
      <div className="container mx-auto px-6 md:px-12">
        
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-8 border-b border-slate-800 pb-12 mb-8">
          
          <div className="text-center md:text-left max-w-sm">
            <div className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-violet-500 mb-4 inline-block">
              Junaid<span className="text-white">Shahbaz</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Building beautiful, responsive, and high-performance digital experiences with a focus on clean design and user-centered solutions.
            </p>
          </div>

          <div className="flex flex-col md:flex-row gap-12 text-center md:text-left">
            <div>
              <h4 className="text-lg font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><Link to="home" smooth={true} duration={500} className="text-slate-400 hover:text-blue-500 cursor-pointer transition-colors">Home</Link></li>
                <li><Link to="about" smooth={true} duration={500} className="text-slate-400 hover:text-blue-500 cursor-pointer transition-colors">About</Link></li>
                <li><Link to="skills" smooth={true} duration={500} className="text-slate-400 hover:text-blue-500 cursor-pointer transition-colors">Skills</Link></li>
                <li><Link to="projects" smooth={true} duration={500} className="text-slate-400 hover:text-blue-500 cursor-pointer transition-colors">Projects</Link></li>
                <li><Link to="contact" smooth={true} duration={500} className="text-slate-400 hover:text-blue-500 cursor-pointer transition-colors">Contact</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-bold mb-4">Socials</h4>
              <div className="flex justify-center md:justify-start gap-4">
                <a href="https://github.com/Junaid78643" target="_blank" rel="noreferrer" aria-label="GitHub" className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-blue-500 transition-all hover:-translate-y-1">
                  <FiGithub size={20} />
                </a>
                <a href="https://www.linkedin.com/in/junaid-hunjra-5778a2377/" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-blue-500 transition-all hover:-translate-y-1">
                  <FiLinkedin size={20} />
                </a>
                <a href="mailto:junaidhunjra2808@gmail.com" aria-label="Email" className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-blue-500 transition-all hover:-translate-y-1">
                  <FiMail size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-slate-500 text-sm">
          <p>&copy; {currentYear} Junaid Shahbaz. All rights reserved.</p>
          <p>Designed & Built with <span className="text-red-500">❤</span> using React & Tailwind</p>
        </div>

      </div>

      {/* Back to Top Button */}
      <div className="absolute right-6 -top-6">
        <Link 
          to="home" 
          smooth={true} 
          duration={800} 
          className="w-12 h-12 bg-blue-500 text-white rounded-full flex items-center justify-center cursor-pointer shadow-lg hover:bg-blue-600 hover:-translate-y-2 transition-all"
        >
          <FiArrowUp size={24} />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
