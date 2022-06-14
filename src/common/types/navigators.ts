import { TModalParams } from '@containers/Modal';
import { Route } from '@react-navigation/native';
import { SCREENS } from '../constants/screens';

export type TRoute = Route<string, object | undefined> | undefined;

export type BottomTabParamList = {
  [SCREENS.WEATHER]: undefined;
  [SCREENS.SEARCH]: undefined;
  [SCREENS.MENU]: undefined;
};

export type MainStackParamList = {
  [SCREENS.ERROR]: { onClose: () => void; title: string };
  [SCREENS.MODAL]: TModalParams
  [SCREENS.APP]: undefined;
};
