import React from "react";
import CardComponent from "./components/CardComponent";
import NavBar from "./components/NavBar";
import internshipsData from "../internshipsData";
import Carousels from "./components/Carousels";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <NavBar />
      <Carousels />
      <CardComponent internshipsData={internshipsData} />
      <Footer/>
    </>
  );
}

export default App;
