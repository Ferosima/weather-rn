import Button from '@components/Button';
import Text from '@components/Text';
import { weatherStore } from '@mobx/weatherStore';
import AnimatedLottieView from 'lottie-react-native';
import React from 'react';
import { View } from 'react-native';
import Animated, { FadeInDown } from 'react-native-reanimated';
import { styles } from './styles';

type Props = {};

const WeatherEmpty = (props: Props) => {
  return (
    <Animated.View style={styles.wrapper} entering={FadeInDown.duration(700)}>
      <View style={styles.loader}>
        <AnimatedLottieView source={require('@assets/lottie/oops.json')} autoPlay loop />
      </View>
      <Text preset="gray" style={styles.title}>
        Something went wrong
      </Text>
      <Button text="Retry" onPress={weatherStore.fetchWeather} loading={weatherStore.loading} preset="inactive" />
    </Animated.View>
  );
};

export default WeatherEmpty;
