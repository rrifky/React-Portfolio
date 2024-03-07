import { FaArrowDown } from 'react-icons/fa';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../../../context/ThemeContext';

const DownloadResumeButton = () => {
  const { isDarkMode } = useTheme();
  const [arrowIsUp, setArrowIsUp] = useState(true);
  const isMobile = window.innerWidth < 768;

  useEffect(() => {
    const interval = setInterval(() => {
      setArrowIsUp((prevArrowIsUp) => !prevArrowIsUp);
    }, 500);
    return () => clearInterval(interval);
  }, []);

  const iconVariants = {
    up: {
      y: -5,
      transition: { duration: 1.5 },
    },
    down: {
      y: 5,
      transition: { duration: 1.5 },
    },
  };

  return (
    <div className="">
      <button className={`flex flex-row text-base md:text-xl font-medium ml-5 ${isDarkMode ? 'text-slate-50' : 'text-slate-600'}`}>
        <div className="flex flex-col items-center">
          <motion.div animate={arrowIsUp ? 'up' : 'down'} variants={iconVariants} className={`flex justify-center  ${isDarkMode ? 'text-slate-50' : 'text-slate-600'}`}>
            <FaArrowDown />
          </motion.div>
          <div className={`w-5 border-b-4 flex justify-center ${isDarkMode ? 'border-slate-50' : 'border-slate-600'}`}></div>
        </div>
        <div>{isMobile ? <div className="ml-3">Resume</div> : <div className="ml-3">Download Resume</div>}</div>
      </button>
    </div>
  );
};

export default DownloadResumeButton;
