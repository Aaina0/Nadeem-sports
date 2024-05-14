"use client";

import React, { useState } from "react";
import { CiCalendarDate } from "react-icons/ci";
import { FaPlay } from "react-icons/fa";
import Modal from "../helper/Modal";

function Hero() {
  const [showModal, setShowModal] = useState(false);
  const showModalHandler = () => setShowModal(true);
  const closeModalHandler = () => setShowModal(false);

  const handleLearnMoreClick = () => {
    window.location.href = "/card"; // Navigate to the card page
  };

  return (
    <div className='relative h-[88vh] bg-[url("/images/pic1.jpg")] bg-cover bg-center'>
      {showModal && <Modal hideModel={closeModalHandler} />}
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-[rgba(0,0,0,0.68)]"></div>
      <div className="relative z-[10] flex items-center h-[100%] text-white">
        <div className="w-[80%] mx-auto grid items-start grid-cols-1 lg:grid-cols-2 gap-[2rem]">
          <div className="flex flex-col justify-start">
            <p className="sm:px-8 px-4 py-1 mb-[1rem] text-[12px] sm:text-[16px] bg-red-600 text-white w-fit uppercase">
              Taekwondo
            </p>
            <h1 className="text-[25px] sm:text-[32px] md:text-[38px] lg:text-[45px] text-white leading-[2rem] md:leading-[3.5rem] font-medium">
              Welcome, to the Ghazi Taekwondo and Fitness club
            </h1>
            <div className="flex items-center space-x-2 mt-[1rem] sm:mt-[2rem]">
              <CiCalendarDate className="w-[1rem] h-[1rem] text-white" />
              <p className="text-[11px] sm:text-[16px] text-white uppercase">
                Admissions Are Open
              </p>
            </div>
            <div className="mt-[2.4rem] flex items-center space-x-6">
              {/* Use onClick handler to navigate to the card page */}
              <button
                onClick={handleLearnMoreClick}
                className="sm:px-8 sm:py-2.5 px-4 py-2 bg-red-600 hover:bg-red-800 transition-all duration-200 sm:text-[17px] text-[13px] font-semibold text-white"
              >
                Learn More
              </button>
              <button className="sm:px-8 sm:py-2.5 px-4 py-2 bg-gray-200 hover:bg-gray-800 transition-all duration-200 sm:text-[17px] text-[13px] font-semibold text-black">
                Contact Us
              </button>
            </div>
          </div>
          <div
            onClick={showModalHandler}
            className="w-[6rem] h-[6rem] lg:ml-auto flex items-center justify-center rounded-full bg-red-600 hover:bg-black transition-all duration-200 cursor-pointer sm:flex flex-col items-center justify-center hidden"
          >
            <FaPlay className="w-[1.5rem] h-[1.5rem] text-white" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
