import React from "react";
import Card from "./Card";

export default function CardComponent(props) {
  const { apprenticeships } = props.apprenticeshipsData;
  const { internships } = props.internshipsData;
  const { studentOfferings } = props.studentOfferingsData;
  const { scholarships } = props.scholarshipsData;
  const { fellowships } = props.fellowshipsData;
  
  // To decide opportunity on lower navbar click
  var OpportunityType;
  switch (props.type.toLowerCase()) {
    case "internships":
      OpportunityType=internships;
      break;
    case "apprenticeships":
      OpportunityType=apprenticeships;
      break;
    case "fellowships":
       OpportunityType=fellowships;
      break;
    case "scholarships":
      OpportunityType=scholarships;
      break;
    case "student offerings":
      OpportunityType=studentOfferings;
      break;
    default:
      OpportunityType=internships;
  }

  return (
    <>
      {/* Card container div  */}
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 justify-items-center m-3">
        {OpportunityType.map((t) => (
          <Card t={t} key={t.id} />
      
        ))}
      </div>
    </>
  );
}
