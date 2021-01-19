import React from 'react';

import SecondaryNav from '../components/layout/navbar/navabr'

import Footer from '../components/layout/footer'
import Covid from './covid'

import Index from "../components/contactus/index"




export default function ContactUs() {
    return (
      <div>
        <Covid/>
          <SecondaryNav/>
          
          <Index/>
          <Footer/>
      </div>
    );
  }
  

