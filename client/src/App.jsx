import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    // This calls your backend API
    axios.get('http://localhost:5000/api/weather?city=Manila')
      .then(response => {
        setWeather(response.data);
      })
      .catch(error => {
        console.error("Error fetching weather:", error);
      });
  }, []);

  return (
    <div className="App">
      <h1>Weather Dashboard</h1>
      {weather ? (
        <div>
          <h2>{weather.name}</h2>
          <p>Temperature: {weather.main.temp}°C</p>
          <p>Condition: {weather.weather[0].description}</p>
        </div>
      ) : (
        <p>Loading weather data...</p>
      )}
    </div>
  );
}

export default App;