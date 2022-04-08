import Icon from '@components/Icon';
import React, { useEffect } from 'react';
import { TouchableOpacity } from 'react-native';
import Animated, { Easing, useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';
import { styles } from './styles';

type Props = {
  name: string;
  icon: string;
  active?: boolean;
};

const BottomTab = ({ name, icon, active }: Props) => {
  const [color, fontSize] = active ? [useSharedValue('#203789'), useSharedValue(14)] : [useSharedValue('#A8B2D3'), useSharedValue(0)];
  const timingOptions = {
    duration: 200,
    easing: Easing.bezier(0.25, 0.1, 0.25, 1),
  };

  const animatedFontSize = useAnimatedStyle(() => ({
    fontSize: fontSize.value,
    height: fontSize.value ? fontSize.value + 5 : fontSize.value,
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

export default BottomTab;
