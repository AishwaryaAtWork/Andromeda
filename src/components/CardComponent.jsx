import React from "react";
import Card from "./Card";

export default function CardComponent(props) {
  const { apprenticeships } = props.apprenticeshipsData;
  const { internships } = props.internshipsData;
  const opportunityType = props.type.toLowerCase() === 'apprenticeships' ? apprenticeships : internships;

  return (
    <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 justify-items-center'>
      {opportunityType.map(opportunity => (
        <Card i={opportunity} key={opportunity.id} />
      ))}
    </div>
  );
}
