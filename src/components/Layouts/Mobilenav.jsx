import { useEffect, useState } from 'react';
import { BsMoonStarsFill } from 'react-icons/bs';
import { IoSunny } from 'react-icons/io5';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useTheme } from '../../context/ThemeContext';

const Mobilenav = () => {
  const { isDarkMode, toggleDarkMode } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    toggleDarkMode();
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      if (position > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 h-[60px] transition-all duration-500
    ${isScrolled ? `backdrop-blur-lg shadow-md bg-transparent` : `${isDarkMode ? 'bg-transparent' : 'bg-white'}`} 
    `}
    >
      <div className={`flex justify-between items-center h-full px-5`}>
        <Link to="/" className={`text-2xl font-bold ${isDarkMode ? 'text-slate-50' : 'text-slate-800'}`}>
          RA
        </Link>
        {/* Darkmode toggle */}
        <div className={`flex justify-center mb-6 min-w-[170px]`}>
          <div className={`relative top-[12px] min-w-[60px] h-[30px] ${isDarkMode ? 'bg-blue-950 border-blue-950' : 'bg-yellow-300 border-yellow-300'}  border-2  rounded-2xl`}>
            <input type="checkbox" checked={isDarkMode} onChange={handleToggle} className="absolute appearance-none cursor-pointer w-full h-full rounded-2xl transition-colors duration-300 ease-in-out focus:outline-none z-50" />
            <div
              className={`absolute left-0 top-0 flex justify-center ${isDarkMode ? 'bg-slate-950' : 'bg-white'} rounded-full items-center w-1/2 h-full transition-transform duration-300 ease-in-out transform ${
                isDarkMode ? 'translate-x-full' : ''
              }`}
            >
              {isDarkMode ? <BsMoonStarsFill size={20} className="text-yellow-300" /> : <IoSunny size={20} className="text-yellow-400" />}
            </div>
          </div>
        </div>
        {/* End Darkmode Toggle */}
        <div className="cursor-pointer" onClick={toggleMenu}>
          <div className={`h-[3px] w-[25px] ${isDarkMode ? 'bg-slate-50' : 'bg-slate-800'}  transition duration-300 ${isOpen ? 'rotate-45 translate-y-[7px]' : ''}`}></div>
          <div className={`h-[3px] w-[25px]  ${isDarkMode ? 'bg-slate-50' : 'bg-slate-800'} mt-1 transition-all duration-200 ${isOpen ? 'translate-x-[5px] opacity-0' : ''}`}></div>
          <div className={`h-[3px] w-[25px] ${isDarkMode ? 'bg-slate-50' : 'bg-slate-800'} mt-1 transition duration-300 ${isOpen ? '-rotate-45 -translate-y-[7px]' : ''}`}></div>
        </div>
        <div className={` absolute top-0 left-0 right-0 ${isDarkMode ? 'bg-zinc-900 shadow-white text-slate-50' : 'bg-white text-slate-900'} shadow h-96 -z-50 ${isOpen ? 'block' : 'hidden'}`}>
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
      </div>
    </nav>
  );
};

export default Mobilenav;
