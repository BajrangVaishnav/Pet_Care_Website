"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { useRef } from "react";
import { assetPath } from "@/lib/assetPath";


const SwiperComponent = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      autoplay={{ delay: 3000 }}
      className="w-full h-[400px] flex justify-center"
    >
      <SwiperSlide>
        <img
          src={assetPath("/images/slide1.png")}
          alt="Slide 1"
          className="object-fit"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src={assetPath("/images/slide2.png")}
          alt="Slide 2"
          className="object-fit"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src={assetPath("/images/slide1.png")}
          alt="Slide 3"
          className="object-fit"
        />
      </SwiperSlide>
    </Swiper>
  );
};

export default SwiperComponent;
