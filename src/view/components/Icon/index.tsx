import { appStore } from '@mobx/appStore';
import { TTheme } from '@types/themes';
import { observer } from 'mobx-react';
import React, { useMemo } from 'react';
import { StyleProp, TextProps, TextStyle } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { createIconSet } from 'react-native-vector-icons';
import config from '../../../../assets/fonts/Icons/Icons.json';
import { IconsId } from '@assets/fonts/Icons/Icons';

export interface IconProps extends TextProps {
  name: IconsId;
  size?: number;
  style?: StyleProp<TextStyle>;
  revert?: boolean;
  color?: string;
  preset?: keyof TTheme['icon'];
  onPress?: () => void;
}

const FIcon = createIconSet(config, 'Icons');

const Icon = observer(({ name, size, onPress, preset, color, ...props }: IconProps) => {
  const theme_color = useMemo(() => appStore.theme.icon[preset || 'default'].color, [appStore.theme, preset]);

  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <FIcon {...props} color={color || theme_color} name={name} size={size} />
    </TouchableWithoutFeedback>
  );
});

export default Icon;
