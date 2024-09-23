import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons/faQuoteLeft';
import img1 from '../assets/img1.png';
import img2 from '../assets/img2.png';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Parallax, Pagination, Navigation } from 'swiper/modules';

const Slider = () => {
  return (
    <div className="w-full h-full "> 
      <Swiper
        style={{
          '--swiper-navigation-color': '#202561',
          '--swiper-pagination-color': '#202561',
          
        }}
        speed={600}
        parallax={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Parallax, Pagination, Navigation]}
        className="mySwiper"
      >
        <div
          slot="container-start"
          className="absolute inset-0 w-full h-full  "
         
          data-swiper-parallax="-23%"
        ></div>

        <SwiperSlide className="bg-[#e0f2c9] text-[#202561] p-10 box-border rounded-3xl">
         <FontAwesomeIcon icon={faQuoteLeft} />
          <div className="text-sm max-w-[400px] leading-5" data-swiper-parallax="-100">
            <p>
              Our team of experts ensures the best service for our patients, making sure that their needs are met with the utmost care and professionalism.
            </p>
          </div>
          <div className='flex flex-row justify-center'>
            <img src={img1} alt="patient1" className=' w-12 h-12 p-2 '  />
              <h4 className="font-bold text-white-900 pt-5">Smit Samus</h4>    
            
          </div>
          </SwiperSlide>
          <SwiperSlide className="bg-[#e0f2c9] text-[#202561] p-10 box-border rounded-3xl">
         <FontAwesomeIcon icon={faQuoteLeft} />
          <div className="text-sm max-w-[400px] leading-5" data-swiper-parallax="-100">
            <p>
              Our team of experts ensures the best service for our patients, making sure that their needs are met with the utmost care and professionalism.
            </p>
          </div>
          <div className='flex flex-row justify-center'>
            <img src={img2} alt="patient1" className=' w-12 h-12p-2 '  />
              <h4 className="font-bold text-white-900 pt-5">Smit Samus</h4>    
            
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;

