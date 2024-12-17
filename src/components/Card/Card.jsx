import React from "react";
import Button from "../Button/Button";
import "./card.css";
function Card({ data, onClick }) {
  return (
    <div
      className="cursor-pointer  shadow-lg rounded-lg overflow-hidden flex flex-col md:flex-row bg-white transition-transform duration-500 ease-in-out transform hover:scale-105 hover:rotate-3d"
      onClick={onClick}
    >
      {/* Left Side: Image */}
      <div className="relative w-full md:w-1/3">
        <img
          src={data.img || "https://via.placeholder.com/300"}
          alt={data.name}
          className="w-full h-48 md:h-full object-cover"
        />
      </div>

      {/* Right Side: Details */}
      <div className="p-4 flex flex-col justify-between w-full md:w-2/3 ]">
        <div>
          <p className="text-[#333 text-sm mb-1">{data.location}</p>
          <h1 className="text-lg font-bold mb-2 text-[#333]">{data.name}</h1>
          <p className="text-gray-600 text-sm mb-2">
            {data.description || "No description available"}
          </p>
          {data.rating && (
            <p className="text-yellow-500 text-sm font-semibold">
              ⭐ {data.rating} ({data.reviews || 0} reviews)
            </p>
          )}
        </div>
        {/* Bottom Info */}
        <div className="flex justify-between items-center mt-4">
          <div>
            <p className="text-sm text-gray-500">
              Duration:{data.duration || "N/A"}
            </p>
            <p className=" font-bold">
              From :<span className="text-green-600"> $99</span>
            </p>
            {/* <p className="text-red-500 font-semibold">Price Unavailable</p> */}
          </div>
          <Button onClick={onClick} label="View Details" />
        </div>
      </div>
    </div>
  );
}

export default Card;
