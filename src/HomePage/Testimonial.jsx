import React, { useState, useRef } from "react";
import Slider from "react-slick";
import ClientSlider from "./TestimonialSlider";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

let clients = [
  {
    name: "John Michel",
    position: "web developer",
    bgcolor: "#8D5EB7",
    img_url: "https://t4.ftcdn.net/jpg/02/90/27/39/360_F_290273933_ukYZjDv8nqgpOBcBUo5CQyFcxAzYlZRW.jpg",
    disc: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus consequuntur dolores labore natus similique nemo ipsum dolor, sit amet consectetur adipisicing elit. Temporibus consequuntur dolores labore natus similique nemo doloribus c doloribus cum accusantium adipisci maiores.`
  },
  {
    name: "John Michel",
    position: "web developer",
    bgcolor: "#009DC4",
    img_url: "https://t4.ftcdn.net/jpg/02/90/27/39/360_F_290273933_ukYZjDv8nqgpOBcBUo5CQyFcxAzYlZRW.jpg",
    disc: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus consequuntur dolores labore natus similique nemo doloribus cum accusantium adipisci maiores.`
  },
  {
    name: "John Michel",
    position: "web developer",
    bgcolor: "#C12267",
    img_url: "https://t4.ftcdn.net/jpg/02/90/27/39/360_F_290273933_ukYZjDv8nqgpOBcBUo5CQyFcxAzYlZRW.jpg",
    disc: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus consequuntur dolores labore natus similique nemo doloribus cum accusantium adipisci maiores.`
  },
  {
    name: "John Michel",
    position: "web developer",
    bgcolor: "#F15D3D",
    img_url: "https://t4.ftcdn.net/jpg/02/90/27/39/360_F_290273933_ukYZjDv8nqgpOBcBUo5CQyFcxAzYlZRW.jpg",
    disc: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus consequuntur dolores labore natus similique nemo doloribus cum accusantium adipisci maiores.`
  },
];

var settings = {
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  initialSlide: 0,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 3000,
  responsive: [
    {
      breakpoint: 990,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 530,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const Testimonial = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const arrowRef = useRef(null);

  const clientDisc = clients.map((item, i) => (
    <div
      key={i}
      onMouseEnter={() => setHoveredIndex(i)}
      onMouseLeave={() => setHoveredIndex(null)}
    >
      <ClientSlider
        item={item}
        isHovered={hoveredIndex === i}
        index={i}
        totalSlides={clients.length}
        hoveredIndex={hoveredIndex} 
      />
    </div>
  ));
  

  return (
    <div id="client" className="w-4/5 max-w-[1280px] mx-auto py-16">
      <div className="text-center font-light">
        <span className="text-center text-4xl font-light tracking-wider pb-2 pt-6">
          Testimonials
        </span>
      </div>

      <div className="mt-8 relative">
        <Slider ref={arrowRef} {...settings}>
          {clientDisc}
        </Slider>
        <div className="absolute right-2 bottom-[-2rem] hidden sm:flex">
          {/* <button
            onClick={() => arrowRef.current.slickPrev()}
            className="bg-transparent ml-2 border-none text-blue-800 cursor-pointer text-xl"
          >
            <IoIosArrowBack />
          </button>
          <button
            onClick={() => arrowRef.current.slickNext()}
            className="bg-transparent ml-2 border-none text-blue-800 cursor-pointer text-xl"
          >
            <IoIosArrowForward />
          </button> */}
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
