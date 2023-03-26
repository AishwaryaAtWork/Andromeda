import React, { useState } from 'react'

function LowerNavbar(props) {
    const { opportunityType } = props.opportunityTypeData;
    const [type,setType]=useState('Internships');
    const oppoType=(types)=>{
      setType(types);
      console.log(type);
    };
  return (
    <>
    {/* Navbar below slider  */}
    <nav id="opportunity" className='bg-blue-500 shadow-lg shadow-blue-300 md:flex md:items-center md:justify-between'>
        <ul className='md:flex md:items-center '>
            {/* Reanders as much as number of types available in list */}
            {opportunityType.map((types)=>(
                <li className='text-xl px-3 py-2 text-center text-white hover:bg-blue-800 
                duration-500 cursor-pointer'
                 key={types}
                 onClick={()=>oppoType(types)}>{types}</li>
            ))}
        </ul>
    </nav>
    </>
  )
}

export default LowerNavbar;
