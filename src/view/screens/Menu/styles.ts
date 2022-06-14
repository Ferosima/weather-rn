import { BOTTOM_BAR_HEIGHT } from '@constants/';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  wrapper: {
    paddingHorizontal: 16,
    flexDirection: 'column-reverse',
    paddingBottom: BOTTOM_BAR_HEIGHT,
  },
});
