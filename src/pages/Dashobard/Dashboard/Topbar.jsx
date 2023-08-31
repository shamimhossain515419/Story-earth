import { Link } from 'react-router-dom'
import { AiOutlineNotification } from 'react-icons/ai'
import { AiFillHome } from 'react-icons/ai'
import { useContext } from 'react';
import { AuthContact } from '../../../Component/Authprovider/Authprovider';
const Topbar = () => {
     const {user}=useContext(AuthContact)
     return (
          <div className=' bg-white  fixed top-0 left-0 right-0 w-full shadow-xl px-8 py-4'>
               <div className=' flex justify-end items-center mr-7  '>
                    <div className=' flex gap-5 items-center '>
                         <Link to={'/'} className=' mx-2'>  <AiFillHome size={24}></AiFillHome> </Link>
                         <Link to={'/'} className=' mx-2'>  <AiOutlineNotification size={24}></AiOutlineNotification> </Link>
                         <div>
                              {
                                   user?.photoURL ? <> <img className="h-12 w-12 rounded-full" src={user?.photoURL} alt="" /> </> : <>  <div className=" p-2  text-xl font-extrabold text-[#fff] bg-black rounded-full uppercase"> {user.email.slice(0, 2)} </div> </>
                              }
                         </div>
                    </div>

               </div>
          </div>
     );
};

export default Topbar;