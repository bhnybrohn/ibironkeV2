
import React, { useState } from "react";
import Modal from "react-modal";

import {Link} from 'react-router-dom'

import "./career.css";

Modal.setAppElement("#root");

export default function MidSection() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  return (
    <>
    <div className="flex mx-auto my-auto px-24 py-4 ">
      <Link to="/" className="text-red-500 ">Home  {'\u00A0'} </Link> <span>   / {'\u00A0'}Career</span>

    </div>
    <div className="mx-auto my-auto px-4 md:px-24 lg:px-24 font-serif text-base">
      
                ITL values trust, integrity, and commitment to excellence and believes that each employee has the competence to make the difference.
    We give high importance to relationships, which gets reflected in the way we work with our customers and interact with our employees.

For a professionally challenging yet economically rewarding career do send in your resume to techibironke@gmail.com
 And, we will surely connect with you for potential opportunities that match your skills.
    </div>
      <div className="my-12 mx-auto grid grid-cols-1 py-8 px-4 md:px-20 lg:px-16 container md:grid-cols-1 lg:grid-cols-1 text-white">
        <div className=" lg:px-8 py-4   ">
          <h1 className="my-auto font-bold text-base uppercase text-2xl text-left mx-auto justify-start  head text-red-500 ">
            CAREER & DEVELOPMENT
          </h1>
          <h2 className="mx-auto  head text-lg text-black capitalize font-medium text-left ">
          Our Purpose Is To Enhance Society Together; To Make A Real
                    Difference In The World. Our Ambition Is To Run A
                    Financially Healthy Business By Putting Our Collective
                    Intelligence Into Practice With Clients And Partners To Have
                    A Positive Impact On People, Our Living Environment And The
                    Economy. Morealso The World Around Us Is Constantly
                    Changing. In Order To Continue Delivering First-Class
                    Service And Grow , We Cultivate An Environment Of Continuous
                    Learning – Building On Experience, Innovation And Change.
                    Ibironke Technology Thrives On Knowledge, Experience, Skills
                    And Competencies, So We Continually Invest In Our People And
                    Expect Them To Invest In Themselves. Learning And
                    Development Is Part And Parcel Of Our Commitment To Help You
                    Progress In Your Career.
          </h2>
         
          
        </div>
        <div className="md:px-8 lg:px-8 py-8 ">
          <h1 className="my-auto font-bold text-base uppercase text-2xl text-left mx-auto justify-start  head text-red-500 ">
            INTERNSHIP SCHEME
          </h1>
          <h2 className="mx-auto  head text-lg text-black capitalize font-medium text-left ">
          Here At ITL, We Offer Internships In Electrical & Mechanical
                    Installation, Heating And Ventilation, Earthing,
                    Installation And Plumbing. We Believe That A Structured
                    Internship Programme Is Paramount In Helping You Achieve
                    Your Qualifications. To Support Your Development, Ibironke
                    Technologies Ltd Has Put Together A Programme That Provides
                    You The Structure And Guidance You Need To Ensure You Get
                    The Most Out Of Your Training And Development.
          </h2>
        </div>
        <div className="md:px-8 lg:px-8 py-8  ">
          <h1 className="my-auto font-bold text-base uppercase text-2xl text-lrft mx-auto justify-start  head text-red-500 ">
            EMPLOYEES AT HEART
          </h1>
          <h2 className="mx-auto  head text-lg text-black capitalize font-medium text-left ">
          Here At Ibironke Technologies LTD, We Support You
                    Enthusiastically With Excellent Training And Development To
                    Give You Choices When Future Opportunities Present
                    Themselves. From Mechanical To Electrical & Support Services
                    And Administration To Design, There Are A Vast Range Of
                    Exciting Opportunities Across The Business For You To
                    Explore. If You Believe You Have The Necessary Skills And
                    Commitment To Help ITL Deliver The Best Building Support
                    Services In The Business, Then We Would Like To Hear From
                    You.
          </h2>
       
        </div>
      </div>
    </>
  );
}
