import Button from '@components/Button';
import ModalBackdrop from '@components/ModalBackdrop';
import Text from '@components/Text';
import BottomSheet from '@gorhom/bottom-sheet';
import { appStore } from '@mobx/appStore';
import { delay } from '@utils/';
import { navigation } from '@utils/navigation';
import { observer } from 'mobx-react-lite';
import React, { ReactNode, useCallback, useMemo, useRef } from 'react';
import { View } from 'react-native';
import Animated from 'react-native-reanimated';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from './styles';

type Props = { route: any };
export type TModalParams = {
  content?: ReactNode;
  title?: string;
  snapPoints: Array<string | number> | Animated.SharedValue<Array<string | number>>;
  onClose?: () => void;
};

const Modal = observer((props: Props) => {
  const theme = useMemo(() => appStore.theme.modal, [appStore.theme]);
  const sheetRef = useRef<BottomSheet>(null);
  const modal = useRef(props.route.params).current;

  // const onClose = useCallback(async () => {
  //   await sheetRef.current.close();
  //   await delay(350);
  //   await navigation.ref.goBack();
  //   if (modal.onClose) modal.onClose();
  // }, []);

  const onClose = useCallback(() => {
    if (modal.onClose) modal.onClose();
    navigation.ref.goBack();
  }, []);

  const closeModal = useCallback(async () => {
    sheetRef.current?.close();
    await delay(350);
  }, []);

  const onOptionPress = cb => {
    closeModal();
    setTimeout(cb, 350);
  };

  // render
  return (
    <View style={styles.container}>
      <BottomSheet
        ref={sheetRef}
        snapPoints={modal.snapPoints}
        backdropComponent={ModalBackdrop}
        style={{ overflow: 'hidden' }}
        onClose={onClose}
        enablePanDownToClose
        backgroundStyle={{ backgroundColor: theme.backgroundColor }}>
        <SafeAreaView style={[styles.contentContainer]} edges={['bottom']}>
          {modal.title ? (
            <Text preset="black" style={styles.title}>
              {modal.title}
            </Text>
          ) : null}
          {modal.Content ? <modal.Content closeModal={onClose} onOptionPress={onOptionPress} /> : null}
        </SafeAreaView>
      </BottomSheet>
    </View>
  );
});

export default Modal;
