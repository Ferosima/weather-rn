import { View, Text } from 'react-native';
import React from 'react';
import { styles } from './styles';
import { translate } from 'src/common/languages';

type Props = {};

const SearchEmpty = (props: Props) => {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.text}>{translate('not_found_city')}</Text>
    </View>
  );
};

export default SearchEmpty;
