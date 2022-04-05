import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  wrapper: {
    alignSelf: "flex-start",
    padding: 10,
    width: 100,
    aspectRatio: 1,
    marginHorizontal: 6,
  },
  row: {
    justifyContent: "space-between",
    alignItems: "flex-end",
    flex: 1,
  },
  icon: {
    alignSelf: "flex-start",
    width: 60,
    aspectRatio: 1,
  },
  time: {
    fontFamily: "Comfortaa-Regular",
    color: "#203789",
    fontSize: 14,
  },
  temperature: {
    fontFamily: "Comfortaa-Regular",
    color: "#203789",
    fontSize: 24,
  },
});