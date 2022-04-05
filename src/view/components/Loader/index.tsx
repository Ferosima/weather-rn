import AnimatedLottieView from 'lottie-react-native';
import React from 'react';

type Props = {};

const Loader = (props: Props) => {
  return <AnimatedLottieView source={require('@assets/lottie/loader.json')} autoPlay loop />;
};

export default Loader;
