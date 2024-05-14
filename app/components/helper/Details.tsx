import pic17 from "/images/pic17.jpg";
import pic21 from "/images/pic21.jpg";
import pic25 from "/images/pic25.jpg";
import pic20 from "/images/pic20.jpg";
import pic23 from "/images/pic23.jpg";
import pic19 from "/images/pic19.jpg";
import pic24 from "/images/pic24.jpg";
import { StaticImageData } from "next/image";

export interface Service {
  title: string;
  image: StaticImageData; // Adjust the type to StaticImageData
  description: string;
}

const data: { [key: string]: Service } = {
  kickboxing: {
    title: "Kickboxing",
    image: pic17, // Use the imported image directly
    description:
      "At Ghazi Taekwondo and Fitness Club, our kickboxing coaching service is led by experienced instructors, offering dynamic workouts tailored to enhance your fitness and unleash your strength. Join us today to experience personalized training that will help you achieve your fitness goals effectively.",
  },
  Taekwondo: {
    title: "Taekwondo",
    image: pic21, // Use the imported image directly
    description:
      "At Ghazi Taekwondo and Fitness Club, we specialize in expert Taekwondo coaching. Our personalized instruction is designed to accelerate your progress and refine your skills, no matter your current skill level. Join us today to unlock your full potential and master the art of Taekwondo with confidence!",
  },
  martialArts: {
    title: "Martial Arts",
    image: pic25, // Use the imported image directly
    description:
      "At Ghazi Taekwondo and Fitness Club, our martial arts coaching provides personalized instruction tailored to individuals of all skill levels. Join us today to unlock your inner warrior and embark on a journey of empowerment and self-discovery.",
  },
  gymnastics: {
    title: "Gymnastics",
    image: pic20, // Use the imported image directly
    description:
      "At Ghazi Taekwondo and Fitness Club, our expert gymnastics coaching is designed for individuals of all ages and abilities. Led by experienced instructors, our classes focus on developing strength, flexibility, and coordination. Whether you're a beginner or an advanced gymnast, we provide personalized instruction in a supportive environment to help you achieve your fitness goals. Join us today and experience the exhilaration of gymnastics while improving your overall fitness",
  },
  yoga: {
    title: "Yoga",
    image: pic23, // Use the imported image directly
    description:
      "At Ghazi Taekwondo and Fitness Club, our yoga coaching service provides a sanctuary for mind-body wellness. Led by experienced instructors, our classes cater to all levels, ensuring a holistic approach to fitness and relaxation. Whether you're a beginner or an experienced yogi, join us to cultivate strength, flexibility, and inner peace through the transformative practice of yoga.",
  },
  Zumba: {
    title: "Zumba",
    image: pic19, // Use the imported image directly
    description:
      "At Ghazi Taekwondo and Fitness Club, our Zumba coaching service provides high-energy, fun-filled workouts led by experienced instructors. Join us to dance, sweat, and smile your way to improved health and fitness!",
  },
  CrossFit: {
    title: "CrossFit",
    image: pic24, // Use the imported image directly
    description:
      "At Ghazi Taekwondo and Fitness Club, our CrossFit coaching service delivers intense, results-driven workouts led by certified trainers. Join us to push your limits and achieve your fitness goals today!",
  },
};

export default data;
