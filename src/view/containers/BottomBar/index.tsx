import Row from '@components/Row';

import React from 'react';
import { Image, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Tab from './components/Tab';
import { styles } from './styles';

type Props = {};

const BottomBar = (props: Props) => {
  return (
    <SafeAreaView edges={['bottom']} style={styles.wrapper}>
      <Image style={styles.background} source={require('@assets/images/bottom_background.png')} />
      <Row style={styles.container}>
        <Tab name="Search" icon="search" />
        <Tab name="Weather" icon="weather" active />
        <Tab name="Menu" icon="menu" />
      </Row>
    </SafeAreaView>
  );
};

export default BottomBar;
