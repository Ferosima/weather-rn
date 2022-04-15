import { StatusBar as RNStatusBar } from 'react-native';
import React, { useMemo } from 'react';
import { observer } from 'mobx-react-lite';
import { appStore } from '@mobx/appStore';
import { SafeAreaView } from 'react-native-safe-area-context';

type Props = {};

const StatusBar: React.FC<Props> = observer(() => {
  const barStyle = useMemo(() => (appStore.scheme !== 'dark' ? 'dark-content' : 'light-content'), [appStore.scheme]);

  return <RNStatusBar animated translucent backgroundColor="red" barStyle={barStyle} />;
});

export default StatusBar;
