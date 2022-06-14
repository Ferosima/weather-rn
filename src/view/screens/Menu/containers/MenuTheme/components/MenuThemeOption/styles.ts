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
  row: {
    flexDirection: 'row',
    alignContent: 'center',
    alignItems: 'center',
  },
  label: {
    paddingLeft: 12,
    fontFamily: FONT_FAMILY.SEMIBOLD,
    fontSize: 18,
  },
  selected: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 12,
    height: 24,
    width: 24,
  },
});
