import React from "react";
import { Link } from "react-router-dom";
import "../home/client.css";
import Logo from "../img/logo.png";

export default function Secondarynav() {
  return (
    <div className=" absolute sticky top-0 z-10">
      <div className="bg-gray-900 flex head w-screen h-auto grid md:grid-cols-2 lg:grid-cols-2 lg:grid md:grid hidden font-medium text-white">
        <div className="  mx-auto w-auto ">
          <img src={Logo} alt="Logo" width="400px" height="400px" />
        </div>

        <div className=" flex  my-auto justify-end">
          <Link to="/" className="mx-auto  ">
            Home
          </Link>
          <Link to="/whoweare" className="mx-auto">
            Who we are
          </Link>
          <Link to="/whatwedo" className="mx-auto">
            What we do
          </Link>
          <Link className="mx-auto">Portfolio</Link>
          <Link to="/career" className="mx-auto">
            Career
          </Link>
          <Link to="/contactus" className="mx-auto ">
            Contact Us
          </Link>
        </div>
      </div>
      <div className="bg-gray-900 flex head w-screen h-auto   px-2 flex lg:hidden md:hidden font-medium text-white">
        <div className="  mx-auto ">
          <img src={Logo} alt="Logo" width="700px" height="700px" />
        </div>

        <div className=" flex py-4 pt-2 justify-end mx-8">
         <i className="fa fa-bars"></i>
        </div>
      </div>
    </div>
  );
}
