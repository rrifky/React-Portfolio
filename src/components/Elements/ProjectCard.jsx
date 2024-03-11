import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode } from 'swiper/modules';
import { ProjectContent } from '../../data/projectContent';
import { Link } from 'react-router-dom';

import 'swiper/css';
import 'swiper/css/free-mode';
import { useTheme } from '../../context/ThemeContext';

const ProjectCard = () => {
  return (
    <div className="mt-8 border-b border-slate-300">
      <Swiper
        spaceBetween={10}
        breakpoints={{
          320: {
            slidesPerView: 1.1,
            spaceBetween: 10,
          },
          640: {
            slidesPerView: 1.8,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 2.2,
            spaceBetween: 10,
          },
          1024: {
            slidesPerView: 2.5,
            spaceBetween: 10,
          },
          1600: {
            slidesPerView: 3.2,
            spaceBetween: 10,
          },
        }}
        freeMode={true}
        modules={[FreeMode]}
      >
        {ProjectContent.map((project, id) => (
          <SwiperSlide key={id}>
            <ProjectCardItem project={project} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

const ProjectCardItem = ({ project }) => {
  const { isDarkMode } = useTheme();

  return (
    <div className={`max-w-md rounded-md overflow-hidden transform transition shadow duration-500 ease-in-out hover:scale-95 cursor-pointer mb-10 ${isDarkMode ? 'shadow-white hover:shadow-white hover:shadow-md' : 'hover:shadow-md'}`}>
      <Link to={`/detailproject/${project.id}`}>
        <div className="relative">
          <img className="w-full object-cover h-36 md:h-56" src={project.image} alt="Project Image" />
        </div>
        <div className="p-4">
          <ProjectCardHeader title={project.title} />
          <ProjectCardBody desc={project.desc} />
        </div>
      </Link>
    </div>
  );
};

const ProjectCardHeader = ({ title }) => {
  const { isDarkMode } = useTheme();

  return <h3 className={`text-lg font-medium mb-2 ${isDarkMode ? 'text-slate-50' : 'text-slate-800'}`}>{title}</h3>;
};

const ProjectCardBody = ({ desc }) => {
  const { isDarkMode } = useTheme();

  return <p className={`text-sm mb-4 ${isDarkMode ? 'text-slate-200' : 'text-slate-600'}`}>{desc}</p>;
};

export default ProjectCard;
