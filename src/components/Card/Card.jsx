import React from "react";
import Button from "../Button/Button";

function Card({ data, onClick }) {
  return (
    <div
      className="cursor-pointer border border-gray-200 shadow-lg rounded-lg overflow-hidden flex flex-col md:flex-row bg-white"
      onClick={onClick}
    >
      {/* Left Side: Image */}
      <div className="relative w-full md:w-1/3">
        <img
          src={data.img || "https://via.placeholder.com/300"}
          alt={data.name}
          className="w-full h-48 md:h-full object-cover"
        />
        {/* Optional Tag: Discount */}
        {data.discount && (
          <span className="absolute top-2 left-2 bg-orange-500 text-white text-xs font-bold px-2 py-1 rounded">
            {data.discount}% OFF
          </span>
        )}
      </div>

      {/* Right Side: Details */}
      <div className="p-4 flex flex-col justify-between w-full md:w-2/3">
        <div>
          <p className="text-gray-500 text-sm mb-1">{data.location}</p>
          <h1 className="text-lg font-semibold mb-2">{data.name}</h1>
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
            <p className="text-sm text-gray-500">{data.duration || "N/A"}</p>
            {data.price ? (
              <p className="text-green-600 font-bold">From ${data.price}</p>
            ) : (
              <p className="text-red-500 font-semibold">Price Unavailable</p>
            )}
          </div>
          <Button onClick={onClick} label="View Details" />
        </div>
      </div>
    </div>
  );
}

export default Card;
