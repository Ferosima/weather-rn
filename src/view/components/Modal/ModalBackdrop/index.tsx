import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

type Props = {};

const ModalBackdrop = (props: Props) => {
  return <View style={styles.wrapper} />;
};

export default ModalBackdrop;

const styles = StyleSheet.create({
  wrapper: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    width: '100%',
    opacity: 0.7,
    backgroundColor: 'gray',
  },
});
