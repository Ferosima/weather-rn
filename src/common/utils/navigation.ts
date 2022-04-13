import { SCREENS } from '@constants/screens';
import { appStore } from '@mobx/appStore';
import { createNavigationContainerRef } from '@react-navigation/native';
const bottom_bar = [SCREENS.WEATHER, SCREENS.MENU, SCREENS.SEARCH];

class Navigation {
  ref = createNavigationContainerRef();

  navigate = (name: keyof SCREENS, params) => {
    if (this.ref.isReady()) {
      this.ref.navigate(name, params);
      // Set current only bottom bar screen
      if (bottom_bar.includes(name)) appStore.setCurrentScreen(name);
    }
  };

  getCurrentRoute = () => {
    if (this.ref.isReady()) {
      this.ref.getCurrentRoute();
    }
  };
}
export const navigation = new Navigation();
