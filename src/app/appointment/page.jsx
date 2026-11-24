"use client";
import React from "react";
import { useRouter } from "next/navigation";
import Header from "@/components/Header";
import { CiSearch } from "react-icons/ci";
import { MdArrowBack } from "react-icons/md";
import { MdArrowForward } from "react-icons/md";
import Image from "next/image";
import Footer from "@/components/Footer";
import { assetPath } from "@/lib/assetPath";
function page() {
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
      <div className="mx-2 sm:mx-4 lg:mx-8">
        <Header />
        {/* serach or filter */}
        <div className="grid grid-cols-1 items-center gap-4 py-5 sm:grid-cols-2 lg:grid-cols-5 lg:gap-10">
          <div className="flex items-center gap-4 border rounded-full px-4 py-2 sm:col-span-2 lg:col-span-2">
            <CiSearch className="text-2xl font-bold" />
            <input
              type="search"
              name="search"
              id="serach"
              placeholder="Search Doctors, Clinics"
              className="w-full outline-none"
            />
          </div>
          <div className="rounded-full border px-4 py-2 sm:col-span-2 lg:col-span-2">
            <select
              name="location"
              id="location"
              className="w-full outline-none"
            >
              <option value="">India</option>
              <option value="">Filter</option>
              <option value="">Filter</option>
              <option value="">Filter</option>
              <option value="">Filter</option>
              <option value="">Filter</option>
              <option value="">Filter</option>
              <option value="">Filter</option>
            </select>
          </div>
          <div className="cursor-pointer rounded-full bg-[#ff741b] px-5 py-2 text-center text-white sm:col-span-2 lg:col-span-1">
            Filter
          </div>
        </div>
        {/* doctor list */}
        <div className="grid grid-cols-1 gap-5 rounded py-10 sm:grid-cols-2 lg:grid-cols-4">
          {images.map((image, index) => (
            <div className="cursor-pointer" key={index}>
              <Image
                src={assetPath(image.src)}
                alt={`Slide ${index + 1}`}
                className="object-fit"
                width={300}
                height={300}
              />
              <div className="flex  justify-between px-2 py-2">
                <div className="grid">
                  <span className="font-bold">{image.name}</span>
                  <span>{image.clinic}</span>
                </div>
                <div className="flex justify-end ">
                  <span className="bg-green-800 text-white h-fit px-8 py-1 rounded-full">
                    {image.status}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* pagination */}
        <div className="flex items-center justify-center gap-3 sm:gap-10">
        <div className="flex items-center gap-2 rounded-full border p-1 *:cursor-pointer *:hover:bg-[#ff741b] *:hover:text-white sm:gap-5">
                <button className="border rounded-full p-3"><MdArrowBack /></button>
                <button className="border px-4 py-2 rounded-full">
                    1
                </button>
                <button className="border px-4 py-2 rounded-full">
                    2
                </button>
                <button className="border px-4 py-2 rounded-full">
                    3
                </button>
                <button className="border px-4 py-2 rounded-full">
                    4
                </button>
                <button className="border rounded-full p-3"><MdArrowForward /></button>
          </div>
        </div>

        {/* footer */}
        <Footer />
      </div>
    </>
  );
}

export default page;
