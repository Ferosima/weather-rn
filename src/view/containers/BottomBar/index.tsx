import Row from '@components/Row';

import React, { useMemo } from 'react';
import { Image, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import BottomTab from './components/BottomTab';
import { styles } from './styles';

type Props = {};

const BottomBar = (props: Props) => {
  const insets = useSafeAreaInsets();
  const paddingBottom = useMemo(() => (insets.bottom ? insets.bottom - 10 : styles.container.paddingBottom), [insets]);

  return (
    <View style={styles.wrapper}>
      <Image style={styles.background} source={require('@assets/images/bottom_background.png')} />
      <View style={[styles.container, { paddingBottom: paddingBottom }]}>
        <Row style={styles.tabs}>
          <BottomTab name="Search" icon="search" />
          <BottomTab name="Weather" icon="weather" active />
          <BottomTab name="Menu" icon="menu" />
        </Row>
      </View>
    </View>
  );
};

export default BottomBar;
