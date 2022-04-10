import Input from '@components/Input';
import React, { useState } from 'react';
import { styles } from './styles';

type Props = {};

const SearchInput = (props: Props) => {
  const [search, setSearch] = useState('');

  return (
    <Input
      style={styles.input}
      iconLeft={{ name: 'search', color: '#203789' }}
      iconRight={search && { name: 'close', color: '#203789', onPress: () => setSearch('') }}
      value={search}
      onChangeText={setSearch}
    />
  );
};

export default SearchInput;
