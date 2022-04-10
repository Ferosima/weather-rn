import Card from '@components/Card';
import Input from '@components/Input';
import Row from '@components/Row';
import React, { useState } from 'react';
import { Text } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from './styles';

type Props = { day: any };

const SearchDay = (props: Props) => {
  return (
    <Card style={styles.wrapper}>
      <Row>
        <Text style={styles.city}>{props.day}</Text>
        {/* <Text style={styles.minus_temperature}>{formatTemperature(day.mintemp_c)}</Text>
        <Text style={styles.max_temperature}>{formatTemperature(day.mintemp_c)}</Text> */}
      </Row>
    </Card>
  );
};

export default SearchDay;
