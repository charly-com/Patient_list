import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PatientList from "./components/PatientList";
import Patient from "./components/Patient";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PatientList />} />
        <Route path="/patient/:id" element={<Patient />} />
      </Routes>
    </Router>
  );
}

export default App;
