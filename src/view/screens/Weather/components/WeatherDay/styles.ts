import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    paddingHorizontal: 12,
    marginVertical: 5,
    maxHeight: 65,
  },
  day: {
    fontFamily: 'Comfortaa-Regular',
    fontSize: 14,
    marginBottom: 4,
    marginTop: 10,
    textTransform: 'capitalize',
  },
  date: {
    fontFamily: 'Comfortaa-Light',
    fontSize: 12,
  },
  icon: {
    aspectRatio: 1,
    width: 45,
    maxHeight: 45,
    // alignSelf: 'center',
  },
  plus_temperature: {
    fontFamily: 'Comfortaa-Bold',
    fontSize: 16,
  },
  minus_temperature: {
    fontFamily: 'Comfortaa-Bold',
    fontSize: 16,
    marginLeft: 20,
  },
  selected: {
    height: 25,
    width: 4,
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
    position: 'absolute',
    left: 0,
    marginVertical: 0,
    backgroundColor: '#4A6ADA',
  },
});
