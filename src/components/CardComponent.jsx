import React from "react";
import Card from "./Card";

export default function CardComponent(props) {
  const { apprenticeships } = props.apprenticeshipsData;
  const { internships } = props.internshipsData;
  const opportunityType = props.type.toLowerCase() === 'apprenticeships' ? apprenticeships : internships;

  return (
    <>
      {/* Card container div  */}
      <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 justify-items-center'>
        {OpportunityType.map((i)=>(
          <Card i={i} key={i.id}/>
        ))}
      </div>
    </>
  );
}
