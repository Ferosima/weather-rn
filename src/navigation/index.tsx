import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { SCREENS } from '@constants/screens';
import ErrorModal from '@containers/ErrorModal';
import Modal from '@containers/Modal';
import { appStore } from '@mobx/appStore';
import { MainStackParamList } from '@types/navigators';
import { navigation } from '@utils/navigation';
import { observer } from 'mobx-react';
import React from 'react';
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
         <Main.Screen
          name={SCREENS.MODAL}
          component={Modal}
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
