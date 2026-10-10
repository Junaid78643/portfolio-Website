import { motion } from 'framer-motion';
import { FiAward, FiBookOpen, FiBriefcase } from 'react-icons/fi';

const About = () => {
  const cards = [
    {
      icon: <FiAward className="text-3xl text-blue-500 mb-4" />,
      title: 'Experience',
      desc: '2+ Years',
      sub: 'Frontend Development'
    },
    {
      icon: <FiBookOpen className="text-3xl text-violet-500 mb-4" />,
      title: 'Education',
      desc: 'BS Computer Science',
      sub: 'Graduated'
    },
    {
      icon: <FiBriefcase className="text-3xl text-emerald-500 mb-4" />,
      title: 'Projects',
      desc: '20+ Completed',
      sub: 'Real-world Applications'
    }
  ];

  return (
    <section id="about" className="py-20 bg-slate-50 dark:bg-slate-900 transition-colors">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h4 className="text-blue-500 font-medium mb-2 uppercase tracking-widest">Get To Know</h4>
          <h2 className="section-title">About Me</h2>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12 items-center mt-12">
          
          {/* Image Side */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex-1 w-full max-w-md lg:max-w-none"
          >
            <div className="relative group rounded-2xl overflow-hidden aspect-square md:aspect-[4/3] lg:aspect-square bg-slate-200 dark:bg-slate-800">
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-violet-500/20 group-hover:opacity-0 transition-opacity duration-500 z-10"></div>
              {/* Profile Image */}
              <div className="w-full h-full flex items-center justify-center bg-slate-200 dark:bg-slate-800">
                <img src="/profile.jpg" alt="Junaid Shahbaz" className="w-full h-full object-cover" onError={(e) => { e.target.onerror = null; e.target.style.display = 'none'; e.target.nextSibling.style.display = 'block'; }} />
                <span className="text-2xl text-slate-400 dark:text-slate-600" style={{display: 'none'}}>Profile Photo</span>
              </div>
            </div>
          </motion.div>

          {/* Content Side */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex-1"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              {cards.map((card, index) => (
                <div 
                  key={index} 
                  className="bg-white dark:bg-dark-card p-6 rounded-xl border border-slate-100 dark:border-slate-800 text-center hover:border-blue-500 dark:hover:border-blue-500 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group"
                >
                  <div className="flex justify-center group-hover:scale-110 transition-transform duration-300">{card.icon}</div>
                  <h3 className="text-lg font-bold text-slate-800 dark:text-white mb-1">{card.title}</h3>
                  <p className="text-slate-600 dark:text-slate-400 font-medium">{card.desc}</p>
                  <p className="text-sm text-slate-500 dark:text-slate-500 mt-1">{card.sub}</p>
                </div>
              ))}
            </div>

            <h4 className="text-blue-500 font-medium mb-2 uppercase tracking-widest">Who Am I?</h4>
            <h3 className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-white mb-6">
              A Passionate Software Engineer & Web Developer
            </h3>
            
            <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed mb-6">
              I am a dedicated BS Software Engineering student at Gift University Gujranwala, with a strong interest in building innovative web and mobile applications. I am proficient in Java, JavaScript, HTML, and React, and I am always eager to learn new technologies and contribute to open-source projects.
            </p>
            
            <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed mb-8">
              My long-term goal is to become a Full Stack Developer and work with AI. I enjoy turning complex problems into simple, beautiful, and intuitive designs.
            </p>

            <a href="#contact" className="btn-primary inline-block">
              Let's Talk
            </a>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;
