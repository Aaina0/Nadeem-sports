"use client";

import React, { useState } from "react";
import Navbar from "./Navbar";
import MobileNav from "./MobileNav";

function ResponsiveNav() {
  const [showNav, setShowNav] = useState(false);
  const OpenNavHandler = () => setShowNav(true);
  const closeNavHandler = () => setShowNav(false);
  return (
    <div className="">
      <Navbar openNav={OpenNavHandler} />
      <MobileNav nav={showNav} closeNav={closeNavHandler} />
    </div>
  );
}

export default ResponsiveNav;
