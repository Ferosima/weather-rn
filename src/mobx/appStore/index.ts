import { SCREENS } from '@constants/screens';
import { themes } from '@themes/';
import { Languages } from '@types/language';
import { BottomTabParamList } from '@types/navigators';
import { action, observable } from 'mobx';
import { persist } from 'mobx-persist';
import moment from 'moment';

export class AppStore {
  @observable public screen: keyof BottomTabParamList | null = SCREENS.WEATHER;
  @persist('object') @observable public scheme: keyof themes = 'light';
  @persist @observable public language: Languages = Languages.ENGLISH;

  get theme() {
    return themes[this.scheme];
  }

  /**
   * Which is the current screen
   *
   * @param {keyof BottomTabParamList} screen
   * @memberof AppStore
   */
  @action public setCurrentScreen = (screen: keyof BottomTabParamList) => {
    this.screen = screen;
  };

  /**
   * Change theme scheme
   *
   * @memberof AppStore
   */
  @action public setThemeScheme = (scheme: keyof themes) => {
    this.scheme = scheme;
  };

  /**
   * Change theme scheme
   *
   * @memberof AppStore
   */
  @action public setLanguage = (language: Languages) => {
    this.language = language;
    moment.locale(language);
  };

  async afterHydration() {
    moment.locale(this.language);
  }
}

export const appStore = new AppStore();
