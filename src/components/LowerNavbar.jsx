import React, { useState } from "react";
import CardComponent from "./CardComponent";
import internshipsData from "../Data/internshipsData";
import apprenticeshipsData from "../Data/apprenticeshipsData";

function LowerNavbar(props) {
  const { opportunityType } = props.opportunityTypeData;
  const [type, setType] = useState("Internships");
  return (
    <>
      {/* Navbar below slider  */}
      <nav
        id="opportunity"
        className="bg-[#3c4857] border-b-2 border-b-white
            md:flex md:items-center md:justify-between"
      >
        <ul className="sm:flex sm:items-center ">
          {/* Reanders as much as number of types available in list */}
          {opportunityType.map((types) => (
            <li
              className="text-[1.2em] p-[.5em] text-center text-white hover:bg-[#66FCF1] hover:text-black duration-500 cursor-pointer"
              key={types}
              //  To set type of opportunity to render
              onClick={() => setType(types)}
            >
              {types}
            </li>
          ))}
        </ul>
      </nav>
      <div className="mb-8"></div>
      <CardComponent
        type={type}
        apprenticeshipsData={apprenticeshipsData}
        internshipsData={internshipsData}
      />
    </>
  );
}

export default LowerNavbar;
