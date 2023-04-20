import React, { useState } from "react";
import CardComponent from "./CardComponent";
import internshipsData from "../Data/internshipsData";
import apprenticeshipsData from "../Data/apprenticeshipsData";
import fellowshipsData from '../Data/fellowshipsData';
import scholarshipsData from '../Data/scholarshipsData'
import studentOfferingsData from '../Data/studentOfferingsData'

function LowerNavbar(props) {
  const { opportunityType } = props.opportunityTypeData;
  const [type, setType] = useState("Internships");
  console.log(opportunityType);

  return (
    <>
      {/* Navbar below slider  */}
      <nav
        id="opportunity"
        className="bg-[#3c4857] md:flex md:items-center md:justify-between"
      >
        <ul className="sm:flex sm:items-center ">
          {/* Reanders as much as number of types available in list */}
          {opportunityType.map((types) => (
            <li
              className="text-[1.2em] px-[.5em] py-[.3em] text-center text-white hover:bg-[#66FCF1] hover:text-black duration-500 cursor-pointer"
              key={types}
              //  To set type of opportunity to render
              onClick={() => setType(types)}
            >
              {types}
            </li>
          ))}
        </ul>
      </nav>
      <div className="mb-8">
      <CardComponent
        type={type}
        apprenticeshipsData={apprenticeshipsData}
        internshipsData={internshipsData}
        studentOfferingsData={studentOfferingsData}
        scholarshipsData={scholarshipsData}
        fellowshipsData={fellowshipsData}
      />
      </div>
    </>
  );
}

export default LowerNavbar;
