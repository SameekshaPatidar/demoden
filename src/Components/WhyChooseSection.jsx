import React, { useState, useEffect } from 'react';
import img1 from '../assets/img1.png';
import choose1 from '../assets/choose1.jpg';
import choose2 from '../assets/choose2.jpg';
import img1 from '../assets/img1.png'
import googleLogo from '../assets/google.png';

const WhyChooseSection = () => {
  const [range, setRange] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setRange((prev) => (prev < 35 ? prev + 1 : prev));
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full flex flex-col lg:flex-row justify-between items-center py-16 px-4 lg:px-20">
      {/* Left Div */}
      <div className="lg:w-1/2 w-full mb-10 lg:mb-0 lg:mr-10">
        <div className="bg-yellow-200 inline-block px-3 py-1 rounded-full text-sm mb-4 font-semibold text-yellow-700">
          Why Choose Mavis Clinic
        </div>
        <h2 className="text-3xl lg:text-4xl font-bold mb-6 leading-snug">
          Unique Approach To <br /> Your Health Needs
        </h2>
        <div className="relative bg-green-50 rounded-3xl p-8 lg:p-12 shadow-lg">
          <blockquote className="text-lg text-gray-700 mb-6">
            <span className="text-2xl lg:text-4xl text-green-600 font-bold">“</span>
            The prenatal care was comprehensive, and the support I received from the clinic's staff was outstanding. Mavis Clinic truly prioritizes the well-being of their patients.
          </blockquote>
          <div className="flex items-center">
            <img src={img1} alt="Patient" className="w-1 h-10 rounded-full mr-4" />
            <div>
              <h4 className="font-bold text-gray-900">Smit Samus</h4>
              <p className="text-sm text-gray-600">Patient</p>
            </div>
          </div>
          <div className="absolute bottom-0 right-0 p-4 flex space-x-2">
            <button className="bg-white rounded-full p-2 shadow-lg">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button className="bg-white rounded-full p-2 shadow-lg">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Right Div - Bento Grid */}
      <div className="lg:w-1/2 w-full grid grid-cols-2 gap-4">
        {/* Left Column */}
        <div className="grid grid-rows-2 gap-4">
          <div className="relative">
            <img src={choose1} alt="Doctor and Patient" className="rounded-2xl w-full h-full object-cover shadow-lg" />
          </div>
          <div className="bg-blue-100 rounded-2xl flex items-center h-1/2 justify-center text-center p-4 lg:p-8 shadow-lg">
            <div>
              <img src={googleLogo} alt="Google Logo" className="w-6 h-6 lg:w-8 lg:h-8 mb-2 mx-auto" />
              <p className="text-4xl lg:text-5xl font-bold text-blue-600">4.9</p>
              <p className="text-lg text-blue-500">Google Ratings</p>
            </div>
          </div>
        </div>

        
          {/* Right Column */}
          <div className="grid grid-rows-2 gap-4">
          <div className="bg-pink-100 rounded-2xl flex items-center justify-center h-1/2  text-center p-4 lg:p-8 shadow-lg relative">
            <p className="text-4xl lg:text-5xl font-bold text-pink-600">
              {range}K+
            </p>
            <p className="text-lg text-pink-500">Happy Patients</p>
          </div>
         
        </div>
      </div>  
      </div>
  );
};

export default WhyChooseSection;


