import Container from "../../../Component/Container/Container";
import './Combined.css'
import Slider1 from "./Slider1";
import Slider2 from "./Slider2";
import switchimage from '../../../../public/phone/switch.6f2ecb8a.svg';

const Combined = () => {
     return (
          <div className="CombinedBg mt-10  md:mt-40">
               <Container>


                    <div className=" mt-40">

                         <div className=" mt-10">
                              <h1 className=" text-center text-lg md:text-xl xl:text-3xl 2xl:text-4xl font-bold mt-10"> The First-Ever Combined Custodial & Non-Custodial Story earth</h1>
                              <p className=" max-w-[1000px] mx-auto text-center text-base  md:text-lg font-medium my-10"> With Cwallet, you will get the security and privacy of non-custodial wallets & the convenience and efficacy of custodial wallets in one place. You can easily manage and trade 800+ crypto assets in one app with flexibility, capability, and creativity.</p>
                         </div>

                    </div>

                    <div className=" max-w-[1000px] mx-auto">
                         <div className=" my-10 flex justify-between gap-6">
                              <div className=" max-w-[300px]">
                                   <Slider1></Slider1>
                              </div>
                              <div className="   flex justify-center items-center">
                                   <img className=" hidden md:block w-16 h-16 " src={switchimage} alt="" />
                              </div>
                              <div className=" max-w-[300px]">
                                   <Slider2></Slider2>
                              </div>
                         </div>
                    </div>

               </Container>

          </div>
     );
};

export default Combined;