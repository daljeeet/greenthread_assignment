import React from "react";

const HeroSection = () => {
  return (
    <div className=" bg-gradient-to-r from-[#ED5A5E] to-[#F35460] my-4 px-14 py-20 rounded-[40px]">
      {/* left hero section  */}
      <div className="text-white w-1/2">
        <p className="text-[30px] leading-tight">
          Platform for creators <br /> to showcase{" "}
        </p>
        <h4 className="text-[50px] font-bold">Digital Products</h4>
        <p className="text-lg font-thin">
          Create your Wall to recommend & share APPS, COURSES, E-BOOKS, GAMES,
          PODCASTS AND MUCH MORE!
        </p>
        <button className="text-black bg-white py-3 px-4 rounded-full my-10 font-bold text-[18px] shadow-lg shadow-black">
          Build your Wall
        </button>
        <div className="flex relative w-[20%]">
            <div className="h-12 w-12 border-2 border-white rounded-full absolute left-0 bg-yellow-400" ></div>
            <div className="h-12 w-12 border-2 border-white rounded-full absolute left-[25%] bg-red-400" ></div>
            <div className="h-12 w-12 border-2 border-white rounded-full absolute left-[50%] bg-green-400"></div>
            <div className="h-12 w-12 border-2 border-white rounded-full absolute left-[75%] bg-blue-400 " ></div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
