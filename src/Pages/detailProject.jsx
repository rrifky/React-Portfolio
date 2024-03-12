import { useParams } from 'react-router-dom';
import { ProjectContent } from '../data/projectContent';
import { useTheme } from '../context/ThemeContext';
import { motion } from 'framer-motion';

const DetailProject = () => {
  const { id } = useParams();
  const project = ProjectContent.find((project) => project.id === parseInt(id));
  const { isDarkMode } = useTheme();

  if (!project) {
    return <div>Proyek tidak ditemukan!</div>;
  }

  return (
    <div className={`flex justify-center ${isDarkMode ? 'bg-zinc-900' : 'bg-white'}`}>
      <motion.div className="flex-col w-[920px] pt-16 xl:pt-5 px-5" initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
        <header className="border-b border-slate-300 pb-2">
          <h1 className={`text-xl md:text-3xl font-medium ${isDarkMode ? 'text-slate-50' : 'text-slate-800'}`}>{project.title}</h1>
        </header>
        <div className={`flex justify-between py-4 text-lg ${isDarkMode ? 'text-slate-50' : 'text-slate-800'}`}>
          <div>Tech Stack:</div>
          <div className="flex justify-around w-60">
            <div>Code</div>
            <div>|</div>
            <div>Demo</div>
          </div>
        </div>
        <div className="flex justify-center h-screen">
          <div className="flex flex-col">
            <img src={project.image} className="w-full object-cover h-[240px] md:h-[360px] lg:h-[480px]" />
            <p className={`pt-2 ${isDarkMode ? 'text-slate-50' : 'text-slate-800'}`}>{project.desc}</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default DetailProject;
