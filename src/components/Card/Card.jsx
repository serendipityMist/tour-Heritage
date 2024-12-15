import React from "react";

function Card({ data, onClick }) {
  return (
    <>
      <div
        className="curosr-pointer border border-red-500 bg-slate-300 lg:w-1/4 flex-grow w-1/2  rounded-lg p-2 md:w-1/3 "
        onClick={onClick}
      >
        <h1>{data.name}</h1>
        <h2>Located at:{data.location}</h2>
        <p>{data.description}</p>
      </div>
    </>
  );
}

export default Card;
