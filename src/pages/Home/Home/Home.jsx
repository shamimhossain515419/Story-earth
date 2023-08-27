import Banner from "../Banner/Banner";
import Combined from "../Combined/Combined";
import SecurityServices from "../SecurityServices/SecurityServices";


const Home = () => {
     return (
          <div>
            <Banner></Banner>
            <SecurityServices></SecurityServices>

            <div>
               <Combined></Combined>
            </div>
          </div>
     );
};

export default Home;