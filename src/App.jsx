import React from 'react';
import Profile from './components/Fragments/ProfileSection';
import ExperienceSection from './components/Fragments/ExperienceSection';
import ProjectSection from './components/Fragments/ProjectSection';
import SkillSection from './components/Fragments/SkillSection';

export default function App() {
  return (
    <div className="mx-10 md:mx-32 lg:mx-48 xl:mx-60 mb-96">
      <Profile />
      <ExperienceSection />
      <ProjectSection />
      <SkillSection />
    </div>
  );
}
