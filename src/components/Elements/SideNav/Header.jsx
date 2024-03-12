import { IoIosArrowForward } from 'react-icons/io';
import { motion } from 'framer-motion';
import pfp from '/images/rifky.png';

const Header = ({ isExpanded, handleExpandToggle, isDarkMode, textVariants }) => {
  return (
    <div className="flex justify-center mt-4 mb-8">
      <img src={pfp} alt="Rifky" className={`w-[50px] h-[50px] rounded-full border-2  shadow ${isDarkMode ? 'shadow-slate-50 border-zinc-950' : 'border-white'}`} />
      {isExpanded && (
        <motion.div
          className={` flex flex-col my-auto min-w-[130px] ml-2 ${isDarkMode ? 'text-slate-50' : 'text-slate-700'}`}
          initial="collapsed"
          animate={isExpanded ? 'expanded' : 'collapsed'}
          variants={textVariants}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-sm font-medium">Frontend Developer</h3>
          <h4 className="text-xs">Rifky Alfarez</h4>
        </motion.div>
      )}
      <span
        onClick={handleExpandToggle}
        className={` ${isDarkMode ? 'bg-zinc-950 shadow-slate-50' : 'bg-white'} absolute h-[20px] w-[20px] top-[32px] left-[60px]  rounded-full shadow flex items-center justify-center transition duration-500 ease-in-out te ${
          isExpanded && 'translate-x-[130px] rotate-180'
        }`}
      >
        <IoIosArrowForward />
      </span>
    </div>
  );
};

export default Header;
