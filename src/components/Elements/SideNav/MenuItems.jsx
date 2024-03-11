import { Link, useLocation } from 'react-router-dom';
import { RiHome6Line } from 'react-icons/ri';
import { FiUser } from 'react-icons/fi';
import { BsSuitcaseLg } from 'react-icons/bs';
import { GoProject } from 'react-icons/go';
import { FaRegAddressCard } from 'react-icons/fa6';
import { motion } from 'framer-motion';
import { useTheme } from '../../../context/ThemeContext';

const MenuItem = ({ icon, path, title, isExpanded, textVariants }) => {
  const isActive = useLocation().pathname === path;
  const { isDarkMode } = useTheme();

  return (
    <Link
      to={path}
      className={`flex ${isExpanded ? 'justify-start' : 'justify-center'} my-6 p-2 rounded-xl ${isActive ? (isDarkMode ? 'bg-zinc-950' : 'bg-slate-200') : ''} ${
        isDarkMode ? 'transition duration-200 hover:bg-zinc-950 hover:scale-95' : 'transition duration-200 hover:bg-slate-200 hover:scale-95'
      } `}
    >
      {icon}
      {isExpanded && (
        <motion.span className="ml-2 text-sm" initial="collapsed" animate={isExpanded ? 'expanded' : 'collapsed'} variants={textVariants} transition={{ duration: 0.5 }}>
          {title}
        </motion.span>
      )}
    </Link>
  );
};

const MenuItems = ({ isExpanded, textVariants, isDarkMode }) => {
  return (
    <div className={`flex flex-col ${isDarkMode ? 'text-slate-50' : ' text-slate-700'} align-items-center`}>
      <MenuItem icon={<RiHome6Line className="text-xl" />} path="/" title="Home" isExpanded={isExpanded} textVariants={textVariants} />
      <MenuItem icon={<FiUser className="text-xl" />} path="/about" title="About" isExpanded={isExpanded} textVariants={textVariants} />
      <MenuItem icon={<GoProject className="text-xl" />} path="/project" title="Project" isExpanded={isExpanded} textVariants={textVariants} />
      <MenuItem icon={<FaRegAddressCard className="text-xl" />} path="/contact" title="Contact" isExpanded={isExpanded} textVariants={textVariants} />
    </div>
  );
};

export default MenuItems;
