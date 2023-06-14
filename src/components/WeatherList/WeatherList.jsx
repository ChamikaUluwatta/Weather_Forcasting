import React, { useEffect, useState } from "react";
import WeatherCard from "./WeatherCard";
import fetchColomboWeather from "../../services/weatherServices";
import getWeatherDescription from "../../services/getWeatherDescription";
import LocationInput from "../LocationInput/LocationInput";
const WeatherList = () => {
  const [daily, setDaily] = useState(null);
  const [timezone, setTimezone] = useState(null);
  const [days, setDays] = useState(3);
  const [buttonname, setButtonname] = useState("ViewMore");
  const [Latitude, setLatitude] = useState(6.94);
  const [Longitude, setLongitude] = useState(79.85);

  useEffect(() => {
    const fetchWeather = async () => {
      const data = await fetchColomboWeather(days,Latitude,Longitude);
      setDaily(data.daily);
      setTimezone(data.timezone);
    };

    fetchWeather();
  }, [days,Latitude,Longitude]);

  const handleDaysChange = (e) => {
    days === 3 ? setDays(7) : setDays(3);
    days === 3 ? setButtonname("ViewLess") : setButtonname("ViewMore");
  };

  const handleLocationChange = (Latitude,Longitude) => {
    setLatitude(Latitude);
    setLongitude(Longitude);
    };

    const handlereset = () => {
        setLatitude(6.94);
        setLongitude(79.85);
    };


  if (!daily) {
    return <div className="">Loading...</div>;
  }

  return (
    <>
      <LocationInput onLocationChange={handleLocationChange} onreset={handlereset} />
      <div className="flex justify-evenly mt-10 flex-wrap">
        {daily.time.map((date, index) => (
          <WeatherCard
            key={date}
            time={date}
            timezone={timezone}
            weatherCode={getWeatherDescription(daily.weathercode[index])}
            temperatureMax={daily.temperature_2m_max[index]}
            temperatureMin={daily.temperature_2m_min[index]}
          />
        ))}
      </div>
      <div className="flex justify-center mt-10">
        <button
          onClick={handleDaysChange}
          className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center"
        >
          <span>{buttonname}</span>
        </button>
      </div>
    </>
  );
};

export default WeatherList;
