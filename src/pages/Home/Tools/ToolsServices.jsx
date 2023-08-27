import image1 from '../../../../public/phone/tools1.14491dad.svg'
import image2 from '../../../../public/phone/tools2.b505baf0.svg'
import image3 from '../../../../public/phone/tools3.92a21d76.svg'
import image4 from '../../../../public/phone/tools4.3bfad327.svg'
import image5 from '../../../../public/phone/tools5.aebc6ab5.svg'
import image6 from '../../../../public/phone/tools6.34c53831.svg'
const ToolsServices = () => {
     return (
          <div className=' grid md:grid-cols-2 xl:grid-cols-3 gap-9 '>
               <div className=' p-3 bg-white  shawobox rounded-3xl '>
                    <div className='text-center bg-[#F5F6F8] rounded-3xl duration-200 hover:bg-[#B6EC46]  h-[200px] '>
                         <img className=' mx-auto w-full h-full object-contain' src={image1} alt="" />

                    </div>
                    <div className=' my-3'>
                         <h1 className=' text-center  text-xl md:text-2xl font-bold  py-1'> Tip Box </h1>
                         <p className='text-center  my-1 text-base '>Earn continuous crypto income with Tip Box.</p>
                    </div>
               </div>
               <div className=' p-3 bg-white  shawobox rounded-3xl '>
                    <div className='text-center bg-[#F5F6F8] rounded-3xl duration-200 hover:bg-[#B6EC46]  h-[200px] '>
                         <img className=' mx-auto w-full h-full object-contain' src={image2} alt="" />

                    </div>

                    <div className=' my-3'>
                         <h1 className=' text-center  text-xl md:text-2xl font-bold  py-1'> Request</h1>
                         <p className='text-center  my-1 text-base '>Create payment Request with just one click..</p>
                    </div>
               </div>
               <div className=' p-3 bg-white  shawobox rounded-3xl '>
                    <div className='text-center bg-[#F5F6F8] rounded-3xl duration-200 hover:bg-[#B6EC46]  h-[200px] '>
                         <img className=' mx-auto w-full h-full object-contain' src={image3} alt="" />
                    </div>

                    <div className=' my-3'>
                         <h1 className=' text-center  text-xl md:text-2xl font-bold  py-1'> Airdrop Arena </h1>
                         <p className='text-center  my-1 text-base '>Crypto airdrops combined with games. Earn crypto and have fun.</p>
                    </div>
               </div>
               <div className=' p-3 bg-white  shawobox rounded-3xl '>
                    <div className='text-center bg-[#F5F6F8] rounded-3xl duration-200 hover:bg-[#B6EC46]  h-[200px] '>
                         <img className=' mx-auto w-full h-full object-contain' src={image4} alt="" />

                    </div>
                    <div className=' my-3'>
                         <h1 className=' text-center  text-xl md:text-2xl font-bold  py-1'> Giveaway</h1>
                         <p className='text-center  my-1 text-base '>Create giveaway and campaigns with multiple draw modes.</p>
                    </div>
               </div>

               <div className=' p-3 bg-white  shawobox rounded-3xl '>
                    <div className='text-center bg-[#F5F6F8] rounded-3xl duration-200 hover:bg-[#B6EC46]  h-[200px] '>
                         <img className=' mx-auto w-full h-full object-contain' src={image5} alt="" />
                    </div>

                    <div className=' my-3'>
                         <h1 className=' text-center  text-xl md:text-2xl font-bold  py-1'> Mobile Refills</h1>
                         <p className='text-center  my-1 text-base '>Top up your mobile phones with crypto for 40+ countrie</p>
                    </div>
               </div>
               <div className=' p-3 bg-white  shawobox rounded-3xl '>
                    <div className='text-center bg-[#F5F6F8] rounded-3xl duration-200 hover:bg-[#B6EC46]  h-[200px] '>
                     <img className=' mx-auto w-full h-full object-contain' src={image6} alt="" />

                    </div>
                    <div className=' my-3'>
                         <h1 className=' text-center  text-xl md:text-2xl font-bold  py-1'> Bulk Payment </h1>
                         <p className='text-center  my-1 text-base '>Easy mass crypto payments with one click. </p>
                    </div>
               </div>


          </div>
     );
};

export default ToolsServices;