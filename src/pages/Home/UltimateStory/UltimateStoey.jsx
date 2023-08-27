import Container from "../../../Component/Container/Container";
import image1 from '../../../../public/phone/CryptoManagement.c1ff2b6c.png'
import { AiOutlineArrowRight } from "react-icons/ai";
const UltimateStoey = () => {
     return (
          <div className=" py-10 bg-white p-1">
               <div>
                    <Container>

                         <div className="   md:grid md:grid-cols-2 gap-11 ">

                              <div className=" md:p-10">
                                   <img className="  max-h-[600px] w-full" src={image1} alt="" />

                              </div>
                              <div className=" mt-5">
                                   <h1 className=" font-bold text-lg md:text-xl lg:text-3xl 2xl:text-4xl mt-10 "> Ultimate Crypto Management With Our Online/ Web Wallet</h1>
                                   <p className=" text-base md:text-lg my-5 font-normal xl:text-xl"> Secure, manage and exchange your crypto assets from anywhere, anytime, any device with Cwallet.</p>
                                   <div className=' md:max-w-[250px] mt-6 cursor-pointer hover:bg-[#151515] hover:text-white border-2 border-[#151515]   rounded-3xl duration-300 px-10 py-1 md:py-3 bg-[#fff]  flex justify-center items-center gap-2 ' >
                                        <span className=' text-base md:text-xl font-medium '> Learn More </span>
                                        <AiOutlineArrowRight size={24}></AiOutlineArrowRight>
                                   </div>
                              </div>
                         </div>
                    </Container>
               </div>
          </div>
     );
};

export default UltimateStoey;