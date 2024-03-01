import { SkillsContent } from '../../data/skillsContent';
import useShuffleArray from '../../hooks/useShuffleArray';
import Marquee from 'react-fast-marquee';

const MarqueeSkill = () => {
  const shuffledSkills = useShuffleArray(SkillsContent);

  const halfLength = Math.ceil(shuffledSkills.length / 2);
  const topSkills = shuffledSkills.slice(0, halfLength);
  const bottomSkills = shuffledSkills.slice(halfLength);

  return (
    <>
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
            <div key={skill.id} className="mt-4 rounded-3xl max-w-[200px] py-2 px-4 mr-4 mb-10" style={{ boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)' }}>
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
    </>
  );
};

export default MarqueeSkill;
