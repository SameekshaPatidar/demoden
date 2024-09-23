import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import doctor1 from "../assets/doctor1.png";
import doctor2 from "../assets/doctor2.png";
import doctor3 from "../assets/doctor3.png";
import doctor4 from "../assets/doctor4.png";
import doctor5 from "../assets/doctor5.png";
import '../styles/DoctorSection.css';

const DoctorSection = () => {
  const doctors = [doctor1, doctor2, doctor3, doctor4, doctor5];

  return (
    <div className="doctor-section overflow-hidden">
      <div className="heading-section">
        <span className="badge">MEDICAL PROFESSIONALS</span>
        <h2>The Skilled Professionals Making A Difference At Mavis Clinic</h2>
      </div>

      <div className="button-group">
        <button className="filter-btn active">All</button>
        <button className="filter-btn">Cardiologists</button>
        <button className="filter-btn">Gynecologists</button>
        <button className="filter-btn">Orthopedic</button>
        <button className="filter-btn">Pediatricians</button>
      </div>

      <Swiper
        slidesPerView={1}  
        spaceBetween={10}
        loop={true}
        pagination={{ clickable: true }}
        navigation={true}
        breakpoints={{
          480: {
            slidesPerView: 1,   // Adjust for mobile
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 2,   // Adjust for tablets
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,   // Adjust for larger tablets or small laptops
            spaceBetween: 30,
          },
          1280: {
            slidesPerView: 4,   // Adjust for desktops
            spaceBetween: 40,
          },
        }}
        modules={[Pagination, Navigation]}
        className="doctor-swiper"
      >
        {doctors.map((doctor, index) => (
          <SwiperSlide key={index}>
            <div className="doctor-card">
              <img src={doctor} alt={`Doctor ${index + 1}`} className="doctor-img" />
              <h3>Dr. {`Doctor Name ${index + 1}`}</h3>
              <p>Specialization</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default DoctorSection;













// import React from "react";
// import Slider from "react-slick";
// import doctor1 from "../assets/doctor1.png";
// import doctor2 from "../assets/doctor2.png";
// import doctor3 from "../assets/doctor3.png";
// import doctor4 from "../assets/doctor4.png";
// import doctor5 from "../assets/doctor5.png";
// import '../styles/DoctorSection.css'

// const DoctorSection = () => {
//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 2000,
//     slidesToShow: 4,
//     slidesToScroll: 1,
//     autoplay: false,
//     arrows: false,
//     cssEase: "linear",
//     pauseOnHover: true,
//     responsive: [
//       {
//         breakpoint: 1024,
//         settings: {
//           slidesToShow: 3,
//           slidesToScroll: 1,
//         },
//       },
//       {
//         breakpoint: 768,
//         settings: {
//           slidesToShow: 2,
//           slidesToScroll: 1,
//         },
//       },
//       {
//         breakpoint: 480,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1,
//         },
//       },
//     ],
//   };

//   return (
//     <div className="doctor-section">
//       <div className="heading-section">
//         <span className="badge">MEDICAL PROFESSIONALS</span>
//         <h2>The Skilled Professionals Making A Difference At Mavis Clinic</h2>
//       </div>
//       <div className="button-group">
//         <button className="filter-btn active">All</button>
//         <button className="filter-btn">Cardiologists</button>
//         <button className="filter-btn">Gynecologists</button>
//         <button className="filter-btn">Orthopedic</button>
//         <button className="filter-btn">Pediatricians</button>
//       </div>
//       <Slider {...settings}>
//         {[doctor1, doctor2, doctor3, doctor4, doctor5].map((doctor, index) => (
//           <div key={index} className="doctor-card">
//             <img src={doctor} alt={`Doctor ${index + 1}`} className="doctor-img" />
//             <h3>Dr. {`Doctor Name ${index + 1}`}</h3>
//             <p>Specialization</p>
//           </div>
//         ))}
//       </Slider>
//     </div>
//   );
// };

// export default DoctorSection;


