import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';  
import docImage from '../assets/doc.png'; // Adjust the path as necessary

const InfoCards = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center gap-6 p-6 md:p-10 ">
      {/* Card 1 */}
      <div className="flex flex-col justify-between p-20 bg-green-100 rounded-xl w-full md:w-1/2 relative overflow-hidden transition-transform duration-300 ease-in-out hover:scale-105 ">
        <div>
          <h3 className="text-xl font-semibold text-gray-900">
            Unlock Your Wellness Journey
          </h3>
          <p className="mt-2 text-gray-700">
            Your Health, Your Way. Secure Your Consultation Appointment!
          </p>
        </div>
        <div className="mt-4">
          <a href="#" className="text-indigo-600 font-semibold hover:underline">
            Book An Appointment &rarr;
          </a>
        </div>
        <img 
          src={docImage} 
          alt="Doctor" 
          className="absolute bottom-0 right-0 w-40 h-40 md:w-48 md:h-48 opacity-10" 
        />
      </div>

      {/* Card 2 */}
      <div className="flex flex-col justify-between p-20 bg-blue-100 rounded-2xl w-full md:w-1/2 relative overflow-hidden transition-transform duration-300 ease-in-out hover:scale-105">
        <div>
          <h3 className="text-xl font-semibold text-gray-900">
            Need Immediate Care?
          </h3>
          <p className="mt-2 text-gray-700">
            We are available 24/7. Call Now for Immediate Assistance!
          </p>
        </div>
        <div className="flex items-center mt-4">
          <FontAwesomeIcon icon={faPhone} className="text-2xl text-indigo-600" />
          <span className="ml-2 text-2xl font-bold text-gray-900">(629) 555-0129</span>
        </div>
        <img 
          src={docImage} 
          alt="Doctor" 
          className="absolute bottom-0 right-0 w-40 h-40 md:w-48 md:h-48 opacity-10" 
        />
      </div>
    </div>
  );
};

export default InfoCards;



