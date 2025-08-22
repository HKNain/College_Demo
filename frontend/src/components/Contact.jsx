import React from 'react'

const Contact = () => {
  return (
    <div  className='w-full min-h-screen flex flex-col justify-center items-center'> 
      <h1  className='text-3xl font-semibold text-blue-950 mt-10'>
        CONTACT US
      </h1>

      <h3  className='text-gray-400 text-lg mt-3'>
        IIIT SNP - Studios
      </h3>

      <div className='w-10 bg-red-600 h-1 my-5'></div>
      
      <div className="w-full flex justify-center items-center py-10 bg-white">
        <div className="flex flex-col md:flex-row justify-between items-center w-11/12 md:w-4/5 text-center divide-y md:divide-y-0 md:divide-x md:divide-gray-300">
          
          {/* Address */}
          <div className="flex-1 px-5 py-5">
            <h2 className="font-bold text-blue-900 mb-2">ADDRESS</h2>
            <p  className="text-gray-700">
              X423+VH3, IIIT Delhi Sonipat Campus, SH 11, Khewra, Haryana
            </p>
          </div>

          {/* Logo */}
          <div className="flex-1 flex flex-col items-center px-5 py-5">
            <img
              src="https://rha.socet.edu.in/img/logo.png" 
              alt="Banyan Logo"
              className="w-40 h-auto"
            />
            <p  className="mt-2 text-gray-700 text-xl">
              A Source guiding towards the <span className="font-bold">Open Source</span>
            </p>
          </div>

          {/* Email */}
          <div className="flex-1 px-5 py-5">
            <h2 className="font-bold text-blue-900 mb-2">EMAIL</h2>
            <a href="mailto:rha@socet.edu.in" className="text-blue-600 hover:underline">
              rha@socet.edu.in
            </a>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Contact
