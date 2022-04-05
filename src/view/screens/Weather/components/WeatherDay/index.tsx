import { View, Text, Image } from 'react-native';
import React from 'react';
import Card from '@src/view/components/Card';
import { styles } from './styles';
import Row from '@src/view/components/Row';
import Animated, { FadeInDown, FadeInRight } from 'react-native-reanimated';
import { FadeIn } from 'react-native-reanimated';
import { IWeatherDay, IWeatherForecast } from '@src/common/types/weather';
import moment from 'moment';
import { formatTemperature } from '@src/common/utils/formater';

type Props = { day: IWeatherForecast; selected?: boolean; onPress: () => void };

const WeatherDay = (props: Props) => {
  const { date, day } = props.day;
  return (
    <Card style={[styles.wrapper]} onPress={props.onPress}>
      {props.selected ? <Animated.View entering={FadeIn.duration(700)} style={styles.selected} /> : null}
      <View>
        <Animated.Text style={styles.day}>{moment(date).format('dddd')}</Animated.Text>
        <Text style={styles.date}>{moment(date).format('DD/MM')}</Text>
      </View>
      <Image style={styles.icon} source={require('../../../../../../assets/images/mostly-cloud-light.png')} />
      <Row>
        <Text style={styles.plus_temperature}>{formatTemperature(day.maxtemp_c)}</Text>
        <Text style={styles.minus_temperature}>{formatTemperature(day.mintemp_c)}</Text>
      </Row>
    </Card>
  );
};

export default WeatherDay;
