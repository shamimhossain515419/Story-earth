import Container from "../../Component/Container/Container";
import './Register.css'
import { FcGoogle } from 'react-icons/fc'
import { AiFillGithub } from 'react-icons/ai'
import { BsFacebook } from 'react-icons/bs'
import { useContext } from "react";
import { AuthContact } from "../../Component/Authprovider/Authprovider";
 import  toast from 'react-hot-toast';
import {useNavigate} from 'react-router-dom';
const Register = () => {

     const { CreateUser } = useContext(AuthContact);
     const Navigete=useNavigate()
 
     const HandleSubmit = async (e) => {
          e.preventDefault();
          const from = e.target;
          const email = from.email.value;
          const password = from.password.value;

        
       const result= await  CreateUser(email,password);
          if(result){
               toast.success('Successfully Login!') 
               from.reset();
               Navigete('/');
          }


     }
     return (
          <div className=" backgroundLogin  flex  justify-center items-center   md:h-screen">
               <Container>

                    <div className=" md:max-w-[800px] bg-[white] text-black rounded-lg p-1 md:p-3 shadow-md ">
                         <div>
                              <h1 className=" font-bold  text-base md:text-xl xl:text-3xl my-3"> Hey!</h1>
                              <h1 className="text-base md:text-lg xl:text-xl my-3 font-medium "> Enter your email or phone number to register and sign in!</h1>
                         </div>
                         <form onSubmit={HandleSubmit}>
                              <div className="  border border-black p-3 rounded-xl">
                                   <label className="  block" htmlFor="email">Email</label>
                                   <input className=" text-xl  mt-2 font-semibold outline-none  border-none " type="email" name="email" placeholder="Enter Your email" id="" />
                              </div>
                              <div className=" mt-4  border border-black p-3 rounded-xl">
                                   <label className="  block" htmlFor="email">Password</label>
                                   <input className=" text-xl  mt-2 font-semibold outline-none  border-none " type="password" name="password" placeholder="Enter Your password" id="" />
                              </div>
                              <div>
                                   <p className="text-base font-medium my-7"> By clicking Start , you agree to our Privacy Policy Terms of Service

                                   </p>
                              </div>
                              <div className=" flex justify-center items-center  text-center mx-auto">
                                   <button type="submit" className="button-63" >Start</button>
                              </div>
                         </form>

                         <p className=" text-base my-3 text-center ">More Login Options</p>
                         <div className="my-3 mx-3 flex  j items-center gap-2 justify-center border border-black px-3 py-2 rounded-2xl">
                              <FcGoogle size={24}></FcGoogle>
                              <p className=" text-base font-medium ">Continue with Google</p>
                         </div>
                         <div className=" my-3 mx-3 flex  j items-center gap-2 justify-center border border-black px-3 py-2 rounded-2xl">
                              <AiFillGithub size={24}></AiFillGithub>
                              <p className=" text-base font-medium ">Continue with Github</p>
                         </div>
                         <div className="my-3 mx-3 flex  j items-center gap-2 justify-center border border-black px-3 py-2 rounded-2xl">
                              <BsFacebook size={24}></BsFacebook>
                              <p className=" text-base font-medium ">Continue with Facebook</p>
                         </div>

                    </div>

               </Container>
          </div>
     );
};

export default Register;