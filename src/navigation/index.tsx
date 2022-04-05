import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SCREENS } from '@src/common/constants/screens';
import { MainStackParamList } from '@src/common/types/navigators';
import { navigationRef } from '@src/common/utils/navigation';
import ErrorModal from '@src/view/containers/ErrorModal';
import WeatherScreen from '@src/view/screens/Weather';
import { observer } from 'mobx-react';
import React from 'react';

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
