import BottomBar from '@containers/BottomBar';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MenuScreen from '@screens/Search';
import SearchScreen from '@screens/Search';
import { BottomTabParamList } from '@types/navigators';
import React from 'react';
import { SCREENS } from '../common/constants/screens';
import WeatherScreen from '../view/screens/Weather';

const BottomBarStack = createBottomTabNavigator<BottomTabParamList>();

const BottomTabNavigator = props => {
  return (
    <BottomBarStack.Navigator
      tabBar={() => <BottomBar />}
      screenOptions={{
        headerShown: false,
      }}>
      <BottomBarStack.Screen name={SCREENS.WEATHER} component={WeatherScreen} options={{ unmountOnBlur: true }} />
      <BottomBarStack.Screen name={SCREENS.SEARCH} component={SearchScreen} options={{ unmountOnBlur: true }} />
      <BottomBarStack.Screen name={SCREENS.MENU} component={MenuScreen} options={{ unmountOnBlur: true }} />
    </BottomBarStack.Navigator>
  );
};

export default BottomTabNavigator;
