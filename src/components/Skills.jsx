import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaReact, FaHtml5, FaCss3Alt, FaJs, FaWordpress, FaPython, FaJava } from 'react-icons/fa';
import { SiCplusplus, SiTailwindcss, SiGithub } from 'react-icons/si';

const Skills = () => {
  const [filter, setFilter] = useState('All');

  const categories = ['All', 'Frontend', 'Backend', 'Tools'];

  const skillsData = [
    { name: 'React', level: 90, icon: <FaReact />, category: 'Frontend', color: 'text-blue-400' },
    { name: 'React Native', level: 85, icon: <FaReact />, category: 'Frontend', color: 'text-blue-500' },
    { name: 'JavaScript', level: 88, icon: <FaJs />, category: 'Frontend', color: 'text-yellow-400' },
    { name: 'HTML5', level: 95, icon: <FaHtml5 />, category: 'Frontend', color: 'text-orange-500' },
    { name: 'CSS3', level: 90, icon: <FaCss3Alt />, category: 'Frontend', color: 'text-blue-600' },
    { name: 'Tailwind CSS', level: 85, icon: <SiTailwindcss />, category: 'Frontend', color: 'text-cyan-400' },
    { name: 'C++', level: 75, icon: <SiCplusplus />, category: 'Backend', color: 'text-blue-700' },
    { name: 'Java', level: 70, icon: <FaJava />, category: 'Backend', color: 'text-red-500' },
    { name: 'Python', level: 80, icon: <FaPython />, category: 'Backend', color: 'text-yellow-500' },
    { name: 'WordPress', level: 85, icon: <FaWordpress />, category: 'Tools', color: 'text-blue-800' },
    { name: 'Git/GitHub', level: 85, icon: <SiGithub />, category: 'Tools', color: 'text-slate-800 dark:text-white' },
  ];

  const filteredSkills = filter === 'All' ? skillsData : skillsData.filter(skill => skill.category === filter);

  return (
    <section id="skills" className="py-20 bg-white dark:bg-dark-bg transition-colors relative">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h4 className="text-blue-500 font-medium mb-2 uppercase tracking-widest">What I Can Do</h4>
          <h2 className="section-title">My Skills</h2>
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
                  : 'bg-slate-100 text-slate-600 dark:bg-dark-card dark:text-slate-300 hover:bg-blue-100 dark:hover:bg-slate-700'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredSkills.map((skill) => (
              <motion.div
                layout
                key={skill.name}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ type: "spring", stiffness: 200, damping: 12, mass: 1 }}
                className="bg-white dark:bg-dark-card rounded-2xl p-6 border border-slate-100 dark:border-slate-800 hover:border-blue-500 hover:shadow-[0_10px_40px_-10px_rgba(59,130,246,0.6)] dark:hover:shadow-[0_10px_40px_-10px_rgba(59,130,246,0.5)] hover:-translate-y-2 hover:scale-105 transition-all duration-300 group flex flex-col"
              >
                {/* Professional Icon Display */}
                <div className="w-14 h-14 mb-5 flex items-center justify-center bg-slate-50 dark:bg-slate-800/80 rounded-xl group-hover:bg-blue-50 dark:group-hover:bg-blue-900/20 transition-colors duration-300 border border-slate-100 dark:border-slate-700">
                  <div className={`text-3xl ${skill.color} group-hover:scale-110 transition-transform duration-300`}>
                    {skill.icon}
                  </div>
                </div>

                <div className="flex justify-between items-end mb-3">
                  <h3 className="text-lg font-bold text-slate-800 dark:text-white group-hover:text-blue-500 transition-colors duration-300">{skill.name}</h3>
                  <span className="text-sm font-semibold text-slate-500 dark:text-slate-400">{skill.level}%</span>
                </div>
                
                {/* Elegant Thin Progress Bar */}
                <div className="w-full bg-slate-100 dark:bg-slate-800 rounded-full h-1.5 mt-auto overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: "easeOut", delay: 0.1 }}
                    className="bg-gradient-to-r from-blue-500 to-violet-500 h-full rounded-full"
                  />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
};

export default Skills;
