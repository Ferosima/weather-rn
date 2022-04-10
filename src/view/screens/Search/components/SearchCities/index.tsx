import { weatherStore } from '@mobx/weatherStore';
import { observer } from 'mobx-react';
import React from 'react';
import { FlatList } from 'react-native-gesture-handler';
import Animated, { BaseAnimationBuilder, EntryExitAnimationFunction } from 'react-native-reanimated';
import SearchCity from '../SearchCity';
import SearchEmpty from '../SearchEmpty';
import SearchInfo from '../SearchInfo';

import { styles } from './styles';

type Props = { entering?: BaseAnimationBuilder | typeof BaseAnimationBuilder | EntryExitAnimationFunction | Keyframe };

const SearchCities = observer((props: Props) => {
  return (
    <Animated.View style={styles.wrapper} entering={props.entering}>
      {weatherStore.cities ? (
        <FlatList
          data={weatherStore.cities}
          renderItem={({ item, index }) => <SearchCity city={item} index={index} key={`${item.id}_${index}`} />}
          contentContainerStyle={weatherStore.cities.length ? styles.container : styles.empty}
          style={styles.content}
          inverted={weatherStore.cities.length}
          showsVerticalScrollIndicator={false}
          windowSize={2}
          ListEmptyComponent={SearchEmpty}
        />
      ) : (
        <SearchInfo />
      )}
    </Animated.View>
  );
});

export default SearchCities;
