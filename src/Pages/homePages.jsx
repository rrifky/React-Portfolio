import Profile from '../components/Fragments/ProfileSection';
import ExperienceSection from '../components/Fragments/ExperienceSection';
import ProjectSection from '../components/Fragments/ProjectSection';
import ContactSection from '../components/Fragments/ContactSection';
import SkillSection from '../components/Fragments/SkillSection';
import { useTheme } from '../context/ThemeContext';
import { motion } from 'framer-motion';

const HomePages = () => {
  const { isDarkMode } = useTheme();

  return (
    <div className={`flex justify-center ${isDarkMode ? 'bg-zinc-900' : 'bg-white'}`}>
      <div className="mx-auto max-w-[340px] mb-8 md:max-w-[720px] lg:max-w-[920px]">
        <motion.div className="xl:ml-8 mt-[80px] xl:mt-0" initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
          <Profile />
          <ExperienceSection />
          <ProjectSection />
          <SkillSection />
          <ContactSection />
        </motion.div>
      </div>
    </div>
  );
};

export default HomePages;
