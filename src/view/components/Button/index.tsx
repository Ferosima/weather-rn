import { View, StyleProp, ViewStyle, TextStyle, ActivityIndicator } from 'react-native';
import React, { useMemo } from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { styles } from './styles';
import { TTheme, TThemes } from '@types/themes';
import { observer } from 'mobx-react-lite';
import { appStore } from '@mobx/appStore';
import { Theme, ThemeProps } from 'react-native-elements';
import { themes } from '@themes/';
import { TxKeyPath } from '@types/language';
import Text from '@components/Text';

type Props = {
  t?: TxKeyPath;
  text?: string;
  style?: StyleProp<ViewStyle>;
  loading?: boolean;
  preset: keyof TTheme['button'];
  schema?: keyof TThemes;
  onPress: () => void;
};

const Button = observer(({ text, t, style, loading, preset, schema, onPress }: Props) => {
  const _schema = useMemo(() => (schema ? themes[schema] : appStore.theme), [appStore.theme, schema]);
  const theme = useMemo(() => _schema.button[preset], [_schema, preset]);

  return (
    <TouchableOpacity style={[styles.wrapper, theme.wrapper, style]} onPress={onPress} disabled={loading}>
      {loading ? (
        <ActivityIndicator />
      ) : (
        <Text style={[styles.text, theme.text]} t={t}>
          {text}
        </Text>
      )}
    </TouchableOpacity>
  );
});

export default Button;
