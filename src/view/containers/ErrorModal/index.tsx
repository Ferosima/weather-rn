import Button from '@components/Button';
import ModalBackdrop from '@components/ModalBackdrop';
import Text from '@components/Text';
import BottomSheet from '@gorhom/bottom-sheet';
import { appStore } from '@mobx/appStore';
import { navigation } from '@utils/navigation';
import { observer } from 'mobx-react-lite';
import React, { useCallback, useMemo, useRef } from 'react';
import { View } from 'react-native';
import { styles } from './styles';

type Props = { error: string; onClose?: () => void; route: any };

const ErrorModal = observer((props: Props) => {
  const theme = useMemo(() => appStore.theme.modal, [appStore.theme]);
  const sheetRef = useRef<BottomSheet>(null);
  const snapPoints = useMemo(() => ['25%'], []);

  const params = useMemo(() => props.route.params, [props.route.params]);

  const onClose = useCallback(() => {
    if (params.onClose) params.onClose();
    navigation.ref.goBack();
  }, []);

  // render
  return (
    <View style={styles.container}>
      <BottomSheet
        ref={sheetRef}
        snapPoints={snapPoints}
        bottomInset={46}
        detached={true}
        style={styles.sheetContainer}
        backdropComponent={ModalBackdrop}
        backgroundStyle={{ backgroundColor: theme.backgroundColor }}>
        <View style={styles.contentContainer}>
          <Text preset="black" style={styles.title}>
            {params.title}
          </Text>
          <View style={{ width: '100%' }}>
            <Button t="close" style={styles.button} preset="inactive" onPress={onClose} />
          </View>
        </View>
      </BottomSheet>
    </View>
  );
});

export default ErrorModal;
