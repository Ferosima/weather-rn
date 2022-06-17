import { View, Text } from 'react-native';
import React from 'react';
import { styles } from './styles';
import { translate } from 'src/common/languages';

type Props = {};

const SearchInfo = (props: Props) => {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.text}>{translate('search_empty')}</Text>
    </View>
  );
};

export default SearchInfo;
