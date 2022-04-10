import Icon from '@components/Icon';
import { SCREENS } from '@constants/screens';
import { appStore } from '@mobx/appStore';
import { BottomTabParamList } from '@types/navigators';
import { navigation } from '@utils/navigation';
import { observer } from 'mobx-react-lite';
import React, { useCallback, useEffect, useMemo } from 'react';
import { TouchableOpacity } from 'react-native';
import Animated, { Easing, useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';
import { styles } from './styles';

type Props = {
  name: string;
  icon: string;
  screen: keyof BottomTabParamList;
};

const BottomTab = observer(({ name, icon, screen }: Props) => {
  const isActive = useMemo(() => appStore.screen === screen, [appStore.screen, screen]);
  const [color, fontSize, lineHeight] = isActive
    ? [useSharedValue(styles.active.color), useSharedValue(14), useSharedValue(16)]
    : [useSharedValue(styles.inactive.color), useSharedValue(0), useSharedValue(0)];
  const timingOptions = {
    duration: 350,
    easing: Easing.bezier(0.25, 0.1, 0.25, 1),
  };

  const animatedStyle = useAnimatedStyle(() => ({
    fontSize: fontSize.value,
    height: lineHeight.value,
    color: color.value,
  }));

  useEffect(() => {
    if (isActive) {
      color.value = withTiming(styles.active.color, timingOptions);
      fontSize.value = withTiming(14, timingOptions);
      lineHeight.value = withTiming(16, timingOptions);
    } else {
      color.value = withTiming(styles.inactive.color, timingOptions);
      fontSize.value = withTiming(0, timingOptions);
      lineHeight.value = withTiming(0, timingOptions);
    }
  }, [isActive, appStore.screen]);

  const goTo = useCallback(() => {
    navigation.navigate(screen, {});
    appStore.setCurrentScreen(screen);
  }, [navigation, screen]);

  return (
    <TouchableOpacity style={styles.wrapper} onPress={goTo}>
      <Icon name={icon} size={22} color={isActive ? styles.active.color : styles.inactive.color} />
      <Animated.Text style={[styles.title, animatedStyle]}>{name}</Animated.Text>
    </TouchableOpacity>
  );
});

export default BottomTab;
