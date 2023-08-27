
import { AiFillCheckCircle } from 'react-icons/ai'
import image1 from '../../../../public/securityImg1.493dd818.svg'
import image2 from '../../../../public/securityImg2.016c1d1e.svg'
import image3 from '../../../../public/securityImg3.e2e0e496.svg'
import image4 from '../../../../public/securityImg4.9870048e.svg'
import image5 from '../../../../public/securityImg5.b201f4f5.svg'
import image6 from '../../../../public/securityImg6.8e0bdb24.svg'
import imagePhone from '../../../../public/accessPhone.aa3d7438.png'
import Container from '../../../Component/Container/Container'
import './Security.css'
const SecurityServices = () => {
     return (
          <div className=" relative max-w-[1600px] mx-auto md:py-20 bg-[#FFFFFF]">

               <Container>
                    <div className=' relative'>
                         <div>
                              <h1 className=" text-center tracking-[1px] whitespace-pre-line   font-normal  md:font-bold text-lg md:text-xl lg:text-3xl 2xl:text-4xl my-3"> Crypto Wallet Security  Like Never <br /> Before</h1>
                              <p className="text-center  max-w-[800px] mx-auto my-10 text-sm  md:text-xl text-[#434242]"> Storing Your Assets On Cwallet Ensures That Your Assets Are Protected With Industry-Leading Safety Measures.</p>
                         </div>
                         <div>
                              <div className=" grid sm:grid-cols-2 md:grid-cols-3 gap-5">
                                   <div>
                                        <img className=" h-[250px] object-contain" src={image1} alt="" />
                                        <h1 className=" text-base md:text-2xl text-center font-semibold my-4"> 2-Factor Authentication</h1>
                                   </div>
                                   <div>
                                        <img className=" mx-auto  h-[250px] object-contain" src={image2} alt="" />
                                        <h1 className=" text-base md:text-2xl text-center font-semibold my-4"> Cloud-Based Encryption</h1>
                                   </div>
                                   <div>
                                        <img className=" mx-auto  h-[250px] object-contain" src={image3} alt="" />
                                        <h1 className=" text-base md:text-2xl text-center font-semibold my-4"> Effortless Recoverability</h1>
                                   </div>
                                   <div>
                                        <img className=" mx-auto h-[250px] object-contain" src={image4} alt="" />
                                        <h1 className=" text-base md:text-2xl text-center font-semibold my-4">Enforce Policy</h1>
                                   </div>
                                   <div>
                                        <img className=" mx-auto  h-[250px] object-contain" src={image5} alt="" />
                                        <h1 className=" text-base md:text-2xl text-center font-semibold my-4"> MPC Encryption</h1>
                                   </div>
                                   <div>
                                        <img className=" mx-auto  h-[250px] object-contain" src={image6} alt="" />
                                        <h1 className=" text-base md:text-2xl text-center font-semibold my-4"> 24x7 Live Support</h1>
                                   </div>
                              </div>

                              {/* Easy Access To Crypto  */}

                              <div style={{ backgroundImage: "url('../../../../public/easyAccessBG.a98e7c76.svg')" }} className=' p-3 py-10  bg-no-repeat object-contain  mx-auto   w-[100%] my-10 md:h-[80vh]'>

                                   <div className=' '>
                                        <h1 className=" text-center tracking-[1px]   mt-20 font-normal  md:font-bold text-lg md:text-xl lg:text-3xl 2xl:text-4xl my-3"> Easy Access To Crypto</h1>
                                        <p className="text-center  max-w-[800px] mx-auto  text-sm  md:text-xl text-[#434242]"> One Cwallet For All Your Crypto Needs</p>
                                   </div>

                                   <div className=' relative  md:flex  w-full    justify-between  gap-10'>
                                        <div className=' w-full'>
                                             <div className=' h-[120px]  my-4 flex gap-3 border border-[#000] p-2 md:p-4 rounded-2xl '>
                                                  <AiFillCheckCircle size={24}></AiFillCheckCircle>
                                                  <p className=' text-lg my md:text-xl  font-medium '> Built-In Cross Chain Aggregated <br /> Exchange</p>
                                             </div>
                                             <div className='my-4 h-[120px]  w-full  flex gap-3 border border-[#000] p-2 md:p-4 rounded-2xl '>
                                                  <AiFillCheckCircle size={24}></AiFillCheckCircle>
                                                  <p className=' text-lg my md:text-xl  font-medium '>
                                                       Buy, Sell And Earn In Minutes  </p>
                                             </div>
                                             <div className='my-4 h-[120px]  w-full  flex gap-3 border border-[#000] p-2 md:p-4 rounded-2xl '>
                                                  <AiFillCheckCircle size={24}></AiFillCheckCircle>
                                                  <p className=' text-lg my md:text-xl  font-medium '>
                                                       50+ Networks & Over 800 <br /> Cryptocurrencies</p>
                                             </div>
                                        </div>

                                        <div className=' w-full'>
                                             <div className='my-4 h-[120px]  w-full  md:flex-row-reverse flex gap-3 border border-[#000] p-2 md:p-4 rounded-2xl '>
                                                  <AiFillCheckCircle size={24}></AiFillCheckCircle>
                                                  <p className=' text-base  text-end sm:text-lg my md:text-xl  font-medium '> Monitor Market Movements Within <br /> The App</p>
                                             </div>
                                             <div className='my-4 h-[120px]  w-full  md:flex-row-reverse flex gap-3 border border-[#000] p-2 md:p-4 rounded-2xl '>
                                                  <AiFillCheckCircle size={24}></AiFillCheckCircle>
                                                  <p className=' text-lg my md:text-xl  font-medium '>Fast And Secure Transactions</p>
                                             </div>
                                             <div className='my-4 h-[120px]  w-full  md:flex-row-reverse  flex gap-3 border border-[#000] p-2 md:p-4 rounded-2xl '>
                                                  <AiFillCheckCircle size={24}></AiFillCheckCircle>
                                                  <p className=' text-lg my md:text-xl  font-medium '> 24x7 Live Support</p>
                                             </div>
                                        </div>

                                        <div className=' hidden  md:block absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2    '>
                                             <img className=' max-w-[200px]' src={imagePhone} alt="" />
                                        </div>
                                   </div>


                              </div>
                         </div>

                         <div className=' md:absolute mt-24  w-full  '>
                              <div className='my-4 md:flex justify-around items-center    btn-gradient  rounded-xl p-8'>
                                   <div className=' w-full h-[100px]  mx-auto text-center'>
                                        <h1 className=' text-[#000000] text-lg lg:text-2xl 2xl:text-5xl  font-bold '> 37M+</h1>
                                        <p className=' text-xl font-normal'> User</p>

                                   </div>
                                   <div className=' md:py-4 w-full h-[100px] flex md:block justify-center items-center flex-col  mx-auto my-4 border-t-2 md:border-t-0 border-b-2 md:border-b-0 border-dashed  md:border-l-2 md:border-r-2 border-[#000]  text-center'>
                                        <h1 className='text-[#000000] text-lg  lg:text-2xl 2xl:text-5xl  font-bold '> 53+</h1>
                                        <p className=' text-2xl font-normal'> Networks</p>

                                   </div>
                                   <div className='my-4  w-full h-[100px]  mx-auto text-center'>
                                        <h1 className='text-[#000000] tex-xl lg:text-2xl 2xl:text-5xl  font-bold '> 580M+</h1>
                                        <p className=' text-2xl font-normal'> Transactions</p>

                                   </div>

                              </div>
                         </div>
                    </div>


               </Container>

          </div>
     );
};

export default SecurityServices;