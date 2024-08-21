import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Dashboard } from "./components/principales/Dashboard";
import { PersonaNew } from './components/principales/PersonaNew';
import { PersonaList } from './components/principales/PersonaList';




function App() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      {/* El primero es para la página a penas de va abri */}
      <Route path="/personalist" element={<PersonaList />} />
      <Route path="/persona" element={<PersonaNew />} />
      <Route path="/dashboard" element={<Dashboard />} />
     
    </Routes>
  );
}

export default App;
