import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    paddingHorizontal: 12,
    marginVertical: 5,
  },
  day: {
    fontFamily: "Comfortaa-Regular",
    color: "#203789",
    fontSize: 14,
    marginBottom: 4,
    marginTop: 10,
  },
  date: {
    fontFamily: "Comfortaa-Light",
    color: "#203789",
    fontSize: 12,
  },
  icon: {
    aspectRatio: 1,
    width: 45,
  },
  plus_temperature: {
    fontFamily: "Comfortaa-Bold",
    color: "#4A6ADA",
    fontSize: 16,
  },
  minus_temperature: {
    fontFamily: "Comfortaa-Bold",
    color: "#203789",
    fontSize: 16,
    marginLeft: 20,
  },
  selected: {
    height: 25,
    width: 4,
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
    position: "absolute",
    left: 0,
    marginVertical: 0,
    backgroundColor: "#4A6ADA",
  },
});
