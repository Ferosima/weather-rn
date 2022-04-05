import { StatusBar as RNStatusBar } from 'react-native';
import React from 'react';

type Props = {};

const StatusBar: React.FC<Props> = () => {
  return <RNStatusBar animated={true} backgroundColor="#fff" barStyle={'dark-content'} />;
};

export default StatusBar;
