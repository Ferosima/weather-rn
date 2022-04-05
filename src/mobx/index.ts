// import { appStore, AppStore } from './appStore';
import { weatherStore, WeatherStore } from "./weatherStore";

export interface IMainStore {
    // appStore: AppStore,
    weatherStore: WeatherStore,
}

const mainStore: IMainStore = {
    // appStore: appStore,
    weatherStore: weatherStore,
}

export enum STORES {
    // APP_STORE = 'appStore',
    USER_STORE = 'weatherStore'
}

export default mainStore;