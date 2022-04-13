import Icon, { IconProps } from '@components/Icon';
import { appStore } from '@mobx/appStore';
import { TTheme } from '@types/themes';
import { observer } from 'mobx-react';
import React, { useMemo } from 'react';
import { StyleProp, ViewStyle } from 'react-native';
import { TextInput, TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { styles } from './styles';

type Props = {
  value?: string;
  iconLeft?: IconProps;
  iconRight?: IconProps;
  style?: StyleProp<ViewStyle>;
  preset?: keyof TTheme['input'];
  onChangeText: (value: string) => void;
};

const Input = observer(({ value, iconLeft, iconRight, style, onChangeText }: Props) => {
  const input = React.createRef();
  const theme = useMemo(() => appStore.theme.input, [appStore.theme]);

  return (
    <TouchableWithoutFeedback style={[styles.wrapper, theme.wrapper, style]} onPress={() => input.current?.focus()}>
      {iconLeft ? <Icon size={24} {...iconLeft} style={[styles.iconLeft, theme.icon, iconLeft.style]} color={theme.icon.color} /> : null}
      <TextInput ref={input} onChangeText={onChangeText} style={[styles.input, theme.input]} value={value} />
      {iconRight ? <Icon size={24} {...iconRight} style={[styles.iconRight, theme.icon, iconRight.style]} color={theme.icon.color} /> : null}
    </TouchableWithoutFeedback>
  );
});

export default Input;
