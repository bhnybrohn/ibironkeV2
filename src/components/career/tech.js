import React from 'react'
import Image from '../img/career/structural-software.png'


export default function Tech(){
    return(
        <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-2">
            <div className="my-auto mx-8">
            <h1 className="mx-auto my-auto font-bold text-2xl flex justify-start font-serif md:px-14 lg:px-14 py-4 head text-red-500">Technology/Software Used</h1>
                    <h2 className=" text-xl  font-sans mx-auto  text-left md:px-14 lg:px-14 text-black ">
                        <ul>
                            <li className="flex border-l-4 border-red-500 pl-2 mb-2">AutoCAD Eletromechnical </li>
                            <li className="flex border-l-4 border-red-500 pl-2 mb-2">Revit 3D </li>
                            <li className="flex border-l-4 border-red-500 pl-2 mb-2">AutoCAD Eletromechnical </li>
                            <li className="flex border-l-4 border-red-500 pl-2 mb-2">AutoCAD Eletromechnical </li>

                        </ul>

                  </h2>
            </div>
            <div className="mx-auto my-auto px-8 py-8">
                <img src={Image} alt="Tech" />
            </div>
            

        </div>
    )
}