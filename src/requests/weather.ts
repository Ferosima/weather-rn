
import { api_key } from '@constants/';
import { IResponse } from '@types/';
import axios from 'axios';
import { IWeather } from '../common/types/weather';

export const fetchWeather = async (city: string): Promise<IResponse<IWeather>> => {
  return await axios.get(`https://api.weatherapi.com/v1/forecast.json?key=${api_key}&q=${city}&days=7&aqi=no&alerts=no`);
};
