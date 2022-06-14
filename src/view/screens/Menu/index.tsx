import { View, Text } from 'react-native';
import React, { useCallback, useMemo } from 'react';
import Box from '@components/Box';

import { observer } from 'mobx-react-lite';
import { appStore } from '@mobx/appStore';
import MenuTheme from './containers/MenuTheme';
import { FadeInDown } from 'react-native-reanimated';
import { styles } from './styles';
import MenuLanguage from './containers/MenuLanguage';
import { ScrollView } from 'react-native-gesture-handler';

type Props = {};

const MenuScreen = observer((props: Props) => {
  const delayRender = useMemo(() => 200, []);

  return (
    <Box edges={['top']}>
      <ScrollView style={styles.wrapper}>
        <MenuLanguage entering={FadeInDown.duration(400).delay(2 * delayRender)} />
        <MenuTheme entering={FadeInDown.duration(400).delay(1 * delayRender)} />
      </ScrollView>
    </Box>
  );
});

export default MenuScreen;
