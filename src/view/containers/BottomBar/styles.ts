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
    justifyContent: 'space-around',
    alignItems: 'flex-end',
    marginHorizontal: 30,
    paddingTop: 10,
    paddingBottom: 15,
  },
});
