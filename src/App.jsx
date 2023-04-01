import React, { useEffect, useState } from "react";
import NavBar from "./components/NavBar";
import sliderImagesData from "./constants/sliderImagesData";
import opportunityTypeData from "./constants/opportunityTypeData";
import Carousels from "./components/Carousels";
import LowerNavbar from "./components/LowerNavbar";
import BounceLoader from "react-spinners/BounceLoader";
import Footer from "./components/Footer/Footer";
import "./App.css";
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);

  return (
    <>
      <BrowserRouter>
        <NavBar />
        {loading ? (
          <div className="loader">
            <BounceLoader color={"#3b82f6"} loading={loading} size={90} />
          </div>
        ) : (
          <>
            <Routes>
              <Route path="/" element={<Carousels sliderImagesData={sliderImagesData} />} />
              <Route path="/opportunities" element={<LowerNavbar opportunityTypeData={opportunityTypeData} />} />
              <Route path="/footer" element={<Footer />} />
            </Routes>
          </>
        )}
      </BrowserRouter>
    </>
  );
}

export default App;
