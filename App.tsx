import { BottomSheetModal, BottomSheetView } from '@gorhom/bottom-sheet';
import { create } from 'mobx-persist';
import { Provider } from 'mobx-react';
import React, { useEffect, useState } from 'react';
import { AsyncStorage, Text } from 'react-native';
import { BottomSheet } from 'react-native-elements/dist/bottomSheet/BottomSheet';
import mainStore from './src/mobx';
import { weatherStore } from './src/mobx/weatherStore';
import MainNavigator from './src/navigation';
import Loader from './src/view/components/Loader';
import ErrorModal from './src/view/containers/ErrorModal';

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

  if (loading) return <Loader />;

  return (
    <Provider {...mainStore}>
      <MainNavigator />
    </Provider>
  );
};

export default App;
