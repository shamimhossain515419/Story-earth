import Footer from "../Fotter/Footer";
import Navbar from "../Navbar/Navbar";
import { Outlet } from 'react-router-dom';

const Main = () => {
     return (
          <div>
               <Navbar></Navbar>

               <div className=" ">
                    <Outlet></Outlet>
               </div>
               <Footer></Footer>
          </div>
     );
};

export default Main;