import React from "react";
import Card from "./Card";

export default function CardComponent(props) {
  const { apprenticeships } = props.apprenticeshipsData;
  const { internships } = props.internshipsData;
  
  // To decide opportunity on lower navbar click
  if(props.type.toLowerCase() === 'internships'){
    var OpportunityType = internships;
  }
  else if(props.type.toLowerCase() === 'apprenticeships'){
    var OpportunityType = apprenticeships;
  }
  else{
    var OpportunityType = internships;
  }
  return (
    <>
      <div className="container mx-auto py-7 px-2">
          {/* Card container div  */}
          <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center'>
            {OpportunityType.map((i)=>(
              <Card i={i} key={i.id}/>
          ))}
        </div>
      </div>
    </>
  );
}
