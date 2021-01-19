import React from 'react';


import SecondaryNav from '../components/layout/navbar/navabr'
import Services from '../components/whatwedo/midsection'
import What from '../components/whatwedo/slider'
import Sub from '../components/whatwedo/whatwedo'
import Mid from '../components/whatwedo/index'



import Footer from '../components/layout/footer'
import Covid from './covid'




export default function Index() {
    return (
      <div>
        <Covid/>
       
          <SecondaryNav/>
          <What/>
          <Services/>
          <Sub/>
          <Mid/>
         
      
       
          <Footer/>
      
          
  
      </div>
    );
  }
  

  