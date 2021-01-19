import React from 'react';

import Nav from '../components/layout/navbar/navabr'

// import SecondaryNav from '../components/layout/secondary.nav'
import Slider from '../components/home/home';
import Client from '../components/home/client'
import MidSection from '../components/home/midsection'
import Info from '../components/home/info'
import Accordian from '../components/layout/accordian/accordian'
import Footer from '../components/layout/footer'
import Covid from './covid'
import Projects from '../components/home/porject'



export default function Index() {
    return (
      <div>
        <Covid/>
       <Nav/>
          {/* <SecondaryNav/> */}
          <Slider/>
          <Info/>
      
          <MidSection/>
          <Client/>
          <Accordian/>
          <Projects/>
          <Footer/>
      
          
  
      </div>
    );
  }
  

  