
import { weatherStore } from '@mobx/weatherStore';
import { observer } from 'mobx-react-lite';
import React, { useCallback, useEffect, useRef } from 'react';
import { FlatList, StyleProp, ViewStyle } from 'react-native';
import Animated, { BaseAnimationBuilder, EntryExitAnimationFunction, FadeInDown, FadeOutUp, useAnimatedRef } from 'react-native-reanimated';
import WeatherHour from '../WeatherHour';
import { styles } from './styles';

type Props = {
  style?: StyleProp<ViewStyle>;
  entering?: BaseAnimationBuilder | typeof BaseAnimationBuilder | EntryExitAnimationFunction | Keyframe;
};

const WeatherHours = observer((props: Props) => {
  const scroll = React.createRef<FlatList | undefined>();
  const isSelectedHour = useCallback(index => index === weatherStore.selected_hour, [weatherStore.selected_hour]);

  useEffect(() => {
    if (scroll?.current) scroll?.current?.scrollToIndex({ index: weatherStore.selected_hour });
  }, [weatherStore.selected_hour, weatherStore.selected_day, scroll?.current]);

  return (
    <Animated.View entering={props.entering}>
      <FlatList
        ref={scroll}
        data={weatherStore.hours}
        renderItem={({ item, index }) => (
          <WeatherHour
            key={`${item.time}_${index}`}
            data={item}
            index={index}
            isSelected={isSelectedHour(index)}
            onPress={() => weatherStore.selectHour(index)}
          />
        )}
        contentContainerStyle={styles.content}
        horizontal
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        maxToRenderPerBatch={4}
        initialNumToRender={4}
        windowSize={5}
        getItemLayout={(data, index) => ({ length: 112, offset: 112 * index, index })}
      />
    </Animated.View>
  );
});

export default WeatherHours;
