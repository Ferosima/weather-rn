import { appStore } from '@mobx/appStore';
import { observer } from 'mobx-react';
import React, { ReactNode, useMemo } from 'react';
import { StyleProp, TouchableOpacity, ViewStyle } from 'react-native';
import { styles } from './styles';

type Props = {
  style?: StyleProp<ViewStyle>;
  animatedStyle?: StyleProp<ViewStyle>;
  children?: ReactNode;
  onPress?: () => void;
};

const Card = observer((props: Props) => {
  const theme = useMemo(() => appStore.theme.card, [appStore.theme]);

  return (
    <TouchableOpacity onPress={props.onPress} disabled={!props.onPress} style={[styles.touchable, theme, props.style]}>
      {props.children}
    </TouchableOpacity>
  );
});

export default Card;
