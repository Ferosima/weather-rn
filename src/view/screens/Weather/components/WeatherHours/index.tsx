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

  useEffect(() => {
    scrollList?.current?.scrollTo({ x: weatherStore.selected_hour * 112 });
  }, [weatherStore.hours]);

  return (
    <Animated.ScrollView
      ref={scrollList}
      entering={props.entering}
      contentContainerStyle={styles.content}
      horizontal
      key={weatherStore.selected_day}
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}>
      {weatherStore.hours.map((item, index) => (
        <WeatherHour key={`${item.time}`} data={item} index={index} onPress={() => weatherStore.selectHour(index)} />
      ))}
    </Animated.ScrollView>
  );
});

export default WeatherHours;
