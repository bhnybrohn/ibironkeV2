import React from 'react'


import './slider.css'




export default function Slider() {
    return (
        <div className="w-screen mx-auto homex px-8 py-40 h-full">
           
         
              <h3 className="center font-bold mx-auto my-auto text-gray-300
                  md:text-2xl text-xl lg:text-xl text-left ">Mechanical &amp; Electrical Engineering Services</h3>
                  <h3 className="text font-bold  text-red-500
                  md:text-4xl text-xl lg:text-4xl bg-gray-200 px-2 py-2 w-3/5 text-left ">
                    Design is not how it looks like <br/> and feels like. Design is how it works </h3>
            <h1 className="center font-medium pt-4 mx-auto my-auto text-white
                  md:text-xl text-sm lg:text-2xl left capitalize">ITL is an independent engineering consultancy firm with
                   in-depth<br/> experience of providing building services for our clients.<br/> 
                   We provide services to support you at all stages of the project</h1>
                  <div className="flex">
                <button type="button" class=" transition duration-500 focus:shadow-lg ease-in-out hover:bg-red-400 hover:font-bold transform
                 hover:-translate-y-1 hover:scale-100 font-mono  focus:outline-none outline-none  focus:shadow-outline border border-red-500
                   bg-red-500 hover:bg-red-600 text-white hover:text-white font-bold py-2 px-4 mt-4 cv">Learn More
                 </button>
              
                  </div> 
        </div>
    )
}