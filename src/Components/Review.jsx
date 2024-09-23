import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';
import '../styles/Review.css';
import img1 from '../assets/img1.png';

export default function Review() {
  const reviews = [
    {
      text: "The prenatal care was comprehensive, and the support I received from the clinic's staff was outstanding. Mavis Clinic truly prioritizes the well-being of their patients.",
      name: "Smit Samus",
      role: "Patient",
    },
    {
      text: "The prenatal care was comprehensive, and the support I received from the clinic's staff was outstanding. Mavis Clinic truly prioritizes the well-being of their patients.",
      name: "Smit Samus",
      role: "Patient",
    },
    {
      text: "The prenatal care was comprehensive, and the support I received from the clinic's staff was outstanding. Mavis Clinic truly prioritizes the well-being of their patients.",
      name: "Smit Samus",
      role: "Patient",
    },
  ];

  return (
    <div>
      <Swiper
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {reviews.map((review, index) => (
          <SwiperSlide key={index} className='bg-green-100 p-8 rounded-lg shadow-lg max-w-xl  '>
          {/* // className="flex items-center justify-center p-8" */}
            {/* <div className="bg-green-100 p-8 rounded-lg shadow-lg max-w-xl w-full"> */}
              <div className="flex items-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 text-green-600"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 13.5V6h1.75a.75.75 0 01.75.75v4.5a.75.75 0 01-.75.75H9zM9 18h6v-.75c0-3.03-2.46-5.25-5.25-5.25h-.75V13.5zm0 0H6v-.75c0-3.03 2.46-5.25 5.25-5.25H12m0 7.5v-4.5a.75.75 0 01.75-.75H15m-3 7.5H9m3 0h3m0-6.75V6.75m0 6.75h-1.5m0-6.75H15m-3 0h3"
                  />
                </svg>
              </div>
              <p className="text-gray-700 text-lg mb-6">{review.text}</p>
              <div className="flex items-center">
                <img src={img1} alt={review.name} className="w-10 h-10 rounded-full mr-4" />
                <div>
                  <p className="text-gray-900 font-semibold">{review.name}</p>
                  <p className="text-gray-600 text-sm">{review.role}</p>
                </div>
              </div>
            
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}


{/* 


// import React from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';
// import 'swiper/css/pagination';
// import 'swiper/css/navigation';
// import { Parallax, Pagination, Navigation } from 'swiper/modules';
// import '../styles/Review.css';

// export default function Review() { */}
{/* //   return ( */}
{/* //     <div className="h-screen bg-gray-100"> */}
{/* //       <Swiper */}
{/* //         speed={600}
//         parallax={true}
//         pagination={{ */}
{/* //           clickable: true,
//           dynamicBullets: true,
//         }}
//         navigation={true}
//         modules={[Parallax, Pagination, Navigation]}
//         className="mySwiper"
//       >
//         <div */}
{/* //           slot="container-start"
//           className="parallax-bg absolute inset-0 w-[130%] h-full bg-cover bg-center"
//           style={{
//             backgroundImage: 'url(https://swiperjs.com/demos/images/nature-1.jpg)',
//           }}
//           data-swiper-parallax="-23%"
//         ></div>

//         <SwiperSlide className="flex flex-col justify-center items-center text-center px-6 md:px-16">
//           <div className="text-4xl font-light text-white" data-swiper-parallax="-300">
//             Patient Review 1
//           </div>
//           <div className="text-xl text-gray-300 mt-4" data-swiper-parallax="-200">
//             Excellent service and care!
//           </div>
//           <div className="text-base text-gray-300 mt-6 max-w-lg" data-swiper-parallax="-100">
//             <p>
//               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla laoreet justo vitae porttitor porttitor.
//             </p>
//           </div>
//         </SwiperSlide>

//         <SwiperSlide className="flex flex-col justify-center items-center text-center px-6 md:px-16">
//           <div className="text-4xl font-light text-white" data-swiper-parallax="-300">
//             Patient Review 2
//           </div>
//           <div className="text-xl text-gray-300 mt-4" data-swiper-parallax="-200">
//             Highly recommend this clinic!
//           </div>
//           <div className="text-base text-gray-300 mt-6 max-w-lg" data-swiper-parallax="-100">
//             <p>
//               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla laoreet justo vitae porttitor porttitor.
//             </p>
//           </div>
//         </SwiperSlide>

//         <SwiperSlide className="flex flex-col justify-center items-center text-center px-6 md:px-16">
//           <div className="text-4xl font-light text-white" data-swiper-parallax="-300">
//             Patient Review 3
//           </div>
//           <div className="text-xl text-gray-300 mt-4" data-swiper-parallax="-200">
//             The best dental care I've experienced!
//           </div>
//           <div className="text-base text-gray-300 mt-6 max-w-lg" data-swiper-parallax="-100">
//             <p>
//               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla laoreet justo vitae porttitor porttitor.
//             </p>
//           </div>
//         </SwiperSlide>
//       </Swiper>
//     </div>
//   );
// } */}




export const Slider = () => {
  
}