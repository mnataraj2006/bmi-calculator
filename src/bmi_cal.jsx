import React, { useState } from "react";

export default function BMICalculator(){
  const [weight, setWeight] = useState(""); 
  const [height, setHeight] = useState(""); 
  const [result, setResult] = useState(null);

  function calcBMI(e){
    e.preventDefault();
    const w = parseFloat(weight);
    const h = parseFloat(height) / 100;
    if(!(w > 0 && h > 0)){
      setResult({ error: "Enter valid positive numbers" });
      return;
    }
    const bmi = w / (h * h);
    const rounded = Math.round(bmi * 10) / 10;
    let category = "";
    if (bmi < 18.5) category = "Underweight";
    else if (bmi < 25) category = "Normal weight";
    else if (bmi < 30) category = "Overweight";
    else category = "Obesity";

    setResult({ bmi: rounded, category });
  }

  return (
    <form onSubmit={calcBMI} style={{display:"grid",gap:12}}>
      <label>
        Weight (kg)
        <input type="number" step="0.1" value={weight} onChange={e=>setWeight(e.target.value)} />
      </label>
      <label>
        Height (cm)
        <input type="number" step="0.1" value={height} onChange={e=>setHeight(e.target.value)} />
      </label>
      <button type="submit">Calculate BMI</button>
    
      {result && result.error && <div style={{color:"red"}}>{result.error}</div>}
      {result && result.bmi && (
        <div>
          <strong>BMI: {result.bmi}</strong>
          <div>Category: {result.category}</div>
        </div>
      )}
    </form>
  );
}
