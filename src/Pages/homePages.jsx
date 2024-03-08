import React, { useEffect, useState } from 'react';
import Profile from '../components/Fragments/ProfileSection';
import ExperienceSection from '../components/Fragments/ExperienceSection';
import ProjectSection from '../components/Fragments/ProjectSection';
import ContactSection from '../components/Fragments/ContactSection';
import Sidenav from '../components/Layouts/Sidenav';
import Mobilenav from '../components/Layouts/Mobilenav';
import SkillSection from '../components/Fragments/SkillSection';
import { useTheme } from '../context/ThemeContext';
import { motion } from 'framer-motion';

const HomePages = () => {
  const [isSidenavReady, setIsSidenavReady] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const { isDarkMode } = useTheme();

  useEffect(() => {
    // Set isSidenavReady ke true setelah komponen dimuat
    setIsSidenavReady(true);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1080);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div className={`flex justify-center ${isDarkMode ? 'bg-zinc-900' : 'bg-white'}`}>
      <div className="mx-auto max-w-[340px] mb-8 md:max-w-[720px] lg:max-w-[920px]">
        {isMobile && isSidenavReady && <Mobilenav />}
        {!isMobile && isSidenavReady && <Sidenav />}
        <motion.div className="xl:ml-8 mt-[80px] xl:mt-0" variants={sectionVariants} initial="hidden" animate="visible">
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
