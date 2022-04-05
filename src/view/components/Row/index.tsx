import { StyleProp, StyleSheet, Text, View, ViewStyle } from "react-native";
import React from "react";
import { ReactNode } from "react";

type Props = {
  children?: ReactNode;
  style?: StyleProp<ViewStyle>;
};

const Row = (props: Props) => {
  return <View style={[styles.row, props.style]}>{props.children}</View>;
};

export default Row;

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
});
