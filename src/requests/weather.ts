import { api_key } from "@src/common/constants";
import { IResponse } from "@src/common/types";
import axios from "axios";
import { IWeather } from "../common/types/weather";

export const fetchWeather = async (
  city: string
): Promise<IResponse<IWeather>> => {
  return await axios.get(
    `https://api.weatherapi.com/v1/forecast.json?key=${api_key}&q=${city}&days=7&aqi=no&alerts=no`
  );
};
