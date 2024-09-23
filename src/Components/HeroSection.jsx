import React from "react";
import banner from "../assets/banner.png"
import doctoricon from "../assets/doctoricon.png"
import google from "../assets/google.png"
import shape1 from "../assets/shape1.png"


const HeroSection = () => {
  return (
    <>
      <div className="herosection bg-white  p-8 flex flex-row w-full h-screen ">
        <div className="relative bg-blue-900 text-white p-8 flex justify-between items-center rounded-3xl">
          {/* left div */}
          <div className="max-w-lg">
            <span className="bg-green-100 text-green-800 px-2 py-1 rounded-2xl text-lg">Your Health, Our Priority</span>
            <h1 className="text-7xl font-bold mt-4">Mavis Clinics Dedication to Excellence</h1>
            <button className="mt-6 px-4 py-2 bg-pink-500 text-white rounded-3xl hover:bg-rose-900">
              Discover More
            </button>
            <div className=" feedback mt-6  ">
              <p>Patient Feedback</p>
              <div className=" box flex flex-row ">
                <div className="google ">
                  <img src={google} alt="google.com" />
                </div>
                <div className="rating flex flex-col ">
                  <ul className=" text-yellow-400 text-2xl   ">
                    &#9733; &#9733;&#9733;&#9733; &#9733; </ul>
                  <span className="ml-2 text-sm"> Reviews
                    <span className="ml-2 text-xs text-gray-300">(4.9/5.0)</span>
                  </span>

                </div>
              </div>
            </div>
          </div>

          {/* Right Side Image */}
          <div className="hidden md:block z-10">
            <img src={banner} alt="Doctor" className="max-w-lg" />
          </div>
          <div className="absolute right-0">
            <img src={shape1} alt="shape" className=" max-w-lg" />
          </div>
        </div>

        {/* Right Side Boxes */}
        <div className="ml-8 flex flex-col gap-5">

          <div className="p-4 bg-blue-100 text-blue-900 rounded-2xl shadow-md h-1/3 ">
            <div className="icon">
              <img src={doctoricon} alt="doctornearyou" className="w-40" />
            </div>
            <h2 className="text-xl font-semibold pt-2">Find Doctors Near You</h2>
            <p className="text-sm">Trained expertise is just a click away</p>
          </div>
          <div className="p-4 bg-orange-100 text-orange-900 rounded-2xl shadow-md h-1/3">
            <div className="icon">
              <img src={doctoricon} alt="doctornearyou" className="w-40" />
            </div>
            <h2 className="text-xl font-semibold">24/7 Emergency Care</h2>
            <p className="text-sm">Find essential info for doctors</p>
          </div>
          <div className="p-4 bg-purple-100 text-purple-900 rounded-2xl shadow-md h-1/3">
            <div className="icon">
              <img src={doctoricon} alt="doctornearyou" className="w-40" />
            </div>
            <h2 className="text-xl font-semibold">Online Appointment Booking</h2>
            <p className="text-sm">Easy-to-use online booking system</p>
          </div>
        </div>

      </div>
    </>
  );
};

export default HeroSection;
