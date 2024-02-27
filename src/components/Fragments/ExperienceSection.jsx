import { useEffect, useState } from 'react';
import { ExperienceContent } from '../../data/experienceContent';
import ExperienceCard from '../Elements/ExperienceCard';
import TitleSection from '../Elements/TitleSection';

const ExperienceSection = () => {
  const [experiences, setExperiences] = useState([]);

  useEffect(() => {
    setExperiences(ExperienceContent);
  }, []);

  return (
    <div className="border-b border-slate-300">
      <TitleSection title="Experience" subtitle="My experience" />
      {experiences.length > 0 &&
        experiences.map((experience) => (
          <ExperienceCard key={experience.id}>
            <ExperienceCard.ExperienceHeader image={experience.image} />
            <ExperienceCard.ExperienceBody title={experience.title} subtitle={experience.subtitle} date={experience.date} />
          </ExperienceCard>
        ))}
    </div>
  );
};

export default ExperienceSection;
