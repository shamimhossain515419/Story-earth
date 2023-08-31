import { NavLink } from 'react-router-dom'
import { AiFillWindows, AiOutlineTranslation, AiOutlineUnorderedList, AiOutlineSwap, AiOutlineRobot, AiFillSetting } from 'react-icons/ai'
import { LiaToolsSolid } from 'react-icons/lia'
import Language from '../../../Navbar/Language/language';
const Sidbar = () => {
     return (
          <div className=' fixed  shawobox  max-w-[250px] h-screen top-0 first-letter:bottom-0 bg-[#FFFFFF] px-6 py-2 shadow-xl'>
               <div>
                    <h1 className=" text-xl md:text-2xl 2xl:text-4xl font-bold my-1"> Story earth</h1>
               </div>

               <div className=' my-4'>
                    <NavLink to={'/dashboard'} className={({ isActive }) => isActive ? "text-[#ABE839] bg-black rounded-3xl flex  items-center gap-2  px-3 py-2" : " text-black px-3 py-2 hover:bg-[#89838341] rounded-3xl flex  items-center gap-2"
                    }>

                         <AiFillWindows size={20}></AiFillWindows>
                         <h1 className='text-lg font-medium  '> Overview</h1>

                    </NavLink>
               </div>
               <hr />
               <div>
                    <div className=' my-4'>
                         <NavLink to={'/'} className={({ isActive }) => isActive ? "text-[#ABE839] bg-black rounded-3xl flex  items-center gap-2  px-3 py-2" : " text-black px-3 py-2 hover:bg-[#89838341] rounded-3xl flex  items-center gap-2"
                         }>

                              <AiOutlineSwap size={20}></AiOutlineSwap>
                              <h1 className='text-lg font-medium  '> Swap</h1>

                         </NavLink>
                    </div>
                    <div className=' my-4'>
                         <NavLink to={'/'} className={({ isActive }) => isActive ? "text-[#ABE839] bg-black rounded-3xl flex  items-center gap-2  px-3 py-2" : " text-black px-3 py-2 hover:bg-[#89838341] rounded-3xl flex  items-center gap-2"
                         }>

                              <LiaToolsSolid size={20}></LiaToolsSolid>
                              <h1 className='text-lg font-medium  '> Tools</h1>

                         </NavLink>
                    </div>
                    <div className=' my-4'>
                         <NavLink to={'/'} className={({ isActive }) => isActive ? "text-[#ABE839] bg-black rounded-3xl flex  items-center gap-2  px-3 py-2" : " text-black px-3 py-2 hover:bg-[#89838341] rounded-3xl flex  items-center gap-2"
                         }>

                              <AiOutlineRobot size={20}></AiOutlineRobot>
                              <h1 className='text-lg font-medium  '> Bots</h1>

                         </NavLink>
                    </div>
               </div>
               <hr className=' my-6' />
               <div className=' my-4'>
                    <NavLink to={'/'} className={({ isActive }) => isActive ? "text-[#ABE839] bg-black rounded-3xl flex  items-center gap-2  px-3 py-2" : " text-black px-3 py-2 hover:bg-[#89838341] rounded-3xl flex  items-center gap-2"
                    }>

                         <AiOutlineUnorderedList size={20}></AiOutlineUnorderedList>
                         <h1 className='text-lg font-medium  '> List</h1>

                    </NavLink>
               </div>
               <div className=' my-4'>
                    <NavLink to={'/'} className={({ isActive }) => isActive ? "text-[#ABE839] bg-black rounded-3xl flex  items-center gap-2  px-3 py-2" : " text-black px-3 py-2 hover:bg-[#89838341] rounded-3xl flex  items-center gap-2"
                    }>

                         <AiOutlineTranslation size={20}></AiOutlineTranslation>
                         <h1 className='text-lg font-medium  '> Transfer</h1>

                    </NavLink>
               </div>
               <hr />
               <div className=' my-4'>
                    <NavLink to={'/'} className={({ isActive }) => isActive ? "text-[#ABE839] bg-black rounded-3xl flex  items-center gap-2  px-3 py-2" : " text-black px-3 py-2 hover:bg-[#89838341] rounded-3xl flex  items-center gap-2"
                    }>

                         <AiFillSetting size={20}></AiFillSetting>
                         <h1 className='text-lg font-medium  '> Setting</h1>

                    </NavLink>
               </div>
               <hr />
               <div className=' mt-6 text-center text-white p-3 rounded-3xl bg-[#ABE839]'>
                    <h1 className=' text-lg  font-medium'> THE NEW UPDATE</h1>
                    <p className='  my-2'>Version 2.3.8</p>
                    <button className=' bg-black px-3 py-1  rounded-2xl  text-xl font-medium'>Download app</button>
               </div>


               <div className=' flex  justify-between  absolute bottom-0  items-center gap-2'>
                     <h1 className=' text-xl font-medium'> Language</h1>
                    <div className="  lg:block">
                         <Language></Language>
                    </div>
               </div>
          </div>
     );
};

export default Sidbar;