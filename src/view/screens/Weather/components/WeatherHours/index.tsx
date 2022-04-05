import { weatherStore } from '@src/mobx/weatherStore';
import { observer } from 'mobx-react-lite';
import React, { useCallback, useEffect, useRef } from 'react';
import { StyleProp, ViewStyle } from 'react-native';
import Animated, {
  BaseAnimationBuilder, EntryExitAnimationFunction, FadeInDown, FadeOutUp
} from 'react-native-reanimated';
import WeatherHour from '../WeatherHour';
import { styles } from './styles';

type Props = {
  style?: StyleProp<ViewStyle>;
  entering?: BaseAnimationBuilder | typeof BaseAnimationBuilder | EntryExitAnimationFunction | Keyframe;
};

const WeatherHours = observer((props: Props) => {
  const scrollList = useRef<Animated.ScrollView>(null);
  const isSelectedHour = useCallback(index => index === weatherStore.selected_hour, [weatherStore.selected_hour]);

  useEffect(() => {
    scrollList?.current?.scrollTo({ x: weatherStore.selected_hour * 112 });
  }, [weatherStore.hours]);

  return (
    <Animated.View entering={props.entering}>
      <Animated.ScrollView
        ref={scrollList}
        entering={FadeInDown}
        exiting={FadeOutUp}
        contentContainerStyle={styles.content}
        horizontal
        key={weatherStore.selected_day}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}>
        {weatherStore.hours.map((item, index) => (
          <WeatherHour
            key={`${item.time}_${index}`}
            data={item}
            index={index}
            isSelected={isSelectedHour(index)}
            onPress={() => weatherStore.selectHour(index)}
          />
        ))}
      </Animated.ScrollView>
    </Animated.View>
  );
});

export default WeatherHours;
