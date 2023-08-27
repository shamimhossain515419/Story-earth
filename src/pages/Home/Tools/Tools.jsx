import Container from "../../../Component/Container/Container";
import ToolsServices from "./ToolsServices";
const Tools = () => {
     return (
          <div className="  py-10 w-full h-full bg-no-repeat  bg-cover bg-center  " style={{backgroundImage: 'url("https://i.ibb.co/db75b30/tools-Bg-svg-1.png")'}}>

               <Container>
                    <div>
                         <div className=" text-center my-10">
                              <h1 className=" text-lg  md:text-2xl  font-medium 2xl:text-3xl my-4"> Story Earth Built-In Tools For Crypto Convenience</h1>
                              <h1 className=" text-base  md:text-lg font-medium my-4"> All Your Crypto Needs Covered In One App</h1>
                         </div>
                         <div className=" max-w-[1200px] mx-auto ">
                              <ToolsServices></ToolsServices>
                         </div>
                         <h2 className=" text-2xl text-[#434141] font-medium my-4  mt-11 text-center">More Tools Coming Soon..</h2>
                    </div>
               </Container>
          </div>
     );
};

export default Tools;