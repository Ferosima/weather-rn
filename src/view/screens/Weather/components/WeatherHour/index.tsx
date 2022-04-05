import { IWeatherHour } from '@src/common/types/weather';
import { formatTemperature } from '@src/common/utils/formater';
import { weatherStore } from '@src/mobx/weatherStore';
import Card from '@src/view/components/Card';
import Row from '@src/view/components/Row';
import moment from 'moment';
import React, { useEffect, useMemo } from 'react';
import Animated, { FadeInUp, FadeOutDown } from 'react-native-reanimated';
import { useWeatherHourStyle } from './hooks';
import { styles } from './styles';

type Props = {
  index: number;
  onPress: () => void;
  data: IWeatherHour;
};

const WeatherHour = ({ data, index, onPress }: Props) => {
  const isSelected = useMemo(() => index === weatherStore.selected_hour, [weatherStore.selected_hour, index]);
  const [animatedWrapper, animatedIcon, animatedTime, animatedTemperature, setSelected] = useWeatherHourStyle();

  useEffect(() => {
    setSelected(isSelected);
  }, [isSelected]);

  return (
    <Animated.View entering={FadeInUp} exiting={FadeOutDown}>
      <Card style={[styles.wrapper, animatedWrapper]} onPress={onPress}>
        <Row style={styles.row}>
          <Animated.Text style={[styles.time, animatedTime]}>{moment(data.time).format('HH:mm')}</Animated.Text>
          <Animated.Image style={[styles.icon, animatedIcon]} source={require('../../../../../../assets/images/mostly-cloud-light.png')} />
        </Row>
        <Animated.Text style={[styles.temperature, animatedTemperature]}>{formatTemperature(data.temp_c)}</Animated.Text>
      </Card>
    </Animated.View>
  );
};

export default WeatherHour;
