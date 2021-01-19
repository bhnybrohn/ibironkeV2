import React from "react";
import Slider from "react-slick";
import Landmark from "../img/Projects/landmark2.jpg";
import ITL from "../img/Projects/ITL.jpg";
import Neuro from "../img/Projects/NEURO.jpg";
import Mutual from "../img/Projects/MUTUAL HOUSE.jpg";
import Living from "../img/Projects/living.jpg";

const settings = {
  dots: true,
  infinite: true,
  speed: 2000,
  lazyLoad: true,
  autoplay: true,
  slidesToShow: 4,
  slidesToScroll: 1,
};

export default function Projects() {
  return (
    <div className="w-screen hidden md:block  lg:block mx-auto px-16 pl-20 py-12 from-red-600">
 <h3 className="mx-auto text-center  my-auto  pl-2 font-bold text-xl flex justify-center uppercase py-2 head text-red-500">Few Projects
            </h3>
      <Slider {...settings} className="mt-8">
        <div className="mx-auto w-auto flex justify-center client">
          <img
            width="300px"
            height="300px"
            className="mx-auto s transition duration-500 ease-in-out rounded-lg   transform hover:-translate-x-1 hover:scale-110 "
            src={Landmark}
            alt="Agric"
          />
          <h1 className="font-sans  font-semibold text-base text-red-500 mx-auto py-8 px-8">
          LANDARK UNIVERSITY MULTI
PURPOSE HALL    
          </h1>


        </div>
        <div>
          <img
            width="300px"
            height="300px"
            className="mx-auto  transition duration-500 ease-in-out rounded-lg   transform hover:-translate-x-1 hover:scale-110"
            src={ITL}
            alt="Eksu"
          />
               <h1 className="font-sans  font-semibold text-base text-red-500 mx-auto py-8 px-8">
               IBIRONKE HOUSE
ILORIN KWARA STATE   
          </h1>
        </div>
        <div>
          <img
            width="300px"
            height="300px"
            className="mx-auto  transition duration-500 ease-in-out rounded-lg   transform hover:-translate-x-1 hover:scale-110"
            src={Neuro}
            alt="Fce"
          />
                    <h1 className="font-sans  font-semibold text-base text-red-500 mx-auto py-8 px-8">
                    ADMINISTRATIVE BLOCK NEUROPSYCHIATRIC
HOSPITAL ARO, ABEOKUTA 
          </h1>
        </div>
        <div>
          <img
            width="300px"
            height="300px"
            className="mx-auto  transition duration-500 ease-in-out rounded-lg   transform hover:-translate-x-1 hover:scale-110"
            src={Mutual}
            alt="Land"
          />
           <h1 className="font-sans  font-semibold text-base text-red-500 mx-auto py-8 px-8">
           MUTUAL BENEFIT INSURANCE
BUILDING ADO-EKITI
          </h1>
        </div>
        <div>
          <img
            width="300px"
            height="300px"
            className="mx-auto  transition duration-500 ease-in-out rounded-lg   transform hover:-translate-x-1 hover:scale-110"
            src={Living}
            alt="Oua"
          />
                   <h1 className="font-sans  font-semibold text-base text-red-500 mx-auto py-8 px-8">
  

SUB-STATION INSTALLATION AT
LIVING FAITH CHURCH
          </h1>
        </div>
        {/* <div><img width="200px" height="200px" className="mx-auto" src={} alt="Fce" /></div>
                    <div><img width="200px" height="200px" className="mx-auto" src={} alt="Land" /></div>
                    <div><img width="200px" height="200px" className="mx-auto" src={} alt="Oua" /></div> */}
      </Slider>
    </div>
  );
}
