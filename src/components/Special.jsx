import React from "react";
import { motion } from "framer-motion";
import { headContainerAnimation2 } from "../motion";

const Special = () => {
  return (
    <motion.div
      {...headContainerAnimation2}
      className="max-w-[1400px] h-[500px] bg-blue-100 my-20 mx-auto grid lg:grid-cols-3 gap-4 lg:mb-[20%] md:mb-[35%]"
    >
      <div className="flex flex-col justify-center items-start p-3 col-span-1">
        <h1 className="text-2xl font-bold">The Highest Discount Today</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil, hic
        </p>
      </div>
      <div className="grid grid-cols-2 gap-2 col-span-2">
        <img
          src="https://images.unsplash.com/photo-1617807666231-331677e1c41f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
          alt=""
          className="object-cover w-full h-full p-2 row-span-3"
        />
        <img
          src="https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
          alt=""
          className="object-cover w-full h-full p-2 row-span-6"
        />
        <img
          src="https://images.unsplash.com/photo-1564049489314-60d154ff107d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1483&q=80"
          alt=""
          className="object-cover w-full h-full p-2 row-span-3"
        />
      </div>
    </motion.div>
  );
};

export default Special;
