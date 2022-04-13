import { FONT_FAMILY } from '@constants/fonts';
import { appStore } from '@mobx/appStore';
import { TTheme } from '@types/themes';
import { observer } from 'mobx-react';
import React, { useMemo } from 'react';
import { StyleProp, TextStyle } from 'react-native';
import Animated from 'react-native-reanimated';

type Props = {
  preset?: keyof TTheme['text'];
  font?: keyof FONT_FAMILY;
  size?: number;
  style?: StyleProp<TextStyle>;
  children: any;
};

const AnimatedText = observer(({ preset, font, size, style, children }: Props) => {
  const theme = useMemo(() => appStore.theme.text[preset || 'default'], [appStore.theme, preset]);

  return <Animated.Text style={[theme, { fontSize: size, fontFamily: FONT_FAMILY[font || 'REGULAR'] }, style]}>{children}</Animated.Text>;
});

export default AnimatedText;
