import React from "react";


import "./index.css";

export default function Header() {
  return (
      <>
    <div className="w-screen mx-auto contact px-8 py-36 h-full">
      <h3
        className="center font-bold mx-auto my-auto text-gray-300
               md:text-2xl text-xl lg:text-xl text-left "
      >
        Contact Us
      </h3>
      <h3
        className="text font-bold  text-red-500
               md:text-4xl text-xl lg:text-4xl bg-gray-200 px-2 py-2 w-3/5 text-left "
      >
        Science can amuse and fascinate us all, but it is engineering that
        changes the world
      </h3>
      <h1
        className="center font-medium pt-4 mx-auto my-auto text-white
               md:text-xl text-sm lg:text-2xl left capitalize"
      >
        We believe at ITL that the start of any great action within parties
        comes with <br />a great communication. lets get started on our journey
        together and experience great and optimal satisfaction contact us
        today!!!
      </h1>
      <div className="flex"></div>
    </div>
    
    </>
  );
}
