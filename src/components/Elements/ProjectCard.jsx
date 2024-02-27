import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';
import { ProjectContent } from '../../data/projectContent';

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
  return (
    <div className="max-w-md rounded-md overflow-hidden border border-gray-200 transform transition duration-500 ease-in-out hover:scale-95 hover:shadow-md cursor-pointer mb-10">
      <div className="relative">
        <img className="w-full object-cover h-56" src={project.image} alt="Project Image" />
      </div>
      <div className="p-4">
        <ProjectCardHeader title={project.title} />
        <ProjectCardBody desc={project.desc} />
      </div>
    </div>
  );
};

const ProjectCardHeader = ({ title }) => {
  return <h3 className="text-lg font-medium mb-2">{title}</h3>;
};

const ProjectCardBody = ({ desc }) => {
  return <p className="text-gray-600 text-sm mb-4">{desc}</p>;
};

export default ProjectCard;
