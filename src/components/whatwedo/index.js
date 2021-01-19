import React from "react";

import "./sliders.css";
export default function Whatwedo() {
  return (
    <>
      <div className="w-screen  my-auto mb-4 px-20 py-12 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3">
        <div className="font-serif text-white h-auto py-8 bg-red-500 w-auto text-center">
          <div className="w-20 h-20 mx-auto">
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
          <span className="text-7xl font-medium ">23</span>
          <br />
          <span className="text-4xl">
            Team Years
            <br /> Experience
          </span>
        </div>
        <div className=" my-auto font-sans font-light text-center  text-red-500 text-4xl ">
        SECRETS OF SUCCESS<br/>
OF OUR PROJECTS
        </div>
        <div className=" my-auto font-sans  text-left  text-black text-xl ">
        
        Since 1995, We Are Striving Hard To Realise Our Purpose For Which The Company Is Established And The Principle And Practices Under Accomplishment Of This Purpose, At ITL We Cannot Solve Our Problems With The Same Thinking We Used When We Created Them & Science Is About Knowing, Engineering Is About Doing <br/>
           <button type="button" class="mx-auto justify-start transition duration-500 focus:shadow-lg ease-in-out hover:bg-red-400 hover:font-bold transform hover:-translate-y-1 hover:scale-100 font-mono  focus:outline-none outline-none  focus:shadow-outline border border-red-500  bg-red-500 hover:bg-red-600 text-white hover:text-white  py-2 px-4 mt-4 cv">Read More
                 </button>
        </div>
      </div>
    </>
  );
}
