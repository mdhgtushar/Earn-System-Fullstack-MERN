import React from "react";
import goldcoin_image from "../assets/goldcoin.png";

const SportBox = () => {
  return (
    <div className="flex items-center h-9 my-2 border-gray-200 p-1 cursor-pointer text-sm">
      <img
src={goldcoin_image}
alt=""
        className="h-full py-1 pr-2 round"
      /> 
        <span>Sport Name (Football)</span> 
    </div>
  );
};

export default SportBox;
