import React from "react";
import Card from "./Card";

export default function CardComponent(props) {
  const { apprenticeships } = props.apprenticeshipsData;
  const { internships } = props.internshipsData;
  console.log(props.type)

  // To decide opportunity on lower navbar click
  const OpportunityType = props.type.toLowerCase()==="Apprenticeships" ? apprenticeships : internships;

  return (
    <>
      {/* Card container div  */}
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 justify-items-center">
        {OpportunityType.map((t) => (
          <Card t={t} key={t.id} />
      
        ))}
      </div>
    </>
  );
}
