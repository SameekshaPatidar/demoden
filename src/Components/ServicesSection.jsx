import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMobileAlt } from "@fortawesome/free-solid-svg-icons";

const ServicesSection = () => {
  return (
    <section className="p-2 m-2 bg-gray-50 overflow-hidden" >
      <div className="container mx-5 px-8 lg:px-16 ">
        <h2 className="text-3xl font-bold text-center mb-8">
          Explore Diverse Health And Wellness Offerings At Mavis Clinic
        </h2>
        <div className=" grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="rounded-2xl shadow-lg p-10 text-center border border-yellow-200 hover:shadow-xl transition-shadow duration-300">
            <div className="w-16 h-16 rounded-full bg-yellow-200 mx-auto mb-4 flex items-center justify-center">
              <FontAwesomeIcon icon={faMobileAlt} className="text-yellow-600 text-3xl" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Lab Tests</h3>
            <p className="text-gray-600 mb-4">
              At Mavis Clinic, we believe in the power of precise diagnostics to guide personalized healthcare decisions.
            </p>
            <a href="#" className="text-blue-700 font-semibold hover:underline">
              Learn More &rarr;
            </a>
          </div>

          {/* Card 2 */}
          <div className="rounded-2xl shadow-lg p-6 text-center border border-orange-200 hover:shadow-xl transition-shadow duration-300">
            <div className="w-16 h-16 rounded-full bg-orange-200 mx-auto mb-4 flex items-center justify-center">
              <FontAwesomeIcon icon={faMobileAlt} className="text-orange-600 text-3xl" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Telemedicine Services</h3>
            <p className="text-gray-600 mb-4">
              Embrace the convenience of healthcare with our Telemedicine Services at Mavis Clinic. Experience virtual consultations.
            </p>
            <a href="#" className="text-blue-700 font-semibold hover:underline">
              Learn More &rarr;
            </a>
          </div>

          {/* Card 3 */}
          <div className="rounded-2xl shadow-lg p-6 text-center border border-purple-200 hover:shadow-xl transition-shadow duration-300">
            <div className="w-16 h-16 rounded-full bg-purple-200 mx-auto mb-4 flex items-center justify-center">
              <FontAwesomeIcon icon={faMobileAlt} className="text-purple-600 text-3xl" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Physical Rehabilitation</h3>
            <p className="text-gray-600 mb-4">
              Recover and regain optimal function with our Physical Rehabilitation services at Mavis Clinic.
            </p>
            <a href="#" className="text-blue-700 font-semibold hover:underline">
              Learn More &rarr;
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
