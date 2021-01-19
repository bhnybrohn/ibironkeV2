import React from 'react'
import Slider from 'react-slick'
import Agric from '../img/clients/agric.jpg'
import Eksu from '../img/clients/eksu-logo.jpg'
import Fce from '../img/clients/fce.jpg'
import Land from '../img/clients/land.jpg'
import Oua from '../img/clients/oau.jpg'
import Uni from '../img/clients/uni.jpg'
import Psych from '../img/clients/psych.jpg'
import Side from '../img/electrical.jpg'
import './client.css'

const settings = {

    dots: false,
    infinite: true,
    speed: 4000,
    lazyLoad: true,
    autoplay: true,
    slidesToShow: 6,
    slidesToScroll: 1,

}


export default function Client() {
    return (
        <div className="w-screen grid grid-cols-1 px-12 mx-auto md:grid-cols-1 lg:grid-cols-1 ">

            <div className="w-auto my-auto px-4 py-8 md:px-20 lg:px-20   opacity-90">
                <h3 className="mx-auto my-auto pb-2 font-bold text-xl text-center  uppercase py-2 head text-red-500">We are the biggest
                company in the world
            </h3>
                <h3 className="mx-auto text-xl flex text-center pb-8 head text-black">We help institutions, companies and establishments create and
                improve industry products and services through long lasting and mutually rewarding relationships
            </h3>
                <Slider {...settings} className="client">
                    <div className="mx-auto w-auto flex justify-center client"><img width="200px" height="200px" className="mx-auto" src={Agric} alt="Agric" /></div>
                    <div><img width="200px" height="200px" className="mx-auto" src={Eksu} alt="Eksu" /></div>
                    <div><img width="200px" height="200px" className="mx-auto" src={Fce} alt="Fce" /></div>
                    <div><img width="200px" height="200px" className="mx-auto" src={Land} alt="Land" /></div>
                    <div><img width="200px" height="200px" className="mx-auto" src={Oua} alt="Oua" /></div>
                    <div><img width="200px" height="200px" className="mx-auto" src={Uni} alt="Fce" /></div>
                    <div><img width="200px" height="200px" className="mx-auto" src={Psych} alt="Land" /></div>
                    <div><img width="200px" height="200px" className="mx-auto" src={Oua} alt="Oua" /></div>


                </Slider>
            </div>

           
        </div>
    )
}