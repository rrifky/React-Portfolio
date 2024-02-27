import { useState, useEffect } from 'react';
import TitleSection from '../Elements/TitleSection';
import Marquee from 'react-fast-marquee';
import { SkillsContent } from '../../data/skillsContent';

const SkillSection = () => {
  const [shuffledSkills, setShuffledSkills] = useState([]);

  useEffect(() => {
    const shuffleArray = (array) => {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
      return array;
    };

    const shuffled = shuffleArray(SkillsContent);
    setShuffledSkills(shuffled);
  }, []);

  const halfLength = Math.ceil(shuffledSkills.length / 2);
  const topSkills = shuffledSkills.slice(0, halfLength);
  const bottomSkills = shuffledSkills.slice(halfLength);

  return (
    <div>
      <div>
        <TitleSection title="Skills" subtitle="My coding skills" />
      </div>
      <Marquee gradient={true} gradientWidth={50} direction="left" speed={40}>
        <div className="flex flex-row">
          {topSkills.map((skill) => (
            <div key={skill.id} className="mt-8 rounded-3xl max-w-[200px] py-2 px-4 mr-4 mb-4" style={{ boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)' }}>
              <div className="flex items-center">
                <div>
                  <img src={skill.image} alt={skill.name} width={30} height={30} />
                </div>
                <div className="ml-4 text-xl">{skill.name}</div>
              </div>
            </div>
          ))}
        </div>
      </Marquee>
      <Marquee gradient={true} gradientWidth={50} direction="right" speed={40}>
        <div className="flex flex-row">
          {bottomSkills.map((skill) => (
            <div key={skill.id} className="mt-4 rounded-3xl max-w-[200px] py-2 px-4 mr-4 mb-4" style={{ boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)' }}>
              <div className="flex items-center">
                <div>
                  <img src={skill.image} alt={skill.name} width={30} height={30} />
                </div>
                <div className="ml-4 text-xl">{skill.name}</div>
              </div>
            </div>
          ))}
        </div>
      </Marquee>
    </div>
  );
};

export default SkillSection;
