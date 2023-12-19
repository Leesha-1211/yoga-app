// App.js
import React, { useState } from "react";
import AdmissionForm from "./AdmissionForm";
import "./app.css";

function App() {
  return (
    <div className="App">
      <div className="background">
        <p className="para">
          Yoga is more than a series of postures; it's a holistic philosophy
          that invites individuals to embark on a transformative journey inward.
        </p>
        <AdmissionForm />
      </div>
    </div>
  );
}

export default App;
