import { useContext, useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa'
import './Navbar.css'
import Language from "./Language/language";
import { AuthContact } from "../Component/Authprovider/Authprovider";
const Navbar = () => {

     // const [isOpen, setIsOpen] = useState(false);
     const [show, setShow] = useState(false);
     const { user } = useContext(AuthContact);
     console.log(user);

     // useEffect funtion 
     useEffect(() => {
          const handleScroll = () => {
               if (window.scrollY >= 200) {
                    setShow(true);
               } else {
                    setShow(false);
               }
          };

          window.addEventListener("scroll", handleScroll);

          // Clean up the event listener when the component unmounts
          return () => {
               window.removeEventListener("scroll", handleScroll);
          };
     }, []); // Empty dependency array ensures the effect runs only once

     return (

          <div className={`${show ? "fixed shadow-lg duration-300" : ""
               }  w-full  bg-[#F9F9FD] z-50  overflow-hidden  py-2 md:px-10 xl:px-15 2xl:px-20`}
          >
               <div className=" flex  items-center  justify-between p-2  gap-2">
                    <div>
                         <h1 className="  text-sm  sm:text-base md:text-2xl font-medium "> Story earth</h1>
                    </div>
                    {/* all Link  */}
                    <div className=" hidden md:block">
                         <div className="   md:flex items-center gap-8 ">
                              <Link className=" text-sm lg:text-base  font-bold"> Wallets </Link>
                              <Link className=" text-sm lg:text-base  font-bold"> Tools </Link>
                              <Link className=" text-sm lg:text-base  font-bold"> Bots </Link>
                              <Link className=" text-sm lg:text-base  font-bold"> Payments </Link>
                              <Link className=" text-sm hidden lg:block  lg:text-base  font-bold"> Crypto Directory </Link>
                              <Link className=" text-sm hidden lg:block lg:text-base  font-bold"> Resources </Link>
                         </div>
                    </div>
                    {/* Navbar Right section  */}
                    <div className="  flex items-center gap-1 ">

                         {
                              user ? <><div className=" flex  gap-2 items-center cursor-pointer Nabarbutton bg-[#9be957] font-medium  capitalize text-black text-sm md:text-lg  rounded-2xl">
                                   {
                                        user?.photoURL ? <> <img className="h-12 w-12 rounded-full" src={user?.photoURL} alt="" /> </> : <>  <div className=" p-2  text-xl font-extrabold text-[#fff] bg-black rounded-full uppercase"> {user.email.slice(0, 2)} </div> </>
                                   }
                                   <div>
                                        <h1 className=" text-base" > {user.email.slice(0, 7)}{user?.uid.slice(0, 6)} </h1>
                                        <h1 className=" text-sm">ID: {user?.metadata?.createdAt} </h1>
                                   </div>
                              </div></> : <> <div>
                                   <h1 className=" cursor-pointer Nabarbutton bg-[#9be957] font-medium  capitalize text-black text-sm md:text-lg  rounded-2xl"> Start my Swallet </h1>
                              </div></>
                         }


                         <div className=" hidden lg:block">
                              <Language></Language>
                         </div>
                         <div className=" mx-2 md:hidden  cursor-pointer">
                              <FaBars size={20}></FaBars>
                         </div>
                    </div>
               </div>
          </div>

     );
};

export default Navbar;