import React from "react";
import { motion } from "framer-motion";
import { headContainerAnimation } from "../motion";

const Games = () => {
  return (
    <motion.div
      {...headContainerAnimation}
      className="max-w-[1400px] mx-auto py-16 px-4 grid lg:grid-cols-2 gap-4 "
    >
      <div className="grid grid-cols-2 grid-rows-6 h-[80vh] duration-500">
        <img
          src="https://images.unsplash.com/photo-1617807666231-331677e1c41f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
          alt=""
          className="object-cover w-full h-full p-2 row-span-3"
        />
        <img
          src="https://images.unsplash.com/photo-1585620385456-4759f9b5c7d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
          alt=""
          className="object-cover w-full h-full p-2 row-span-2"
        />
        <img
          src="https://images.unsplash.com/photo-1604846887565-640d2f52d564?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1331&q=80"
          alt=""
          className="object-cover w-full h-full p-2 row-span-2"
        />
        <img
          src="https://images.unsplash.com/photo-1617807666231-331677e1c41f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
          alt=""
          className="object-cover w-full h-full p-2 row-span-3"
        />
        <img
          src="https://images.unsplash.com/photo-1623934199716-dc28818a6ec7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1332&q=80"
          alt=""
          className="object-cover w-full h-full p-2 row-span-2"
        />
      </div>
      <div className="flex flex-col justify-center items-start">
        <h3 className="font-bold text-4xl mb-3">Choose Your Next Video Game</h3>
        <p className="text-xl mb-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident,
          odio?
        </p>
        <p className="mb-2">Lorem ipsum dolor sit amet.</p>
        <div>
          <button className="bg-purple-500 rounded-lg text-white py-3 px-2 my-2 mr-2">
            Choose Now!
          </button>
          <button className="bg-purple-500 rounded-lg text-white py-3 px-2">
            Learn More...
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default Games;
