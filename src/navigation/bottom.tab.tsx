import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { BottomTabParamList } from '@src/common/types/navigators';
import Icon from '@src/view/components/Icon';
import ErrorModal from '@src/view/containers/ErrorModal';
import React from 'react';
import { SCREENS } from '../common/constants/screens';
import WeatherScreen from '../view/screens/Weather';

const Main = createBottomTabNavigator<BottomTabParamList>();

const BottomTabNavigator = props => {
  return (
    <Main.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Main.Screen
        name={SCREENS.WEATHER}
        component={WeatherScreen}
        options={{
          tabBarIcon: () => <Icon name={'weather'} size={24} color={'#203789'} />,
          tabBarLabelStyle: {
            color: '#203789',
            fontFamily: 'Comfortaa-Light',
            textTransform: 'capitalize',
            fontSize: 14,
          },
        }}
      />
    </Main.Navigator>
  );
};

export default BottomTabNavigator;
