import React from 'react';
import partner1 from "../assets/partner1.png";
import partner2 from "../assets/partner2.png";
import partner3 from "../assets/partner3.png";
import partner4 from "../assets/partner4.png";
import partner5 from "../assets/partner5.png";
import partner6 from "../assets/partner6.png";
import partner7 from "../assets/partner7.png";

const TrustedCompanies = () => {
  const companies = [
    { name: 'Partner 1', src: partner1 },
    { name: 'Partner 2', src: partner2 },
    { name: 'Partner 3', src: partner3 },
    { name: 'Partner 4', src: partner4 },
    { name: 'Partner 5', src: partner5 },
    { name: 'Partner 6', src: partner6 },
    { name: 'Partner 7', src: partner7 }
  ];

  return (
    <div className="py-12 bg-white">
      <div className="max-w-9xl mx-auto px-2 sm:px-6 lg:px-8">
        <h2 className="text-center text-lg font-semibold text-gray-500">
          Trusted by hundreds of organisations
        </h2>
        <div className="mt-8 flex flex-wrap justify-center gap-8">
          {companies.map((company) => (
            <div key={company.name} className="flex justify-center">
              <img
                className="h-12 grayscale hover:grayscale-0"
                src={company.src}
                alt={company.name}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrustedCompanies;



