import TitleSection from '../Elements/TitleSection';
import ProjectCard from '../Elements/ProjectCard';

const ProjectSection = () => {
  return (
    <div>
      <div>
        <TitleSection title="Projects" subtitle="My projects showcase" />
      </div>
      <ProjectCard />
    </div>
  );
};

export default ProjectSection;
