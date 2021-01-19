import React from "react";
import Logo from "../img/logo.png";

export default function PrimaryNav() {
  return (
    <div className="bg-white w-auto h-auto hidden md:grid lg:grid mx-auto  px-4 text-white font-bold grid md:grid-cols-2 lg:grid-cols-2 ">
      
      <div className=" w-38 h-38  mx-auto ">
        <img src={Logo} alt="Logo" />
      </div>
      
    </div>
  );
}
