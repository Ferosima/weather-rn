import Card from '@components/Card';
import Row from '@components/Row';
import { SCREENS } from '@constants/screens';
import { weatherStore } from '@mobx/weatherStore';
import { ICity } from '@types/weather';
import { navigation } from '@utils/navigation';
import React, { useCallback } from 'react';
import { Text, View } from 'react-native';
import Animated, { FadeInDown } from 'react-native-reanimated';
import { styles } from './styles';

type Props = { city: ICity; index: number };

const SearchCity = ({ city, index }: Props) => {
  const selectCity = useCallback(() => {
    weatherStore.selectCity(city.name);
    navigation.navigate(SCREENS.WEATHER);
  }, [city]);

  return (
    <Animated.View entering={FadeInDown.delay(200 * index)}>
      <Card style={styles.wrapper} onPress={selectCity}>
        <Row style={styles.row}>
          <Text style={styles.city}>{city.name}</Text>
          <View style={{ alignItems: 'flex-end', overflow: 'hidden' }}>
            <Text style={styles.region}>{city.region}</Text>
            <Text style={styles.country} numberOfLines={1} ellipsizeMode="tail">
              {city.country}
            </Text>
          </View>
        </Row>
      </Card>
    </Animated.View>
  );
};

export default SearchCity;
