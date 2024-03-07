import { useParams } from 'react-router-dom';
import { ProjectContent } from '../data/projectContent';

const DetailProject = () => {
  const { id } = useParams();
  const project = ProjectContent.find((project) => project.id === parseInt(id));

  if (!project) {
    return <div>Proyek tidak ditemukan!</div>;
  }

  return (
    <div>
      <h1>{project.id}</h1>
      <h2>{project.title}</h2>
      <p>{project.desc}</p>
      <img src={project.image} alt={project.title} />
    </div>
  );
};

export default DetailProject;
