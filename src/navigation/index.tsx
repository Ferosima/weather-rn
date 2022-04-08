import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { observer } from 'mobx-react';
import React from 'react';
import { SCREENS } from '@constants/screens';
import { navigationRef } from '@utils/navigation';
import ErrorModal from '@containers/ErrorModal';
import WeatherScreen from '@screens/Weather';
import { MainStackParamList } from '@types/navigators';

const Main = createNativeStackNavigator<MainStackParamList>();

const MainStackNavigator = observer(props => {
  return (
    <NavigationContainer ref={navigationRef}>
      <Main.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Main.Screen name={SCREENS.WEATHER} component={WeatherScreen} />
        <Main.Screen
          name={SCREENS.ERROR}
          component={ErrorModal}
          options={{
            animation: 'none',
            presentation: 'transparentModal',
          }}
        />
      </Main.Navigator>
    </NavigationContainer>
  );
});
export default MainStackNavigator;
