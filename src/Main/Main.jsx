import Navbar from "../Navbar/Navbar";
import { Outlet } from 'react-router-dom';

const Main = () => {
     return (
          <div>
               <Navbar></Navbar>

               <div  className=" ">
                    <Outlet></Outlet>
               </div>

          </div>
     );
};

export default Main;