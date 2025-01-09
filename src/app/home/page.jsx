"use client"; // Add this line at the top of the file
import Link from 'next/link'
// import React from 'react'
import { BsArrowRight } from 'react-icons/bs';
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import ServicesCard from "../components/servicecard";
import { faqs } from "../components/data/faq";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Lottie } from '../components/hooks/lottie';
const Home = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  const UPLIFT_DELIVERY_DATA = [
    {
      id: "uplift_1",
      icon: "https://lottie.host/d1650725-f8eb-4605-a251-597a0c8087e7/PKxE6dvig3.json",
      title: "Aim",
      h: "160px",
      w: "160px",
      description:
        "We aim to enhance medical skills and foster innovation through our equipments,drugs and medical products.We all the facilities and equipments required for the medical students and hospitals to learn and practice.",
    },
    {
      id: "uplift_2",
      icon: "https://lottie.host/06026d9a-7e7c-40bc-af83-70f766a4e631/IbA3pL9qBV.json",
      title: "Mission",
      h: "120px",
      w: "120px",
      description:
        "Provide high quality medical equipment, drugs, and pharmaceutical products that meet the highest industry standards.Make Provide high quality medical equipment, drugs,and pharmaceutical products that meet the highest industry standards.",
    },
    {
      id: "uplift_3",
      icon: "https://lottie.host/cd6f2d5d-24a7-4d72-8892-613b7c4ad669/mwiwNSMY2l.json",
      h: "120px",
      w: "120px",
      title: "Vision",
      description:
        " To be a trusted leader in delivering innovative and dependable medical solutionsimproving healthcare outcomes and making high-quality care accessible to communities everywhere",
    },
  ];
  return (
    <div  style={{ backgroundColor: "#F0FAF7" }} className='overflow-x-hidden'>
    <section className="relative bg-[url('https://firebasestorage.googleapis.com/v0/b/cdc-website2023.appspot.com/o/mudrika%2Fhero-bg.png?alt=media&token=0654e070-a38e-4ee5-aab3-20534a207549')] bg-cover bg-center min-h-screen flex   pt-[60px] 2xl:h-[800px] z-1"  style={{ backgroundColor: "#F0FAF7" }}>
    <div className="container z-20">
      <div className="flex flex-col   lg:flex-row gap-[90px] items-center lg:justify-between sm:ml-4 ml-2 ">
        <div>
          <div className="lg:w-[570px]">
            <h1 className="text-[36px] leading-[46px] text-headingColor font-extrabold md:text-[60px] md:leading-[70px]">
              We help patients live a healty, longer life.
            </h1>
            <p className="text-lg text-gray-500 mt-5">
           <b> Contact us today to gain access to the medical devices you need.</b> Explore a wide range of high-quality, reliable solutions tailored to meet your specific healthcare requirements.
            </p>
            <button className="btn">
              Get your things now
            </button>
          </div>
          <div className="mt-[30px] lg:mt-[70px] flex flex-col lg:flex-row lg:items-center gap-5 lg:gap-[30px]">
            <div>
              <h2 className="text-[36px] leading-[56px] lg:leading-[44px] font-bold">
                10+
              </h2>
              <span className="w-[100px] h-2 bg-yellowColor rounded-full block mt-[-14px]"></span>
              <p className="text-para">Years of Experience</p>
            </div>
            <div>
              <h2 className="text-[36px] leading-[56px] lg:leading-[44px] font-bold">
                5+
              </h2>
              <span className="w-[100px] h-2 bg-purpleColor rounded-full block mt-[-14px]"></span>
              <p className="text-para">Clinic Location</p>
            </div>
            <div>
              <h2 className="text-[36px] leading-[56px] lg:leading-[44px] font-bold">
                100%
              </h2>
              <span className="w-[100px] h-2 bg-irisBlueColor rounded-full block mt-[-14px]"></span>
              <p className="text-para">Patient SatisFacation</p>
            </div>
          </div>
        </div>
        <div className="flex gap-[20px] justify-end">
          <div className='mt-20'>
            <img src="https://firebasestorage.googleapis.com/v0/b/cdc-website2023.appspot.com/o/mudrika%2Fmedical4.jpeg?alt=media&token=a663c390-5d7d-4fda-ae82-1f8ff9e8b2a0" alt="hero-image1" className="w-full rounded-lg mt-6 " />
          </div>
          <div className="mt-[20px] mr-6">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/cdc-website2023.appspot.com/o/mudrika%2Fmedical3.jpg?alt=media&token=52980be3-1301-4776-a96a-5d8177bcde35"
              alt="hero-image2"
              className="w-full mb-[30px] rounded-lg mr-6"
            />
            <img src="https://firebasestorage.googleapis.com/v0/b/cdc-website2023.appspot.com/o/mudrika%2Fmedical2.jpg?alt=media&token=3e526057-bd2f-436d-a081-1f16f1205a79" alt="hero-image3" className="w-full rounded-lg" />
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* second section */}
  <section className="h-auto bg-lightGray  text-black py-10 px-4 mx-auto relative overflow-hidden z-50" style={{ backgroundColor: "#F0FAF7" }}>
   
  

      <div className="max-w-[1200px] mx-auto z-10 relative">
        <div className="flex flex-col items-center justify-center max-w-[1020px] mx-auto text-center font-montserrat flex-1 relative z-20 mt-[20px] px-4 h-auto">
          <h1 className=" font-bold xl:text-[54px] lg:text-5xl text-4xl leading-[1.25] h-auto mx-auto">
            About Us
          </h1>
        </div>
        <motion.div
          className="rounded-3xl p-[3px] mt-10 backface-visibility-hidden transform-style-flat will-change-transform"
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          whileHover={{ scale: 1.02 }}
        >
          <div className="rounded-xl flex flex-col justify-center items-center h-full md:min-h-[180px] min-h-auto w-full bg-[rgba(255,255,255,0.1)] py-3 px-2 z-50 mx-auto">
            <h4 className="lg:mt-3 md:mt-3 mt-2 mx-auto mb-3 lg:text-xl md:text-lg text-lg  text-center px-4 z-50 font-montserrat">
            Mudrika International is a trusted provider of high-quality medical equipment, drugs, and
 pharmaceutical products. We serve hospitals, clinics, and healthcare professionals with a
 wide range of innovative solutions, from diagnostic tools to life-saving medicines.
 Committed to excellence and reliability, we ensure that all our products meet
 international standards. With a focus on timely delivery and customer satisfaction,
 Mudrika International aims to enhance healthcare outcomes by delivering the best
 medical supplies for patient care.
            </h4>
          </div>
        </motion.div>
      </div>

      <section className="lg:py-[65px] py-10 px-4 mx-auto relative z-10 ">
  <div className="max-w-[1500px] mx-auto flex flex-col items-center justify-center">
    <div className="grid lg:grid-cols-3 md:grid-cols-2 s:grid-cols-2 xxl:gap-10 xl:gap-18 lg:gap-18 gap-28 lg:mt-5 md:mt-3 mt-4">
      {UPLIFT_DELIVERY_DATA?.map(
        ({ id, title, icon, description, w, h }, index) => (
          <motion.div
            key={id}
            className="bg-grad-theme-135 z-20 rounded-2xl p-[3px] md:min-h-[215px] xxs:min-h-[215px] min-h-auto mb-2"
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            whileHover={{ scale: 1.02 }}
          >
            <div className="rounded-2xl bg-jet flex flex-col items-center justify-center h-full lg:p-4 md:p-2 p-2 pt-0 relative">
              {/* Lottie animation */}
              <div className="relative mb-30 w-24 h-24 flex items-center justify-center">
                <Lottie link={icon} wid={w} hig={h} />
              </div>
              {/* Title */}
              <h4 className="lg:text-2xl md:text-xl font-extrabold text-base text-center font-montserrat mt-10 sm:mt-7 mb-3">
                {title}
              </h4>
              {/* Description */}
              <p className="lg:text-base text-sm font-source-sans text-center p-4 lg:mx-4">
                {description}
              </p>
            </div>
          </motion.div>
        )
      )}
    </div>
  </div>
</section>

    </section>
    {/* About Section */}
  
    {/* service section */}
    <section  style={{ backgroundColor: "#F0FAF7" }}>
      <div className="container">
        <div className="xl:w-[470px] mx-auto">
          <h2 className="text-[50px] text-center mb-4 "> Our medical services</h2>
          <p className="text-lg text-center">
            World-class care for every one. Our helth System offers unmatched,
            expert health care.
          </p>
        </div>
        <ServicesCard />
      </div>
    </section>
  
    
    {/* faq area */}
    <section  style={{ backgroundColor: "#F0FAF7" }} className='p-3'>
    <ul className="mt-[38px]">
      {faqs.map((item, index) => (
        <li
          key={index}
          className="p-3 lg:p-5 rounded-[12px] border border-solid border-[#D9DCE2] mb-5 cursor-pointer"
          onClick={() => handleToggleAccordion(index)}
        >
          <div className="flex justify-between items-center gap-5">
            <h4 className="text-base leading-7 lg:text-[18px] lg:leading-8 text-headingColor">
              {item.question}
            </h4>
            <div
              className={`${
                openIndex === index
                  ? "bg-primaryColor text-white border-none"
                  : ""
              } w-7 h-7 lg:w-8 lg:h-8 border border-solid border-slate-900 rounded flex items-center justify-center`}
            >
              {openIndex === index ? <AiOutlineMinus /> : <AiOutlinePlus />}
            </div>
          </div>
          {openIndex === index && (
            <div className="mt-4">
              <p className="text-[14px] leading-6 lg:text-base lg:leading-7 font-normal text-textColor">
                {item.content}
              </p>
            </div>
          )}
        </li>
      ))}
    </ul>
    </section>
  </div>
  )
}

export default Home
