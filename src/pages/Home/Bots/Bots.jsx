import Container from "../../../Component/Container/Container";
import discord from '../../../../public/icons/discord.96e6f54d.svg'
import instagram from '../../../../public/icons/instagram.4c1529c2.svg'
import telegram from '../../../../public/icons/telegram.fca22bb0.svg'
import twitter from '../../../../public/icons/twitter.a96fc513.svg'
import youtube from '../../../../public/icons/youtube.c689a0ff.svg'
import twitch from '../../../../public/icons/twitch.8a2f0c51.svg'
import botImg1 from '../../../../public/phone/image1.png'

const Bots = () => {
     return (
          <div className=" bg-[#FFFFFF]">
               <Container>
                    <div className=" my-20 ">
                         <h1 className="   text-center max-w-[1200px] mx-auto text-lg md:text-xl xl:text-2xl  2xl:text-4xl font-semibold "> Tip, Airdrop, And Earn Crypto With  <span className="primaryColor"> Cwallet Bots  </span> <br /> Through Your Social Media </h1>
                    </div>
                    {/* socail icon  */}
                    <div className="  justify-center flex flex-wrap gap-4 items-center">
                         <div className=" cursor-pointer flex px-4 py-2 rounded-2xl   hover:bg-[#52515170] items-center gap-2">
                              <img className=" h-[29xp] " src={telegram} alt="" />
                              <h1 className=" text-base md:text-xl font-semibold xl:text-2xl ">telegram </h1>
                         </div>
                         <div className=" cursor-pointer flex px-4 py-2 rounded-2xl   hover:bg-[#52515170] items-center gap-2">
                              <img className=" h-[29xp] " src={discord} alt="" />
                              <h1 className=" text-base md:text-xl font-semibold xl:text-2xl ">discord </h1>
                         </div>
                         <div className=" cursor-pointer flex px-4 py-2 rounded-2xl   hover:bg-[#52515170] items-center gap-2">
                              <img className=" h-[29xp] " src={twitter} alt="" />
                              <h1 className=" text-base md:text-xl font-semibold xl:text-2xl ">twitter </h1>
                         </div>
                         <div>
                              <img className="px-4 h-8" src={instagram} alt="" />
                         </div>
                         <div>
                              <img className="px-4 h-8" src={youtube} alt="" />
                         </div>
                         <div>
                              <img className=" px-4 h-8" src={twitch} alt="" />
                         </div>
                    </div>

                    {/* Send, receive and exchange crypto with a single line of command  slider  */}
                    <div className=" grid md:grid-cols-2 gap-6  items-center ">
                         <div className="  relative">
                              <div className="  relative">
                                   <img className=" w-full" src={botImg1} alt="" />
                              </div>
                         </div>
                         <div>
                              <h1 className=" text-xl font-bold md:text-2xl xl:text-3xl my-4">Simple & Fast Crypto Transaction</h1>

                              <h2 className="  my-11 text-base  md:text-lg xl:text-xl fon"> Send, receive and exchange crypto with a single line of command</h2>

                              <div className=" cursor-pointer inline-block text-xl  font-medium mt-4  primaryBg  px-4 py-2 rounded-3xl ">
                                   Get Started Now!
                              </div>
                         </div>
                    </div>
               </Container>
          </div>
     );
};

export default Bots;