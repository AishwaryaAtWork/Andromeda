import React from 'react'

function LowerNavbar(props) {
    const { opportunityType } = props.opportunityTypeData;
  return (
    <>
    <nav className='bg-blue-400 md:flex md:items-center md:justify-between'>
        <ul className='md:flex md:items-center '>
            {opportunityType.map((types)=>(
                <li className='text-xl px-3 py-2 text-white hover:bg-blue-800 duration-500 cursor-pointer'
                 key={types}>{types}</li>
            ))}
        </ul>
    </nav>
    </>
  )
}

export default LowerNavbar;
