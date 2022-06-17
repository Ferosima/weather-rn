import { FONT_FAMILY } from '@constants/fonts';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 10,
  },
  title: {
    fontFamily: FONT_FAMILY.SEMIBOLD,
    fontSize: 18,
    textTransform: 'capitalize',
  },
  subtitle: {
    marginTop: 4,
    fontFamily: FONT_FAMILY.LIGHT,
    fontSize: 14,
    textTransform: 'capitalize',
  },
  selected: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 12,
    height: 24,
    width: 24,
  },
});
