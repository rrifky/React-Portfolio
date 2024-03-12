import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

const AboutPages = () => {
  const { isDarkMode } = useTheme();

  return (
    <div className={`${isDarkMode ? 'bg-zinc-900' : 'bg-white'}`}>
      <div className="flex justify-center">
        <motion.div className="flex flex-col w-[920px] px-2 xl:ml-8" initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
          {/* Header */}
          <div className="pt-16 xl:pt-5 border-b pb-2 border-slate-300">
            <h1 className={`text-xl md:text-3xl font-bold ${isDarkMode ? 'text-slate-50' : 'text-slate-900'}`}>About</h1>
          </div>
          {/* sub */}
          <div className="py-4">
            <h2 className={`text-lg md:text-xl font-medium ${isDarkMode ? 'text-slate-50' : 'text-slate-800'}`}>A Glimpse of Myself</h2>
          </div>
          {/* foto + desc */}
          <div>
            <p className={`${isDarkMode ? 'text-slate-50' : 'text-slate-800'}`}>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore mollitia sequi, accusamus exercitationem modi reiciendis eum sapiente eius quas vitae quam molestiae quibusdam, illum totam voluptate iusto, debitis
              voluptates nihil perferendis nemo blanditiis nisi consectetur. Similique adipisci ullam magnam soluta assumenda, ipsum impedit architecto eaque iusto, illo ipsam cupiditate magni.
            </p>
          </div>
          {/* edu n exp */}
          <div>
            <h2 className={`py-4 text-lg md:text-xl font-medium ${isDarkMode ? 'text-slate-50' : 'text-slate-800'}`}>Education and Experience</h2>
            <p className={`${isDarkMode ? 'text-slate-50' : 'text-slate-800'}`}>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur, asperiores sequi. In, itaque blanditiis! Reiciendis amet error voluptatibus cum consectetur eveniet, deleniti quidem molestiae odit obcaecati tempore
              molestias ea quae tempora? Possimus eaque tenetur debitis veritatis quaerat sapiente dignissimos cum ipsa, non molestiae, tempore quis architecto id. Quisquam, ab obcaecati!
            </p>
            <p className={`pt-2 ${isDarkMode ? 'text-slate-50' : 'text-slate-800'}`}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ab debitis facilis eaque fugit esse quae consequuntur quibusdam, nostrum aspernatur necessitatibus laudantium quaerat voluptatibus beatae ad libero est rerum.
              Iure, suscipit repudiandae. Atque, provident natus sint qui deserunt modi at libero praesentium reiciendis placeat ducimus nesciunt vero magni dolore sapiente.
            </p>
          </div>
          {/* skill set */}
          <div>
            <h2 className={`py-4 text-lg md:text-xl font-medium ${isDarkMode ? 'text-slate-50' : 'text-slate-800'}`}>Skill Set</h2>
            <h3 className={`text-lg md:text-xl ${isDarkMode ? 'text-slate-50' : 'text-slate-700'}`}>Programming Languages</h3>
            <h3 className={`text-lg md:text-xl ${isDarkMode ? 'text-slate-50' : 'text-slate-700'}`}>Framework</h3>
            <h3 className={`text-lg md:text-xl ${isDarkMode ? 'text-slate-50' : 'text-slate-700'}`}>Database</h3>
            <h3 className={`text-lg md:text-xl ${isDarkMode ? 'text-slate-50' : 'text-slate-700'}`}>Tools</h3>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutPages;
