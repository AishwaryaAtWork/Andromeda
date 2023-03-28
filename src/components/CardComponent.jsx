import React from "react";
import Card from "./Card";

export default function CardComponent(props) {
  const { apprenticeships } = props.apprenticeshipsData;
  const { internships } = props.internshipsData;
  const opportunityType = props.type.toLowerCase() === 'apprenticeships' ? apprenticeships : internships;

  return (
    <>
      <div className="container my-8 md:mx-auto px-3">
        {/* Card container div  */}
      <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center'>
        {opportunityType.map((t) => (
          <Card t={t} key={t.id} />
        ))}
      </div>
      </div>
    </>
  );
}
