import React from "react";
import CardComponent from "./components/CardComponent";
import NavBar from "./components/NavBar";
import internshipsData from "../internshipsData";
import sliderImagesData from "./constants/sliderImagesData"
import Carousels from "./components/Carousels";

function App() {
  return (
    <>
      <NavBar />
      <Carousels sliderImagesData={sliderImagesData}/>
      <CardComponent internshipsData={internshipsData} />
    </>
  );
}

export default App;
