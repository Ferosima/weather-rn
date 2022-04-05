import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet';
import { navigationRef } from '@src/common/utils/navigation';
import { weatherStore } from '@src/mobx/weatherStore';
import ModalBackdrop from '@src/view/components/Modal/ModalBackdrop';
import { observer } from 'mobx-react-lite';
import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { Button, Text, TouchableOpacity, View } from 'react-native';
import { styles } from './styles';

type Props = { error: string; onClose?: () => void; route: any };

const ErrorModal = observer((props: Props) => {
  const sheetRef = useRef<BottomSheet>(null);
  const snapPoints = useMemo(() => ['25%'], []);

  const params = useMemo(() => props.route.params, [props.route.params]);

  const onClose = useCallback(() => {
    if (params.onClose) params.onClose();
    navigationRef.goBack();
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
        backdropComponent={ModalBackdrop}>
        <View style={styles.contentContainer}>
          <Text style={styles.title}>{params.title}</Text>
          <TouchableOpacity style={styles.button} onPress={onClose}>
            <Text style={styles.buttonText}>Close</Text>
          </TouchableOpacity>
        </View>
      </BottomSheet>
    </View>
  );
});

export default ErrorModal;
