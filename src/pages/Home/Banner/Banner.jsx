import Container from "../../../Component/Container/Container";
import './banner.css'
import {BiLogoPlayStore} from 'react-icons/bi'
import {AiFillAndroid} from 'react-icons/ai'
import {SiWebmoney} from 'react-icons/si'
const Banner = () => {
     return (
          <div className=" bannarBg">
               <Container>
                    <div  className="  pt-10">

                         <div className=" mx-auto text-center">
                              <h2 className=" text-lg md:text-xl lg:text-4xl font-bold my-2">  Simple, Secure & Multi-Chain</h2>
                              <h1 className="  cryptoText  text-lg md:text-2xl lg:text-5xl font-bold my-2"> Crypto wallet</h1>
                              <p className=" text-lg md:text-xl font-medium my-6  text-[#373535]"> Securely Hold, Send, Receive, Exchange, Tip & Earn 800+ Cryptocurrencies With Cwallet.</p>

                         </div>

                         <div className=" my-8 flex justify-center flex-wrap  items-center gap-5">
                              <div className="banarbox">
                                <BiLogoPlayStore size={20}></BiLogoPlayStore>
                                <span  className=" text-base  font-semibold">Google Play</span>
                              </div>
                              <div className="banarbox">
                                <AiFillAndroid size={20}></AiFillAndroid>
                                <span className=" text-base  font-semibold">Android Apps</span>
                              </div>
                              <div className="banarbox">
                                <SiWebmoney size={20}></SiWebmoney>
                                <span  className=" text-base  font-semibold">Web Wallet</span>
                              </div>
                         </div>


                         <div>
                              <img className=" max-h-[550px]" src="https://i.ibb.co/PjpqdNB/hero-Img-0469f565.png" alt="" />
                         </div>



                    </div>

               </Container>
          </div>
     );
};

export default Banner;