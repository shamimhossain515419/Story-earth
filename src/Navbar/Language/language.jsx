import { useState } from "react";

function Language() {
     const [selectedOption, setSelectedOption] = useState('');

     const handleSelectChange = (event) => {
          setSelectedOption(event.target.value);
     };

     return (
          <div>

               <select className=" bg-transparent text-black  outline-none p-2" value={selectedOption} onChange={handleSelectChange}>

                    <option className="bg-transparent " value="English">EN</option>
                    <option value="Bangla">বাংলা</option>
               </select>

          </div>
     );
}

export default Language;