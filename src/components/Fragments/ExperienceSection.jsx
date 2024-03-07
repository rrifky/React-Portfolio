import { useEffect, useState } from 'react';
import { ExperienceContent } from '../../data/experienceContent';
import ExperienceCard from '../Elements/ExperienceCard';
import TitleSection from '../Elements/TitleSection';
import { Link } from 'react-router-dom';
import { useTheme } from '../../context/ThemeContext';

const ExperienceSection = () => {
  const { isDarkMode } = useTheme();
  const [experiences, setExperiences] = useState([]);

  useEffect(() => {
    setExperiences(ExperienceContent);
  }, []);

  return (
    <div className="border-b border-slate-300">
      <TitleSection title="Experience" subtitle="My experience" />
      {experiences.length > 0 &&
        experiences.map((experience) => (
          <Link key={experience.id} to={`/detailexperience/${experience.id}`} target="_blank">
            <ExperienceCard>
              <ExperienceCard.ExperienceHeader image={experience.image} />
              <ExperienceCard.ExperienceBody title={experience.title} subtitle={experience.subtitle} date={experience.date} />
            </ExperienceCard>
          </Link>
        ))}
    </div>
  );
};

export default ExperienceSection;
