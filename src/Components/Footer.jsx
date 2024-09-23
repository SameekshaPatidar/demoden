import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt, faPhoneAlt, faEnvelope, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { faFacebookF, faInstagram, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import bgTopLeft from "../assets/footer-shape1.png"; 
import bgBottomRight from "../assets/footer-shape2.png"; 

const Footer = () => {
  return (
    <footer className="relative bg-blue-900 text-white py-16 px-8 rounded-2xl mx-6 md:mx-12 ">
      {/* Background images */}
      <img
        src={bgTopLeft}
        alt="Background Top Left"
        className="absolute top-0 left-0 w-32 h-32 md:w-48 md:h-48 opacity-80"
      />
      <img
        src={bgBottomRight}
        alt="Background Bottom Right"
        className="absolute bottom-0 right-0 w-32 h-32 md:w-48 md:h-48 opacity-80"
      />

      <div className="relative container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-4">
        {/* Contact Us Section */}
        <div>
          <h3 className="text-2xl font-semibold mb-4">Contact Us</h3>
          <p className="mb-2">
            <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2" />
            4517 Washington Ave., Manchester, Kentucky 39495
          </p>
          <p className="mb-2">
            <FontAwesomeIcon icon={faPhoneAlt} className="mr-2" />
            (629) 555-0129
          </p>
          <p className="mb-4">
            <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
            support@mavis.com
          </p>
          <div className="flex space-x-4">
            <FontAwesomeIcon icon={faFacebookF} className="text-2xl" />
            <FontAwesomeIcon icon={faInstagram} className="text-2xl" />
            <FontAwesomeIcon icon={faLinkedinIn} className="text-2xl" />
          </div>
        </div>

          {/* Services Section */}
          <div className="md:col-span-1 lg:col-span-1">
          <h3 className="text-3xl font-semibold mb-4">Services</h3>
          <ul className="space-y-2">
            <li className="hover:text-yellow-500">Lab Tests</li>
            <li className="hover:text-yellow-500">Telemedicine Services</li>
            <li className="hover:text-yellow-500">Physical Rehabilitation</li>
            <li className="hover:text-yellow-500">Women's Health</li>
            <li className="hover:text-yellow-500">Urgent Care</li>
            <li className="hover:text-yellow-500">Telehealth Services</li>
            <li className="hover:text-yellow-500">Diagnostic Services</li>
          </ul>
        </div>

        {/* Our Practice Section */}
        <div className="md:col-span-1 lg:col-span-1">
          <h3 className="text-3xl font-semibold mb-4">Our Practice</h3>
          <ul className="space-y-2">
            <li className="hover:text-yellow-500">About Us</li>
            <li className="hover:text-yellow-500">Appointment</li>
            <li className="hover:text-yellow-500">Contact Us</li>
            <li className="hover:text-yellow-500">Find A Location</li>
            <li className="hover:text-yellow-500">Doctors</li>
            <li className="hover:text-yellow-500">Our Services</li>
            <li className="hover:text-yellow-500">Doctor Search</li>
          </ul>
        </div>

       
        {/* Working Hours Section */}
        <div className="bg-green-100 text-gray-900 p-6 rounded-xl">
          <h3 className="text-lg font-semibold mb-4">Working Hours</h3>
          <ul className="space-y-2">
            <li className="flex justify-between">
              <span>Mon - Wed</span>
              <span>8:00 AM - 7:00 PM</span>
            </li>
            <li className="flex justify-between">
              <span>Thu</span>
              <span>8:00 AM - 5:00 PM</span>
            </li>
            <li className="flex justify-between">
              <span>Fri</span>
              <span>8:00 AM - 5:00 PM</span>
            </li>
            <li className="flex justify-between">
              <span>Sat - Sun</span>
              <span>8:00 AM - 4:00 PM</span>
            </li>
          </ul>
          <a href="#" className="mt-6 inline-block text-center bg-blue-900 text-white py-2 px-4 rounded-lg hover:bg-blue-800 w-full">
            Book A Visit <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

