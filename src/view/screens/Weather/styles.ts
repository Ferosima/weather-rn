import { BOTTOM_BAR_HEIGHT } from '@constants/';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    paddingBottom: BOTTOM_BAR_HEIGHT,
  },
  content: {
    paddingHorizontal: 16,
    paddingTop: 10,
    paddingBottom: BOTTOM_BAR_HEIGHT,
  },
  header: {
    width: '100%',
    marginBottom: 16,
  },
  info: {
    marginBottom: 16,
  },
  hours: {},
});
