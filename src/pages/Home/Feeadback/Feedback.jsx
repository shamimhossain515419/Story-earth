import Container from "../../../Component/Container/Container";
import bgImage from '../../../../public/icons/feedbackImg.f002e3e3.svg'
import './Feedback.css'
const Feedback = () => {
     return (
          <div className="primaryBg  my-5 md:py-8 py-3 ">

               <div className=" flex justify-center items-center element-with-gradient-and-image p-2 md:p-4">
                    <Container>

                         <div className=" grid md:grid-cols-2 items-center gap-4 ">

                              <div>
                                   <h1 className=" text-base md:text-xl xl:text-3xl my-6 font-bold "> Your Feedback Matters</h1>
                                   <p className=" text-base   font-normal  my-2 md:text-lg mt-4 "> We strive to provide our users with the best possible experience. We believe that this is only possible through listening to feedback and ideas from those who are using our products. Your valuable input can help us provide you with the best user experiences and make sure that our products are always meeting your needs!</p>

                                   <button className=" bg-white text-black text-base px-4 py-2 rounded-3xl  md:text-xl font-medium mt-4 "> Write to us!</button>
                              </div>
                         
                         </div>
                    </Container>
               </div>

          </div>
     );
};

export default Feedback;