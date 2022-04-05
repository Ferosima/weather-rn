import { useEffect, useState } from 'react';
import { ImageStyle, StyleProp, ViewStyle } from 'react-native';
import { AnimateStyle, Easing, useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';

export const useWeatherHourStyle = (isSelected: boolean): [ViewStyle, AnimateStyle<StyleProp<ImageStyle>>, ViewStyle, ViewStyle, (value) => void] => {
  const [selected, _setSelected] = useState(isSelected);
  const [wrapper, icon, time, temperature] = isSelected
    ? [useSharedValue(120), useSharedValue(65), useSharedValue(14), useSharedValue(28)]
    : [useSharedValue(100), useSharedValue(50), useSharedValue(12), useSharedValue(22)];
  const timingOptions = {
    duration: 200,
    easing: Easing.bezier(0.25, 0.1, 0.25, 1),
  };

  const animatedWrapper = useAnimatedStyle(() => ({
    width: wrapper.value,
  }));

  const animatedIcon = useAnimatedStyle(() => ({
    width: icon.value,
  }));

  const animatedTime = useAnimatedStyle(() => ({
    fontSize: time.value,
  }));

  const animatedTemperature = useAnimatedStyle(() => ({
    fontSize: temperature.value,
  }));

  const setSelected = (value: boolean) => {
    _setSelected(value);
  };

  useEffect(() => {
    if (selected) {
      wrapper.value = withTiming(120, timingOptions);
      icon.value = withTiming(65, timingOptions);
      time.value = withTiming(14, timingOptions);
      temperature.value = withTiming(28, timingOptions);
    } else {
      wrapper.value = withTiming(100, timingOptions);
      icon.value = withTiming(50, timingOptions);
      time.value = withTiming(12, timingOptions);
      temperature.value = withTiming(22, timingOptions);
    }
  }, [selected]);

  return [animatedWrapper, animatedIcon, animatedTime, animatedTemperature, setSelected];
};
