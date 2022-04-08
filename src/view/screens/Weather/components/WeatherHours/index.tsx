import { IWeatherHour } from '@src/common/types/weather';
import { weatherStore } from '@src/mobx/weatherStore';
import { observer } from 'mobx-react-lite';
import React, { useCallback, useEffect, useRef } from 'react';
import { FlatList, StyleProp, ViewStyle } from 'react-native';
import Animated, { BaseAnimationBuilder, EntryExitAnimationFunction, FadeInDown, FadeOutUp } from 'react-native-reanimated';
import WeatherHour from '../WeatherHour';
import { styles } from './styles';

type Props = {
  style?: StyleProp<ViewStyle>;
  entering?: BaseAnimationBuilder | typeof BaseAnimationBuilder | EntryExitAnimationFunction | Keyframe;
};

const WeatherHours = observer((props: Props) => {
  const scroll = useRef<FlatList | undefined>(undefined);
  const isSelectedHour = useCallback(index => index === weatherStore.selected_hour, [weatherStore.selected_hour]);

  useEffect(() => {
    scroll?.current?.scrollToIndex({ index: weatherStore.selected_hour, viewOffset: 20 });
  }, [weatherStore.hours, weatherStore.selected_hour]);

  return (
    <Animated.View entering={props.entering}>
      <Animated.View key={weatherStore.selected_day} entering={FadeInDown} exiting={FadeOutUp}>
        <FlatList
          ref={scroll}
          data={weatherStore.hours}
          renderItem={({ item, index }) => (
            <WeatherHour
              key={`${item.time}_${index}`}
              data={item}
              index={index}
              isSelected={isSelectedHour(index)}
              onPress={() => weatherStore.selectHour(index)}
            />
          )}
          maxToRenderPerBatch={4}
          initialNumToRender={4}
          windowSize={10}
          removeClippedSubviews={true}
          contentContainerStyle={styles.content}
          horizontal
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
        />
      </Animated.View>

      {/* <Animated.ScrollView
        ref={scrollList}
        entering={FadeInDown}
        exiting={FadeOutUp}
        contentContainerStyle={styles.content}
        horizontal
        key={weatherStore.selected_day}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}>
        {weatherStore.hours.map((item, index) => (
          <WeatherHour
            key={`${item.time}_${index}`}
            data={item}
            index={index}
            isSelected={isSelectedHour(index)}
            onPress={() => weatherStore.selectHour(index)}
          />
        ))}
      </Animated.ScrollView> */}
    </Animated.View>
  );
});

export default WeatherHours;
