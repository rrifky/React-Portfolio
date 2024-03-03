import { useEffect, useState } from 'react';
import { BsMoonStarsFill } from 'react-icons/bs';
import { IoSunny } from 'react-icons/io5';
import { motion } from 'framer-motion';

const Mobilenav = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
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
    ${isScrolled ? 'backdrop-blur-lg shadow-md bg-transparent' : ' bg-white'} 
    `}
    >
      <div className={`flex justify-between items-center h-full px-5`}>
        <div className="text-2xl font-bold text-slate-800">RA</div>
        {/* Darkmode toggle */}
        <div className={`flex justify-center mb-6 min-w-[170px]`}>
          <div className={`relative top-[12px] min-w-[60px] h-[30px] ${isDarkMode ? 'bg-blue-950 border-blue-950' : 'bg-yellow-300 border-yellow-300'}  border-2  rounded-2xl`}>
            <input type="checkbox" checked={isDarkMode} onChange={toggleDarkMode} className="absolute appearance-none cursor-pointer w-full h-full rounded-2xl transition-colors duration-300 ease-in-out focus:outline-none z-50" />
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
          <div className={`h-[3px] w-[25px] bg-slate-800 transition duration-300 ${isOpen ? 'rotate-45 translate-y-[7px]' : ''}`}></div>
          <div className={`h-[3px] w-[25px]  bg-slate-800 mt-1 transition-all duration-200 ${isOpen ? 'translate-x-[5px] opacity-0' : ''}`}></div>
          <div className={`h-[3px] w-[25px] bg-slate-800 mt-1 transition duration-300 ${isOpen ? '-rotate-45 -translate-y-[7px]' : ''}`}></div>
        </div>
        <div className={`absolute top-0 left-0 right-0  bg-white shadow-md h-96 -z-50 ${isOpen ? 'block' : 'hidden'}`}>
          <motion.div 
          initial={isOpen ? { opacity: 0, y: -50 } : { opacity: 1, y: 0 }} 
          animate={isOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }} 
          transition={{ duration: 0.3 }} 
          className="flex flex-col items-center h-full">
            <div className="flex items-center h-full mt-20">
              <a href="#">Home</a>
            </div>
            <div className="flex items-center h-full">
              <a href="#">About</a>
            </div>
            <div className="flex items-center h-full">
              <a href="#">Experience</a>
            </div>
            <div className="flex items-center h-full">
              <a href="#">Project</a>
            </div>
            <div className="flex items-center h-full mb-8">
              <a href="#">Contact</a>
            </div>
          </motion.div>
        </div>
      </div>
    </nav>
  );
};

export default Mobilenav;
