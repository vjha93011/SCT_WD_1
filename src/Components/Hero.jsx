import React from "react";
import {Typed} from "react-typed";
const Hero = () => {
  return (
    <div className="">
      <div className="max-w-[800px] h-screen mx-auto flex flex-col text-center w-full mt-[150px] items-center">
        <p className="text-[#00df9a] font-bold p-2">
          GROWING WITH DATA ANALYSIS
        </p>
        <h1 className="md:text-7xl sm:text-6xl  text-4xl font-bold md:py-4 ">
          Grow with Data
        </h1>
        <div>
          <p className="md:text-5xl sm:text-4xl text-xl font-bold p-2 py-4">
            Fast,flexible financing for <span className="text-gray-400">
                SaaS
            </span>
          </p>
        </div>
        <p className="md:text-2xl text-4xl font-bold p-2 text-gray-400">Monitor your data analytics to increse revenue for BTC,BTB,BTC,& SaaS platforms</p>
        <button className="bg-[#00df9a] w-[200px] rounded-md py-3 text-black">
            Get Started
        </button>
      </div>
    </div>
  );
};

export default Hero;
