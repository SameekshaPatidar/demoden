import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'; 
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css'
import img1 from '../assets/img1.png';
import img2 from '../assets/img2.png';

const PatientReviewSection = () => {
  const [currentReview, setCurrentReview] = useState(0);
  const [slideDirection, setSlideDirection] = useState('');

  const reviews = [
    {
      quote: "The prenatal care was comprehensive, and the support I received from the clinic's staff was outstanding. Mavis Clinic truly prioritizes the well-being of their patients.",
      name: "Smit Samus",
      role: "Patient",
      img: img1,
    },
    {
      quote: "Mavis Clinic provided excellent care during my recovery. The staff was attentive and the facilities were top-notch. I highly recommend this clinic.",
      name: "Jane Doe",
      role: "Patient",
      img: img2,
    },
  ];

  const handleNext = () => {
    setSlideDirection('next');
    setTimeout(() => {
      setCurrentReview((prev) => (prev + 1) % reviews.length);
      setSlideDirection('');
    }, 300);
  };

  const handlePrev = () => {
    setSlideDirection('prev');
    setTimeout(() => {
      setCurrentReview((prev) => (prev - 1 + reviews.length) % reviews.length);
      setSlideDirection('');
    }, 300);
  };

  return (
    <div className="lg:w-1/2 w-full mx-10 mb-2 lg:mb-0 lg:mr-10 overflow-hidden">
      <div className="bg-yellow-200 inline-block px-3 py-1 rounded-full text-sm mb-4 font-semibold text-yellow-700">
        Why Choose Mavis Clinic
      </div>
      <h2 className="text-4xl lg:text-5xl font-bold mb-6 leading-snug">
        Unique Approach To <br /> Your Health Needs
      </h2>

      {/* <div className="relative bg-green-50 rounded-3xl p-12 lg:p-16 shadow-lg overflow-hidden">
        <div className={`slide-container ${slideDirection}`}>
          <blockquote className="text-lg text-gray-700 mb-6">
            <span className="text-2xl lg:text-4xl text-green-600 font-bold">“</span>
            {reviews[currentReview].quote}
          </blockquote>
          <div className="flex items-center">
            <img
              src={reviews[currentReview].img}
              alt={reviews[currentReview].name}
              className="w-10 h-10 rounded-full mr-4"
            />
            <div>
              <h4 className="font-bold text-gray-900">{reviews[currentReview].name}</h4>
              <p className="text-sm text-gray-600">{reviews[currentReview].role}</p>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 right-0 p-4 flex space-x-2">
          <button
            onClick={handlePrev}
            className="bg-white rounded-full p-2 shadow-lg"
          >
            <FontAwesomeIcon icon={faChevronLeft} className="text-gray-700 h-6 w-6" />
          </button>
          <button
            onClick={handleNext}
            className="bg-white rounded-full p-2 shadow-lg"
          >
            <FontAwesomeIcon icon={faChevronRight} className="text-gray-700 h-6 w-6" />
          </button>
        </div>
      </div> */}
    </div>
  );
};

export default PatientReviewSection;




