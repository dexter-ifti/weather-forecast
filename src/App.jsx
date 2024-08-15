import './App.css'
import { useState, useEffect } from 'react';
import axios from 'axios';
import InputBox from './components/InputBox';
import Card from './components/Card';

function App() {
  const API_KEY = import.meta.env.VITE_API_KEY;
  const [temp_c, setTemp_c] = useState(0);
  const [feel_c, setFeel_c] = useState(0);
  const [location, setLocation] = useState({});
  const [city, setCity] = useState('Lucknow');
  const [wind_kph, setWind_kph] = useState(0);
  const [humidity, setHumidity] = useState(0);
  const [first, setFirst] = useState([]);
  const [second, setSecond] = useState([]);
  const [third, setThird] = useState([]);
  const [fourth, setFourth] = useState([]);
  const [fifth, setFifth] = useState([]);


  useEffect( () => {
    axios.get(`https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}&aqi=no`)
    .then((response) => {
      setTemp_c(response.data.current.temp_c);
      setFeel_c(response.data.current.feelslike_c);
      setLocation(response.data.location);
      setCity(response.data.city.name);
      setWind_kph(response.data.current.wind_kph);
      setHumidity(response.data.current.humidity);
    });
  },[city])

  useEffect(() => {
    axios.get(`https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${city}&days=5&aqi=no&alerts=no`)
    .then((responce) => {
      setFirst(responce.data.forecast.forecastday[0]);
      setSecond(responce.data.forecast.forecastday[1]);
      setThird(responce.data.forecast.forecastday[2]);
      setFourth(responce.data.forecast.forecastday[3]);
      setFifth(responce.data.forecast.forecastday[4]);
    })
  } , [city])
  return (
    <>
      <h1 className='text-5xl text-black m-5 font-extrabold border-4 border-green-400'>WEATHER DASHBOARD</h1>
      <InputBox onClick={(value) => setCity(value)} />
      <div className='flex flex-col justify-center items-center m-5 border-4 border-red-400'>
      <h1 className='text-xl bg-orange-600 text-green-700 w-50'>TEMP: {temp_c}&deg;C</h1>
      <h1 className='text-xl text-rose-600 w-50'>Feels Like : {feel_c}&deg;c</h1>
      <h1 className='text-xl bg-green-800 text-white w-50'>PLACE : {city}</h1>
      <h1 className='text-xl bg-blue-800 text-white w-50'>REGION : {location.region}</h1>
      <h1 className='text-xl bg-yellow-800 text-white w-50'>Time : {location.localtime}</h1>
      <h1 className='text-xl bg-yellow-300 text-red-600 w-50'>WIND : {wind_kph} km/h</h1>
      <h1 className='text-xl bg-blue-300 text-blue-800 w-50'>HUMIDITY : {humidity}%</h1>
      </div>
      <div className='flex flex-wrap gap-4 m-5 justify-around border-4 border-blue-400'>
        <h1>{}</h1>
        <Card obj={first}  location={city}/>
        <Card obj={second} location={city}/>
        <Card obj={third}  location={city}/>
        <Card obj={fourth} location={city}/>
        <Card obj={fifth}  location={city}/>
      </div>
    </>
  )
}

export default App
