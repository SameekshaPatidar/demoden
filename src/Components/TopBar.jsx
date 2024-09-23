import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneAlt, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

const TopBar = () => {
  return (
    <div className="bg-green-100 text-gray-800 py-2 px-4 flex flex-col md:flex-row justify-between items-center text-xs md:text-sm">
      {/* Left side */}
      <div className="mb-2 md:mb-0">
        <span>We understand that each patient is unique</span>
        <a href="/learn-more" className="text-blue-800 ml-2 hover:underline">
          Learn More →
        </a>
      </div>

      {/* Right side */}
      <div className="flex flex-col md:flex-row  space-y-2 md:space-y-0 md:space-x-6">
        <div className="flex items-center">
          <FontAwesomeIcon icon={faPhoneAlt} className="w-4 h-4 mr-2" />
          <a href="tel:+16295550129" className="hover:underline">
            (629) 555-0129
          </a>
        </div>
        <div className="flex items-center">
          <FontAwesomeIcon icon={faMapMarkerAlt} className="w-4 h-4 mr-2" />
          <a href="/find-location" className="hover:underline">Find Location</a>
        </div>
        <a href="/pay-bill" className="hover:underline">Pay Your Bill</a>
      </div>
    </div>
  );
};

export default TopBar;

