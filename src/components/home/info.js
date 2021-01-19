import React from "react";

export default function Info() {
  return (
    <>
    
      <div className="w-screen grid md:grid-cols-3 mx-auto md:px-20 py-20 lg:px-20 mt-8 grid-cols-1">
        <div className="mx-auto px-8 py-8 text-left">
          <h1 className="mx-auto my-auto font-bold text-sm -flex justify-start head text-red-500">
            OUR EXPERTISE
          </h1>
          <h1 className="mx-auto my-auto font-bold text-2xl pb-2 flex justify-start head text-black">
            Why People Choose Us
          </h1>
          <h2 className="head text-xl font-medium ">
            We develop innovative, efficient and sustainable exploration and
            production solutions that respons to our future challenges
          </h2>
        
          
        </div>
        <div className="mx-8">

        <div className="border-l-4 border-red-500 px-8 h-64  ">
        <h1 className="mx-auto my-auto font-bold text-xl pb-12 pt-4   text-red-500 flex justify-start head text-black">
            We Are innovative
          </h1>
          <h1 className="mx-auto my-auto font-bold text-2xl pb-12  flex justify-start head text-black">
            We Develop and Transform
          </h1>
          <h1 className="mx-auto my-auto font-bold text-xl pb-8 text-black flex justify-start head text-black">
            We Are Trade Expert
          </h1>             
        </div>
        </div>

        <div>
        <div className="font-serif text-white mx-10 mt-4 md:mx-2 mt-20 md:mt-2 lg:mx-2 h-auto py-8 bg-gradient-to-r from-red-500 to-red-700  w-auto text-center">
          <div className="w-12 h-12 mx-auto">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
          </div>
          <span className="text-3xl font-medium ">23 </span>
         
          <span className="text-3xl">
            Team Years
             Experience
          </span><br/><br/>
          <span className="text-2xl">
           Over 300 projects Completed
          </span><br/><br/>
          <span className="text-xl">
           Over 250 Clients
          </span>
        </div>

        </div>
      </div>
    </>
  );
}
