import React from "react";
import patients from "../data";
import { Link } from "react-router-dom";

const PatientList = () => {
  return (
    <div>
      <h1>Patient List</h1>
      <ul>
        {patients.map((patient) => (
          <li key={patient.id}>
            <Link to={`/patient/${patient.id}`}>{patient.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PatientList;
