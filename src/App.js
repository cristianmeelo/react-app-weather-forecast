import React, { useState } from "react";
import axios from "axios";
import './index.css'

function App() {
  const [data, SetData] = useState({})
  const [location, SetLocation] = useState('')

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=8d7f7858c75533e0b4bb7b33050a16c9`

  const searchLocation = (event) => {
    if (event.key === 'Enter') {
      axios.get(url).then((response) => {
        SetData(response.data)
        console.log(response.data)
      })
      SetLocation('');
    }
  }

  return (
    <div className="app">
      <div className="search">
        <input
          value={location}
          onChange={event => SetLocation(event.target.value)}
          onKeyPress={searchLocation}
          placeholder='Enter location'
          type="text"
        />

      </div>
      <div className="container">
        <div className="top">
          <div className="location">
            <p>{data.name}</p>
          </div>
          <div className="temp">
            {data.main ? <h1>{data.main.temp.toFixed()}°C</h1> : null}
          </div>
          <div className="description">
            {data.weather ? <p>{data.weather[0].main}</p> : null}
          </div>
        </div>

        {data.name !== undefined &&
          <div className="bottom">
            <div className="feels">
              {data.main ? <p className="bold">{data.main.feels_like.toFixed()}°C</p> : null}
              <p>Feels like</p>
            </div>
            <div className="humidity">
              {data.main ? <p className="bold">{data.main.humidity}%</p> : null}
              <p>Humidity</p>
            </div>
            <div className="wind">
              {data.main ? <p className="bold">{data.wind.speed}</p> : null}
              <p>Wind Speed</p>
            </div>
          </div>
        }


      </div>
    </div>
  );
}

export default App;
