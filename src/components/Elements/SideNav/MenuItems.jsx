import { Link } from 'react-router-dom';
import { RiHome6Line } from 'react-icons/ri';
import { FiUser } from 'react-icons/fi';
import { BsSuitcaseLg } from 'react-icons/bs';
import { GoProject } from 'react-icons/go';
import { FaRegAddressCard } from 'react-icons/fa6';
import { motion } from 'framer-motion';

const MenuItems = ({ isExpanded, textVariants, isDarkMode }) => {
  return (
    <div className={`flex flex-col ${isDarkMode ? 'text-slate-50' : ' text-slate-700'}`}>
      <Link to={'/'} className={`flex ${isExpanded ? 'justify-start ml-[16.5px]' : 'justify-center'} my-6`}>
        {isExpanded ? (
          <div className="flex items-center">
            <RiHome6Line className="text-xl" />
            <motion.span className="ml-2 text-sm" initial="collapsed" animate={isExpanded ? 'expanded' : 'collapsed'} variants={textVariants} transition={{ duration: 0.5 }}>
              Home
            </motion.span>
          </div>
        ) : (
          <Link to={'/'}>
            <RiHome6Line className="text-xl" />
          </Link>
        )}
      </Link>
      <Link to={'/about'} className={`flex ${isExpanded ? 'justify-start ml-[17px]' : 'justify-center'} my-6`}>
        {isExpanded ? (
          <div className="flex items-center">
            <FiUser className="text-xl" />
            <motion.span className="ml-2 text-sm" initial="collapsed" animate={isExpanded ? 'expanded' : 'collapsed'} variants={textVariants} transition={{ duration: 0.5 }}>
              About
            </motion.span>
          </div>
        ) : (
          <Link to={'/about'}>
            <FiUser className="text-xl" />
          </Link>
        )}
      </Link>
      <Link to={'/experience'} className={`flex ${isExpanded ? 'justify-start ml-[17px]' : 'justify-center'} my-6`}>
        {isExpanded ? (
          <div className="flex items-center">
            <BsSuitcaseLg className="text-xl" />
            <motion.span className="ml-2 text-sm" initial="collapsed" animate={isExpanded ? 'expanded' : 'collapsed'} variants={textVariants} transition={{ duration: 0.5 }}>
              Experience
            </motion.span>
          </div>
        ) : (
          <Link to={'/experience'}>
            <BsSuitcaseLg className="text-xl" />
          </Link>
        )}
      </Link>
      <Link to={'/project'} className={`flex ${isExpanded ? 'justify-start ml-[17px]' : 'justify-center'} my-6`}>
        {isExpanded ? (
          <div className="flex items-center">
            <GoProject className="text-xl" />
            <motion.span className="ml-2 text-sm" initial="collapsed" animate={isExpanded ? 'expanded' : 'collapsed'} variants={textVariants} transition={{ duration: 0.5 }}>
              Project
            </motion.span>
          </div>
        ) : (
          <Link to={'/project'}>
            <GoProject className="text-xl" />
          </Link>
        )}
      </Link>
      <Link to={'/contact'} className={`flex ${isExpanded ? 'justify-start ml-[17px]' : 'justify-center'} my-6`}>
        {isExpanded ? (
          <div className="flex items-center">
            <FaRegAddressCard className="text-xl" />
            <motion.span className="ml-2 text-sm" initial="collapsed" animate={isExpanded ? 'expanded' : 'collapsed'} variants={textVariants} transition={{ duration: 0.5 }}>
              Contact
            </motion.span>
          </div>
        ) : (
          <Link to={'/contact'}>
            <FaRegAddressCard className="text-xl" />
          </Link>
        )}
      </Link>
    </div>
  );
};

export default MenuItems;
