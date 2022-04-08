
import { weatherStore } from '@mobx/weatherStore';
import { observable } from 'mobx';
import { observer } from 'mobx-react-lite';
import moment from 'moment';
import React from 'react';
import { Image, StyleProp, Text, View, ViewStyle } from 'react-native';
import Animated, { BaseAnimationBuilder, EntryExitAnimationFunction, FadeInDown } from 'react-native-reanimated';
import { formatTemperature } from 'src/common/utils/formater';
import { styles } from './styles';

type Props = {
  style?: StyleProp<ViewStyle>;
  entering?: BaseAnimationBuilder | typeof BaseAnimationBuilder | EntryExitAnimationFunction | Keyframe;
};

const WeatherHeader = observer((props: Props) => {
  const { day } = weatherStore.day;
  const { condition } = day;

  return (
    <Animated.View style={[styles.wrapper, props.style]} entering={props.entering}>
      <Image style={styles.background} source={require('../../../../../../assets/images/home_header.png')} />
      <View style={styles.container}>
        <View style={styles.row}>
          <View style={styles.weather}>
            <Text style={styles.city}>{weatherStore.location?.name}</Text>
            <Text style={styles.date}>{moment(weatherStore.day.date).format('dddd DD MMMM')}</Text>
            <Text style={styles.temperature}>{formatTemperature(weatherStore.hour.temp_c)}</Text>
            <Text style={styles.weather_description}>{condition.text}</Text>
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
