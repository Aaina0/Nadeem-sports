import React from "react";
import { CiCalendarDate } from "react-icons/ci";

function Hero() {
  return (
    <div className='relative h-[88vh] bg-[url("/images/pic1.jpg")] bg-cover bg-center'>
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-[rgba(0,0,0,0.68)]"></div>
      <div className="relative z-[10] flex items-center h-[100%] text-white">
        <div className="w-[80%] mx-auto grid items-start grid-cols-1 lg:grid-cols-2 gap-[2rem]">
          <div className="flex flex-col justify-start">
            <p className="sm:px-8 px-4 py-1 mb-[1rem] text-[12px] sm:text-[16px] bg-red-600 text-white w-fit uppercase">
              Taekwondo
            </p>
            <h1 className="text-[25px] sm:text-[32px] md:text-[38px] lg:text-[45px] text-white leading-[2rem] md:leading-[3.5rem] font-medium">
              Welcome to the Ghazi Taekwondo and Fitness club
            </h1>
            <div className="flex items-center space-x-2 mt-[1rem] sm:mt-[2rem]">
              <CiCalendarDate className="w-[1rem] h-[1rem] text-white" />
              <p className="text-[11px] sm:text-[16px] text-white uppercase">
                Admissions Are Open
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
