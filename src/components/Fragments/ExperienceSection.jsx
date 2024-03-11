import { useEffect, useState } from 'react';
import { ExperienceContent } from '../../data/experienceContent';
import ExperienceCard from '../Elements/ExperienceCard';
import TitleSection from '../Elements/TitleSection';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/free-mode';

const ExperienceSection = () => {
  const [experiences, setExperiences] = useState([]);

  useEffect(() => {
    setExperiences(ExperienceContent);
  }, []);

  return (
    <div className="border-b border-slate-300">
      <TitleSection title="Experience" subtitle="My experience" />
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
        {experiences.length > 0 &&
          experiences.map((experience) => (
            <SwiperSlide key={experience.id}>
              <Link key={experience.id} to={`/detailexperience/${experience.id}`} target="_blank">
                <ExperienceCard>
                  <ExperienceCard.ExperienceHeader image={experience.image} />
                  <ExperienceCard.ExperienceBody title={experience.title} subtitle={experience.subtitle} date={experience.date} />
                </ExperienceCard>
              </Link>
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
};

export default ExperienceSection;
