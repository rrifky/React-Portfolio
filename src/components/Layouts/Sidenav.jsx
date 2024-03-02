import { useState } from 'react';
import { IoPartlySunnyOutline } from 'react-icons/io5';
import { BsCloudMoon } from 'react-icons/bs';
import { RiHome6Line } from 'react-icons/ri';
import { FiUser } from 'react-icons/fi';
import { BsSuitcaseLg } from 'react-icons/bs';
import { GoProject } from 'react-icons/go';
import { FaRegAddressCard } from 'react-icons/fa6';
import { FaHeart } from 'react-icons/fa';
import { IoIosArrowForward } from 'react-icons/io';
import { motion } from 'framer-motion';

const Sidenav = () => {
  const [isSun, setIsSun] = useState(true);
  const [isExpanded, setIsExpanded] = useState(false);

  const textVariants = {
    expanded: { opacity: 1, x: 0 },
    collapsed: { opacity: 0, x: 60 },
  };

  const handleClick = () => {
    setIsSun(!isSun);
  };

  const handleExpandToggle = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className={`w-[${isExpanded ? '200px' : '70px'}] h-screen fixed left-0 top-0 rounded-tr-2xl rounded-br-2xl transition-all duration-500 ease-in-out`} style={{ boxShadow: '3px 0px 10px rgba(0, 0, 0, 0.1)' }}>
      <div className="flex flex-col justify-between h-full px-2">
        <div className="flex flex-col border-b border-slate-300">
          <div className="flex justify-center mt-4 mb-8">
            <img src="images/rifky.png" alt="Rifky" className="w-[50px] h-[50px] rounded-full border-2 border-white shadow-md" />
            <span
              onClick={handleExpandToggle}
              className={`absolute h-[20px] w-[20px] top-[32px] left-[60px] bg-white rounded-full shadow-md flex items-center justify-center transition duration-500 ease-in-out ${isExpanded ? 'translate-x-[130px] rotate-180 ' : ''}`}
            >
              <IoIosArrowForward />
            </span>
          </div>
          <div onClick={handleClick} className="flex justify-center text-slate-700 mb-6">
            {isSun ? <IoPartlySunnyOutline size={20} /> : <BsCloudMoon size={20} />}
          </div>
        </div>
        <div className="flex flex-col text-slate-700">
          <span className={`flex ${isExpanded ? 'justify-start ml-[16.5px]' : 'justify-center'} my-6`}>
            {isExpanded ? (
              <div className="flex items-center">
                <RiHome6Line className="text-xl" />
                <motion.span className="ml-2 text-sm" initial="collapsed" animate={isExpanded ? 'expanded' : 'collapsed'} variants={textVariants} transition={{ duration: 0.5 }}>
                  Home
                </motion.span>
              </div>
            ) : (
              <RiHome6Line className="text-xl" />
            )}
          </span>
          <span className={`flex ${isExpanded ? 'justify-start ml-[17px]' : 'justify-center'} my-6`}>
            {isExpanded ? (
              <div className="flex items-center">
                <FiUser className="text-xl" />
                <motion.span className="ml-2 text-sm" initial="collapsed" animate={isExpanded ? 'expanded' : 'collapsed'} variants={textVariants} transition={{ duration: 0.5 }}>
                  About
                </motion.span>
              </div>
            ) : (
              <FiUser className="text-xl" />
            )}
          </span>
          <span className={`flex ${isExpanded ? 'justify-start ml-[17px]' : 'justify-center'} my-6`}>
            {isExpanded ? (
              <div className="flex items-center">
                <BsSuitcaseLg className="text-xl" />
                <motion.span className="ml-2 text-sm" initial="collapsed" animate={isExpanded ? 'expanded' : 'collapsed'} variants={textVariants} transition={{ duration: 0.5 }}>
                  Experience
                </motion.span>
              </div>
            ) : (
              <BsSuitcaseLg className="text-xl" />
            )}
          </span>
          <span className={`flex ${isExpanded ? 'justify-start ml-[17px]' : 'justify-center'} my-6`}>
            {isExpanded ? (
              <div className="flex items-center">
                <GoProject className="text-xl" />
                <motion.span className="ml-2 text-sm" initial="collapsed" animate={isExpanded ? 'expanded' : 'collapsed'} variants={textVariants} transition={{ duration: 0.5 }}>
                  Project
                </motion.span>
              </div>
            ) : (
              <GoProject className="text-xl" />
            )}
          </span>
          <span className={`flex ${isExpanded ? 'justify-start ml-[17px]' : 'justify-center'} my-6`}>
            {isExpanded ? (
              <div className="flex items-center">
                <FaRegAddressCard className="text-xl" />
                <motion.span className="ml-2 text-sm" initial="collapsed" animate={isExpanded ? 'expanded' : 'collapsed'} variants={textVariants} transition={{ duration: 0.5 }}>
                  Contact
                </motion.span>
              </div>
            ) : (
              <FaRegAddressCard className="text-xl" />
            )}
          </span>
        </div>
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