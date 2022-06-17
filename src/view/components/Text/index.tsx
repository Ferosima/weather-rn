import { FONT_FAMILY } from '@constants/fonts';
import { appStore } from '@mobx/appStore';
import { themes } from '@themes';
import { TxKeyPath } from '@types/language';
import { TTheme, TThemes } from '@types/themes';
import { observer } from 'mobx-react';
import React, { useMemo } from 'react';
import { StyleProp, Text as RNText, TextStyle } from 'react-native';
import { translate } from 'src/common/languages';

type Props = {
  t?: TxKeyPath;
  preset?: keyof TTheme['text'];
  font?: keyof FONT_FAMILY;
  size?: number;
  style?: StyleProp<TextStyle>;
  schema?: keyof TThemes;
  children?: any;
};

const Text = observer(({ preset, t, schema, font, size, style, children, ...props }: Props) => {
  const _schema = useMemo(() => (schema ? themes[schema] : appStore.theme), [appStore.theme, schema]);
  const theme = useMemo(() => _schema.text[preset || 'default'], [_schema, preset]);
  return (
    <RNText {...props} style={[theme, { fontSize: size, fontFamily: FONT_FAMILY[font || 'REGULAR'] }, style]}>
      {t ? translate(t) : children}
    </RNText>
  );
});

export default Text;
