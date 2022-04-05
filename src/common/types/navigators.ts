import { SCREENS } from '../constants/screens';

export type BottomTabParamList = {
  [SCREENS.WEATHER]: undefined;
  [SCREENS.SEARCH]: undefined;
  [SCREENS.MORE]: undefined;
};

export type MainStackParamList = {
  [SCREENS.SPLASH]: undefined;
  [SCREENS.ERROR]: { onClose: () => void; title: string };
  [SCREENS.WEATHER]: undefined;
  [SCREENS.APP]: undefined;
};
