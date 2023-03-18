import React from 'react';
import CardComponent from './components/CardComponent';
import NavBar from './components/NavBar';
import internshipsData from '../internshipsData';
import Carousels from './components/Carousels';

function App() {
  return (
    <>
      <NavBar />
      <Carousels />
      <CardComponent internshipsData={internshipsData} />
      {/* skjhguewhg */}
    </>
  );
}

export default App;
