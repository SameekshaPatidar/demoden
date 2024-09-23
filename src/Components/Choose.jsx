import React from 'react'
import choose1 from '../assets/choose1.jpg'
import choose2 from '../assets/choose2.jpg'
import google from '../assets/google.png'
import Slider from '../Components/Slider.jsx'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSmile } from '@fortawesome/free-solid-svg-icons'

function Choose() {
    return (

        <div className='bg-gray-100 rounded-2xl w-full p-8  lg:p-24' >
            <div className='flex flex-col lg:flex-row items-center justify-center h-full gap-8 m-0 lg:'>
                {/* left div */}
                <div className='lg:w-1/2 w-full h-full '>
                    <div>
                        <span className='inline-block font-medium bg-yellow-300 rounded-2xl p-3'>Why Choose us</span>
                        <h2 className='text-4xl font-bold p-6'>Lorem ipsum dolor sit, amet consectetur adipisicing.</h2>
                    </div>
                    <div className='w-[350px] lg:w-[650px] md:w-[690px] p-10'>
                        <Slider />
                    </div>

                </div>
                {/* right div */}
                <div className='w-full lg:w-1/2 gap-8 flex flex-col lg:flex-row rounded-3xl'>
                    <div className='w-full lg:w-[50%] flex flex-col gap-4 lg:mx-5'>
                        <div className=' lg:h-[70%]'>
                            <img src={choose1} alt="doctor image" className='rounded-3xl h-full w-full object-cover' />
                        </div>
                        <div className='bg-blue-200 rounded-3xl p-6 h-[30%] lg:h-[30%] flex flex-col justify-center items-center'>
                            <img src={google} alt="google image" className='mb-2' />
                            <h2 className='text-3xl font-bold text-blue-900'>
                                4.9
                            </h2>
                            <span>Google Ratings</span>
                        </div>
                    </div>
                    <div className='w-full lg:w-[50%] flex flex-col gap-4'>
                        <div className='bg-purple-400 rounded-3xl p-6 h-[30%] lg:h-[30%] flex flex-col justify-center items-center'>
                            <FontAwesomeIcon icon={faSmile} className='w-10 h-10 mb-2' />
                            <h2 className='text-3xl font-bold text-blue-900'>
                                25K
                            </h2>
                            <span>Happy Patients</span>
                        </div>
                        <div className='h-[30%] lg:h-[70%]'>
                            <img src={choose2} alt="doctor image" className='rounded-3xl h-full w-full object-cover' />
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Choose