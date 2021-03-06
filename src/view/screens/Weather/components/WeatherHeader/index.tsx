import Text from '@components/Text';
import { appStore } from '@mobx/appStore';
import { weatherStore } from '@mobx/weatherStore';
import { observable } from 'mobx';
import { observer } from 'mobx-react-lite';
import moment from 'moment';
import React, { useMemo } from 'react';
import { Image, StyleProp, View, ViewStyle } from 'react-native';
import Animated, { BaseAnimationBuilder, EntryExitAnimationFunction, FadeInDown } from 'react-native-reanimated';
import { formatTemperature } from 'src/common/utils/formater';
import { styles } from './styles';
import { getIconCondition, icons } from '@assets/images/weather';

type Props = {
  style?: StyleProp<ViewStyle>;
  entering?: BaseAnimationBuilder | typeof BaseAnimationBuilder | EntryExitAnimationFunction | Keyframe;
};

const WeatherHeader = observer((props: Props) => {
  const { condition } = weatherStore.hour;

  const icon = useMemo(() => {
    getIconCondition(condition.icon);
  }, [condition]);

  return (
    <Animated.View style={[styles.wrapper, props.style]} entering={props.entering}>
      <Image style={styles.background} source={appStore.theme.image.header_background} />
      <View style={styles.container}>
        <View style={styles.row}>
          <View style={styles.weather}>
            <Text preset="light" style={styles.city}>
              {weatherStore.location?.name}
            </Text>
            <Text preset="light" style={styles.date}>
              {moment(weatherStore.hour.time).format('dddd DD MMMM')}
            </Text>
            <Text preset="light" style={styles.temperature}>
              {formatTemperature(weatherStore.hour.temp_c)}
            </Text>
            <Text preset="light" style={styles.weather_description}>
              {condition.text}
            </Text>
          </View>

          <Image style={styles.icon} source={getIconCondition(condition.icon)} />
        </View>
      </View>
    </Animated.View>
  );
});

export default WeatherHeader;
