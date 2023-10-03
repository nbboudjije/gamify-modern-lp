import React from "react";
import { headTextAnimation } from "../motion";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="w-full h-screen relative">
      <img
        src="https://images.unsplash.com/photo-1585620385456-4759f9b5c7d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
        alt=""
        className="object-cover w-full h-screen "
      />
      <div className="bg-black/50 absolute top-0 left-0 w-full h-screen"></div>
      <motion.div
        {...headTextAnimation}
        className="text-white absolute top-0 md:top-[-5%] flex flex-col w-full h-screen justify-center items-center"
      >
        <p>Lorem ipsum.</p>
        <h1 className="text-5xl my-1 text-center font-bold drop-shadow-2xl">
          Lorem ipsum dolor sit amet consectetur
        </h1>
        <p1 className="my-2 text-center">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas
          esse pariatur obcaecati, vero voluptatem id!
        </p1>
        <button className="rounded-full bg-purple-500 text-white box-shadow shad px-3 py-3 w-[150px]">
          Play Now!
        </button>
      </motion.div>
    </div>
  );
};

export default Hero;
