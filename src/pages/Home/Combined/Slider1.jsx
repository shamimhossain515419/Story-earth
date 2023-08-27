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

export default function Slider1() {
     return (
          <>
               <div className=' max-w-[1000px] mx-auto  '>

                    <div >
                         <div>
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
                                        <div className='  rounded-xl overflow-hidden cursor-pointer  w-full  max-h-[600px]'>
                                             <img className=' w-full h-full' src={image1} alt="" />
                                        </div>
                                   </SwiperSlide>
                                   <SwiperSlide>
                                        <div className='  rounded-xl overflow-hidden cursor-pointer  w-full  max-h-[600px]'>
                                             <img className=' w-full h-full' src={image2} alt="" />
                                        </div>
                                   </SwiperSlide>
                                   <SwiperSlide>
                                        <div className='  rounded-xl overflow-hidden cursor-pointer  w-full  max-h-[600px]'>
                                             <img className=' w-full h-full' src={image1} alt="" />
                                        </div>
                                   </SwiperSlide>
                                   <SwiperSlide>
                                        <div className='  rounded-xl overflow-hidden cursor-pointer  w-full  max-h-[600px]'>
                                             <img className=' w-full h-full' src={image2} alt="" />
                                        </div>
                                   </SwiperSlide>



                              </Swiper>
                         </div>


                    </div>
               </div>
          </>
     );
}
