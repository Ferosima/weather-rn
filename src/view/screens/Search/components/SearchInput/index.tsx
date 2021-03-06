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
    if (!search.length) clearSearch();
    if (search.length > 2) fetchCity(search);
  }, [search, weatherStore.cities]);

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
        iconLeft={{ name: 'search' }}
        iconRight={search && { name: 'close', onPress: clearSearch }}
        value={search}
        onChangeText={setSearch}
        placeholder="city"
      />
    </Animated.View>
  );
});

export default SearchInput;
