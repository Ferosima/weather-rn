import { View, Text } from 'react-native';
import React from 'react';
import { styles } from './styles';

type Props = {};

const SearchEmpty = (props: Props) => {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.text}>Not found city</Text>
    </View>
  );
};

export default SearchEmpty;
