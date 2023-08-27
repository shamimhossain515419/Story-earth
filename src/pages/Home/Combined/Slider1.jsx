import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import image1 from '../../../../public/phone/custodialSub.48ef2441.png'
import image2 from '../../../../public/phone/nonCustodialSub.134b53cc.png'

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { AiOutlineArrowRight } from 'react-icons/ai';

export default function Slider1() {
     return (
          <>
               <div className=' max-w-[1000px] mx-auto    '>

                    <div >
                         <div className=' '>
                              <Swiper
                                   spaceBetween={30}
                                   centeredSlides={true}
                                   autoplay={{
                                        delay: 2500,
                                        disableOnInteraction: false,
                                   }}
                                   loop={true}


                                   modules={[Autoplay, Pagination, Navigation]}
                                   className="mySwiper"
                              >

                                   <SwiperSlide>
                                        <div className=' shawobox p-2  rounded-xl overflow-hidden cursor-pointer  w-full  max-h-[600px]'>
                                             <img className='rounded-xl w-full h-full' src={image1} alt="" />
                                        </div>
                                   </SwiperSlide>
                                   <SwiperSlide>
                                        <div className='shawobox p-2  rounded-xl overflow-hidden cursor-pointer  w-full  max-h-[600px]'>
                                             <img className='rounded-xl w-full h-full' src={image2} alt="" />
                                        </div>
                                   </SwiperSlide>
                                   <SwiperSlide>
                                        <div className='shawobox p-2  rounded-xl overflow-hidden cursor-pointer  w-full  max-h-[600px]'>
                                             <img className='rounded-xl w-full h-full' src={image1} alt="" />
                                        </div>
                                   </SwiperSlide>
                                   <SwiperSlide>
                                        <div className=' shawobox p-2 rounded-xl overflow-hidden cursor-pointer  w-full  max-h-[600px]'>
                                             <img className='rounded-xl w-full h-full' src={image2} alt="" />
                                        </div>
                                   </SwiperSlide>



                              </Swiper>
                         </div>


                    </div>
                  <h1 className=' mt-3 text-center text-base sm:text-lg md:text-xl xl:text-2xl 2xl:text-3xl font-semibold my-1'> Non-Custodial </h1>
                
                <div className=' mt-6 cursor-pointer duration-300 hover:bg-[#151515] hover:text-white border-2 border-[#151515] rounded-2xl px-10 py-1 md:py-3 bg-[#fff]  flex justify-center items-center gap-2 ' >
                     <span className=' text-base md:text-xl font-medium '> Learn More </span>
                     <AiOutlineArrowRight size={24}></AiOutlineArrowRight>
                </div>
               </div>
          </>
     );
}
