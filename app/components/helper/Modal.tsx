import React from "react";
import Image from "next/image";
import pic4 from "@/public/images/pic4.jpg"; // Check if this path is correct

interface Props {
  hideModel: () => void;
}

function Modal({ hideModel }: Props) {
  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-70 z-50 flex justify-center items-center">
      <div className="bg-white rounded-lg p-6 max-w-md flex flex-col items-center"> {/* Added flex and items-center */}
        <h1 className="items-center justify-center font-bold text-xl mb-5 text-gray-800">Owner of Ghazi Taekwondo and Fitness club </h1>
        <div className="flex justify-center"> {/* Centering the image */}
          <Image src={pic4} alt="Image" width={200} height={80} />{" "} {/* Adjusted size */}
        </div>
        <p className="text-gray-800 mt-4">
          Nadeem Ali Janjua, a Black Belt 4 Dan (WTF), serves as Trainer & Chief
          Organizer, as well as General Secretary of the Lahore Division
          Taekwondo Association and the Children Sports Committee Pakistan. With
          his expertise and leadership, he uplifts the martial arts community
          locally and nationally.
        </p>
        <button
          onClick={hideModel}
          className="mt-4 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-800"
        >
          Close
        </button>
      </div>
    </div>
  );
}

export default Modal;
