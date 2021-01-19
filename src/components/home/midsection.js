import React from 'react'
import Consult from '../img/services/consult.svg'
import Maintananace from '../img/services/repair.svg'
import Building from '../img/services/building.svg'
import Settings from '../img/services/settings.svg'
import './slider.css'

export default function midSection() {
    return (
        <div className="w-screen  md:px-8 lg:px-24 py-12 text-white">
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3">


                <div className="grid grid-cols-1">
                    <div className="mx-auto  px-4 py-4  transition duration-500 ease-in-out rounded-lg hover:bg-red-400 hover:font-bold transform hover:-translate-y-1 hover:scale-100 ">
                        <img src={Consult} alt="Consult" width="80px" height="80px" className="mx-auto" />
                        <h1 className="my-auto font-bold mx-4 text-base uppercase justify-start  head text-red-500 ">Consulting</h1>
                        <h2 className="mx-auto px-4 head text-black text-xl font-medium text-left ">
                     
                            Our Engineering consulting department work with
                            various clients to provide engineering advice and
                            technical solutions on different projects.
                        </h2>
                    </div>
                    <div className="mx-auto px-4 py-4 transition duration-500 ease-in-out rounded-lg hover:bg-red-400 hover:font-bold transform hover:-translate-y-1 hover:scale-100 ">
                        <img src={Maintananace} alt="Repair" width="80px" height="80px" className="mx-auto" />
                        <h1 className="my-auto font-bold text-base uppercase mx-4 justify-start head text-red-500 ">Maintananace</h1>
                        <h2 className="mx-auto px-4 head text-xl font-medium text-black text-left">
                    
                            We employ engineering concepts for the optimaization of equipments,
                            prodecures and departmental budgets to achieve better maintainabilty, reliabllity &amp;
                            availaibilty of equipments
                        </h2>
                    </div>

                    <div>

                    </div>

                </div>

                <div className="grid grid-cols-1">
                    <div className="mx-auto px-4 py-4  transition duration-500 ease-in-out rounded-lg hover:bg-red-400 hover:font-bold transform hover:-translate-y-1 hover:scale-100 ">
                        <img src={Building} alt="Consult" width="80px" height="80px" className="mx-auto" />
                        <h1 className=" font-bold text-base mx-4  uppercase  justify-start head text-red-500">Construction</h1>
                        <h2 className="mx-auto px-4 head text-xl text-black font-medium text-left">
             
                        Our Engineers are professionally disciplined in dealing with the designing, planning,
                         construction and management of infrastructures
                        </h2>
                    </div>
                    <div className="mx-auto  px-4 py-4  transition duration-500 ease-in-out hover:rounded-lg  hover:bg-red-400 hover:font-bold transform hover:-translate-y-1 hover:scale-100">
                        <img src={Settings} alt="Repair" width="80px" height="80px" className="mx-auto pt-8" />
                        <h1 className="my-auto mx-4 font-bold text-base flex uppercase justify-start  head text-red-500">Installation</h1>
                        <h2 className="mx-auto px-4 head text-black text-xl font-medium text-left">
                    
                            We
                            Oversee installation, operation, maintenance, 
                            or repair to ensure that machines or equipment are 
                            installed and functionin g according to specifications.
                        </h2>
                    </div>

                    <div>

                    </div>

                </div>


          
                <div className="mx-auto px-8 py-8 text-right">
                    <h1 className="mx-auto my-auto font-bold flex justify-end  py-4 head text-red-500">OUR SERVICES</h1>
                    <h2 className="head text-2xl text-black font-bold ">We develop creative, comprehensive and sustainable engineering
                     solutions for a future where society can thrive.</h2>
                    <button type="button" class="mx-auto font-mono transition duration-500 ease-in-out hover:bg-red-400 hover:font-bold transform hover:-translate-y-1 hover:scale-100  focus:outline-none outline-none  focus:shadow-outline border border-red-500  bg-red-500 hover:bg-red-600 text-white hover:text-white font-bold py-2 px-4 mt-4 cv">Contact Us
                 </button>

                </div>



            </div>
        </div>
    )
}