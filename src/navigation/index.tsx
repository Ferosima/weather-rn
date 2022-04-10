import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { observer } from 'mobx-react';
import React from 'react';
import { SCREENS } from '@constants/screens';
import { navigation } from '@utils/navigation';
import ErrorModal from '@containers/ErrorModal';
import WeatherScreen from '@screens/Weather';
import { MainStackParamList } from '@types/navigators';
import { appStore } from '@mobx/appStore';
import SearchScreen from '@screens/Search';
import MenuScreen from '@screens/Search';
import BottomBar from '@containers/BottomBar';
import BottomTabNavigator from './bottomBar';

const Main = createNativeStackNavigator<MainStackParamList>();

const MainStackNavigator = observer(props => {
  return (
    <NavigationContainer
      ref={navigation.ref}
      onReady={() => {
        appStore.setCurrentScreen(navigation.ref.current.getCurrentRoute().name);
      }}>
      <Main.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Main.Screen name={SCREENS.APP} component={BottomTabNavigator} />
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
