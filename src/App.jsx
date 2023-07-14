// Import necessary modules
import React, { useEffect, useState } from "react";
import "./App.css";

// Define the main component
function App() {
  // Define state variables
  const [color, setColor] = useState('');
  const handleChangeColor = async () => {
    try {
      const response = await fetch('https://cors-anywhere.herokuapp.com/http://www.colr.org/json/color/random');
      if (response.ok) {
        const data = await response.json();
        setColor(data.colors[0].hex);
      } else {
        console.error('error fetching color', response.status);
      }
    } catch (error) {
      console.log(error);
    }
  };

  // Render the component
  return (
    <div className="App" >
      <header className="App-header" >
        <img src="/logo.svg" className="App-logo" alt="logo" />
        <button onClick={handleChangeColor}>Change color</button>
        <div style={{ backgroundColor: `#${color}`}}>
          <h1>Random Color</h1>
          <p>Color code: {color}</p>
        </div>
      </header>
    </div>
  );
}

export default App;
