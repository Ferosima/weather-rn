import { IResponse } from '@types';
import { delay } from '@utils/index';
import { filterHours } from '@utils/formater';
import { action, observable } from 'mobx';
import { create, persist } from 'mobx-persist';
import moment from 'moment';
import { ICity, IWeather, IWeatherCurrent, IWeatherForecast, IWeatherLocation } from '../../common/types/weather';
import { fetchCity, fetchWeather } from '../../requests/weather';
import { appStore } from '@mobx/appStore';
import { navigation } from '@utils/navigation';
import { SCREENS } from '@constants/screens';

export class WeatherStore {
  @observable public forecast: IWeatherForecast[] | null = null;
  @observable public cities: ICity[] | null = null;

  @persist('object') @observable public location: IWeatherLocation | null = null;
  @persist @observable public city: string = 'Kiev';

  // Selected index
  @observable public selected_day: number = 0;
  @observable public selected_hour: number = 0;

  @observable last_update: Date | null = null;

  @observable public loading: boolean = true;
  @observable public error: string | null = null;

  get day() {
    return this.forecast[this.selected_day];
  }
  get hours() {
    return filterHours(this.forecast, this.selected_day);
  }
  get hour() {
    return this.hours[this.selected_hour];
  }

  @action public fetchWeather = async () => {
    try {
      console.log('FETCH WEATHER');
      this.clearError();
      const response: IResponse<IWeather> = await fetchWeather(this.city, appStore.language);
      this.forecast = response.data.forecast.forecastday;
      this.location = { ...response.data.location };
      this.loading = false;
      this.last_update = new Date();
    } catch (error) {
      console.log('FETCH WEATHER ERROR', { error });
      if (!error?.response) {
        this.error = 'Network error';
      } else {
        this.error = error.response;
      }
      this.forecast = null;
      this.loading = false;
    }
  };

  @action public fetchCity = async (city: string) => {
    try {
      console.log('FETCH CITY');
      const response: IResponse<ICity> = await fetchCity(city);
      this.cities = response.data;
    } catch (error) {
      console.log('FETCH CITY ERROR', { error });
      if (!error?.response) {
        this.error = 'Network error';
        navigation.navigate(SCREENS.ERROR, { title: this.error, onClose: this.clearError });
      } else {
        this.error = error.response;
      }
      this.forecast = null;
      this.cities = null;
      this.loading = false;
    }
  };

  @action public selectCity = (city: string) => {
    this.city = city;
    this.fetchWeather();
  };

  @action public selectDay = (index: number, hour_index: number = 0) => {
    this.selected_day = index;
    this.selected_hour = hour_index;
  };

  @action public selectHour = (index: number) => {
    this.selected_hour = index;

    if (!moment(this.day.date).isSame(this.hours[index].time, 'day')) {
      const day_index = this.forecast.findIndex(day => moment(day.date).isSame(this.hours[index].time, 'day'));
      const hour_index = this.forecast[day_index].hour.findIndex(day => moment(day.time).isSame(this.hours[index].time, 'hour'));
      this.selectDay(day_index, hour_index);
    }
  };

  @action public clearCities = () => {
    this.cities = null;
  };

  @action public clearError = () => {
    this.error = null;
  };

  async afterHydration() {
    try {
      console.log('AFTER_HYDRATION WEATHER');
      await delay(1000);
      await this.fetchWeather();
      // Update ever hour
      setTimeout(() => setInterval(this.fetchWeather, 60 - moment().get('minutes')), 60 * 1000 * 1000);
    } catch (error) {
      console.log('AFTER_HYDRATION WEATHER ERROR', { error });
    }
  }
}

export const weatherStore = new WeatherStore();
