import { FONT_FAMILY } from '@constants/fonts';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
  },
  content: {
    width: '100%',
    paddingTop: 16,
  },
  title: {
    fontSize: 18,
    fontFamily: FONT_FAMILY.SEMIBOLD,
  },
});
