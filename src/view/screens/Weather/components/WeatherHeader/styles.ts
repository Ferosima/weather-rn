import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: 'red',
    aspectRatio: 350 / 170,
    overflow: 'hidden',
    borderRadius: 16,
  },
  background: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    resizeMode: 'cover',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
  },
  row: {
    flex: 1,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  city: {
    fontFamily: 'Comfortaa-SemiBold',
    fontSize: 18,
    color: '#fff',
  },
  date: {
    fontFamily: 'Comfortaa-Light',
    fontSize: 14,
    color: '#fff',
  },
  icon: {
    width: 100,
    height: 100,
  },
  weather: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    height: '100%',
  },
  weather_description: {
    fontFamily: 'Comfortaa-Regular',
    color: '#fff',
    fontSize: 16,
  },
  temperature: {
    paddingTop: 6,
    fontFamily: 'Comfortaa-Bold',
    color: '#fff',
    fontSize: 50,
  },
});
