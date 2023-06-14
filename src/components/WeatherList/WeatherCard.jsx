const WeatherCard = (props) => {
  return (
    <div className="flex flex-col items-center p-8 mt-10 ml-1 mr-1 rounded-md w-100 sm:px-12 dark:bg-gray-900 dark:text-gray-100">
      <div className="text-center py-1">
        <h2 className="text-xl font-semibold">{props.timezone}</h2>
        <p className="text-sm dark:text-gray-400">{props.time}</p>
      </div>
      
      <div className="mb-2 text-3xl font-semibold py-2">
        {props.temperatureMax}°
        <span className="mx-1 font-normal">/</span>{props.temperatureMin}
        <span className="text-xs"> °C Max/min</span>
      </div>
      <p className="dark:text-gray-400 py-1">{props.weatherCode}</p>
    </div>
  );
};

export default WeatherCard;
