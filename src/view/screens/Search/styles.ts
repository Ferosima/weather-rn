import { BOTTOM_BAR_HEIGHT } from '@constants/';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#FAFAFC',
    paddingHorizontal: 20,
    paddingBottom: BOTTOM_BAR_HEIGHT,
  },
  empty: {
    justifyContent: 'center',
    alignContent: 'center',
    flex: 1,
  },
  content: {},
  input: {
    backgroundColor: '#fff',
  },
});
