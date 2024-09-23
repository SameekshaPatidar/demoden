import React, { useEffect, useState } from 'react';
import about1 from '../assets/about1.jpg';  
import aboutShape1 from '../assets/about-shape1.png';
import aboutShape2 from '../assets/about-shape2.png';
import aboutShape3 from '../assets/about-shape3.png';
import labImage from '../assets/wrap.jpg';  

const AboutUs = () => {
  const [counter, setCounter] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((prevCounter) => (prevCounter < 35 ? prevCounter + 1 : 35));
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative m-20 py-16 px-10 lg:px-20 bg-white">
      <div className="container mx-auto lg:px-10 px-4 flex flex-col lg:flex-row items-center lg:space-x-10">
        {/* Left Div */}
        <div className=" lg:w-1/2 w-full mb-10 lg:mb-0">
          {/* Background Shapes */}
          <img src={aboutShape1} alt="Shape" className="absolute top-0 left-0 transform -translate-x-1/2 -translate-y-1/2 w-50 h-50 z-0" />
          <img src={aboutShape2} alt="Shape" className="absolute right-20 w-64 h-32 lg:block hidden z-0" />
          <img src={aboutShape3} alt="Yellow Line" className="absolute left-0 bottom-0 w-100 h-500 z-0 transform -translate-x-4 translate-y-4" />
          
          {/* Main Image */}
          <img src={about1} alt="About" className="rounded-2xl shadow-lg  z-10  w-full lg:w-3/5" />

           {/* Lab Image (Overlay Image) */}
        <div className="absolute top-12 right-0 p-2 bg-white rounded-3xl shadow-xl lg:w-72 w-48 lg:h-48 h-32">
          <img src={labImage} alt="Lab" className="rounded-3xl w-full h-full object-cover" />
          <div className="absolute inset-0 flex justify-center items-center">
            <button className="bg-yellow-500 rounded-full p-2 text-white">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3-8a1 1 0 01-1 1H9v2a1 1 0 11-2 0v-2H6a1 1 0 110-2h1V7a1 1 0 112 0v2h2a1 1 0 011 1z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
        
          </div>

          {/* Floating Counter */}
          <div className="absolute bottom-4 left-4 bg-white rounded-full p-6 shadow-lg flex flex-col items-center z-20">
            <span className="text-4xl font-bold text-purple-800">{counter}+</span>
            <span className="text-lg text-gray-500">Global Healthcare Awards</span>
          </div>
        </div>

        {/* Right Div */}
        <div className="lg:w-1/2 w-full lg:pl-16">
          <span className="inline-block bg-yellow-400 text-white rounded-full px-4 py-1 text-sm uppercase mb-4">About Us</span>
          <h2 className="text-4xl font-bold text-blue-900 leading-snug mb-6">
            Unveiling Mavis: <br /> The Heartbeat of Healthcare
          </h2>
          <p className="text-lg text-gray-700 mb-6">
            At Mavis Clinic, your health and well-being are at the heart of everything we do. We understand that each patient is unique, and we are dedicated to providing personalized, compassionate care tailored to your specific needs.
          </p>
          <ul className="space-y-4">
            <li className="flex items-center space-x-2">
              <svg className="w-6 h-6 text-blue-900" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v3a1 1 0 00.293.707l2 2a1 1 0 001.414-1.414l-1.707-1.707V7z" clipRule="evenodd" /></svg>
              <span>Comprehensive Medical Services</span>
            </li>
            <li className="flex items-center space-x-2">
              <svg className="w-6 h-6 text-blue-900" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v3a1 1 0 00.293.707l2 2a1 1 0 001.414-1.414l-1.707-1.707V7z" clipRule="evenodd" /></svg>
              <span>Patient-Centric Approach</span>
            </li>
            <li className="flex items-center space-x-2">
              <svg className="w-6 h-6 text-blue-900" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v3a1 1 0 00.293.707l2 2a1 1 0 001.414-1.414l-1.707-1.707V7z" clipRule="evenodd" /></svg>
              <span>State-of-the-Art Facilities</span>
            </li>
            <li className="flex items-center space-x-2">
              <svg className="w-6 h-6 text-blue-900" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v3a1 1 0 00.293.707l2 2a1 1 0 001.414-1.414l-1.707-1.707V7z" clipRule="evenodd" /></svg>
              <span>Convenient Appointment Booking</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;


