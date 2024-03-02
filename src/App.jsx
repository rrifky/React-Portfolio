import React from 'react';
import Profile from './components/Fragments/ProfileSection';
import ExperienceSection from './components/Fragments/ExperienceSection';
import ProjectSection from './components/Fragments/ProjectSection';
import SkillSection from './components/Fragments/SkillSection';
import ContactSection from './components/Fragments/ContactSection';
import Sidenav from './components/Layouts/Sidenav';

export default function App() {
  return (
    <div className="mx-auto max-w-[340px] mb-8 md:max-w-[720px] lg:max-w-[920px]">
      <Sidenav />
      <div className='ml-8'>
      <Profile />
      <ExperienceSection />
      <ProjectSection />
      <SkillSection />
      <ContactSection />
      </div>
    </div>
  );
}
