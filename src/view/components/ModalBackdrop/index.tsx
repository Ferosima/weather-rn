import { StyleSheet, Text, View } from 'react-native';
import React, { useMemo } from 'react';
import { observer } from 'mobx-react';
import { appStore } from '@mobx/appStore';

type Props = {};

const ModalBackdrop = observer((props: Props) => {
  const theme = useMemo(() => appStore.theme.modal.backdrop, [appStore.theme]);
  return <View style={[styles.wrapper, theme]} />;
});

export default ModalBackdrop;

const styles = StyleSheet.create({
  wrapper: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    width: '100%',
    opacity: 0.1,
    backgroundColor: 'white',
  },
});
