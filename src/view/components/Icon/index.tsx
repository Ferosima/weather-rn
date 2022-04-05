import { View, Text, StyleProp, TextStyle, TextProps } from "react-native";
import React from "react";
import { createIconSetFromFontello } from "react-native-vector-icons";
import config from "@assets/icons/config.json";

export interface Props extends TextProps {
  name: string;
  size?: number;
  style?: StyleProp<TextStyle>;
  revert?: boolean;
  color?: string;
}

const FIcon = createIconSetFromFontello(config);

const Icon = ({ name, size, ...props }: Props) => {
  return <FIcon {...props} name={name} size={size} />;
};

export default Icon;
