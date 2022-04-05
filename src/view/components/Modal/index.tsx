import BottomSheet, { BottomSheetProps } from '@gorhom/bottom-sheet';
import React from 'react';
import ModalBackdrop from './ModalBackdrop';

const Modal: React.FC<BottomSheetProps> = React.forwardRef<BottomSheet, BottomSheetProps>((props: BottomSheetProps, ref) => {
  return (
    <BottomSheet
      {...props}
      ref={ref}
      //   backgroundComponent={ModalBackground}
      backdropComponent={ModalBackdrop}
      enablePanDownToClose
      // keyboardBehavior={'extend'}
      keyboardBlurBehavior={'restore'}>
      {props.children}
    </BottomSheet>
  );
});

export default Modal;
