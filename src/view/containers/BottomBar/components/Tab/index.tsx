import { View, Text, TouchableOpacity } from 'react-native';
import React, { useEffect } from 'react';
import Icon from '@components/Icon';
import { styles } from './styles';
import Animated, { Easing, useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';

type Props = {
  name: string;
  icon: string;
  active?: boolean;
};

const Tab = ({ name, icon, active }: Props) => {
  const [color, fontSize] = active ? [useSharedValue('#203789'), useSharedValue(22)] : [useSharedValue('#A8B2D3'), useSharedValue(0)];
  const timingOptions = {
    duration: 200,
    easing: Easing.bezier(0.25, 0.1, 0.25, 1),
  };

  const animatedFontSize = useAnimatedStyle(() => ({
    fontSize: fontSize.value,
    height: fontSize.value,
  }));

  useEffect(() => {
    if (active) {
      fontSize.value = withTiming(14, timingOptions);
    } else {
      fontSize.value = withTiming(0, timingOptions);
    }
  }, [active]);

  return (
    <TouchableOpacity style={styles.wrapper}>
      <Icon name={icon} size={22} color={color.value} />
      <Animated.Text style={[styles.title, animatedFontSize, { color: color.value }]}>{name}</Animated.Text>
    </TouchableOpacity>
  );
};

export default Tab;
