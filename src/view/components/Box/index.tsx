import { appStore } from '@mobx/appStore';
import { observer } from 'mobx-react-lite';
import React, { useMemo } from 'react';
import { StyleProp, ViewStyle } from 'react-native';
import { Edge, SafeAreaView } from 'react-native-safe-area-context';
import { styles } from './styles';

type Props = { style?: StyleProp<ViewStyle>; children: any; edges?: ReadonlyArray<Edge> };

const Box = observer(({ children, style, edges }: Props) => {
  const theme = useMemo(() => appStore.theme.box, [appStore.theme]);

  return (
    <SafeAreaView edges={edges} style={[styles.wrapper, theme, style]}>
      {children}
    </SafeAreaView>
  );
});

export default Box;
