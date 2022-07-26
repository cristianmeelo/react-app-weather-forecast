import React from "react";
import axios from "axios";

function App() {
  //const url = `https://api.openweathermap.org/data/2.5/weather?q=dallas&appid=8d7f7858c75533e0b4bb7b33050a16c9`

  return (
    <div className="app">
      <div className="container">
        <div className="top">
          <div className="location">
            <p>Dallas</p>
          </div>
          <div className="temp">
            <h1>60°C</h1>
          </div>
          <div className="description"></div>
        </div>
        <div className="bottom">
          <div className="feels">
            <p>65°F</p>
          </div>
          <div className="humidity">
            <p>20%</p>
          </div>
          <div className="wind">12 MPH</div>
        </div>
      </div>
    </div>
  );
}

export default App;
