import React from "react";
import Consult from "../img/services/consult.svg";
import Maintananace from "../img/services/repair.svg";
import Building from "../img/services/building.svg";
import Settings from "../img/services/settings.svg";
import {Link} from 'react-router-dom'
import "./sliders.css";

export default function midSection() {
  return (
      <>
       <div className="flex mx-auto my-auto px-24 py-4 ">
      <Link to="/" className="text-red-500 ">Home  {'\u00A0'} </Link> <span>   / {'\u00A0'}Whatwedo</span>

    </div>
      <h1 className="my-auto font-bold text-4xl uppercase mx-auto justify-center text-center pt-8  head text-red-500 ">
              Our Sector
            </h1>
        <h2 className="mx-auto px-4 head text-2xl font-medium text-center justify-center py-4 text-left ">
            
            The Major Areas Of Engagement Shall Be Provision Of Electrical And Mechanical Services In Form Of
          </h2>
     
    <div className="w-screen bg-fixed grid grid-cols-1 py-4 px-4  md:grid-cols-4 lg:grid-cols-4 text-white">
       
        <div className="mx-auto  px-4 py-4  transition duration-500 ease-in-out rounded-lg hover:bg-red-400 hover:font-bold transform hover:-translate-y-1 hover:scale-100 ">
          <img
            src={Consult}
            alt="Consult"
            width="80px"
            height="80px"
            className="mx-auto"
          />
 <h1 className="my-auto font-bold text-base uppercase text-center mx-auto justify-start  head text-red-500 ">
              Consulting
            </h1>
          <h2 className="mx-auto px-4 head text-xl text-black  font-medium text-center ">
           
            Our Engineering consulting department work with various clients to
            provide engineering advice and technical solutions on different
            projects.
          </h2>
        </div>
        <div className="mx-auto px-4 py-4 transition duration-500 ease-in-out rounded-lg hover:bg-red-400 hover:font-bold transform hover:-translate-y-1 hover:scale-100 ">
          <img
            src={Maintananace}
            alt="Repair"
            width="80px"
            height="80px"
            className="mx-auto"
          />
           <h1 className="mx-auto font-bold text-base text-center uppercase justify-start head text-red-500 ">
              Maintananace
            </h1>
          <h2 className="mx-auto px-4 head text-xl text-center text-black font-medium text-left">
           
            We employ engineering concepts for the optimaization of equipments,
            prodecures and departmental budgets to achieve better
            maintainabilty, reliabllity &amp; availaibilty of equipments
          </h2>
        </div>

        <div className="mx-auto px-4 py-4  transition duration-500 ease-in-out rounded-lg hover:bg-red-400 hover:font-bold transform hover:-translate-y-1 hover:scale-100 ">
          <img
            src={Building}
            alt="Consult"
            width="80px"
            height="80px"
            className="mx-auto"
          />
           <h1 className="mx-auto  font-bold text-base text-center uppercase  justify-start head text-red-500">
              Construction
            </h1>

          <h2 className="mx-auto px-4 head text-xl text-black text-center font-medium text-left">
           
            Our Engineers are professionally disciplined in dealing with the
            designing, planning, construction and management of infrastructures
          </h2>
        </div>

        <div className="mx-auto  px-4 py-4  transition duration-500 ease-in-out  hover:bg-red-400 hover:font-bold transform hover:-translate-y-1 hover:scale-100">
          <img
            src={Settings}
            alt="Repair"
            width="80px"
            height="80px"
            className="mx-auto"
          />

<h1 className="mx-auto font-bold text-base text-center flex uppercase justify-center  head text-red-500">
              Installation
            </h1>
          <h2 className="mx-auto px-4 text-center text-black head text-xl font-medium text-left">
           
            We Oversee installation, operation, maintenance, or repair to ensure
            that machines or equipment are installed and functionin g according
            to specifications.
          </h2>
        </div>

       
      </div>
 </>
  );
}
