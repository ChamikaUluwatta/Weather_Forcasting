const getWeatherDescription = (weatherCode) => {
    switch (weatherCode) {
      case 0:
        return "Clear sky";
      case 1:
      case 2:
      case 3:
        return "partly cloudy";
      case 45:
      case 48:
        return "Fog";
      case 51:
      case 53:
      case 55:
        return "moderate";
      case 56:
      case 57:
        return "Freezing Drizzle";
      case 61:
      case 63:
      case 65:
        return "Rain: Slight";
      case 66:
      case 67:
        return "Freezing Rain";
      case 71:
      case 73:
      case 75:
        return "Snowfall: Slight";
      case 77:
        return "Snow grains";
      case 80:
      case 81:
      case 82:
        return "Rain showers";
      case 85:
      case 86:
        return "Snow showers: Slight and heavy";
      case 95:
        return "Thunderstorm: Slight or moderate";
      case 96:
      case 99:
        return "Thunderstorm with slight";
      default:
        return "Unknown";
    }
  };

  export default getWeatherDescription;