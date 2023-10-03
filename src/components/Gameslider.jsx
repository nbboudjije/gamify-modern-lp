import React, { useState } from "react";
import {} from "../motion";
import { FcLeft, FcRight } from "react-icons/fc";
import { AiOutlineDotChart } from "react-icons/ai";

const Gameslider = () => {
  const slides = [
    {
      url: "https://images.unsplash.com/photo-1617807666231-331677e1c41f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      title: "RDR2",
    },
    {
      url: "https://images.unsplash.com/photo-1616588589676-62b3bd4ff6d2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1332&q=80",
      title: "CyberPunk",
    },
    {
      url: "https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      title: "Call of duty MW3",
    },
    {
      url: "https://images.unsplash.com/photo-1600861194942-f883de0dfe96?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80",
      title: "LITTLE",
    },
  ];
  const [indexx, setIndexx] = useState(0);

  const prevSlide = () => {
    const newIndex = indexx === 0 ? slides.length - 1 : indexx - 1;
    setIndexx(newIndex);
  };
  const nextSlide = () => {
    const newIndex = indexx === slides.length - 1 ? 0 : indexx + 1;
    setIndexx(newIndex);
  };

  const jumpIndex = (index) => {
    setIndexx(index);
  };

  return (
    <div className="max-w-[1400px] h-[500px] m-auto relative py-16 px-4 group">
      <div
        className="h-full w-full rounded-2xl bg-center bg-cover duration-700"
        style={{ backgroundImage: `url(${slides[indexx]?.url})` }}
      ></div>

      <div className="absolute top-[50%] left-5 ">
        <button
          className="rounded-full bg-purple-500 p-2 group-hover:bg-black/20"
          onClick={prevSlide}
        >
          <FcLeft />
        </button>
      </div>
      <div className="absolute top-[50%] right-5 ">
        <button
          className="rounded-full bg-purple-500 p-2 group-hover:bg-black/20"
          onClick={nextSlide}
        >
          <FcRight />
        </button>
      </div>
      <div className="flex top-4 justify-center p-4">
        {slides.map((slide, indexx) => (
          <div
            key={indexx}
            className="text-2xl"
            onClick={() => {
              jumpIndex(indexx);
            }}
          >
            <button className="p-4">
              <AiOutlineDotChart />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gameslider;
