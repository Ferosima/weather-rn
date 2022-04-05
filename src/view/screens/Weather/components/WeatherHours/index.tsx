import { View, Text, ScrollView, FlatList, NativeScrollEvent, NativeSyntheticEvent, StyleProp, ViewStyle } from 'react-native';
import React, { useCallback, useEffect, useMemo, useRef } from 'react';
import Card from '@src/view/components/Card';
import WeatherHour from '../WeatherHour';
import { styles } from './styles';
import { useState } from 'react';
import Animated, { BaseAnimationBuilder, FadeInDown, FadeInLeft, FadeInRight, FadeOutLeft } from 'react-native-reanimated';
import { EntryExitAnimationFunction } from 'react-native-reanimated';
import { weatherStore } from '@src/mobx/weatherStore';
import { observer } from 'mobx-react-lite';

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
    <Animated.ScrollView
      ref={scrollList}
      entering={props.entering}
      contentContainerStyle={styles.content}
      horizontal
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
  );
});

export default WeatherHours;
