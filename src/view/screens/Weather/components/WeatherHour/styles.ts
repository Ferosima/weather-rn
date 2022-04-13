import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  wrapper: {
    alignSelf: 'flex-start',
    // padding: 10,
    width: 100,
    aspectRatio: 1,
    marginHorizontal: 6,
  },
  content: {
    flex: 1,
    padding: 10,
  },
  row: {
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    flex: 1,
  },
  icon: {
    alignSelf: 'flex-start',
    width: 60,
    aspectRatio: 1,
  },
  time: {
    fontSize: 14,
  },
  temperature: {
    fontSize: 24,
  },
});
