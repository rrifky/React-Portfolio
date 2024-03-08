import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../../context/ThemeContext';
import DarkModeToggle from '../Elements/MobileNav/DarkModeToggle';
import MobileMenu from '../Elements/MobileNav/MobileMenu';
import useScrollPosition from '../../hooks/useScroll';
import Hamburger from '../Elements/MobileNav/Hamburger';

const Mobilenav = () => {
  const { isDarkMode, toggleDarkMode } = useTheme();
  const isScrolled = useScrollPosition();
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    toggleDarkMode();
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

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
        <DarkModeToggle isDarkMode={isDarkMode} handleToggle={handleToggle} />
        <Hamburger isOpen={isOpen} toggleMenu={toggleMenu} isDarkMode={isDarkMode} />
        <MobileMenu isOpen={isOpen} isDarkMode={isDarkMode} />
      </div>
    </nav>
  );
};

export default Mobilenav;
