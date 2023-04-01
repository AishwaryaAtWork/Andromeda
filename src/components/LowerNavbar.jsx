import React, { useState } from "react";
import CardComponent from "./CardComponent";
import internshipsData from "../Data/internshipsData";
import apprenticeshipsData from "../Data/apprenticeshipsData";
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function LowerNavbar(props) {
  const { opportunityType } = props.opportunityTypeData;
  const [type, setType] = useState("Internships");
  return (
    <>
      <BrowserRouter>
      
        <nav
          id="opportunity"
          className="bg-[#3c4857] border-b-2 border-b-white
            md:flex md:items-center md:justify-between"
        >
          <ul className="md:flex md:items-center ">
            {opportunityType.map((types) => (
              <li
                className="text-xl p-3 text-center text-white hover:bg-[#66FCF1] hover:text-black duration-500 cursor-pointer"
                key={types}
                onClick={() => setType(types)}
              >
                {types}
              </li>
            ))}
          </ul>
        </nav>
        <CardComponent
          type={type}
          apprenticeshipsData={apprenticeshipsData}
          internshipsData={internshipsData}
        />
      </BrowserRouter>
    </>
  );
}

export default LowerNavbar;
