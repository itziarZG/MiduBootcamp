import React, { useEffect, useState } from "react";
import axios from "axios";

const api_key = process.env.REACT_APP_API_KEY;

const Weather = ({ name }) => {
  const [weather, setWeather] = useState([]);

  useEffect(() => {
    const URL = `http://api.weatherstack.com/current?access_key=${api_key}&query=${name}`;
    axios.get(URL).then((resp) =>
      setWeather({
        temp: resp.data.current.temperature,
        icon: resp.data.current.weather_icons,
        wind: resp.data.current.wind_speed,
        wind_dir: resp.data.current.wind_dir,
      })
    );
  }, []);

  return (
    <>
      <h4>Weather in {name}</h4>
      <p>
        <strong>temperature: </strong>
        {weather.temp}
      </p>
      <img src={weather.icon}></img>
      <p>
        <strong>wind: </strong>
        {weather.wind} mph direction {weather.wind_dir}
      </p>
    </>
  );
};
export default Weather;
