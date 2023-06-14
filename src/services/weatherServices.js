const fetchColomboWeather  = async (days,latitude,longitude) => {
  console.log(days,latitude,longitude)
  try {
    const response = await fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&daily=weathercode,temperature_2m_max,temperature_2m_min&forecast_days=${days}&timezone=auto`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export default fetchColomboWeather;
