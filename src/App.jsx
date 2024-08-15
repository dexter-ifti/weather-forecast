import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import Card from './components/Card';
import InputBox from './components/InputBox';

function App() {
  const API_KEY = import.meta.env.VITE_API_KEY;
  const [temp_c, setTemp_c] = useState(0);
  const [feel_c, setFeel_c] = useState(0);
  const [location, setLocation] = useState({});
  const [city, setCity] = useState('Lucknow');
  const [wind_kph, setWind_kph] = useState(0);
  const [humidity, setHumidity] = useState(0);
  const [forecast, setForecast] = useState([]);

  useEffect(() => {
    axios.get(`https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}&aqi=no`)
      .then((response) => {
        setTemp_c(response.data.current.temp_c);
        setFeel_c(response.data.current.feelslike_c);
        setLocation(response.data.location);
        setWind_kph(response.data.current.wind_kph);
        setHumidity(response.data.current.humidity);
      });
  }, [API_KEY, city]);

  useEffect(() => {
    axios.get(`https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${city}&days=5&aqi=no&alerts=no`)
      .then((response) => {
        setForecast(response.data.forecast.forecastday);
      });
  }, [API_KEY, city]);

  return (
    <>
      <header className="header">
        <p className='company-name'>WEATHER DASHBOARD</p>
      </header>
      <div className="container">
        <InputBox onClick={(value) => setCity(value)} />
        <div className="weather-info">
          <h1>Current Weather in {city}</h1>
          <div className="weather-details">
            <div>
              <h2>Temperature</h2>
              <p>{temp_c}°C</p>
            </div>
            <div>
              <h2>Feels Like</h2>
              <p>{feel_c}°C</p>
            </div>
            <div>
              <h2>Wind</h2>
              <p>{wind_kph} km/h</p>
            </div>
            <div>
              <h2>Humidity</h2>
              <p>{humidity}%</p>
            </div>
          </div>
        </div>
        <div className="card-container">
          {forecast.map((day, index) => (
            <Card key={index} obj={day} location={city} />
          ))}
        </div>

      </div>
    </>
  );
}

export default App;
