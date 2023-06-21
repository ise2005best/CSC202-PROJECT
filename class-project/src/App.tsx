import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Create from './components/createPatientData';
import ThankYou from './components/thankYou';
import Read from './components/read';
import Update from './components/updateStudent';
import ThankYouForDelete from './components/updateThankYou';
import './App.css';

const App = () => {
  return (
    <div className="main">
      <BrowserRouter basename='/'>
        
        <Routes>
          <Route path="/" element={<Create />} />
          <Route path="/thanksForUsingOurData" element={<ThankYou />} />
          <Route path="/records/:id" element={<Read />} />
          <Route path="/update/:id" element={<Update />} />
          <Route path="/thankYouPage" element={<ThankYouForDelete />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
