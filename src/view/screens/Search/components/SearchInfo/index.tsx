import { View, Text } from 'react-native';
import React from 'react';
import { styles } from './styles';

type Props = {};

const SearchInfo = (props: Props) => {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.text}>Find the area or city that you want to know the detailed weather info at this time</Text>
    </View>
  );
};

export default SearchInfo;
