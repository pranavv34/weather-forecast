
// App.js
import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './components/Home'; // Import the Home component


function App() {
  const user = localStorage.getItem('token');

  return (
    <Routes>
 

    <Route path="/" element={<Home />} />

    </Routes>
  );
}

export default App;
