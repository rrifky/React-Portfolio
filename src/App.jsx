import React, { useEffect, useState } from 'react';
import Profile from './components/Fragments/ProfileSection';
import ExperienceSection from './components/Fragments/ExperienceSection';
import ProjectSection from './components/Fragments/ProjectSection';
import SkillSection from './components/Fragments/SkillSection';
import ContactSection from './components/Fragments/ContactSection';
import Sidenav from './components/Layouts/Sidenav';
import Mobilenav from './components/Layouts/Mobilenav';

export default function App() {
  const [isMobile, setIsMobile] = useState(false);

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

  return (
    <div className="mx-auto max-w-[340px] mb-8 md:max-w-[720px] lg:max-w-[920px]">
      {isMobile ? <Mobilenav /> : <Sidenav />}
      <div className="xl:ml-8 mt-[80px] xl:mt-0">
        <Profile />
        <ExperienceSection />
        <ProjectSection />
        <SkillSection />
        <ContactSection />
      </div>
    </div>
  );
}
