import {
  View,
  Text,
  StyleProp,
  ViewStyle,
  TouchableOpacity,
} from "react-native";
import React, { ReactNode } from "react";
import { styles } from "./styles";
import Animated, { FadeIn } from "react-native-reanimated";

type Props = {
  style?: StyleProp<ViewStyle>;
  children?: ReactNode;
  onPress?: () => void;
};

const Card = (props: Props) => {
  return (
    <TouchableOpacity onPress={props.onPress} disabled={!props.onPress}>
      <Animated.View style={[styles.wrapper, props.style]}>
        {props.children}
      </Animated.View>
    </TouchableOpacity>
  );
};

export default Card;