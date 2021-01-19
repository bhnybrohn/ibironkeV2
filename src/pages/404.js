import React from 'react';

import SecondaryNav from '../components/layout/navbar/navabr'


import Covid from './covid'
import {Link } from 'react-router-dom'






export default function ContactUs() {
    return (
      <div>
        <Covid/>
          <SecondaryNav/>
          <div className="mx-auto my-auto grid grid-cols-1">
              <h1 className="font-sans text-7xl mx-auto text-red-500 mt-20 ">
                  404
              </h1>
              <h1 className="font-sanspx-4 text-4xl mx-auto text-gray-900 mt-8">
              The page you are trying to access does not exist or has been moved.
              </h1>
              <Link to="/" className="mx-auto my-8">
              <button class="font-sans bg-red-500 hover:bg-red-500 px-4 text-white py-4">
  Back to Home &rarr;
</button>
              
              </Link>

          </div>
          
        
  
      </div>
    );
  }
  

