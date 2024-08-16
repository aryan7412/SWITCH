import React from "react";
import { IoIosQuote } from "react-icons/io";

const TestimonialSlider = ({ item, isHovered, index, hoveredIndex }) => {
  const isOtherCard = index !== hoveredIndex && hoveredIndex !== null;

  return (
    <div
      className={`p-4 text-white transition-transform duration-300 ${
        isOtherCard ? 'blur-sm' : 'blur-none'
      } ${isHovered ? 'scale-105 translate-z-10' : ''} 
      ${isHovered ? 'relative' : ''}`}
      style={{
        transformStyle: 'preserve-3d',
        transform: isHovered ? 'translateZ(20px)' : 'translateZ(0)',
      }}
    >
      <div
        className="bg-gradient-to-br rounded-lg shadow-slate-400 shadow-lg p-6 h-[400px]"
        style={{ backgroundColor: item.bgcolor }}
      >
        <div className="flex items-center justify-between mb-4">
          <span className="text-4xl text-blue-800 opacity-70">
            <IoIosQuote />
          </span>
        </div>
        <p className="text-[16px] mb-6 max-h-60">{item.disc}</p>
        <hr className="w-32 ml-44 absolute bottom-20" />
        <div>
          <img
            src={item.img_url}
            className="w-24 h-24 rounded-full object-cover bottom-[70px] absolute translate-x-[-30px] translate-y-24"
          />
        </div>
        <div>
          <h1 className="text-lg font-bold ml-[184px] absolute bottom-[50px]">
            {item.name}
          </h1>
          <p className="text-xs text-white ml-[200px] absolute bottom-[37px]">
            {item.position}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSlider;