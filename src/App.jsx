import React from "react";
import BMICalculator from "./bmi_cal.jsx";

export default function App() {
  return (
    <div style={{fontFamily: "sans-serif", padding: 24, maxWidth: 600, margin: "auto"}}>
      <h1>Simple BMI Calculator</h1>
      <BMICalculator />
    </div>
  );
}
