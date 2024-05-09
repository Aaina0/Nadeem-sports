import React from "react";
import logo from "@/public/images/logo.png";
import Image from "next/image";
import Link from "next/link";
import { CiMenuKebab } from "react-icons/ci";

interface Props {
  openNav: () => void;
}

function Navbar({ openNav }: Props) {
  return (
    <div className="h-[15vh] shadow-md">
      <div className="flex items-center justify-between h-[100%] w-[90%] mx-auto">
        <Image src={logo} alt="logo" width={150} height={150} />
        <ul className="hidden lg:flex items-center space-x-16">
          <li className="text-[18px] font-medium uppercase hover:text-red-600 transition-all">
            <Link href="#">Home</Link>
          </li>
          <li className="text-[18px] font-medium uppercase hover:text-red-600 transition-all">
            <Link href="#">Our Coachings</Link>
          </li>
          <li className="text-[18px] font-medium uppercase hover:text-red-600 transition-all">
            <Link href="#">Testimonials</Link>
          </li>
          <li className="text-[18px] font-medium uppercase hover:text-red-600 transition-all">
            <Link href="#">About</Link>
          </li>
          <li className="text-[18px] font-medium uppercase hover:text-red-600 transition-all">
            <Link href="#">Contact</Link>
          </li>
        </ul>
        <div className="flex items-center space-x-3">
          <button className="px-6 py-2 sm:px-8 sm:py-2.5 transition-all duration-300 bg-blue-800 hover:bg-blue-600 text-white font-semibold ">
            Join Now
          </button>
          <CiMenuKebab
            onClick={openNav}
            className="w-[2rem] h-[2rem] text-red-600 lg:hidden"
          />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
