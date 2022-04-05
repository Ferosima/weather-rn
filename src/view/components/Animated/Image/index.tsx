import { View, Text, ViewStyle, StyleProp, ImageStyle } from "react-native";
import React from "react";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
} from "react-native-reanimated";
import { ImageSourcePropType } from "react-native";

type Props = {
  style: StyleProp<ImageStyle>;
  source: ImageSourcePropType;
  size?: number; //Animated Size
};

const Image = ({ style, source, size }: Props) => {
  const [_size] = [useSharedValue(size)];

  const animatedWrapper = useAnimatedStyle(() => ({
    width: _size.value,
  }));

  return <Animated.Image style={[style, animatedWrapper]} source={source} />;
};

export default Image;
