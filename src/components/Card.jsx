import './Card.css';
// import React from 'react';

function Card({ obj, location }) {
  if (!obj) {
    return <div className="card">No Data Found</div>;
  }

  return (
    <div className="card">
      <div className="card-header">
        <div className="card-date">{obj.date}</div>
        <div className="card-location">{location}</div>
      </div>
      <div className="card-body">
        <div className="card-icon">
          <svg height="20" width="20" viewBox="0 0 32 32" className="weather-icon">
            <path d="M21.743,18.6872A6.05,6.05,0,0,0,22.8,17.6006a5.9977,5.9977,0,1,0-10.7334-4.4444,7.5568,7.5568,0,0,0-5.7158,5.0879A5.9926,5.9926,0,0,0,8,30H19a5.9854,5.9854,0,0,0,2.743-11.3128ZM18,10a4.0042,4.0042,0,0,1,4,4,3.9613,3.9613,0,0,1-.8,2.3994,4.0122,4.0122,0,0,1-.94.8917,7.5416,7.5416,0,0,0-6.1339-4.2395A3.9985,3.9985,0,0,1,18,10Zm1,18H8a3.9928,3.9928,0,0,1-.6729-7.93L7.99,19.958l.1456-.6562a5.4958,5.4958,0,0,1,10.729,0l.1464.6562.6622.1123A3.9928,3.9928,0,0,1,19,28Z" transform="translate(0 .005)"></path>
            <path d="M26 13.005H30V15.005H26z"></path>
            <path d="M23.071 5.929H27.071V7.929H23.071z" transform="rotate(-45 25.077 6.931)"></path>
            <path d="M17 2.005H19V6.005H17z"></path>
            <path d="M9.929 4.929H11.929V8.929H9.929z" transform="rotate(-45 10.935 6.931)"></path>
          </svg>
        </div>
        <h2>Max Temp: {obj.day.maxtemp_c}°C</h2>
        <h2>Min Temp: {obj.day.mintemp_c}°C</h2>
        <p>Max Wind: {obj.day.maxwind_kph} km/h</p>
        <p>Avg Humidity: {obj.day.avghumidity}%</p>
      </div>
    </div>
  );
}

export default Card;
