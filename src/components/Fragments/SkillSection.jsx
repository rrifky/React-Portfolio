import MarqueeSkill from '../Elements/MarqueeSkill';
import TitleSection from '../Elements/TitleSection';

const SkillSection = () => {
  return (
    <div>
      <div>
        <TitleSection title="Skills" subtitle="My coding skills" />
      </div>
      <MarqueeSkill />
    </div>
  );
};

export default SkillSection;
