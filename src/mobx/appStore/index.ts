import { BottomTabParamList } from '@types/navigators';
import { observable } from 'mobx';
import { persist } from 'mobx-persist';

export class AppStore {
  @observable public screen: keyof BottomTabParamList | null = null;
  @persist('object') @observable public theme: 'dark' | 'light' | null = null;

  setCurrentScreen = (screen: keyof BottomTabParamList) => {
    this.screen = screen;
  };

  async afterHydration() {}
}

export const appStore = new AppStore();
