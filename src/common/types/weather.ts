export interface IWeather {
  current: IWeatherCurrent;
  forecast: {
    forecastday: IWeatherForecast[];
  };
  location: IWeatherLocation;
}

export interface IWeatherCurrent {
  temp_c: string;
  feelslike_c: string;
  condition: ICondition;
  wind_kph: string;
  is_day: boolean;
  gust_kph: string;
  wind_dir: string;
  humidity: string;
  pressure_mb: string;
}

export interface IWeatherLocation {
  name: string;
  localtime: string;
}

interface ICondition {
  text: string;
  icon: string;
  code: number;
}
export interface IWeatherForecast {
  date: string;
  day: IWeatherDay;
  hour: IWeatherHour[];
}

export interface IWeatherDay {
  maxtemp_c: string;
  mintemp_c: string;
  condition: ICondition;
}

export interface IWeatherHour {
  time_epoch: string;
  time: string;
  temp_c: string;
  feelslike_c: string;
  condition: ICondition;
  wind_kph: string;
  is_day: boolean;
  gust_kph: string;
  wind_dir: string;
  humidity: string;
  pressure_mb: string;
}
