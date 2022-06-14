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

  const params = useMemo(() => props.route.params, [props.route.params]);

  const onClose = useCallback(async () => {
    await sheetRef.current.close();
    await navigation.ref.goBack();
    if (params.onClose) params.onClose();
  }, []);

  // render
  return (
    <View style={styles.container}>
      <BottomSheet
        ref={sheetRef}
        snapPoints={params.snapPoints}
        backdropComponent={ModalBackdrop}
        style={{ overflow: 'hidden' }}
        onClose={onClose}
        enablePanDownToClose
        backgroundStyle={{ backgroundColor: theme.backgroundColor }}>
        <SafeAreaView style={[styles.contentContainer]} edges={['bottom']}>
          {params.title ? (
            <Text preset="black" style={styles.title}>
              {params.title}
            </Text>
          ) : null}
          {params.content}
        </SafeAreaView>
      </BottomSheet>
    </View>
  );
});

export default Modal;
