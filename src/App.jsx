import "./App.css";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from "./components/About";
import Features from "./components/Features";
import Footer from "./components/Footer/Footer";
import NavBar from "./components/NavBar";
import Contact from "./components/Contact";
import Home from "./components/Home";
import React, { useEffect, useState } from "react";
import BounceLoader from "react-spinners/BounceLoader";

function App() {
  const [loading, setLoading]= useState(false);
  useEffect(()=>{
    setLoading(true);
    setTimeout(()=>{
      setLoading(false);
    },3000);
  },[]);
  return (
    <>
      <BrowserRouter>
        <NavBar />
        {
        loading ?
        <div className="loader">
          <BounceLoader 
          color={"#33D1C7"}
          loading={loading}
          size={90}
      />
        </div>
        :
        <>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/features" element={<Features />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
        </>
        }
      </BrowserRouter>
    </>
  );
}

export default App;