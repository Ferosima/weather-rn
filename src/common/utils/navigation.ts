import { SCREENS } from '@constants/screens';
import { appStore } from '@mobx/appStore';
import { createNavigationContainerRef } from '@react-navigation/native';

// export const navigationRef = createNavigationContainerRef();

class Navigation {
  ref = createNavigationContainerRef();

  navigate = (name: keyof SCREENS, params) => {
    if (this.ref.isReady()) {
      this.ref.navigate(name, params);
      appStore.setCurrentScreen(name);
    }
  };

  getCurrentRoute = () => {
    if (this.ref.isReady()) {
      this.ref.getCurrentRoute();
    }
  };
}
export const navigation = new Navigation();
