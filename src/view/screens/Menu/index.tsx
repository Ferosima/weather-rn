import { View, Text } from 'react-native';
import React, { useCallback, useMemo } from 'react';
import Box from '@components/Box';

import { observer } from 'mobx-react-lite';
import { appStore } from '@mobx/appStore';
import MenuTheme from './components/MenuTheme';
import { FadeInDown } from 'react-native-reanimated';
import { styles } from './styles';

type Props = {};

const MenuScreen = observer((props: Props) => {
  const delayRender = useMemo(() => 200, []);

  return (
    <Box edges={['top']} style={styles.wrapper}>
      <MenuTheme entering={FadeInDown.duration(400).delay(1 * delayRender)} />
    </Box>
  );
});

export default MenuScreen;
