import React from "react";
import Button from "../Button/Button";

function Card({ data, onClick }) {
  return (
    <>
      <div
        className="curosr-pointer border  bg-slate-300 lg:w-1/4 flex-grow w-1/2  rounded-lg p-2 md:w-1/3 "
        onClick={onClick}
      >
        <h1>{data.name}</h1>
        <h2>Located at:{data.location}</h2>
        <p>{data.description}</p>
        <Button onClick={onClick} />
      </div>
    </>
  );
}

export default Card;
