import { weatherStore } from '@src/mobx/weatherStore';
import Button from '@src/view/components/Button';
import AnimatedLottieView from 'lottie-react-native';
import React from 'react';
import { Text, View } from 'react-native';
import { styles } from './styles';

type Props = {};

const WeatherEmpty = (props: Props) => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.content}>
        <View style={styles.loader}>
          <AnimatedLottieView source={require('@assets/lottie/oops.json')} autoPlay loop />
        </View>
        <Text style={styles.title}>Something went wrong</Text>
        <Button text="Retry" onPress={weatherStore.fetchWeather} loading={weatherStore.loading} />
      </View>
    </View>
  );
};

export default WeatherEmpty;
