import React from 'react';
import { Link } from 'react-router-dom';

const MobileMenu = ({ isOpen, isDarkMode }) => {
  const darkModeVariant = isDarkMode ? 'bg-zinc-900 shadow-white text-slate-50' : 'bg-white text-slate-900';

  return (
    <div className={`absolute -top-20 left-0 right-0 ${darkModeVariant} shadow h-[450px] -z-50 ${isOpen ? 'block' : 'hidden'}`}>
      <div className="flex flex-col items-center h-full pt-44">
        {[
          { path: '/', label: 'Home' },
          { path: '/about', label: 'About' },
          { path: '/project', label: 'Project' },
          { path: '/contact', label: 'Contact' },
        ].map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`flex flex-col items-center py-4 ${isDarkMode ? 'text-slate-50' : 'text-slate-950'} ${window.location.pathname === item.path ? (isDarkMode ? 'bg-zinc-950 p-2 rounded-xl' : 'bg-slate-200 p-2 rounded-xl') : ''}`}
          >
            {item.label}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MobileMenu;
