import React, { useEffect, useState } from "react";
import NavBar from "./components/NavBar";
import sliderImagesData from "./constants/sliderImagesData";
import opportunityTypeData from "./constants/opportunityTypeData";
import Carousels from "./components/Carousels";
import LowerNavbar from "./components/LowerNavbar";
import BounceLoader from "react-spinners/BounceLoader";
import './App.css';

function App() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);
  return (
    <>
      {
        loading ?
          <div className="loader">
            <BounceLoader color={"#3b82f6"} loading={loading} size={90} />
          </div>
          :
          <>
            <NavBar />
            <Carousels sliderImagesData={sliderImagesData} />
            <LowerNavbar opportunityTypeData={opportunityTypeData} />
          </>
      }
    </>
  );
}

export default App;
