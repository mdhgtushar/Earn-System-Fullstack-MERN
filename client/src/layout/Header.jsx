import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
// import "../index.css";

const Header = () => {
  return (
    <div className="flex items-center justify-center w-full border-b border-black-100 left-0  bg-gradient-to-r from-yellow-500 to-indigo-100">
      <div className="flex flex-1">
        <div className="flex items-center justify-center">
          <Link to="/" className="p-4">
            <img src={logo} alt="non" className="h-7 px-7" />
          </Link>
        </div> 
      </div>
      <div className="flex-1 text-right px-7">
        <Link to="/" className="px-2">
          Home
        </Link>
        <Link to="/profile" className="px-2">
          Profile
        </Link>
        <Link to="/auth" className="px-2">
          Auth
        </Link>
      </div>
    </div>
  );
};

export default Header;
