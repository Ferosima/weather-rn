import { BOTTOM_BAR_HEIGHT } from '@constants/';
import { BOTTOM_HEIGHT } from '@constants/';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  wrapper: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  background: {
    width: '100%',
    //+50 for blur content
    height: BOTTOM_BAR_HEIGHT + 50,
    position: 'absolute',
    resizeMode: 'cover',
  },
  container: {
    //+50 for blur content
    height: BOTTOM_BAR_HEIGHT + 50,
    justifyContent: 'flex-end',
    marginHorizontal: 30,
    paddingBottom: 10,
  },
  tabs: {
    //+50 for blur content
    alignItems: 'center',
  },
});
