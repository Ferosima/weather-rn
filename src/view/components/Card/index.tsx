import { appStore } from '@mobx/appStore';
import { observer } from 'mobx-react';
import React, { ReactNode, useMemo } from 'react';
import { StyleProp, TouchableOpacity, ViewStyle } from 'react-native';
import { styles } from './styles';

type Props = {
  style?: StyleProp<ViewStyle>;
  animatedStyle?: StyleProp<ViewStyle>;
  preset?: string;
  children?: ReactNode;
  onPress?: () => void;
};

const Card = observer(({ style, animatedStyle, preset, children, onPress }: Props) => {
  const theme = useMemo(() => appStore.theme.card[preset ?? 'default'], [appStore.theme, preset]);

  return (
    <TouchableOpacity onPress={onPress} disabled={!onPress} style={[styles.touchable, theme, style]}>
      {children}
    </TouchableOpacity>
  );
});

export default Card;
