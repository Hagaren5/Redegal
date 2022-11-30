import React from 'react';
import './App.css';
import { Route, Routes } from "react-router-dom";

import PhoneDetails from './pages/PhoneDetails'
import HomeScreen from './pages/HomeScreen'

function App() {
  return (
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route exact path="/:phoneId" element={<PhoneDetails />} />
      </Routes>
  );
}

export default App;
 