import React from 'react'



export default function Tech(){
    return(
        <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-2">
            
            <div className="mx-auto my-auto px-8 py-8">
                <img src="https://res.cloudinary.com/xenerr/image/upload/v1609778056/ant-rozetsky-SLIFI67jv5k-unsplash_akp0y8.jpg" alt="Tech" width="500px" height="500px"/>
            </div>
            <div className="my-auto mx-8">
            <h1 className="mx-auto my-auto font-bold text-2xl flex justify-end font-serif md:px-14 lg:px-14 py-4 head text-red-500">Industry Served</h1>
                    <h2 className=" text-xl  font-sans mx-auto text-right grid grid-cols-1 md:px-14 lg:px-14 text-black ">
                        <ul >
                            <li className="flex justify-end  border-r-4 border-red-500 pr-2 mb-2">Energy & Utility </li>
                            <li className="flexjustify-end  border-r-4 border-red-500 pr-2 mb-2">Building & Construction </li>
                            <li className="flexjustify-end  border-r-4 border-red-500 pr-2 mb-2">Manufacturing </li>
                            <li className="flexjustify-end  border-r-4 border-red-500 pr-2 mb-2"> </li>

                        </ul>

                  </h2>
            </div>
            

        </div>
    )
}