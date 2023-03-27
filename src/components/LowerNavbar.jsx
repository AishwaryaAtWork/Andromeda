import React, { useState } from 'react'
import CardComponent from './CardComponent';
import internshipsData from "../Data/internshipsData";
import apprenticeshipsData from "../Data/apprenticeshipsData";

function LowerNavbar(props) {
    const { opportunityType } = props.opportunityTypeData;
    const [type,setType]=useState('Internships');
  return (
    <>
    {/* Navbar below slider  */}
    <nav id="opportunity" className='bg-blue-500 shadow-lg shadow-blue-700 border-b-2 border-b-white md:flex md:items-center md:justify-between'>
        <ul className='md:flex md:items-center '>
            {/* Reanders as much as number of types available in list */}
            {opportunityType.map((types)=>(
                <li className='text-xl p-3 text-center text-white hover:bg-blue-800 
                duration-500 cursor-pointer'
                 key={types}
                //  To set type of opportunity to render
                 onClick={()=>setType(types)}>{types}</li>
            ))}
        </ul>
    </nav>
    <CardComponent type={type} apprenticeshipsData={apprenticeshipsData} internshipsData={internshipsData}/>
    </>
  )
}

export default LowerNavbar;
