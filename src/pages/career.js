import React from 'react';
import SecondaryNav from '../components/layout/navbar/navabr'
import Footer from '../components/layout/footer'
import Covid from './covid'
import Home from '../components/career/index'




export default function Index() {
    return (
      <div>
        <Covid/>

          <SecondaryNav/>
          <Home/>  
          <Footer/>
      </div>
    );
  }
  

  