import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import { ProjectContent } from '../data/projectContent';
import { motion } from 'framer-motion';

const ProjectPages = () => {
  const { isDarkMode } = useTheme();

  return (
    <div className={`${isDarkMode ? 'bg-zinc-900' : 'bg-white'}`}>
      <motion.div className="mx-auto max-w-[340px] md:max-w-[720px] lg:max-w-[920px]" initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
        <div className="flex flex-col pt-16 xl:pt-0 xl:ml-8">
          <div className="pt-5 border-b pb-2 border-slate-300">
            <h1 className={`text-xl md:text-3xl font-medium ${isDarkMode ? 'text-slate-50' : 'text-slate-800'}`}>Projects</h1>
          </div>
          <div className="mt-8 flex flex-wrap">
            {ProjectContent.map((project, id) => (
              <Link
                to={`/detailproject/${project.id}`}
                className={`max-w-[420px] mr-5 mb-5 rounded-lg overflow-hidden shadow  cursor-pointer transition-all duration-500 ease-in-out hover:scale-105 ${isDarkMode ? 'shadow-white hover:shadow-md hover:shadow-white' : 'shadow-md'}`}
                key={id}
              >
                <header>
                  <img src={project.image} className="w-full object-cover h-36 md:h-56" />
                </header>
                <body className="p-5">
                  <h3 className={`text-lg font-medium mb-2 ${isDarkMode ? 'text-slate-50' : 'text-slate-800'}`}>{project.title}</h3>
                  <p className={`text-sm mb-2 ${isDarkMode ? 'text-slate-200' : 'text-slate-600'}`}>{project.desc.substring(0, 100)}...</p>
                  <footer className={`${isDarkMode ? 'text-slate-200' : 'text-slate-600'}`}>footer</footer>
                </body>
              </Link>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectPages;
