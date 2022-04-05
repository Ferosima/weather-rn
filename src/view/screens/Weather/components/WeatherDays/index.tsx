import { View, Text, FlatList, ViewStyle, StyleProp } from 'react-native';
import React, { useCallback, useState } from 'react';
import WeatherDay from '../WeatherDay';
import { styles } from './styles';
import Animated, { BaseAnimationBuilder, EntryExitAnimationFunction, FadeInDown } from 'react-native-reanimated';
import { weatherStore } from '@src/mobx/weatherStore';
import { observer } from 'mobx-react';

type Props = {
  style?: StyleProp<ViewStyle>;
  entering?: BaseAnimationBuilder | typeof BaseAnimationBuilder | EntryExitAnimationFunction | Keyframe;
};

const WeatherDays = observer((props: Props) => {
  const isSelectedDay = useCallback(index => index === weatherStore.selected_day, [weatherStore.selected_day]);

  return (
    <Animated.View entering={props.entering} style={props.style}>
      <Text style={styles.title}>3 Days</Text>
      {weatherStore.forecast.map((item, index) => (
        <WeatherDay key={item.date} day={item} selected={isSelectedDay(index)} onPress={() => weatherStore.selectDay(index)} />
      ))}
    </Animated.View>
  );
});

export default WeatherDays;
