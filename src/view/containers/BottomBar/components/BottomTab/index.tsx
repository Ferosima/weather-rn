import Icon from '@components/Icon';
import { SCREENS } from '@constants/screens';
import { appStore } from '@mobx/appStore';
import { TxKeyPath } from '@types/language';
import { BottomTabParamList } from '@types/navigators';
import { navigation } from '@utils/navigation';
import { observer } from 'mobx-react-lite';
import React, { useCallback, useEffect, useMemo } from 'react';
import { TouchableOpacity } from 'react-native';
import Animated, { Easing, useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';
import { translate } from 'src/common/languages';
import { styles } from './styles';

type Props = {
  name: TxKeyPath;
  icon: string;
  screen: keyof BottomTabParamList;
};

const BottomTab = observer(({ name, icon, screen }: Props) => {
  const theme = useMemo(() => appStore.theme.bottomBar, [appStore.theme]);
  const isActive = useMemo(() => appStore.screen === screen, [appStore.screen, screen]);
  const [color, fontSize, lineHeight] = isActive
    ? [useSharedValue(theme.active.color), useSharedValue(14), useSharedValue(16)]
    : [useSharedValue(theme.inactive.color), useSharedValue(0), useSharedValue(0)];
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
      color.value = withTiming(theme.active.color, timingOptions);
      fontSize.value = withTiming(14, timingOptions);
      lineHeight.value = withTiming(18, timingOptions);
    } else {
      color.value = withTiming(theme.inactive.color, timingOptions);
      fontSize.value = withTiming(0, timingOptions);
      lineHeight.value = withTiming(0, timingOptions);
    }
  }, [isActive, appStore.screen]);

  const goTo = useCallback(() => {
    navigation.navigate(screen, {});
  }, [navigation, screen]);

  return (
    <TouchableOpacity style={styles.wrapper} onPress={goTo}>
      <Icon name={icon} size={22} color={isActive ? theme.active.color : theme.inactive.color} />
      <Animated.Text style={[styles.title, animatedStyle]}>{translate(name)}</Animated.Text>
    </TouchableOpacity>
  );
});

export default BottomTab;
