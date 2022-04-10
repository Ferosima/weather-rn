import { View, Text, StyleProp, ViewStyle } from 'react-native';
import React, { useCallback } from 'react';
import { TextInput, TouchableOpacity, TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { styles } from './styles';
import Icon, { IconProps } from '@components/Icon';

type Props = {
  value?: string;
  iconLeft?: IconProps;
  iconRight?: IconProps;
  style?: StyleProp<ViewStyle>;
  onChangeText: (value: string) => void;
};

const Input = ({ value, iconLeft, iconRight, style, onChangeText }: Props) => {
  const input = React.createRef();

  return (
    <TouchableWithoutFeedback style={[styles.wrapper, style]} onPress={() => input.current?.focus()}>
      {iconLeft ? <Icon size={24} {...iconLeft} style={[styles.iconLeft, iconLeft.style]} /> : null}
      <TextInput ref={input} onChangeText={onChangeText} style={styles.input} value={value} />
      {iconRight ? <Icon size={24} {...iconRight} style={[styles.iconRight, iconRight.style]} /> : null}
    </TouchableWithoutFeedback>
  );
};
export default Input;
