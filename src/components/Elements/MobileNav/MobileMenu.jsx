import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const MobileMenu = ({ isOpen, isDarkMode }) => {
  return (
    <div className={`absolute top-0 left-0 right-0 ${isDarkMode ? 'bg-zinc-900 shadow-white text-slate-50' : 'bg-white text-slate-900'} shadow h-96 -z-50 ${isOpen ? 'block' : 'hidden'}`}>
      <motion.div initial={isOpen ? { opacity: 0, y: -50 } : { opacity: 1, y: 0 }} animate={isOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }} transition={{ duration: 0.3 }} className={`flex flex-col items-center h-full `}>
        <div className={`flex items-center h-full mt-20`}>
          <Link to="/">Home</Link>
        </div>
        <div className="flex items-center h-full">
          <Link to="/about">About</Link>
        </div>
        <div className="flex items-center h-full">
          <Link to="/experience">Experience</Link>
        </div>
        <div className="flex items-center h-full">
          <Link to="/project">Project</Link>
        </div>
        <div className="flex items-center h-full mb-8">
          <Link to="/contact">Contact</Link>
        </div>
      </motion.div>
    </div>
  );
};

export default MobileMenu;
