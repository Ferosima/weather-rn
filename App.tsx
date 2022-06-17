import { create } from 'mobx-persist';
import { Provider } from 'mobx-react';
import React, { useEffect, useState } from 'react';
import { AsyncStorage, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import mainStore from './src/mobx';
import MainNavigator from './src/navigation';
import Loader from './src/view/components/Loader';
import StatusBar from './src/view/containers/StatusBar';
// Moment localization
import 'moment/locale/uk';
import 'moment/locale/ru';
import 'moment/locale/pl';
import 'moment/locale/de';
import 'moment/locale/fr';

import { LogBox } from 'react-native';
LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
LogBox.ignoreAllLogs(); //Ignore all log notifications

const App = () => {
  const [loading, setLoading] = useState(Boolean);

  useEffect(() => {
    loadSources();
  }, []);

  const loadSources = async () => {
    setLoading(true);
    await hydrateStores();
    setLoading(false);
  };

  const hydrate = create({
    storage: AsyncStorage,
    jsonify: true,
  });

  const hydrateStores = async () => {
    try {
      // hydrate all stores
      await Promise.all(
        Object.entries(mainStore).map(async ([key, store]) => {
          if (!store) {
            return;
          }
          await hydrate(key, store);
          if (store.afterHydration) {
            await store.afterHydration();
          }
        }),
      );
    } catch (error) {
      console.log({ error });
    }
  };

  if (loading)
    return (
      <View style={{ flex: 1, backgroundColor: '#fff' }}>
        <Loader />
      </View>
    );

  return (
    <SafeAreaProvider style={{ flex: 1, backgroundColor: '#fff' }}>
      <StatusBar />
      <Provider {...mainStore}>
        <MainNavigator />
      </Provider>
    </SafeAreaProvider>
  );
};

export default App;
