import { View, Text as RNText, StyleProp, TextStyle } from 'react-native';
import React, { useMemo } from 'react';
import { TTheme, TThemes } from '@types/themes';
import { FONT_FAMILY } from '@constants/fonts';
import { appStore } from '@mobx/appStore';
import { observer } from 'mobx-react';
import Animated from 'react-native-reanimated';
import { themes } from '@themes/';

type Props = {
  preset?: keyof TTheme['text'];
  font?: keyof FONT_FAMILY;
  size?: number;
  style?: StyleProp<TextStyle>;
  schema?: keyof TThemes;
  children: any;
};

const Text = observer(({ preset, schema, font, size, style, children, ...props }: Props) => {
  const _schema = useMemo(() => (schema ? themes[schema] : appStore.theme), [appStore.theme, schema]);
  const theme = useMemo(() => _schema.text[preset || 'default'], [_schema, preset])
  ;
  return (
    <RNText {...props} style={[theme, { fontSize: size, fontFamily: FONT_FAMILY[font || 'REGULAR'] }, style]}>
      {children}
    </RNText>
  );
});

export default Text;
