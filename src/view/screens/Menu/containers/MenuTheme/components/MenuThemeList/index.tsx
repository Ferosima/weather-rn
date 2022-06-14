import { View } from 'react-native';
import React, { useCallback } from 'react';
import MenuThemeOption from '../MenuThemeOption';
import { appStore } from '@mobx/appStore';
import { IconsId } from '@assets/fonts/Icons/Icons';
import { observer } from 'mobx-react';
import Text from '@components/Text';
import { styles } from './styles';

type Props = {};
type TTheme = { label: string; icon: IconsId; color: string; scheme: string };
const themes: TTheme[] = [
  { label: 'Dark', icon: 'moon', scheme: 'dark', color: '#BAC7CB' },
  { label: 'Light', icon: 'sun', scheme: 'light', color: '#FFA900' },
];

const MenuThemeList = observer((props: Props) => {
  const onPress = useCallback(
    sheme => () => {
      appStore.setThemeScheme(sheme);
    },
    [appStore.scheme],
  );

  const isSelected = useCallback(scheme => scheme == appStore.scheme, [appStore.scheme]);

  return (
    <View style={styles.wrapper}>
      <Text preset="black" style={styles.title}>
        Themes
      </Text>
      <View style={styles.content}>
        {themes.map(({ scheme, ...theme }) => (
          <MenuThemeOption {...theme} selected={isSelected(scheme)} onPress={onPress(scheme)} />
        ))}
      </View>
    </View>
  );
});

export default MenuThemeList;
