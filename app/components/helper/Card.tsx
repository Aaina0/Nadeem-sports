"use client";

import React from "react";
import Image from "next/image";
import { StaticImageData } from "next/image";
import { useRouter } from "next/navigation";

interface Props {
  title: string;
  image: StaticImageData; // Change the type to StaticImageData
  height: string;
  serviceUrl: string;
}


const Card: React.FC<Props> = ({ title, image, height, serviceUrl }) => {
  const router = useRouter();

  const handleReadMoreClick = () => {
    router.push(serviceUrl);
  };

  return (
    <div className={`relative bg-cover bg-center ${height}`}>
      <div className="absolute inset-0">
        <Image src={image} alt={title} layout="fill" objectFit="cover" />
        <div className="absolute top-0 left-0 right-0 bottom-0 bg-[#0000008f] h-[100%]"></div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 p-4 bg-[#0000008f] z-10">
        <div className="flex items-center space-x-4">
          <h1 className="px-4 py-[2px] text-[12px] uppercase bg-red-500 text-white">
            Our Services
          </h1>
        </div>
        <h2 className="text-[20px] font-semibold hover:text-red-500 cursor-pointer hover:underline transition-all duration-500 uppercase mt-[0.5rem] text-white">
          {title}
        </h2>
        <div>
          <button
            onClick={handleReadMoreClick}
            className="mt-4 bg-red-500 px-4 py-2 rounded-md text-white hover:bg-red-600 transition duration-300 ease-in-out"
          >
            Read More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
