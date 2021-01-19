import React from "react";
import { Link } from "react-router-dom";



function Contact() {
  
  const [email, setEmail] = React.useState('')
  const [full_name, setFullname] = React.useState('')
  const [phone, setPhone] = React.useState('')
  const [message, setMessage] = React.useState('')


  const handleSubmit = ()=>{

  }


  return (
    <>
      <div className=" w-screen flex mx-auto my-auto px-24 py-8 ">
        <Link to="/" className="text-red-500 ">
          Home {"\u00A0"}{" "}
        </Link>{" "}
        <span> / {"\u00A0"}Contact Us</span>
      </div>
      
      <div className="relative bg-white">
  <div className="absolute inset-0">
    <div className="absolute inset-y-0 left-0 w-1/2 bg-gray-50"></div>
  </div>
  <div className="relative max-w-7xl mx-auto lg:grid lg:grid-cols-5">
    <div className="bg-gray-50 py-16 px-4 sm:px-6 lg:col-span-2 lg:px-8 lg:py-24 xl:pr-12">
      <div className="max-w-lg mx-auto">
        <h2 className="text-2xl leading-8 font-extrabold tracking-tight text-red-500 sm:text-3xl sm:leading-9">
          Get in touch
        </h2>
        <p className="mt-3 text-lg leading-6 text-gray-500 lowercase">
        Contact Us By Either Submitting An Email Or Calling Us On The Numbers Provided - We Can Assure You That We Will Get Back To You As Soon As Possible
        </p>
        <dl className="mt-8 text-base leading-6 text-gray-500">
          <div>
            <dt className="sr-only">Postal address</dt>
            <dd>
              <p>P.O Box 5714 Ven Adefila Road(Old-Cemetry Road)</p>
              <p> Sabo–Oke Ilorin, Kwara State</p>
              <p><a className="text-red-500"
              
                href="https://www.google.com/maps/place/Ibironke+Technologies+Ltd,+Ven+Adefila+Road,+(Old-Cemetery+Road,+Sabo+Oke+Rd,+Ilorin/@8.488642,4.572523,16z/data=!4m2!3m1!1s0x10364d79dfd32db5:0xee366ba753c67bcb?hl=en-US&gl=NG"
              >
                Get Directions
              </a> </p>
            </dd>
          </div>
          <div className="mt-6">
            <dt className="sr-only">Phone number</dt>
            <dd className="flex">
              <svg class="flex-shrink-0 h-6 w-6 text-gray-400" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24">
                <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
              </svg>
              <span className="ml-3">
                +234 (803) 371-0756<br/>
                +234 (805) 224-4905

              </span>
            </dd>
          </div>
          <div className="mt-3">
            <dt className="sr-only">Email</dt>
            <dd className="flex">
              <svg class="flex-shrink-0 h-6 w-6 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
              </svg>
              <span className="ml-3">
                techibironke@gmail.com
              </span>
            </dd>
          </div>
        </dl>
      </div>
    </div>
    <div className="bg-white py-16 px-4 sm:px-6 lg:col-span-3 lg:py-24 lg:px-8 xl:pl-12">
      <div className="max-w-lg mx-auto lg:max-w-none">
        <form action="#"  className="grid grid-cols-1 row-gap-6" onSubmit={handleSubmit}>
          <div>
            <label for="full_name" className="sr-only">Full name</label>
            <div className="relative rounded-md shadow-sm">
              <input value={full_name} onChange={e=> setFullname(e.target.value)} id="full_name" className="form-input block w-full py-3 my-4 rounded-lg border-gray-900 border-2 px-4 placeholder-gray-500 transition ease-in-out duration-150" placeholder="Full name" />
            </div>
          </div>
          <div>
            <label for="email" className="sr-only">Email</label>
            <div className="relative rounded-md shadow-sm">
              <input value={email} onChange={e=> setEmail(e.target.value)} id="email" type="email" className="form-input block w-full my-4 rounded-lg border-gray-900 border-2 py-3 px-4 placeholder-gray-500 transition ease-in-out duration-150" placeholder="Email" />
            </div>
          </div>
          <div>
            <label for="phone" className="sr-only">Phone</label>
            <div className="relative rounded-md shadow-sm">
              <input value={phone} onChange={e=> setPhone(e.target.value)} id="phone" className="form-input block w-full py-3 px-4 my-4 rounded-lg border-gray-900 border-2 placeholder-gray-500 transition ease-in-out duration-150" placeholder="Phone" />
            </div>
          </div>
          <div>
            <label for="message" className="sr-only">Message</label>
            <div className="relative rounded-md shadow-sm">
              <textarea value={message} onChange={e=> setMessage(e.target.value)} id="message" rows="4" className="form-input block w-full my-4 rounded-lg border-gray-900 border-2 py-3 px-4 placeholder-gray-500 transition ease-in-out duration-150" placeholder="Message"></textarea>
            </div>
          </div>
          <div className="">
            <span className="inline-flex rounded-md shadow-sm">
              <button type="submit" className="inline-flex justify-center py-3 px-6 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-gray-900 hover:bg-gray-600 focus:outline-none focus:border-gray-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out">
                Submit
              </button>
            </span>
          </div>
        </form>
      </div>
    </div>
  </div>
</div>
      
    </>
  );
}
export default Contact;
