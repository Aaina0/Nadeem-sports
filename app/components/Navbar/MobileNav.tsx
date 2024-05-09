import React from "react";
import { RxCross2 } from "react-icons/rx";
import Link from "next/link";

interface Props {
  nav: boolean;
  closeNav: () => void;
}
function MobileNav({ closeNav, nav }: Props) {
  const navStyle = nav ? "translate-x-0" : "translate-x-[-100%]";

  return (
    <div
      className={`fixed ${navStyle} right-0 left-0 bottom-0 top-0 transition-all duration-500 bg-[#000000] z-[800]`}
    >
      <RxCross2
        onClick={closeNav}
        className="absolute top-[2rem] w-[1.5rem] h-[1.5rem] right-[2rem] text-white"
      />
      <div
        className={`bg-red-600 ${navStyle} transition-all duration-500 delay-200 flex items-center justify-center w-[70%] h-[100%]`}
      >
        <ul className="space-y-10">
          <li className="text-[25px] font-medium uppercase hover:text-white transition-all">
            <Link href="#">Home</Link>
          </li>
          <li className="text-[25px] font-medium uppercase hover:text-white transition-all">
            <Link href="#">Our Coachings</Link>
          </li>
          <li className="text-[25px] font-medium uppercase hover:text-white transition-all">
            <Link href="#">Testimonials</Link>
          </li>
          <li className="text-[25px] font-medium uppercase hover:text-white transition-all">
            <Link href="#">About</Link>
          </li>
          <li className="text-[25px] font-medium uppercase hover:text-white transition-all">
            <Link href="#">Contact</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default MobileNav;
