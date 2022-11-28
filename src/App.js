import React from 'react';
import './App.css';
import { Route, Routes, Navigate } from "react-router-dom";

import Header from './components/Header/Header'
import HomeScreen from './pages/HomeScreen'

function App() {
  return (
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        
      </Routes>
  );
}

export default App;
 