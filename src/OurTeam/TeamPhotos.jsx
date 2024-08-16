import React from "react";
import Heading from "../Heading";
import { Link } from "react-router-dom";

function TeamPhotos({ TeamPhoto }) {
  return (
    <div>
      <div className="">
        <Heading>Our <strong>Team</strong></Heading>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1 ml-2 mr-2 items-center overflow-hidden">
          {TeamPhoto.map((pht, index,post) => (
            <div className="ml-3 mb-4 overflow-hidden">
              <img
                className="rounded-full h-32 sm:h-40 ml-[90px]"
                src={pht.image}
                alt={`Gallery image ${index + 1}`}
              />
              <div className="text-center font-semibold">{pht.name}</div>
              <div className="text-center text-[13px]">{pht.post}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="text-center py-7">
        <Link to="/Team">
            <button className="border border-black px-[10px] py-[6px] rounded-lg">Meet Entire Team</button>
        </Link>
      </div>
    </div>
  );
}

export default TeamPhotos;
