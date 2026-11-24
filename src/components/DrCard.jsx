"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { assetPath } from "@/lib/assetPath";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const DrCard = ({ swiperRef }) => {
  const images = [
    {
      src: "/images/dr1.png",
      name: "Doctor`s Name",
      clinic: "ABC pet Clinic",
      status: "Available"
    },
    {
      src: "/images/dr2.png",
      name: "Doctor`s Name",
      clinic: "ABC pet Clinic",
      status: "Available"
    },
    {
      src: "/images/dr3.png",
      name: "Doctor`s Name",
      clinic: "ABC pet Clinic",
      status: "Available"
    },
    {
      src: "/images/dr4.png",
      name: "Doctor`s Name",
      clinic: "ABC pet Clinic",
      status: "Available"
    },
    {
      src: "/images/dr1.png",
      name: "Doctor`s Name",
      clinic: "ABC pet Clinic",
      status: "Available"
    },
    {
      src: "/images/dr2.png",
      name: "Doctor`s Name",
      clinic: "ABC pet Clinic",
      status: "Available"
    },
    {
      src: "/images/dr3.png",
      name: "Doctor`s Name",
      clinic: "ABC pet Clinic",
      status: "Available"
    },
    {
      src: "/images/dr4.png",
      name: "Doctor`s Name",
      clinic: "ABC pet Clinic",
      status: "Available"
    }
  ];
  return (
    <>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        spaceBetween={50}
        slidesPerView={4}
        breakpoints={{
          320: { slidesPerView: 1, spaceBetween: 10 }, // Mobile
          640: { slidesPerView: 2, spaceBetween: 20 }, // Tablet
          1024: { slidesPerView: 3, spaceBetween: 30 }, // Small Laptop
          1280: { slidesPerView: 4, spaceBetween: 40 } // Large Screen
        }}
        //   navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        className="w-full h-fit flex justify-center"
      >
        {images.map((image, index) => (
          <SwiperSlide>
            <div className="flex-col" key={index}>
              <img
                src={assetPath(image.src)}
                alt={`Slide ${index + 1}`}
                className="object-fit"
              />
              <div className="grid grid-cols-2 px-2 py-2">
                <div className="grid">
                  <span className="font-bold">{image.name}</span>
                  <span>{image.clinic}</span>
                </div>
                <div className="flex justify-end ">
                  <span className="bg-gray-800 text-white h-fit px-8 py-1 rounded-full">
                    {image.status}
                  </span>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      {/* <div className="absolute top-0 left-1/2 transform -translate-x-1/2 flex gap-4 z-10">
        <div className="swiper-button-prev text-black"></div>
        <div className="swiper-button-next text-black"></div>
      </div> */}
    </>
  );
};

export default DrCard;
