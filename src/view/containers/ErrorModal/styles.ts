import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    // padding: 24,
    // backgroundColor: 'grey',
  },
  sheetContainer: {
    // add horizontal space
    marginHorizontal: 24,
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
    padding: 15,
    justifyContent: 'space-between',
  },
  title: {
    fontFamily: 'Comfortaa-Bold',
    fontSize: 24,
  },
  button: {
    padding: 20,
    width: '100%',
    backgroundColor: '#F1F1F1',
    borderRadius: 10,
    alignContent: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontFamily: 'Comfortaa-Regular',
    fontSize: 16,
    textAlign: 'center',
  },
});
