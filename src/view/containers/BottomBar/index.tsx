import Row from '@components/Row';
import { SCREENS } from '@constants/screens';
import { appStore } from '@mobx/appStore';
import { observer } from 'mobx-react-lite';

import React, { useEffect, useMemo, useState } from 'react';
import { Image, View } from 'react-native';
import Animated, { FadeInDown } from 'react-native-reanimated';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import BottomTab from './components/BottomTab';
import { styles } from './styles';

type Props = {};

const BottomBar = observer((props: Props) => {
  const insets = useSafeAreaInsets();
  const paddingBottom = useMemo(() => (insets.bottom ? insets.bottom - 5 : styles.container.paddingBottom), [insets]);

  return (
    <Animated.View style={styles.wrapper} entering={FadeInDown.delay(1000)}>
      <Image style={styles.background} source={appStore.theme.image.bottom_background} />
      <View style={[styles.container, { paddingBottom: paddingBottom }]}>
        <Row style={styles.tabs}>
          <BottomTab name="Search" icon="search" screen={SCREENS.SEARCH} />
          <BottomTab name="Weather" icon="weather" screen={SCREENS.WEATHER} />
          <BottomTab name="Menu" icon="menu" screen={SCREENS.MENU} />
        </Row>
      </View>
    </Animated.View>
  );
});

export default BottomBar;
