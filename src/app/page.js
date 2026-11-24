"use client";
import DrCard from "@/components/DrCard";
import Header from "@/components/Header";
import SwiperComponent from "@/components/SwiperComponent";
import Image from "next/image";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { RiCustomerService2Line } from "react-icons/ri";
import { useRef, useState } from "react";
import { BsArrowUpRightCircleFill } from "react-icons/bs";
import EcomCard from "@/components/EcomCard";
import { RiDoubleQuotesL } from "react-icons/ri";
import { RiGooglePlayFill } from "react-icons/ri";
import { ImAppleinc } from "react-icons/im";
import Footer from "@/components/Footer";
import Model from "@/components/Model";
import Modal from "@/components/Model";
import { assetPath } from "@/lib/assetPath";

export default function Home() {
  const swiperRef = useRef(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleNext = () => {
    if (swiperRef.current) {
      swiperRef.current.slideNext(); // Move to next slide
    }
  };

  const handlePrev = () => {
    if (swiperRef.current) {
      swiperRef.current.slidePrev(); // Move to previous slide
    }
  };

  const whatTheySay = [
    {
      id: 1,
      name: "John Doe",
      designation: "Super Duper",
      comment:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin urna orci, porta sit amet scelerisque in, aliquam quis mauris sed.",
      image: assetPath("/images/user1.png")
    },
    {
      id: 2,
      name: "Jane Smith",
      designation: "Pet Lover",
      comment:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin urna orci, porta sit amet scelerisque in, aliquam quis mauris sed.",
      image: assetPath("/images/user2.png")
    },
    {
      id: 3,
      name: "Jane Smith",
      designation: "Pet Lover",
      comment:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin urna orci, porta sit amet scelerisque in, aliquam quis mauris sed.",
      image: assetPath("/images/user3.png")
    }
  ];

  const service = [
    {
      id: 1,
      title: "24hr Delivery",
      description: "In 24 cities",
      image: assetPath("/images/shipping.png")
    },
    {
      id: 2,
      title: "1,50,000+",
      description: "Happy pet parents",
      image: assetPath("/images/petPrents.png")
    },
    {
      id: 3,
      title: "Complimentary vet Consult",
      description: "For every new member",
      image: assetPath("/images/vetConsult.png")
    },
    {
      id: 4,
      title: "Pet Pharmacy",
      description: "Exclusive",
      image: assetPath("/images/medicine.png")
    }
  ];
  
  return (
    <>
      <div className="lg:mx-8 md:mx-6 mx-2 ">
      <Header />
        <div
          style={{
            backgroundImage: `url(${assetPath("/images/DashboardMask.png")})`,
          }}
          className="rounded-b-3xl bg-[#1A1A1A] bg-cover bg-center lg:grid lg:grid-cols-2 lg:pt-[10px]"
        >
          <div className="sm:flex lg:grid text-white">
            <div className="lg:text-5xl text-2xl lg:mx-20 lg:leading-20 border-l-10 border-green-400 md:pl-10 pl-2">
              Comprehensive <br />
              <span className="font-bold">Pet Solutions</span> for
              <br /> Pet Parents. <br />
              <p className="lg:text-3xl text-base">
                One-stop hub for complete solutions
              </p>
            </div>
            <div className="lg:ps-40 ps-10 py-10 lg:w-full">
              <button onClick={() => setIsModalOpen(true)} className="  border rounded-full px-10 py-5 flex items-center gap-2 bg-orange-500 cursor-pointer">
                <RiCustomerService2Line />
                Emergency Support
              </button>
              <Modal isOpen={isModalOpen} setIsOpen={setIsModalOpen} />
            </div>
          </div>

          <div className="">
            <SwiperComponent />
          </div>
        </div>
        {/* model */}

       

        {/* dr card */}
        <div className="my-10">
          <div className="my-5 mx-5 flex items-center justify-between text-white">
            <div className="flex items-center gap-5">
              <span className="bg-green-500 py-2 px-5 rounded-full lg:w-58 sm:w-48 text-center cursor-pointer">
                TOP PET DOCTORS
              </span>
              <span className="bg-gray-500 py-2 px-5 rounded-full lg:w-58 sm:w-48 text-center cursor-pointer">
                PET CLINICS
              </span>
            </div>
            {/* slider button */}
            <div className="lg:flex item-center gap-5 hidden">
              <button
                onClick={handlePrev}
                className="p-1 cursor-pointer rounded-full bg-green-500 text-2xl "
              >
                <IoIosArrowBack />
              </button>
              <button
                onClick={handleNext}
                className="p-1 cursor-pointer rounded-full bg-green-500 text-2xl "
              >
                <IoIosArrowForward />
              </button>
            </div>
          </div>
          <DrCard swiperRef={swiperRef} />
        </div>

        {/* top groomer */}
        <div className="flex flex-col lg:grid lg:grid-cols-3 ">
          <div
            style={{
              backgroundImage: `url(${assetPath("/images/GoldenDogBackground.png")})`,
            }}
            className="col-span-1 flex flex-col items-center justify-center gap-5 rounded-2xl bg-cover bg-center px-8 py-8"
          >
            <div className="text-5xl text-center text-white">See Our Top Groomers</div>
            <div className="text-lg font-bold shadow bg-white/30 backdrop-blur-lg text-white rounded-full px-4 py-2">
              Experienced & Expert Groomers
            </div>
            <div className="">
              <Image
                src={assetPath("/images/GoldenDog.png")}
                alt="Sample Image"
                width={400}
                height={400}
              />
            </div>
            <div className="w-fit">
              <button
                className="relative rounded-full px-10 py-4 w-100 -mt-4 cursor-pointer text-white text-lg font-semibold 
                bg-gradient-to-t from-gray-100/30 to-black  shadow-lg"
              >
                {/* <span className="absolute inset-0 bg-gradient-to-t from-gray-100/30 to-black shadow-lg rounded-full"></span> */}
                Discover The Service
              </button>
            </div>
          </div>

          <div className="col-span-2 px-3 py-10 grid gap-10 lg:ms-10">
            <p className="text-4xl">
              Get quick Appointment <br />
              for your <span className="font-bold">Ailing Pet.</span>
            </p>
            <div className="">
              Schedule an appointment swiftly for your pet&apos;s ailment. Our
              streamlined process ensures access to expert veterinary care,
              placing your pet&apos;s health as our top priority.
            </div>
            <div className="grid grid-cols-2 gap-5 my-10 border-t ">
              <div className=" flex flex-col gap-10 mt-10">
                <Image
                  src={assetPath("/images/consultation.png")}
                  alt="Sample Image"
                  width={50}
                  height={50}
                />
                <p className="text-3xl">Online Consultation</p>
                <p className="text-lg">
                  Connect virtually for expert advice and tailored care
                  solutions, ensuring your pet&apos;s well-being.
                </p>
                <div className="">
                  <button className="flex items-center gap-2 rounded-full px-4 py-2 cursor-pointer text-white bg-[#6fc509] text-lg font-semibold border">
                    Book Now <BsArrowUpRightCircleFill />
                  </button>
                </div>
              </div>
              <div className=" flex flex-col gap-10 mt-10">
                <Image
                  src={assetPath("/images/consultation.png")}
                  alt="Sample Image"
                  width={50}
                  height={50}
                />
                <p className="text-3xl">Online Consultation</p>
                <p className="text-lg">
                  Connect virtually for expert advice and tailored care
                  solutions, ensuring your pet&apos;s well-being.
                </p>
                <div className="">
                  <button className="flex items-center gap-2 rounded-full px-4 py-2 cursor-pointer hover:text-white hover:bg-[#6fc509] text-lg font-semibold border">
                    Book Now <BsArrowUpRightCircleFill />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* our service */}
        <div className="flex flex-col py-10 relative">
          {/*<Image
            src={assetPath("/images/ourservice3.png")}
            alt="Sample Image"
            width={2000}
            height={2000}
          />*/}
            {/* <!-- Decorative circles top-left --> */}
            <div className="circle circle-top-left" aria-hidden="true"></div>
            <div className="circle circle-top-left-inner" aria-hidden="true"></div>
            {/*  <!-- Decorative circles bottom center --> */}
            <div className="circle circle-bottom-center" aria-hidden="true"></div>
            <div className="circle circle-bottom-center-inner" aria-hidden="true"></div>
            {/*  <!-- Decorative circles top-right --> */}
            <div className="circle circle-top-right" aria-hidden="true"></div>
            <div className="circle circle-top-right-inner" aria-hidden="true"></div>
            
            <section className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 services-grid" aria-label="List of services offered">
              
              <article className="card" aria-label="Location wise Clinic & Doctor">
                <div className="icon-wrapper icon" aria-hidden="true" title="Clinic icon">
                  <svg fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 21v-7a1 1 0 011-1h14a1 1 0 011 1v7" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M4 10V7a4 4 0 014-4h8a4 4 0 014 4v3" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M9 21v-4a2 2 0 012-2h2a2 2 0 012 2v4" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <p className="title">Location wise Clinic &amp; Doctor</p>
                <p className="subtitle">10k Plus</p>
                <div className="corner-arrow" aria-hidden="true">
                  <svg stroke="currentColor" fill="none" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M9 18l6-6-6-6" />
                  </svg>
                </div>
              </article>
            
              <article className="card active" aria-label="Virtual Consultations">
                <div className="icon-wrapper icon" aria-hidden="true" title="Chat bubble with a heart icon">
                  <svg fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2 12c0 3.866 3.582 7 8 7 1.39 0 2.683-.418 3.754-1.133L22 21l-2.133-5.246a6.963 6.963 0 001.133-3.754c0-4.418-3.134-8-7-8s-7 3.582-7 8z" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <p className="title">Virtual Consultations</p>
                <p className="subtitle">10k Plus</p>
                <div className="corner-arrow" aria-hidden="true">
                  <svg stroke="currentColor" fill="none" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M9 18l6-6-6-6" />
                  </svg>
                </div>
              </article>
            
              <article className="card" aria-label="Pet Profile">
                <div className="icon-wrapper icon" aria-hidden="true" title="Heart with paw print"> 
                  <svg fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 20c-4-3-5-6-5-6a3 3 0 016 0c0 0-1 3-5 6z" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M16 7a2 2 0 11-4 0 2 2 0 014 0z" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M20 11a2 2 0 11-4 0 2 2 0 014 0z" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <p className="title">Pet Profile</p>
                <p className="subtitle">10k Plus</p>
                <div className="corner-arrow" aria-hidden="true">
                  <svg stroke="currentColor" fill="none" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M9 18l6-6-6-6" />
                  </svg>
                </div>
              </article>
            
              <article className="card" aria-label="Tips & Articles">
                <div className="icon-wrapper icon" aria-hidden="true" title="Books icon">
                  <svg fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 19h8a2 2 0 002-2v-7a2 2 0 00-2-2H8a2 2 0 00-2 2v7a2 2 0 002 2z" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M8 19V5a2 2 0 012-2h8a2 2 0 012 2v13" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <p className="title">Tips &amp; Articles</p>
                <p className="subtitle">10k Plus</p>
                <div className="corner-arrow" aria-hidden="true">
                  <svg stroke="currentColor" fill="none" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M9 18l6-6-6-6" />
                  </svg>
                </div>
              </article>
            
              <article className="card" aria-label="Pet Medicine & Accessories">
                <div className="icon-wrapper icon" aria-hidden="true" title="Medicine bottle icon">
                  <svg fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
                    <rect x="6" y="7" width="12" height="10" rx="2" ry="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 12v3M9 12h6" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <p className="title">Pet Medicine &amp; Accessories</p>
                <p className="subtitle">10k Plus</p>
                <div className="corner-arrow" aria-hidden="true">
                  <svg stroke="currentColor" fill="none" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M9 18l6-6-6-6" />
                  </svg>
                </div>
              </article>
            
              <article className="card" aria-label="Pet Buy & Sell">
                <div className="icon-wrapper icon" aria-hidden="true" title="Shopping bag icon">
                  <svg fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6 7h12l-1.5 13h-9L6 7z" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M9 7V5a3 3 0 016 0v2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <p className="title">Pet Buy &amp; Sell</p>
                <p className="subtitle">10k Plus</p>
                <div className="corner-arrow" aria-hidden="true">
                  <svg stroke="currentColor" fill="none" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M9 18l6-6-6-6" />
                  </svg>
                </div>
              </article>
            </section>
        </div>

        {/* E-Commerce service */}
        <div className="flex flex-col">
          <div className="grid justify-center text-center gap-5 my-10">
            <div className="text-4xl">E-commerce</div>
            <div className="">
              Order your pet medicine, accessories and everything from here
            </div>
          </div>
          <div className="">
            <EcomCard />
          </div>
        </div>

        {/* what they say */}
        <div className="px-10 py-10">
          <div className="text-4xl text-center my-10 text-white">
            What They <span className="font-semibold">Say</span>
          </div>
          <div className="flex flex-col lg:grid lg:grid-cols-3 gap-10">
            {whatTheySay.map((item) => (
              <div key={item.id} className="flex flex-col gap-10">
                <p className="text-[#ff721d] text-5xl">
                  <RiDoubleQuotesL />
                </p>
                <p className="">{item.comment}</p>
                <div className="flex items-center gap-5">
                  <Image
                    src={item.image}
                    alt="Sample Image"
                    width={50}
                    height={50}
                  />
                  <div className="grid">
                    <span className="text-2xl font-bold">{item.name}</span>
                    <span>{item.designation}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* service */}
        <div className="py-10">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 rounded gap-10 px-10 bg-[#28160a]">
            {service.map((item) => (
              <div key={item.id} className=" py-4 ">
                <div className="flex items-center gap-5">
                  <div className=" rounded-full bg-white p-4">
                    <Image
                      src={item.image}
                      alt="Sample Image"
                      width={25}
                      height={25}
                    />
                  </div>
                  <div className="grid">
                    <span className="text-sm font-bold text-white">{item.title}</span>
                    <span className="text-xs text-[#ff741b]">
                      {item.description}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* app download  */}
        <div className="lg:grid lg:grid-cols-2 gap-5 flex flex-col  px-10 py-10">
          <div className=" ">
            <div className="flex justify-center lg:pt-40">
              <Image
                src={assetPath("/images/downloadApp.png")}
                alt="Sample Image"
                width={500}
                height={500}
              />
            </div>
            <div className="grid  grid-cols-2 md:gap-10 gap-2 md:px-10 py-10 text-white">
              <div className="bg-[#191918] rounded-xl px-2 py-2 flex items-center gap-2 justify-center  cursor-pointer">
                <div className="">
                  <RiGooglePlayFill className="text-5xl" />
                </div>
                <div className="grid">
                  <span className="text-[8px]">ANDROID APP ON</span>
                  <span className="text-2xl">Google Play</span>
                </div>
              </div>

              <div className="bg-[#191918] rounded-xl px-2 py-2 flex items-center gap-2 justify-center  cursor-pointer">
                <div className="">
                  <ImAppleinc className="text-5xl" />
                </div>
                <div className="grid">
                  <span className="text-sm">Download On The</span>
                  <span className="text-2xl">App Store</span>
                </div>
              </div>
            </div>
          </div>
          <div className="">
            <Image
              src={assetPath("/images/appDownloadPhone.png")}
              alt="Sample Image"
              width={1000}
              height={500}
            />
          </div>
        </div>

        {/* How to help your pet */}
        <div className="py-10">
          <div className="relative bg-cover bg-center lg:h-[110] flex items-center justify-center ">
            <Image
              src={assetPath("/images/headingBg.png")}
              alt="Sample Image"
              width={2000}
              height={2000}
              className=""
            />
            <span className="md:text-5xl text-lg text-white font-bold absolute">
              How to help your Pet?
            </span>
          </div>
          <div className="fle flex-col lg:grid lg:grid-cols-2 gap-40  px-10 py-10 relative">
            <div className="">
              <ol className="list-decimal list-inside flex flex-col gap-5 px-10 py-10">
                <li className="text-2xl font-bold">
                  Here Goes the title <br />
                  <span className="text-sm">
                    Lorem ipsum is a placeholder text commonly used to
                    demonstrate the visual form of a document.
                  </span>
                </li>
                <li className="text-2xl font-bold">
                  Here Goes the title <br />
                  <span className="text-sm">
                    Lorem ipsum is a placeholder text commonly used to
                    demonstrate the visual form of a document.
                  </span>
                </li>
                <li className="text-2xl font-bold">
                  Here Goes the title <br />
                  <span className="text-sm">
                    Lorem ipsum is a placeholder text commonly used to
                    demonstrate the visual form of a document.
                  </span>
                </li>
              </ol>
            </div>

            <Image
              src={assetPath("/images/footerDog.png")}
              alt="Sample Image"
              width={1000}
              height={1000}
              className="lg:absolute top-72 left-1/2 right-1/2 lg:transform lg:-translate-x-1/2 lg:-translate-y-1/2  "
            />

            <div className="">
              <ol className="list-decimal list-inside flex flex-col gap-5 px-10 py-10">
                <li className="md:text-2xl font-bold">
                  Here Goes the title <br />
                  <span className="text-sm">
                    Lorem ipsum is a placeholder text commonly used to
                    demonstrate the visual form of a document.
                  </span>
                </li>
                <li className="md:text-2xl font-bold">
                  Here Goes the title <br />
                  <span className="text-sm">
                    Lorem ipsum is a placeholder text commonly used to
                    demonstrate the visual form of a document.
                  </span>
                </li>
                <li className="md:text-2xl font-bold">
                  Here Goes the title <br />
                  <span className="text-sm">
                    Lorem ipsum is a placeholder text commonly used to
                    demonstrate the visual form of a document.
                  </span>
                </li>
              </ol>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
