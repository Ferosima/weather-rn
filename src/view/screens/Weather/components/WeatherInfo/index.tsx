import { View, Text, StyleProp, ViewStyle } from "react-native";
import React from "react";
import { styles } from "./styles";
import Row from "@src/view/components/Row";
import Card from "@src/view/components/Card";
import Icon from "@src/view/components/Icon";
import Animated, {
  BaseAnimationBuilder,
  EntryExitAnimationFunction,
  FadeInDown,
} from "react-native-reanimated";
import { weatherStore } from "@src/mobx/weatherStore";
import { observer } from "mobx-react-lite";

type Props = {
  style?: StyleProp<ViewStyle>;
  entering?:
    | BaseAnimationBuilder
    | typeof BaseAnimationBuilder
    | EntryExitAnimationFunction
    | Keyframe;
};

const WeatherInfo = observer((props: Props) => {
  const { wind_kph, humidity, pressure_mb } = weatherStore.hour;
  return (
    <Animated.View entering={props.entering}>
      <Card style={[styles.wrapper, props.style]}>
        {/* Humidity */}
        <Row style={styles.box}>
          <Icon name="drop" size={22} color={"#4A6ADD"} />
          <Text style={styles.text}>{humidity}%</Text>
        </Row>
        {/* Wind */}
        <Row style={[styles.box, { paddingLeft: 10 }]}>
          <Icon name="wind" size={22} color={"#4A6ADD"} />
          <Text style={styles.text}>{wind_kph}km/h</Text>
        </Row>
        {/* Pressure */}
        <Row style={[styles.box, { justifyContent: "flex-end" }]}>
          <Icon name="pressure" size={22} color={"#4A6ADD"} />
          <Text style={styles.text}>{pressure_mb}mBar</Text>
        </Row>
      </Card>
    </Animated.View>
  );
});

export default WeatherInfo;
