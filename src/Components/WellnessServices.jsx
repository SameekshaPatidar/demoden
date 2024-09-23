import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserNurse, faPhoneAlt, faStethoscope, faVial, faHeartbeat, faClinicMedical, faPills, faWheelchair } from '@fortawesome/free-solid-svg-icons';

const WellnessServices = () => {
  const services = [
    {
      title: "Women's Health",
      description: ['Pap Smears', 'Breast Exams', 'Family Planning'],
      icon: faUserNurse,
      bgColor: 'bg-indigo-100',
      iconBgColor: 'bg-indigo-200',
    },
    {
      title: 'Urgent Care',
      description: ['Prompt Evaluation', 'Common Illness', 'Minor Injury'],
      icon: faPhoneAlt,
      bgColor: 'bg-yellow-100',
      iconBgColor: 'bg-yellow-200',
    },
    {
      title: 'Telehealth Services',
      description: ['Virtual Consultations', 'Remote Monitoring', 'Prescription Refills'],
      icon: faStethoscope,
      bgColor: 'bg-pink-100',
      iconBgColor: 'bg-pink-200',
    },
    {
      title: 'Diagnostic Services',
      description: ['X-Rays', 'Laboratory Testing', 'Imaging (MRI, CT Scans)'],
      icon: faVial,
      bgColor: 'bg-purple-100',
      iconBgColor: 'bg-purple-200',
    },
    {
      title: 'Cardiology',
      description: ['Heart Health', 'Cholesterol Screening', 'Blood Pressure'],
      icon: faHeartbeat,
      bgColor: 'bg-red-100',
      iconBgColor: 'bg-red-200',
    },
    {
      title: 'Primary Care',
      description: ['Routine Checkups', 'Preventive Care', 'Health Management'],
      icon: faClinicMedical,
      bgColor: 'bg-green-100',
      iconBgColor: 'bg-green-200',
    },
    {
      title: 'Pharmacy Services',
      description: ['Medication Refills', 'Drug Counseling', 'Vaccinations'],
      icon: faPills,
      bgColor: 'bg-blue-100',
      iconBgColor: 'bg-blue-200',
    },
    {
      title: 'Rehabilitation',
      description: ['Physical Therapy', 'Occupational Therapy', 'Mobility Aids'],
      icon: faWheelchair,
      bgColor: 'bg-orange-100',
      iconBgColor: 'bg-orange-200',
    },
  ];

  return (
    <section className="bg-gray-100 py-10 px-4 mx-12 rounded-3xl m-5">
      <div className="container mx-auto p-8">
        <div className="flex justify-center mb-6">
          <div className="bg-yellow-300 text-gray-800 px-6 py-2 rounded-2xl text-lg font-semibold">
            Our Services
          </div>
        </div>
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800">
            Begin Your Health Journey With Key Wellness Services
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`group relative p-6 rounded-2xl shadow-md ${service.bgColor} hover:shadow-lg transition-transform duration-300 transform hover:scale-105 ${
                index % 2 === 1 ? 'lg:mt-8 lg:scale-105' : ''
              }`}
            >
              <div className={`w-16 h-16 flex items-center justify-center rounded-full ${service.iconBgColor} mb-4 transition-transform duration-300 transform group-hover:scale-90`}>
                <FontAwesomeIcon icon={service.icon} className="text-3xl text-gray-800" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{service.title}</h3>
              <ul className="text-gray-600 space-y-1 mb-4">
                {service.description.map((item, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="mr-2">•</span>
                    {item}
                  </li>
                ))}
              </ul>
              <a
                href="#"
                className="text-blue-600 mt-4 inline-flex items-center text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              >
                Learn More
                <span className="ml-2">&rarr;</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WellnessServices;





