import Box from '@components/Box';
import BottomBar from '@containers//BottomBar';
import { weatherStore } from '@mobx//weatherStore';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { MainStackParamList } from '@types//navigators';
import { navigation, navigationRef } from '@utils/navigation';
import { observer } from 'mobx-react-lite';
import React, { useEffect, useMemo, useRef } from 'react';
import { AppState, AppStateStatus, RefreshControl, ScrollView } from 'react-native';
import { FadeInDown } from 'react-native-reanimated';
import { SafeAreaView } from 'react-native-safe-area-context';
import { SCREENS } from '../../../common/constants/screens';
import WeatherDays from './components/WeatherDays';
import WeatherEmpty from './components/WeatherEmpty';
import WeatherHeader from './components/WeatherHeader';
import WeatherHours from './components/WeatherHours';
import WeatherInfo from './components/WeatherInfo';
import { styles } from './styles';

interface IBrandsProps extends NativeStackNavigationProp<MainStackParamList, SCREENS.APP> {
  navigation: any;
}

const WeatherScreen = observer((props: IBrandsProps) => {
  const appState = useRef<AppStateStatus>(AppState.currentState);
  const delayRender = useMemo(() => 200, []);

  // Update if app was inactive or background
  useEffect(() => {
    const subscription = AppState.addEventListener('change', nextAppState => {
      if (appState.current.match(/inactive|background/) && nextAppState === 'active') {
        weatherStore.fetchWeather();
      }
      appState.current = nextAppState;
    });

    return () => {
      subscription.remove();
    };
  }, []);

  // Go to Modal
  useEffect(() => {
    if (weatherStore.error) navigation.navigate(SCREENS.ERROR, { title: weatherStore.error, onClose: weatherStore.clearError });
  }, [weatherStore.error]);

  return (
    <Box edges={['top']} style={styles.wrapper}>
      {weatherStore.forecast ? (
        <>
          <ScrollView
            contentContainerStyle={styles.content}
            showsVerticalScrollIndicator={false}
            refreshControl={<RefreshControl refreshing={weatherStore.loading} onRefresh={weatherStore.fetchWeather} />}>
            {/* Temperature */}
            <WeatherHeader style={styles.header} entering={FadeInDown.duration(400).delay(1 * delayRender)} />

            {/* Humidity & Wind & Pressure */}
            <WeatherInfo style={styles.info} entering={FadeInDown.duration(400).delay(2 * delayRender)} />

            {/* Hourly Forecast */}
            <WeatherHours style={styles.hours} entering={FadeInDown.duration(400).delay(3 * delayRender)} />

            {/* Dayly Forecast */}
            <WeatherDays entering={FadeInDown.duration(400).delay(4 * delayRender)} />
          </ScrollView>
        </>
      ) : (
        <WeatherEmpty />
      )}
    </Box>
  );
});

export default WeatherScreen;
