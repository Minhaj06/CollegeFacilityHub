import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";

import "swiper/css";
import "swiper/css/pagination";

const slideItems = [
  {
    title: "College Campus",
    subtitle: "Discover Our Spacious Campus",
    image:
      "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1186&q=80",
  },
  {
    title: "Academic Excellence",
    subtitle: "Dedicated Faculty and Top-notch Education",
    image:
      "https://images.unsplash.com/photo-1601807576163-587225545555?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1073&q=80",
  },
  {
    title: "Sports Facilities",
    subtitle: "Stay Fit and Active with Our Sports Facilities",
    image:
      "https://images.unsplash.com/photo-1518989229647-6377f907a0b2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1174&q=80",
  },
];

const HomeBannerSlider = () => {
  return (
    <div className="mt-20">
      <Swiper
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {slideItems.map((slideItem, index) => (
          <SwiperSlide key={index}>
            <div
              className="h-96 max-h-screen w-full bg-cover bg-center"
              style={{ backgroundImage: `url(${slideItem.image})` }}
            >
              <div className="flex flex-col items-center justify-center h-full bg-opacity-40 bg-white  text-black px-6">
                <h3 className="text-4xl font-bold">{slideItem.title}</h3>
                <p className="mt-2 text-xl">{slideItem.subtitle}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HomeBannerSlider;
