const Hamburger = ({ isOpen, toggleMenu, isDarkMode }) => {
  return (
    <div className="cursor-pointer" onClick={toggleMenu}>
      <div className={`h-[3px] w-[25px] ${isDarkMode ? 'bg-slate-50' : 'bg-slate-800'}  transition duration-300 ${isOpen ? 'rotate-45 translate-y-[7px]' : ''}`}></div>
      <div className={`h-[3px] w-[25px]  ${isDarkMode ? 'bg-slate-50' : 'bg-slate-800'} mt-1 transition-all duration-200 ${isOpen ? 'translate-x-[5px] opacity-0' : ''}`}></div>
      <div className={`h-[3px] w-[25px] ${isDarkMode ? 'bg-slate-50' : 'bg-slate-800'} mt-1 transition duration-300 ${isOpen ? '-rotate-45 -translate-y-[7px]' : ''}`}></div>
    </div>
  );
};

export default Hamburger;
