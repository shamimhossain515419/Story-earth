import { Link } from 'react-router-dom'
import Container from '../Component/Container/Container';
import { AiOutlineTwitter,AiFillAndroid, AiOutlineYoutube } from 'react-icons/ai'
import { FaTelegram } from 'react-icons/fa'
import { LiaDiscord } from 'react-icons/lia'
import {BiLogoPlayStore} from 'react-icons/bi'
import {SiWebmoney} from 'react-icons/si'
const Footer = () => {
     return (
          <div className=" bg-[#30312B] p-3 py-10">
               <Container>
                    <div className=" grid md:grid-cols-6 xl:grid-cols-12 gap-6">
                         <div className="  md:col-span-2 xl:col-span-4">
                              <div className=" text-white">
                                   <h1 className=" text-xl md:text-3xl xl:text-4xl font-medium my-3">  Story Earth</h1>
                                   <p> Cwallet is a unique multi-functional wallet which offers centralized and decentralized functions together under one app! With its futuristic tech and user-friendly Cwallet tools, it offers a free & all-inclusive set of crypto tools for everyone, to empower a faster, easier and safer crypto journey thus bridging the gap between Web2.0 and Web3.0. It is not just a wallet to hold, buy or exchange your crypto assets but a comprehensive toolkit with multiple bot-enabled features like tipping and community management upon social networks to boost and support the future of crypto economy.</p>
                              </div>
                              <div className=' mt-6 flex flex-wrap items-center gap-3'>
                                   <div className=' hover:bg-[#299ce4] cursor-pointer inline-block rounded-full p-2 duration-200 bg-[#8c8c8c]'>
                                        <AiOutlineTwitter className=' text-white' size={24}></AiOutlineTwitter>
                                   </div>
                                   <div className=' hover:bg-[#299ce4] cursor-pointer inline-block rounded-full p-2 duration-200 bg-[#8c8c8c]'>
                                        <FaTelegram className=' text-white' size={24}></FaTelegram>
                                   </div>
                                   <div className=' hover:bg-[#299ce4] cursor-pointer inline-block rounded-full p-2 duration-200 bg-[#8c8c8c]'>
                                        <LiaDiscord className=' text-white' size={24}></LiaDiscord>
                                   </div>
                                   <div className=' hover:bg-[#299ce4] cursor-pointer inline-block rounded-full p-2 duration-200 bg-[#8c8c8c]'>
                                        <AiOutlineYoutube className=' text-white' size={24}></AiOutlineYoutube>
                                   </div>
                              </div>
                         </div>
                         <div className="  md:col-span-1 xl:col-span-2">
                              <h1 className=" text-base md:text-xl xl:text-2xl text-white font-semibold "> Contact Us</h1>
                              <div className=' mt-4 space-y-1'>
                                   <Link className=' block  text-[#8c8c8c]  font-semibold duration-200  hover:text-[#ABE839]' to={'/'}> Custodial Wallet</Link>
                                   <Link className='  text-[#8c8c8c] block  font-semibold duration-200  hover:text-[#ABE839]' to={'/'}> Non-Custodial Wallet</Link>
                                   <Link className='  text-[#8c8c8c] block  font-semibold duration-200  hover:text-[#ABE839]' to={'/'}> Web Wallet</Link>
                                   <Link className='  text-[#8c8c8c] block  font-semibold duration-200  hover:text-[#ABE839]' to={'/'}>Payments</Link>
                              </div>
                         </div>


                         <div className="  md:col-span-1 xl:col-span-2">
                              <h1 className=" text-base md:text-xl xl:text-2xl text-white font-semibold ">  Tools</h1>
                              <div className=' mt-4 space-y-1'>
                                   <Link className='   text-[#8c8c8c] block font-semibold duration-200  hover:text-[#ABE839]' to={'/'}> Tip Box</Link>
                                   <Link className='  text-[#8c8c8c] block  font-semibold duration-200  hover:text-[#ABE839]' to={'/'}>Airdrop Arena</Link>
                                   <Link className='  text-[#8c8c8c] block  font-semibold duration-200  hover:text-[#ABE839]' to={'/'}>  Giveaway</Link>
                                   <Link className='  text-[#8c8c8c] block  font-semibold duration-200  hover:text-[#ABE839]' to={'/'}>Bulk Payment</Link>
                                   <Link className='  text-[#8c8c8c] block  font-semibold duration-200  hover:text-[#ABE839]' to={'/'}>Request</Link>
                                   <Link className='  text-[#8c8c8c] block  font-semibold duration-200  hover:text-[#ABE839]' to={'/'}>   Mobile Refills</Link>
                                   <Link className='  text-[#8c8c8c] block  font-semibold duration-200  hover:text-[#ABE839]' to={'/'}>   Payment Button</Link>
                                   <Link className='  text-[#8c8c8c] block  font-semibold duration-200  hover:text-[#ABE839]' to={'/'}>    Invoice</Link>
                              </div>
                         </div>
                         <div className="  md:col-span-1 xl:col-span-2">
                              <h1 className=" text-base md:text-xl xl:text-2xl text-white font-semibold ">  Assets</h1>
                              <div className=' mt-4 space-y-1'>
                                   <Link className='   text-[#8c8c8c] block font-semibold duration-200  hover:text-[#ABE839]' to={'/'}> Ethereum (ETH)</Link>
                                   <Link className='  text-[#8c8c8c] block  font-semibold duration-200  hover:text-[#ABE839]' to={'/'}>Bitcoin (BTC)</Link>
                                   <Link className='  text-[#8c8c8c] block  font-semibold duration-200  hover:text-[#ABE839]' to={'/'}>  Binance Coin (BNB)</Link>
                                   <Link className='  text-[#8c8c8c] block  font-semibold duration-200  hover:text-[#ABE839]' to={'/'}>   Litecoin (LTC)</Link>
                                   <Link className='  text-[#8c8c8c] block  font-semibold duration-200  hover:text-[#ABE839]' to={'/'}> Ripple (XRP)</Link>
                                   <Link className='  text-[#8c8c8c] block  font-semibold duration-200  hover:text-[#ABE839]' to={'/'}>   Dogecoin (DOGE)</Link>
                                   <Link className='  text-[#8c8c8c] block  font-semibold duration-200  hover:text-[#ABE839]' to={'/'}>  Polkadot (DOT)</Link>
                                   <Link className='  text-[#8c8c8c] block  font-semibold duration-200  hover:text-[#ABE839]' to={'/'}>   Dash (DASH)</Link>
                                   <Link className='  text-[#8c8c8c] block  font-semibold duration-200  hover:text-[#ABE839]' to={'/'}>   Dash (DASH)</Link>
                                   <Link className='  text-[#8c8c8c] block  font-semibold duration-200  hover:text-[#ABE839]' to={'/'}>       Cosmos (ATOM)</Link>
                                   <Link className='  text-[#8c8c8c] block  font-semibold duration-200  hover:text-[#ABE839]' to={'/'}>       Stellar (XLM)</Link>
                              </div>
                         </div>
                         <div className="  md:col-span-1 xl:col-span-2">
                              <h1 className=" text-base md:text-xl xl:text-2xl text-white font-semibold ">  Support</h1>
                              <div className=' mt-4 space-y-1'>
                                   <Link className='   text-[#8c8c8c] block font-semibold duration-200  hover:text-[#ABE839]' to={'/'}> Help Center</Link>
                                   <Link className='  text-[#8c8c8c] block  font-semibold duration-200  hover:text-[#ABE839]' to={'/'}>FAQs</Link>
                                   <Link className='  text-[#8c8c8c] block  font-semibold duration-200  hover:text-[#ABE839]' to={'/'}>  Live Support</Link>
                              </div>
                              <h1 className=" text-base md:text-xl xl:text-2xl text-white font-semibold ">  Contact Us</h1>
                              <div className=' mt-4 space-y-1'>
                                   <Link className='   text-[#8c8c8c] block font-semibold duration-200  hover:text-[#ABE839]' to={'/'}> business@storyearth.com</Link>
                                   <Link className='  text-[#8c8c8c] block  font-semibold duration-200  hover:text-[#ABE839]' to={'/'}>FAQs</Link>
                                   <Link className='  text-[#8c8c8c] block  font-semibold duration-200  hover:text-[#ABE839]' to={'/'}>  marketing@storyearth.com</Link>
                              </div>
                         </div>

                    </div>



                    <div className=" my-8 flex justify-center flex-wrap  items-center gap-5">
                         <div className="banarbox">
                              <BiLogoPlayStore size={20}></BiLogoPlayStore>
                              <span className=" text-base  font-semibold">Google Play</span>
                         </div>
                         <div className="banarbox">
                              <AiFillAndroid size={20}></AiFillAndroid>
                              <span className=" text-base  font-semibold">Android Apps</span>
                         </div>
                         <div className="banarbox">
                              <SiWebmoney size={20}></SiWebmoney>
                              <span className=" text-base  font-semibold">Web Wallet</span>
                         </div>
                    </div>
               </Container>
          </div>
     );
};

export default Footer;