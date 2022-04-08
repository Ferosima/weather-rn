
import Button from '@components/Button';
import { weatherStore } from '@mobx/weatherStore';
import AnimatedLottieView from 'lottie-react-native';
import React from 'react';
import { Text, View } from 'react-native';
import { styles } from './styles';

type Props = {};

const WeatherEmpty = (props: Props) => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.loader}>
        <AnimatedLottieView source={require('@assets/lottie/oops.json')} autoPlay loop />
      </View>
      <Text style={styles.title}>Something went wrong</Text>
      <Button text="Retry" onPress={weatherStore.fetchWeather} loading={weatherStore.loading} />
    </View>
  );
};

export default WeatherEmpty;
