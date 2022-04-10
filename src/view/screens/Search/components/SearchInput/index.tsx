import Input from '@components/Input';
import { weatherStore } from '@mobx/weatherStore';
import { debounce } from '@utils/';
import { observer } from 'mobx-react-lite';
import React, { useCallback, useEffect, useState } from 'react';
import Animated, { BaseAnimationBuilder, EntryExitAnimationFunction } from 'react-native-reanimated';
import { styles } from './styles';

type Props = { entering?: BaseAnimationBuilder | typeof BaseAnimationBuilder | EntryExitAnimationFunction | Keyframe };

const SearchInput = observer((props: Props) => {
  const [search, setSearch] = useState('');

  useEffect(() => {
    if (search.length > 2) fetchCity(search);
    if (!search.length) clearSearch();
  }, [search]);

  const fetchCity = useCallback(
    debounce(city => weatherStore.fetchCity(city), 300),
    [],
  );

  const clearSearch = useCallback(() => {
    setSearch('');
    weatherStore.clearCities();
  }, []);

  return (
    <Animated.View entering={props.entering}>
      <Input
        style={styles.input}
        iconLeft={{ name: 'search', color: '#203789' }}
        iconRight={search && { name: 'close', color: '#203789', onPress: clearSearch }}
        value={search}
        onChangeText={setSearch}
      />
    </Animated.View>
  );
});

export default SearchInput;
