import React from "react";
import Card from "../helper/Card";
import pic6 from "@/public/images/pic6.jpg"; // Importing pic6
import pic11 from "@/public/images/pic11.jpg"; // Importing pic2
import pic13 from "@/public/images/pic13.jpg"; // Importing pic13
import pic12 from "@/public/images/pic12.jpg"; // Importing pic7
import pic9 from "@/public/images/pic9.jpg"; // Importing pic9
import pic14 from "@/public/images/pic14.jpg"; // Importing pic14
import pic10 from "@/public/images/pic10.jpg"; // Importing pic12

function Coaching() {
  return (
    <div className="pt-[5rem] pb-[3rem]">
      <h1 className="heading">Our Coachings</h1>
      <div className="pt-[2rem] md:pt-[3rem] w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[2rem]">
        <Card
          image={pic6}
          title="Kick-Boxing"
          height="h-[300px]"
          serviceUrl="/kickboxing"
        />
        <Card
          image={pic11}
          title="TAEKWONDO"
          height="h-[300px]"
          serviceUrl="/Taekwondo"
        />
        <Card
          image={pic13}
          title="MARTIAL ARTS"
          height="h-[300px]"
          serviceUrl="/martialArts"
        />
        <Card
          image={pic12}
          title="GYMNASTIC"
          height="h-[300px]"
          serviceUrl="/gymnastics"
        />
        <Card image={pic9} title="YOGA" height="h-[300px]" serviceUrl="/yoga" />
        <Card
          image={pic14}
          title="ZUMBA"
          height="h-[300px]"
          serviceUrl="/Zumba"
        />
        <Card
          image={pic10}
          title="CROSSFIT GYM"
          height="h-[300px]"
          serviceUrl="/CrossFit"
        />
      </div>
    </div>
  );
}

export default Coaching;
