import Container from '../../../Component/Container/Container';
import './Blockchains.css'
import groupImage from '../../../../public/phone/badgeGroups.c83a6925.svg'
import Marquee from 'react-fast-marquee';
const Blockchains = () => {
     return (
          <div className=' GroupBg  md:p-3 my-10'>
               <div>
                    <Container>
                         <div className=' md:grid md:grid-cols-2 gap-6 items-center'>
                              <div className='md:p-2'>
                                   <h1 className=' text-white  font-semibold mt-8 text-xl md:text-2xl xl:text-3xl 2xl:text-5xl '>  <span className=' primaryColor '> 50+ </span> Blockchains, </h1>
                                   <h1 className=' text-white font-semibold py-2 text-xl md:text-2xl xl:text-3xl 2xl:text-5xl '>  <span className=' primaryColor '> 800+ </span>  Major Cryptocurrencies </h1>
                                   <p className=' text-white py-5 text-base md:text-2xl '> And Growing</p>
                                   <button className='text-black primaryBg text-base md:text-xl  font-medium rounded-2xl px-10 py-2  mt-8'>All View</button>

                              </div>
                              <div className='md:p-2 text-center h-[500px] overflow-hidden' >
                                   <Marquee direction={'up'} pauseOnHover={true}>
                                        <img className=' mx-auto my-2  object-contain ' src={groupImage} alt="" />
                                        <img className=' mx-auto my-2  object-contain ' src={groupImage} alt="" />
                                        <img className=' mx-auto my-2  object-contain ' src={groupImage} alt="" />
                                   </Marquee>

                              </div>
                         </div>
                    </Container>
               </div>
          </div>
     );
};

export default Blockchains;