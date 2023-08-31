import Overview from "../Overview/Overview";
import Sidbar from "./Sidbar";
import Topbar from "./Topbar";


const Layout = () => {
     return (
          <div>
                 <Topbar></Topbar>
               <div>
                <Sidbar></Sidbar>
               </div>
               
               <div>
                    <Overview></Overview>
               </div>



          </div>
     );
};

export default Layout;