import "./App.css";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from "./components/About";
import Features from "./components/Features";
import Footer from "./components/Footer/Footer";
import NavBar from "./components/NavBar";
import Contact from "./components/Contact";
import Home from "./components/Home";
import React from "react";
// import { removeOutdatedData } from './dataUpdater';

function App() {
  // removeOutdatedData();
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/features" element={<Features />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
