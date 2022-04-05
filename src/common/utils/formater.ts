import moment from 'moment';
import { IWeatherForecast } from '../types/weather';

export const formatTemperature = (temperature: string | number) => {
  // format temp to number
  temperature = Number(temperature);

  const roundTemperature = Math.round(temperature);
  return `${roundTemperature > 0 ? `+${roundTemperature}` : roundTemperature}°`;
};

export const filterHours = (forecast: IWeatherForecast[], day: number = 0) => {
  let hours = forecast[day].hour.filter(({ time }) => moment().add(-1, 'hour').isBefore(moment(time), 'hour'));

  // add hours from next days
  if (forecast.length !== day + 1) {
    hours = hours.concat(forecast[day + 1].hour.filter(({ time }) => moment().add(1, 'day').isAfter(moment(time), 'hour')));
  }
  return hours;
};
