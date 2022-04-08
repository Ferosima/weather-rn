
import Card from '@components/Card';
import Row from '@components/Row';
import { IWeatherHour } from '@types/weather';
import { formatTemperature } from '@utils/formater';
import { observer } from 'mobx-react';
import moment from 'moment';
import React, { useEffect } from 'react';
import Animated, { FadeInDown, FadeOutUp } from 'react-native-reanimated';
import { useWeatherHourStyle } from './hooks';
import { styles } from './styles';

type Props = {
  isSelected: boolean;
  onPress: () => void;
  data: IWeatherHour;
};

const WeatherHour = observer(({ data, isSelected, onPress }: Props) => {
  const [animatedWrapper, animatedIcon, animatedTime, animatedTemperature, setSelected] = useWeatherHourStyle(isSelected);

  useEffect(() => {
    setSelected(isSelected);
  }, [isSelected]);

  return (
    <Animated.View style={[styles.wrapper, animatedWrapper]} entering={FadeInDown} exiting={FadeOutUp}>
      <Card style={styles.content} onPress={onPress}>
        <Row style={styles.row}>
          <Animated.Text style={[styles.time, animatedTime]}>{moment(data.time).format('HH:mm')}</Animated.Text>
          <Animated.Image style={[styles.icon, animatedIcon]} source={require('../../../../../../assets/images/mostly-cloud-light.png')} />
        </Row>
        <Animated.Text style={[styles.temperature, animatedTemperature]}>{formatTemperature(data.temp_c)}</Animated.Text>
      </Card>
    </Animated.View>
  );
});

export default WeatherHour;
