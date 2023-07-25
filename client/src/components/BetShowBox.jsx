import React from "react";
import bet from "../assets/bet.jpg";

const BetShowBox = () => {
  return (
    <div className="flex items-center h-44 bg-gradient-to-r from-white border to-indigo-100 my-5">
      <img src={bet} alt="" className="h-full p-4 round" />
      <div className="grow">
        <p>Get a bike</p>
        <p>description description description description description description description description description description description description description description description description description description description description description</p>
      </div>
      <div className="w-96 p-5">
        
      <p className="text-sm">price: 20tk</p>
        <p className="text-sm">Vlote A: 20 people</p>
        <p className="text-sm">Vlote B: 20 people</p>
        <p className="text-sm">Vlote C: 100 people</p>
      </div>
    </div>
  );
};

export default BetShowBox;
