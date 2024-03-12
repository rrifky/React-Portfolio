import { useParams } from 'react-router-dom';
import { ExperienceContent } from '../data/experienceContent';
import { useTheme } from '../context/ThemeContext';
import { motion } from 'framer-motion';

const DetailExperience = () => {
  const { isDarkMode } = useTheme();
  const { id } = useParams();

  const experience = ExperienceContent.find((experience) => experience.id === parseInt(id));

  if (!experience) {
    return <div>Experience tidak ditemukan!</div>;
  }

  return (
    <div>
      <div className={`flex justify-center ${isDarkMode ? 'bg-zinc-900' : 'bg-white'}`}>
        <motion.div className="flex flex-col w-[920px] h-screen px-4" initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
          <div className="flex justify-between xl:pt-8 pt-16 pb-2 border-b border-slate-300">
            <div className="flex flex-col">
              <div className={`text-lg xl:text-3xl font-medium ${isDarkMode ? 'text-slate-50' : 'text-slate-800'}`}>{experience.subtitle}</div>
              <div className={`xl:text-lg text-base py-1 ${isDarkMode ? 'text-slate-50' : 'text-slate-700'}`}>{experience.title}</div>
              <div className={`xl:text-sm text-xs ${isDarkMode ? 'text-slate-50' : 'text-slate-600'}`}>{experience.date}</div>
            </div>
            <div className="my-auto">
              <img src={experience.image} className="w-16 h-w-16 " />
            </div>
          </div>
          <div className={`pt-5 ${isDarkMode ? 'text-slate-50' : 'text-slate-700'}`}>{experience.desc}</div>
        </motion.div>
      </div>
    </div>
  );
};

export default DetailExperience;
