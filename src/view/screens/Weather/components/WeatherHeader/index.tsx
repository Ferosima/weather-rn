import Text from '@components/Text';
import { appStore } from '@mobx/appStore';
import { weatherStore } from '@mobx/weatherStore';
import { observable } from 'mobx';
import { observer } from 'mobx-react-lite';
import moment from 'moment';
import React from 'react';
import { Image, StyleProp, View, ViewStyle } from 'react-native';
import Animated, { BaseAnimationBuilder, EntryExitAnimationFunction, FadeInDown } from 'react-native-reanimated';
import { formatTemperature } from 'src/common/utils/formater';
import { styles } from './styles';

type Props = {
  style?: StyleProp<ViewStyle>;
  entering?: BaseAnimationBuilder | typeof BaseAnimationBuilder | EntryExitAnimationFunction | Keyframe;
};

const WeatherHeader = observer((props: Props) => {
  const { condition } = weatherStore.hour;
  console.log(
    weatherStore.hours.map(i => console.log(i.temp_c, i.time)),
    weatherStore.selected_hour,
    weatherStore.hours[weatherStore.selected_hour],
  );

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

          <Image
            style={styles.icon}
            source={require('../../../../../../assets/images/mostly-cloud-light.png')}
            // source={{
            //   uri: "https:" + current.condition.icon,
            // }}
          />
        </View>
      </View>
    </Animated.View>
  );
});

export default WeatherHeader;
