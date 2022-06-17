import { View } from 'react-native';
import React, { useCallback } from 'react';
import MenuThemeOption from '../MenuThemeOption';
import { appStore } from '@mobx/appStore';
import { IconsId } from '@assets/fonts/Icons/Icons';
import { observer } from 'mobx-react';
import Text from '@components/Text';
import { styles } from './styles';
import { translate } from 'src/common/languages';

type Props = {};

type TTheme = { label: string; icon: IconsId; color: string; scheme: string };

const themes: TTheme[] = [
  { label: 'dark', icon: 'moon', scheme: 'dark', color: '#BAC7CB' },
  { label: 'light', icon: 'sun', scheme: 'light', color: '#FFA900' },
];

const MenuThemeList = observer((props: Props) => {
  const onPress = useCallback(
    scheme => () => {
      props.onOptionPress(() => appStore.setThemeScheme(scheme));
    },
    [appStore.scheme],
  );

  const isSelected = useCallback(scheme => scheme == appStore.scheme, [appStore.scheme]);

  return (
    <View style={styles.wrapper}>
      <Text preset="black" style={styles.title} t="themes" />
      <View style={styles.content}>
        {themes.map(({ scheme, ...theme }) => (
          <MenuThemeOption {...theme} selected={isSelected(scheme)} onPress={onPress(scheme)} />
        ))}
      </View>
    </View>
  );
});

export default MenuThemeList;
