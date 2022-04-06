import { IWeatherHour } from '@src/common/types/weather';
import { formatTemperature } from '@src/common/utils/formater';
import Card from '@src/view/components/Card';
import Row from '@src/view/components/Row';
import { observer } from 'mobx-react';
import moment from 'moment';
import React, { useEffect } from 'react';
import Animated from 'react-native-reanimated';
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
    <Animated.View style={[styles.wrapper, animatedWrapper]}>
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
