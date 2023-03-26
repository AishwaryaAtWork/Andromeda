import React from "react";
import Card from "./Card";

export default function CardComponent(props) {
  

  // console.log(type.toLowerCase());
  // const DataString= type.toLowerCase()+'TypeData';
  // console.log(DataString);

  const { internships } = props.internshipsData;
  return (
    <>
      {/* Card container div  */}
      <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 justify-items-center'>
        <Card internships={internships}/>
      </div>
    </>
  );
}
