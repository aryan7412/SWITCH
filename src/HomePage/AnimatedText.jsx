import React from "react";
import "./AnimatedText.css";

const AnimatedText = () => {
  return (
    <div className="m-0 p-0 h-[200px] flex items-center justify-center font-montserrat">
      <div className="animated-text text-4xl font-light min-w-[280px]">
        <span></span>
      </div>
    </div>
  );
};

export default AnimatedText;