"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Image from "next/image";
import React, { useState } from "react";
import { AiFillMessage } from "react-icons/ai";
import { BiSolidLike, BiSolidMessageDetail } from "react-icons/bi";
import { BsHeartPulseFill } from "react-icons/bs";
import { FaRegBookmark } from "react-icons/fa";
import { HiCurrencyRupee } from "react-icons/hi2";
import { IoIosArrowDown, IoIosArrowUp, IoMdVideocam } from "react-icons/io";
import { IoCall, IoLocationSharp } from "react-icons/io5";
import { TiStarFullOutline } from "react-icons/ti";
import { assetPath } from "@/lib/assetPath";
function page() {
  const [activeTab, setActiveTab] = useState("tab1");

  const [openIndex, setOpenIndex] = useState(null);
  const [openIndex2, setOpenIndex2] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const toggle2 = (index) => {
    setOpenIndex2(openIndex2 === index ? null : index);
  };

  const items = [
    {
      title: "Sevices",
      content: "This is the content of the first accordion item."
    }
    // {
    //   title: "Accordion Item 2",
    //   content: "This is the content of the second accordion item."
    // },
    // {
    //   title: "Accordion Item 3",
    //   content: "This is the content of the third accordion item."
    // }
  ];

  const items2 = [
    {
      title: "Specialization",
      content: "This is the content of the first accordion item."
    }
    // {
    //   title: "Accordion Item 2",
    //   content: "This is the content of the second accordion item."
    // },
    // {
    //   title: "Accordion Item 3",
    //   content: "This is the content of the third accordion item."
    // }
  ];
  return (
    <>
      <div className="mx-2 sm:mx-4 lg:mx-8">
        <Header />
        {/* dr details */}
        <div className="mt-4 grid grid-cols-1 gap-4 rounded-lg border border-[#635842] p-4 sm:grid-cols-2 sm:p-6 xl:grid-cols-4">
          <div className="">
            <Image
              src={assetPath("/images/drwithpet.png")}
              alt="Sample Image"
              width={500}
              height={500}
              className=""
            />
          </div>
          <div className="flex flex-col gap-4">
            <span className="text-4xl">Doctor`s Name</span>
            <span>Abc Pet Clinic</span>
            <span className="flex items-center gap-2">
              <BsHeartPulseFill />
              Pet Cardiologist
            </span>
            <span className="flex items-center gap-2">
              <IoLocationSharp />
              Dhanmondi, Dhaka
            </span>
            <span className="grid grid-cols-4 gap-2">
              <Image
                src={assetPath("/images/drproop1.png")}
                alt="Sample Image"
                width={100}
                height={100}
                className=""
              />
              <Image
                src={assetPath("/images/drproop2.png")}
                alt="Sample Image"
                width={100}
                height={100}
                className=""
              />
              <Image
                src={assetPath("/images/drproop3.png")}
                alt="Sample Image"
                width={100}
                height={100}
                className=""
              />
              <Image
                src={assetPath("/images/drproop4.png")}
                alt="Sample Image"
                width={100}
                height={100}
                className=""
              />
            </span>
            <span className="flex items-center gap-2">
              <span className="border rounded-lg py-2 px-4">
                Circulatory System
              </span>
              <span className="border rounded-lg py-2 px-4">Heart</span>
            </span>
          </div>

          <div className=""></div>

          <div className="flex flex-col gap-4">
            <span className="flex items-center gap-2">
              <BiSolidLike /> 97%
            </span>
            <span className="flex items-center gap-2">
              <BiSolidMessageDetail />
              17 Feedbacks
            </span>
            <span className="flex items-center gap-2">
              <HiCurrencyRupee />
              2000/rs
            </span>
            <p className="flex items-center gap-4">
              <span className="cursor-pointer text-[#635842]">
                <FaRegBookmark />
              </span>
              <span className="cursor-pointer text-[#635842]">
                <AiFillMessage />
              </span>
              <span className="cursor-pointer text-[#635842]">
                <IoCall />
              </span>
              <span className="cursor-pointer text-[#635842]">
                <IoMdVideocam />
              </span>
            </p>
            <span>
              <button className="bg-[#6fc509] text-white px-4 py-2 rounded-lg cursor-pointer">
                Book Now
              </button>
            </span>
          </div>
        </div>

        {/* tabs */}
        <div className="p-4 border rounded-lg border-[#635842] mt-10">
          {/* Tabs */}
          <div className="grid grid-cols-3 justify-center space-x-4  mb-4 *:cursor-pointer">
            <button
              className={`py-2 px-4 ${
                activeTab === "tab1"
                  ? "border-b-4 border-[#ff741b] text-gray-800"
                  : "text-gray-600 border-b-4 border-[#fee0cc]"
              }`}
              onClick={() => setActiveTab("tab1")}
            >
              Overview
            </button>
            <button
              className={`py-2 px-4 ${
                activeTab === "tab2"
                  ? "border-b-4 border-[#ff741b] text-gray-800"
                  : "text-gray-600 border-b-4 border-[#fee0cc]"
              }`}
              onClick={() => setActiveTab("tab2")}
            >
              Location
            </button>
            <button
              className={`py-2 px-4 ${
                activeTab === "tab3"
                  ? "border-b-4 border-[#ff741b] text-gray-800"
                  : "text-gray-600 border-b-4 border-[#fee0cc]"
              }`}
              onClick={() => setActiveTab("tab3")}
            >
              Bussiness Hours
            </button>
          </div>

          {/* Tab Content */}
          <div>
            {activeTab === "tab1" && (
              <div className="p-10">
                <div className="text-4xl text-[#333333] font-bold">
                  About Me
                </div>
                <div className="">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Pellentesque finibus sollicitudin condimentum. Vestibulum
                  ullamcorper interdum augue sit amet mollis. Nulla vitae risus
                  porta, consequat ante sit amet, ultrices velit. Integer
                  tincidunt dapibus mauris, sed laoreet mauris varius nec.
                  Aenean in ex odio. Nullam ut turpis ut lorem cursus bibendum.
                  Lorem ipsum dolor sit amet bibendum, turpis vitae tincidunt
                  porta, risus magna elementum risus, ac luctus odio mauris sit
                  amet lorem. Vestibulum a mattis nulla. fermentum justo, at
                  hendrerit ante elit a tortor. Fusce ac pulvinar arcu, auctor
                  iaculis ante.
                </div>

                <div className="grid grid-cols-2 gap-4 mt-10">
                  <div className="">
                    <div className="text-2xl font-semibold">Education</div>
                    <div className="mt-2 border-l border-[#6fc509] pl-4 ">
                      <div className="grid text-gray-600">
                        <span className="text-xl ">Dhaka Medical College</span>
                        <span>Animal and Veterinary Studies</span>
                        <span>1978 - 1983</span>
                      </div>
                      <div className="grid text-gray-600">
                        <span className="text-xl ">Dhaka Medical College</span>
                        <span>Animal and Veterinary Studies</span>
                        <span>1978 - 1983</span>
                      </div>
                    </div>
                  </div>

                  <div className="">
                    <div className="text-2xl font-semibold">
                      Work & Experience
                    </div>
                    <div className="mt-2 border-l border-[#6fc509] pl-4 ">
                      <div className="grid text-gray-600">
                        <span className="text-xl ">
                          Glowing Smiles Pet Clinic
                        </span>
                        <span>2020 - present (4+ years)</span>
                      </div>
                      <div className="grid text-gray-600">
                        <span className="text-xl ">
                          Glowing Smiles Pet Clinic
                        </span>
                        <span>Animal and Veterinary Studies</span>
                      </div>
                      <div className="grid text-gray-600">
                        <span className="text-2xl ">
                          Glowing Smiles Pet Clinic
                        </span>
                        <span>Animal and Veterinary Studies</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* awards */}
                <div className="">
                  <div className="text-2xl font-bold mt-10">Awards</div>
                  <div className="*:grid *:gap-2 *:mt-2 border-l border-[#6fc509] pl-4 ">
                    <div className="">
                      <div className="text-[#ff741b]">July 2019</div>
                      <div className="text-gray-800">Dhaka Madical College</div>
                      <div className="text-gray-500">
                        bibendum, turpis vitae tincidunt porta, risus magna
                        elementum risus, ac luctus odio mauris sit amet lorem.
                        Vestibulum a mattis nulla. fermentum justo, at hendrerit
                        ante elit a tortor. Fusce ac pulvinar arcu, auctor
                        iaculis ante.
                      </div>
                    </div>
                    <div className="">
                      <div className="text-[#ff741b]">July 2019</div>
                      <div className="text-gray-800">Dhaka Madical College</div>
                      <div className="text-gray-500">
                        bibendum, turpis vitae tincidunt porta, risus magna
                        elementum risus, ac luctus odio mauris sit amet lorem.
                        Vestibulum a mattis nulla. fermentum justo, at hendrerit
                        ante elit a tortor. Fusce ac pulvinar arcu, auctor
                        iaculis ante.
                      </div>
                    </div>
                    <div className="">
                      <div className="text-[#ff741b]">July 2019</div>
                      <div className="text-gray-800">Dhaka Madical College</div>
                      <div className="text-gray-500">
                        bibendum, turpis vitae tincidunt porta, risus magna
                        elementum risus, ac luctus odio mauris sit amet lorem.
                        Vestibulum a mattis nulla. fermentum justo, at hendrerit
                        ante elit a tortor. Fusce ac pulvinar arcu, auctor
                        iaculis ante.
                      </div>
                    </div>
                  </div>
                </div>

                {/* specialization */}
                <div className="w-full mt-10 mx-auto">
                  {items.map((item, index) => (
                    <div key={index} className="mb-2 ">
                      <button
                        onClick={() => toggle(index)}
                        className="w-full flex justify-between items-center p-4 text-left"
                      >
                        <span>{item.title}</span>
                        <span>
                          {openIndex === index ? (
                            <IoIosArrowUp />
                          ) : (
                            <IoIosArrowDown />
                          )}
                        </span>
                      </button>
                      {openIndex === index && (
                        <div className="p-4 text-gray-700 bg-white border-t">
                          {/* {item.content} */}
                          <div className="grid grid-cols-3">
                            <p className="">Teath Cleaning</p>
                            <p className="">Teath Cleaning</p>
                            <p className="">Teath Cleaning</p>
                          </div>
                          <div className="grid grid-cols-3">
                            <p className="">Sergical Extractions</p>
                            <p className="">Sergical Extractions</p>
                            <p className="">Sergical Extractions</p>
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>

                {/* specialization */}
                <div className="w-full mt-10 mx-auto">
                  {items2.map((item, index) => (
                    <div key={index} className="mb-2 ">
                      <button
                        onClick={() => toggle2(index)}
                        className="w-full flex justify-between items-center p-4 text-left"
                      >
                        <span>{item.title}</span>
                        <span>
                          {openIndex2 === index ? (
                            <IoIosArrowUp />
                          ) : (
                            <IoIosArrowDown />
                          )}
                        </span>
                      </button>
                      {openIndex2 === index && (
                        <div className="p-4 text-gray-700 bg-white border-t">
                          {/* {item.content} */}
                          <div className="grid grid-cols-3">
                            <p className="">Teath Cleaning</p>
                            <p className="">Teath Cleaning</p>
                            <p className="">Teath Cleaning</p>
                          </div>
                          <div className="grid grid-cols-3">
                            <p className="">Sergical Extractions</p>
                            <p className="">Sergical Extractions</p>
                            <p className="">Sergical Extractions</p>
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}
            {activeTab === "tab2" && (
              <div className="grid gap-4">
                <div className="grid grid-cols-3 gap-4">
                  <div className="grid">
                    <span className="text-2xl font-bold">
                      Glowing Smiles Pet Clinic
                    </span>
                    <span>Lorem ipsum dolor sit amet, consectetur </span>
                    <span className="flex items-center gap-2 *:text-amber-400">
                      <TiStarFullOutline />
                      <TiStarFullOutline />
                      <TiStarFullOutline />
                      <TiStarFullOutline />
                      <TiStarFullOutline />
                      (78)
                    </span>
                    <span className="flex items-center gap-2">
                      <Image
                        src={assetPath("/images/drproop1.png")}
                        alt="Sample Image"
                        width={80}
                        height={80}
                        className=""
                      />
                      <Image
                        src={assetPath("/images/drproop2.png")}
                        alt="Sample Image"
                        width={80}
                        height={80}
                        className=""
                      />
                      <Image
                        src={assetPath("/images/drproop3.png")}
                        alt="Sample Image"
                        width={80}
                        height={80}
                        className=""
                      />
                      <Image
                        src={assetPath("/images/drproop4.png")}
                        alt="Sample Image"
                        width={80}
                        height={80}
                        className=""
                      />
                    </span>
                    <span className="flex items-center">
                      <IoLocationSharp />
                      Dhanmodi, Dhaka
                    </span>
                    <span>Get Direction</span>
                  </div>
                  <div className="flex flex-col gap-5">
                    <div className="grid text-end">
                      <span className="text-xl font-bold">Mon - Sat</span>
                      <span>10.00 AM - 3.00 AM</span>
                      <span>4.00 AM - 9.00 PM</span>
                    </div>
                    <div className="grid text-end">
                      <span className="text-xl font-bold">Sun</span>
                      <span>10.00 AM - 3.00 AM</span>
                    </div>
                  </div>
                  <div className="grid text-end font-bold">
                    <span>3000/rs</span>
                    <span>2000/rs</span>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-4">
                  <div className="grid">
                    <span className="text-2xl font-bold">
                      Glowing Smiles Pet Clinic
                    </span>
                    <span>Lorem ipsum dolor sit amet, consectetur </span>
                    <span className="flex items-center gap-2 *:text-amber-400">
                      <TiStarFullOutline />
                      <TiStarFullOutline />
                      <TiStarFullOutline />
                      <TiStarFullOutline />
                      <TiStarFullOutline />
                      (78)
                    </span>
                    <span className="flex items-center gap-2">
                      <Image
                        src={assetPath("/images/drproop1.png")}
                        alt="Sample Image"
                        width={80}
                        height={80}
                        className=""
                      />
                      <Image
                        src={assetPath("/images/drproop2.png")}
                        alt="Sample Image"
                        width={80}
                        height={80}
                        className=""
                      />
                      <Image
                        src={assetPath("/images/drproop3.png")}
                        alt="Sample Image"
                        width={80}
                        height={80}
                        className=""
                      />
                      <Image
                        src={assetPath("/images/drproop4.png")}
                        alt="Sample Image"
                        width={80}
                        height={80}
                        className=""
                      />
                    </span>
                    <span className="flex items-center">
                      <IoLocationSharp />
                      Dhanmodi, Dhaka
                    </span>
                    <span>Get Direction</span>
                  </div>
                  <div className="flex flex-col gap-5">
                    <div className="grid text-end">
                      <span className="text-xl font-bold">Mon - Sat</span>
                      <span>10.00 AM - 3.00 AM</span>
                      <span>4.00 AM - 9.00 PM</span>
                    </div>
                    <div className="grid text-end">
                      <span className="text-xl font-bold">Sun</span>
                      <span>10.00 AM - 3.00 AM</span>
                    </div>
                  </div>
                  <div className="grid text-end font-bold">
                    <span>3000/rs</span>
                    <span>2000/rs</span>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-4">
                  <div className="grid">
                    <span className="text-2xl font-bold">
                      Glowing Smiles Pet Clinic
                    </span>
                    <span>Lorem ipsum dolor sit amet, consectetur </span>
                    <span className="flex items-center gap-2 *:text-amber-400">
                      <TiStarFullOutline />
                      <TiStarFullOutline />
                      <TiStarFullOutline />
                      <TiStarFullOutline />
                      <TiStarFullOutline />
                      (78)
                    </span>
                    <span className="flex items-center gap-2">
                      <Image
                        src={assetPath("/images/drproop1.png")}
                        alt="Sample Image"
                        width={80}
                        height={80}
                        className=""
                      />
                      <Image
                        src={assetPath("/images/drproop2.png")}
                        alt="Sample Image"
                        width={80}
                        height={80}
                        className=""
                      />
                      <Image
                        src={assetPath("/images/drproop3.png")}
                        alt="Sample Image"
                        width={80}
                        height={80}
                        className=""
                      />
                      <Image
                        src={assetPath("/images/drproop4.png")}
                        alt="Sample Image"
                        width={80}
                        height={80}
                        className=""
                      />
                    </span>
                    <span className="flex items-center">
                      <IoLocationSharp />
                      Dhanmodi, Dhaka
                    </span>
                    <span>Get Direction</span>
                  </div>
                  <div className="flex flex-col gap-5">
                    <div className="grid text-end">
                      <span className="text-xl font-bold">Mon - Sat</span>
                      <span>10.00 AM - 3.00 AM</span>
                      <span>4.00 AM - 9.00 PM</span>
                    </div>
                    <div className="grid text-end">
                      <span className="text-xl font-bold">Sun</span>
                      <span>10.00 AM - 3.00 AM</span>
                    </div>
                  </div>
                  <div className="grid text-end font-bold">
                    <span>3000/rs</span>
                    <span>2000/rs</span>
                  </div>
                </div>
              </div>
            )}
            {activeTab === "tab3" && (
              <div>
                {/* <Image src='/images/bussinessTable.png' width={2000} height={2000}/> */}
                <div className="">
                  <table className="table-fixed w-full border-separate border-spacing-2">
                    <thead>
                      <tr className="bg-lime-200 text-center *:p-4">
                        <th className="w-24"> </th>
                        <th>Sunday</th>
                        <th>Monday</th>
                        <th>Tuesday</th>
                        <th>Wednesday</th>
                        <th>Saturday</th>
                      </tr>
                    </thead>
                    <tbody className="text-center">
                      {/* Time Slots */}
                      {[
                        "01:00 PM",
                        "02:00 PM",
                        "03:00 PM",
                        "04:00 PM",
                        "05:00 PM",
                        "06:00 PM",
                        "07:00 PM",
                        "08:00 PM"
                      ].map((time, rowIndex) => (
                        <tr key={rowIndex} className="*:px-4 *:py-2">
                          <td className="bg-lime-200">{time}</td>

                          {/* Sunday */}
                          <td
                            className={`${
                              time === "01:00 PM" ? "bg-lime-100" : ""
                            } ${
                              time === "06:00 PM"
                                ? "bg-lime-500 text-white"
                                : ""
                            }`}
                          >
                            {time === "01:00 PM" && (
                              <>
                                <div>ABC Clinic</div>
                                <div>01:00 PM - 02:00 PM</div>
                                <hr className="my-1 border-gray-500" />
                                <div>PREVIEW</div>
                              </>
                            )}
                            {time === "06:00 PM" && (
                              <>
                                <div>BCD Clinic</div>
                                <div>06:00 PM - 07:00 PM</div>
                                <hr className="my-1 border-white" />
                                <div>PREVIEW</div>
                              </>
                            )}
                          </td>

                          {/* Monday */}
                          <td
                            className={`${
                              time === "06:00 PM" ? "bg-lime-100" : ""
                            }`}
                          >
                            {time === "06:00 PM" && (
                              <>
                                <div>BCD Clinic</div>
                                <div>06:00 PM - 07:00 PM</div>
                                <hr className="my-1 border-gray-500" />
                                <div>PREVIEW</div>
                              </>
                            )}
                          </td>

                          {/* Tuesday */}
                          <td></td>

                          {/* Wednesday */}
                          <td
                            className={`${
                              time === "03:00 PM" ? "bg-lime-100" : ""
                            }`}
                          >
                            {time === "03:00 PM" && (
                              <>
                                <div>SSR Clinic</div>
                                <div>03:00 PM - 04:00 PM</div>
                                <hr className="my-1 border-gray-500" />
                                <div>PREVIEW</div>
                              </>
                            )}
                          </td>

                          {/* Saturday */}
                          <td
                            className={`${
                              time === "01:00 PM" ? "bg-lime-100" : ""
                            }`}
                          >
                            {time === "01:00 PM" && (
                              <>
                                <div>ABC Clinic</div>
                                <div>01:00 PM - 02:00 PM</div>
                                <hr className="my-1 border-gray-500" />
                                <div>PREVIEW</div>
                              </>
                            )}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
}

export default page;
