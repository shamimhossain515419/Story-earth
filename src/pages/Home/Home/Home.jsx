import Banner from "../Banner/Banner";
import Blockchains from "../Blockchains/Blockchains";
import Bots from "../Bots/Bots";
import Combined from "../Combined/Combined";
import Exchange from "../Exchange/Exchange";
import Feedback from "../Feeadback/Feedback";
import SecurityServices from "../SecurityServices/SecurityServices";
import Tools from "../Tools/Tools";
import UltimateStoey from "../UltimateStory/UltimateStoey";
import FAQ from "./FAQ/FAQ";


const Home = () => {
     return (
          <div>
               <Banner></Banner>
               <SecurityServices></SecurityServices>

               <div>
                    <Combined></Combined>
               </div>
               <div>
                    <UltimateStoey></UltimateStoey>
               </div>
               <Blockchains></Blockchains>
               <Exchange></Exchange>
               <Tools></Tools>
               <div>
                    <Bots></Bots>
               </div>
               <Feedback></Feedback>
               <FAQ></FAQ>
          </div>
     );
};

export default Home;