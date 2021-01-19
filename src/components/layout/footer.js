import React from "react";
import Logo from "../img/logo.png";

import '../home/client.css'
import './footer.css'

export default function Footer() {
  return (
    <>
      <div className="w-screen grid grid-cols-1 my-auto bg-fixed footer  border-t border-black md:grid-cols-4 my-auto bg-red-300  lg:grid-cols-4 mx-auto px-12 py-12">
        <div className="w-38 h-38 mx-auto">
          <img src={Logo} alt="Logo"  />
        </div>
        <div className="head">
            <h1 className="mx-auto my-auto text-2xl mb-4 text-red-500 uppercase ">Quick Links</h1>
            <h2 className="mx-auto mb-4 text-white font-bold font-2xl">Who we are</h2>
            <h2 className="mx-auto mb-4 text-white font-bold font-2xl ">What we do</h2>
            <h2 className="mx-auto mb-4 text-white font-bold  font-2xl">Portfolio</h2>
            <h2 className="mx-auto mb-4 text-white font-bold font-2xl ">Contact Us</h2>
        </div>
        <div className="head">
            <h1 className="mx-auto my-auto text-2xl mb-4 text-red-500 uppercase ">Company</h1>
            <h2 className="mx-auto mb-4 text-white font-bold font-2xl">Services</h2>
            <h2 className="mx-auto mb-4 text-white font-bold font-2xl ">Our Ceo</h2>
            <h2 className="mx-auto mb-4 text-white font-bold  font-2xl">Our Client</h2>
            <h2 className="mx-auto mb-4 text-white font-bold font-2xl ">Contact Us</h2>
        </div>
        <div className="head">
            <h1 className="mx-auto my-auto text-2xl mb-4 text-red-500 uppercase ">Check us at</h1>
            <h2 className="mx-auto text-white font-bold font-2xl underline">Head Address</h2>
            <h2 className="mx-auto mb-4 text-white font-bold font-2xl ">P.O Box 5714 Ven Adefila Road, (Old-Cemetery Road)
Sabo – Oke Ilorin Kwara State
(+234)803-371-0756</h2>
            <h2 className="mx-auto text-white font-bold underline font-2xl">Branch Address</h2>
            <h2 className="mx-auto mb-4 text-white font-bold font-2xl ">20, Gbadegesin Ajeigbe Strt off Ring Road.
P.O. Box 2826 Dugbe GPO.Ibadan, Oyo State</h2>
        </div>
        <div className=""></div>
        <div className=""></div>
      </div>
      <div className=" mx-auto  grid grid-cols-1">
        <div className="head mx-auto text-red-500  text-base  px-12 py-2">
          &copy; Ibironke Technolgies Limited 2021. All Right Reserved
        </div>
      </div>
    </>
  );
}
