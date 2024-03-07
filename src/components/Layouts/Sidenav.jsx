import { useState } from 'react';
import { FaHeart } from 'react-icons/fa';
import { useTheme } from '../../context/ThemeContext';
import Header from '../Elements/SideNav/Header';
import DarkModeToggle from '../Elements/SideNav/DarkmodeToggle';
import MenuItems from '../Elements/SideNav/MenuItems';

const Sidenav = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const { isDarkMode, toggleDarkMode } = useTheme();

  const handleToggle = () => {
    toggleDarkMode();
  };

  const handleExpandToggle = () => {
    setIsExpanded(!isExpanded);
  };

  const textVariants = {
    expanded: { opacity: 1, x: 0 },
    collapsed: { opacity: 0, x: 60 },
  };

  const boxShadowColor = isDarkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)';

  return (
    <div
      className={`${isExpanded ? 'w-[200px]' : 'w-[70px]'} h-screen fixed left-0 top-0 rounded-tr-2xl rounded-br-2xl transition-all duration-300 ease-in-out  ${isDarkMode && 'bg-slate-800 text-slate-50'} `}
      style={{ boxShadow: `3px 0px 10px ${boxShadowColor}` }}
    >
      <div className="flex flex-col justify-between h-full px-2">
        <div className="flex flex-col border-b border-slate-300">
          <Header isExpanded={isExpanded} handleExpandToggle={handleExpandToggle} isDarkMode={isDarkMode} textVariants={textVariants} />
          <DarkModeToggle isDarkMode={isDarkMode} handleToggle={handleToggle} isExpanded={isExpanded} />
        </div>
        <MenuItems isExpanded={isExpanded} textVariants={textVariants} isDarkMode={isDarkMode} />
        <div className="flex justify-center mb-5 text-pink-600">
          <span>
            <FaHeart />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Sidenav;
