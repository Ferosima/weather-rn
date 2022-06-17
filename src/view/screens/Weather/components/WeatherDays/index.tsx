import Text from '@components/Text';
import { weatherStore } from '@mobx/weatherStore';
import { observer } from 'mobx-react';
import React, { useCallback } from 'react';
import { StyleProp, ViewStyle } from 'react-native';
import Animated, { BaseAnimationBuilder, EntryExitAnimationFunction } from 'react-native-reanimated';
import { translate } from 'src/common/languages';
import WeatherDay from '../WeatherDay';
import { styles } from './styles';

type Props = {
  style?: StyleProp<ViewStyle>;
  entering?: BaseAnimationBuilder | typeof BaseAnimationBuilder | EntryExitAnimationFunction | Keyframe;
};

const WeatherDays = observer((props: Props) => {
  const isSelectedDay = useCallback(index => index === weatherStore.selected_day, [weatherStore.selected_day]);

  return (
    <Animated.View entering={props.entering} style={props.style}>
      <Text style={styles.title}>{translate('three_days')}</Text>
      {weatherStore.forecast.map((item, index) => (
        <WeatherDay key={item.date} day={item} selected={isSelectedDay(index)} onPress={() => weatherStore.selectDay(index)} />
      ))}
    </Animated.View>
  );
});

export default WeatherDays;
