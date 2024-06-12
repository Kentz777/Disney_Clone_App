import React from "react";
import disney from "../images/disney.png";
import pixar from "../images/pixar.png";
import marvel from "../images/marvel.png";
import natgeo from "../images/nationalG.png";
import sw from "../images/starwar.png";

import disneyV from "../videos/disney.mp4";
import pixarV from "../videos/pixar.mp4";
import marvelV from "../videos/marvel.mp4";
import natgeoV from "../videos/national-geographic.mp4";
import swV from "../videos/star-wars.mp4";

function ProductionHouse() {
  const productionHouseList = [
    {
      id: 1,
      image: disney,
      video: disneyV,
    },
    {
      id: 2,
      image: pixar,
      video: pixarV,
    },
    {
      id: 3,
      image: marvel,
      video: marvelV,
    },
    {
      id: 4,
      image: natgeo,
      video: natgeoV,
    },
    {
      id: 5,
      image: sw,
      video: swV,
    },
  ];

  return (
    <div className="flex gap-2 md:gap-5 p-2 md:px-16 px-5 ">
      {productionHouseList.map((item) => (
        <div key={item.id} className="border-[2px] border-gray-600
        rounded-lg hover:scale-110 transition-all duration-300 ease-in-out
        cursor-pointer relative shadow-xl shadow-black"> 
         <video src={item.video} autoPlay loop playsInline
       className="absolute top-0 rounded-md z-0 opacity-0 hover:opacity-50
       "/>
     <img src={item.image} className="w-full z-[-1]" alt={`Production House ${item.id}`} />
        </div>
      ))}
    </div>
  );
}

export default ProductionHouse;
