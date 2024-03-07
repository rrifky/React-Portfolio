import { useParams } from 'react-router-dom';
import { ExperienceContent } from '../data/experienceContent';

const DetailExperience = () => {
  const { id } = useParams();

  const experience = ExperienceContent.find((experience) => experience.id === parseInt(id));

  if (!experience) {
    return <div>Experience tidak ditemukan!</div>;
  }

  return (
    <div>
      <img src={experience.image} alt={experience.title} />
      <h1>{experience.id}</h1>
      <h2>{experience.title}</h2>
      <p>{experience.subtitle}</p>
      <p>{experience.date}</p>
    </div>
  );
};

export default DetailExperience;
