import React, { ReactNode } from 'react';
import { StyleProp, TouchableOpacity, ViewStyle } from 'react-native';
import Animated from 'react-native-reanimated';
import { styles } from './styles';

type Props = {
  style?: StyleProp<ViewStyle>;
  animatedStyle?: StyleProp<ViewStyle>;
  children?: ReactNode;
  onPress?: () => void;
};

const Card = (props: Props) => {
  return (
    <TouchableOpacity onPress={props.onPress} disabled={!props.onPress} style={[styles.touchable, props.style]}>
      {props.children}
    </TouchableOpacity>
  );
};

export default Card;
