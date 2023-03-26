import React from "react";
import CardComponent from "./components/CardComponent";
import NavBar from "./components/NavBar";
import internshipsData from "../internshipsData";
import sliderImagesData from "./constants/sliderImagesData";
import opportunityTypeData from "./constants/opportunityTypeData";
import Carousels from "./components/Carousels";
import LowerNavbar from "./components/LowerNavbar";
import Card from "./components/Card";

function App() {
  return (
    <>
      <NavBar />
      <Carousels sliderImagesData={sliderImagesData}/>
      <LowerNavbar opportunityTypeData={opportunityTypeData}/>
      <CardComponent internshipsData={internshipsData} />
      {/* <Card internshipsData={internshipsData}/> */}
    </>
  );
}

export default App;
