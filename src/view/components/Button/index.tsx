import { View, Text, StyleProp, ViewStyle, TextStyle, ActivityIndicator } from 'react-native';
import React from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { styles } from './styles';

type Props = {
  text: string;
  style?: StyleProp<ViewStyle>;
  styleText?: StyleProp<TextStyle>;
  loading?: boolean;
  onPress: () => void;
};

const Button = (props: Props) => {
  return (
    <TouchableOpacity style={[styles.wrapper, props.style]} onPress={props.onPress} disabled={props.loading}>
      {props.loading ? <ActivityIndicator /> : <Text style={[styles.text, props.styleText]}>{props.text}</Text>}
    </TouchableOpacity>
  );
};

export default Button;
