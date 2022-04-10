import Input from '@components/Input';
import React, { useState } from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import SearchInput from './components/SearchInput';
import { styles } from './styles';

type Props = {};

const SearchScreen = (props: Props) => {
  const [search, setSearch] = useState('');

  console.log(search);

  return (
    <SafeAreaView edges={['top']} style={styles.wrapper}>
      <ScrollView contentContainerStyle={styles.content} style={{ flex: 1 }} showsVerticalScrollIndicator={false}></ScrollView>
      <SearchInput />
    </SafeAreaView>
  );
};

export default SearchScreen;
