import { BOTTOM_BAR_HEIGHT } from '@constants/';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    paddingHorizontal: 20,
    paddingBottom: BOTTOM_BAR_HEIGHT + 20,
  },
  empty: {
    justifyContent: 'center',
    alignContent: 'center',
    flex: 1,
  },
});
