'use client'

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
// @ts-expect-error: Swiper types may not resolve due to package.json exports, but this import is correct for Swiper v9
import { Navigation, Pagination, Autoplay, A11y, Keyboard } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const teachers = [
  {
    name: 'Muhammad Ayyubxon',
    title: '20 yillik tajriba',
    img: 'https://i.postimg.cc/DfgSnGVZ/Post-to-FB-Muzaffar-1.png',
  },
  {
    name: 'Kamola Rahimova',
    title: '8 yil Moliya Sohasida',
    img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face',
  },
  {
    name: 'Muzaffar Husniddinov',
    title: '12 yil Biznes Sohasida',
    img: 'https://i.postimg.cc/BvPnZWxg/Post-to-FB-Muzaffar.png',
  },
];

const TeacherCarousel = () => {
  return (
    <section aria-label="Ustozlar Karuseli" className="w-full max-w-3xl mx-auto">
      <h2 className="sr-only">Bizning Ustozlar</h2>
      <Swiper
        modules={[Navigation, Pagination, Autoplay, A11y, Keyboard]}
        loop
        slidesPerView={1}
        spaceBetween={40}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false, pauseOnMouseEnter: true }}
        keyboard={{ enabled: true, onlyInViewport: true }}
        a11y={{
          prevSlideMessage: 'Previous slide',
          nextSlideMessage: 'Next slide',
          slideLabelMessage: '{{index}} / {{slidesLength}}',
          paginationBulletMessage: 'Go to slide {{index}}',
        }}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 1 },
          1024: { slidesPerView: 1 },
        }}
        className="rounded-3xl shadow-2xl border border-gray-200 bg-gradient-to-br from-white via-gray-50 to-green-50 p-12"
        aria-roledescription="carousel"
        aria-label="Teacher Images"
      >
        {teachers.map((teacher, idx) => (
          <SwiperSlide
            key={teacher.name}
            aria-label={`Teacher ${idx + 1}: ${teacher.name}`}
            className="flex flex-col items-center bg-white rounded-3xl shadow-xl border border-gray-100 p-14 focus:outline-none transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 group"
            tabIndex={0}
          >
            <div className="relative w-56 h-56 md:w-72 md:h-72 mb-10 rounded-full overflow-hidden shadow-2xl border-4 border-green-200 group-hover:border-green-400 transition-all duration-300">
              <img
                src={teacher.img}
                alt={teacher.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                style={{ objectFit: 'cover' }}
              />
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-green-400/10 to-green-600/10 opacity-0 group-hover:opacity-60 transition-opacity duration-300" />
            </div>
            <span className="text-5xl font-extrabold text-gray-900 mb-4 text-center group-hover:text-green-700 transition-colors duration-300 leading-tight">
              {teacher.name}
            </span>
            <span className="text-2xl text-green-600 font-semibold mb-4 text-center">
              {teacher.title}
            </span>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default TeacherCarousel; 