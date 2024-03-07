import { BsCloudMoon, BsMoonStarsFill } from 'react-icons/bs';
import { IoPartlySunnyOutline, IoSunny } from 'react-icons/io5';

const DarkModeToggle = ({ isDarkMode, handleToggle, isExpanded }) => {
  return (
    <div>
      {isExpanded ? (
        <div className={`flex justify-center mb-6 min-w-[170px]`}>
          <div className={`relative min-w-[60px] h-[30px] ${isDarkMode ? 'bg-blue-950 border-blue-950 shadow shadow-slate-50' : 'bg-yellow-300 border-yellow-300'}  border-2  rounded-2xl`}>
            <input type="checkbox" checked={isDarkMode} onChange={handleToggle} className="absolute appearance-none cursor-pointer w-full h-full rounded-2xl transition-colors duration-300 ease-in-out focus:outline-none z-50" />
            <div
              className={`absolute left-0 top-0 flex justify-center ${isDarkMode ? 'bg-slate-950' : 'bg-white'} rounded-full items-center w-1/2 h-full transition-transform duration-300 ease-in-out transform ${
                isDarkMode ? 'translate-x-full' : ''
              }`}
            >
              {isDarkMode ? <BsMoonStarsFill size={20} className="text-yellow-300" /> : <IoSunny size={20} className="text-yellow-400" />}
            </div>
          </div>
        </div>
      ) : (
        <div onClick={handleToggle} className={`flex justify-center  mb-6 ${isDarkMode ? 'text-slate-50' : 'text-slate-700'}`}>
          {!isDarkMode ? <IoPartlySunnyOutline size={20} /> : <BsCloudMoon size={20} />}
        </div>
      )}
    </div>
  );
};

export default DarkModeToggle;
