import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full mt-20 bg-slate-900 text-gray-300 px-2 py-2">
      <div className="max-w-[1400px] mx-auto grid grid-cols-2 md:grid-cols-6 py-8 px-4">
        <div>
          <h6 className="font-bold uppercase p-1">OnlineS</h6>
          <ul>
            <li>Multiplayer</li>
            <li>Friends</li>
            <li>Groups</li>
            <li>NewOptions</li>
          </ul>
        </div>
        <div>
          <h6 className="font-bold uppercase p-1">Offline</h6>
          <ul>
            <li>Multiplayer</li>
            <li>Friends</li>
            <li>Groups</li>
            <li>NewOptions</li>
          </ul>
        </div>
        <div>
          <h6 className="font-bold uppercase p-1">TryGame</h6>
          <ul>
            <li>Multiplayer</li>
            <li>Friends</li>
            <li>Groups</li>
            <li>NewOptions</li>
          </ul>
        </div>
        <div>
          <h6 className="font-bold uppercase p-1">OnlineS</h6>
          <ul>
            <li>Multiplayer</li>
            <li>Friends</li>
            <li>Groups</li>
            <li>NewOptions</li>
          </ul>
        </div>
        <div className="col-span-2 py-8 md:py-2">
          <p className="py-1">Subscribe Today to get the discount!</p>
          <p className="pb-3">Lorem ipsum dolor sit amet.</p>
          <form className="flex flex-col md:flex-row">
            <input
              type="email"
              className="p-3 rounded text-black my-2"
              placeholder="Email"
            />
            <button
              className="bg-purple-500 px-2 py-2 font-bold ml-3 rounded-lg"
              type="submit"
            >
              Subscribe!
            </button>
          </form>
        </div>
      </div>
      <div className="mt-4 flex flex-col sm:flex-row justify-between items-center">
        <p>Copyrite to Nadjib 2023</p>
        <div className="flex justify-between sm:w-[300px] text-2xl">
          <button className="rounded-full  text-white p-1 ml-2">
            <FaFacebook size={25} />
          </button>
          <button className="rounded-full  text-white p-1 ml-2">
            <FaTwitter size={25} />
          </button>
          <button className="rounded-full  text-white p-1 ml-2">
            <FaLinkedin size={25} />
          </button>
          <button className="rounded-full  text-white p-1 ml-2">
            <FaInstagram size={25} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
