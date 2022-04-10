import { View, Text, StyleProp, TextStyle, TextProps } from 'react-native';
import React from 'react';
import { createIconSet } from 'react-native-vector-icons';
import config from '../../../../assets/fonts/Icons/Icons.json';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

export interface IconProps extends TextProps {
  name: string;
  size?: number;
  style?: StyleProp<TextStyle>;
  revert?: boolean;
  color?: string;
  onPress?: () => void;
}

const FIcon = createIconSet(config, 'Icons');

const Icon = ({ name, size, onPress, ...props }: Props) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <FIcon {...props} name={name} size={size} />
    </TouchableWithoutFeedback>
  );
};

export default Icon;
