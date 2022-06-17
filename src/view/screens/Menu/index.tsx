import Box from '@components/Box';
import React, { useMemo } from 'react';

import { observer } from 'mobx-react-lite';
import { ScrollView } from 'react-native-gesture-handler';
import { FadeInDown } from 'react-native-reanimated';
import MenuLanguage from './containers/MenuLanguage';
import MenuTheme from './containers/MenuTheme';
import { styles } from './styles';

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
