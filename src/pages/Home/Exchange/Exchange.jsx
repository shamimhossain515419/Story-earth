import { AiOutlineArrowRight } from "react-icons/ai";
import Container from "../../../Component/Container/Container";
import iamgeExchange from '../../../../public/phone/swap.b7448b2e.svg'
const Exchange = () => {
     return (
          <div  className=" py-10 bg-white">
               <Container>
                    <div className=" md:grid md:grid-cols-3  items-center gap-10 ">
                         <div className=" col-span-1">
                              <img className=" h-[400px] mx-auto text-center mt-5" src={iamgeExchange} alt="" />
                         </div>
                         <div className=" col-span-2">
                              <h1 className=" text-[#1B1C17] text-lx md:text-2xl  font-semibold  xl:text-4xl my-8 "> Built-In Swap Offers Best Price To Exchange Crypto</h1>
                              <h1 className=" font-normal text-[#1B1C17] my-7 ">
                                   Built-In Swap Offers Best Price To Exchange Crypto
                                   Our endless liquidity pool ensures instantaneous swap for users with no limitation on the amount of exchange. We offer the best rates across all leading CEXs, DEXs, and Bridges with one simple click!</h1>
                              <div className=' max-w-[250px] mt-6 cursor-pointer duration-300 hover:bg-[#151515] hover:text-white border-2 border-[#151515] rounded-2xl px-10 py-1 md:py-3 bg-[#fff]  flex justify-center items-center gap-2 ' >
                                   <span className=' text-base md:text-xl font-medium '> Learn More </span>
                                   <AiOutlineArrowRight size={24}></AiOutlineArrowRight>
                              </div>
                         </div>
                    </div>
               </Container>
          </div>
     );
};

export default Exchange;