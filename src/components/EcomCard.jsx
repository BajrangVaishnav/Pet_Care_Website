"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { assetPath } from "@/lib/assetPath";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const EcomCard = ({ swiperRef }) => {
    const images = [
        "/images/ecom1.png",
        "/images/ecom2.png",
        "/images/ecom3.png",
        "/images/ecom1.png",
        "/images/ecom2.png",
        "/images/ecom3.png",
    ];
  return (

    <>
    
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
    //   onSwiper={(swiper) => (swiperRef.current = swiper)}
      spaceBetween={50}
      slidesPerView={4}
    //   navigation
    breakpoints={{
      320: { slidesPerView: 1, spaceBetween: 10 }, // Mobile
      640: { slidesPerView: 2, spaceBetween: 20 }, // Tablet
      1024: { slidesPerView: 3, spaceBetween: 30 }, // Small Laptop
      1280: { slidesPerView: 4, spaceBetween: 40 } // Large Screen
    }}
      pagination={{ clickable: true, dynamicBullets: true }}
      loop={false}
      autoplay={{ delay: 3000 }}
      className="w-full h-fit flex justify-center"
    >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <div className="flex-col bg-white rounded-2xl text-gray-800 px-4 pt-4">
              <img
                src={assetPath(image)}
                alt={`Slide ${index + 1}`}
                className="object-fit"
              />
              <div className="flex flex-col px-2 py-2">
                <div className="flex items-center gap-2">
                  <span className="font-bold text-2xl">Cat Scratcher</span>
                  <span className="font-bold text-5xl flex">50 <span className="font-bold text-sm">₹</span></span>
                </div>
                <div className="">
                Lorem ipsum dolor sit amet, <br />
                elit. Phasellus non hendrerit <br />
                tortor. 
                </div>
                <div className="flex justify-end ">
                  <button className=" cursor-pointer hover:bg-[#6fc509] hover:text-white border h-fit px-8 py-1 rounded-full">Add to cart</button>
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

export default EcomCard;
