import { View } from 'react-native';
import React, { useMemo } from 'react';
import { IconsId } from '@assets/fonts/Icons/Icons';
import Icon from '@components/Icon';
import { styles } from './styles';
import { appStore } from '@mobx/appStore';
import { observer } from 'mobx-react-lite';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Text from '@components/Text';

type Props = { label: string; onPress: () => void; icon: IconsId; selected?: boolean; color: string };

const MenuThemeOption = observer(({ label, onPress, icon, selected, color }: Props) => {
  const theme = useMemo(() => appStore.theme.option.active, [appStore.theme]);
  return (
    <TouchableOpacity style={styles.wrapper} onPress={onPress}>
      <View style={styles.row}>
        <Icon name={icon} size={24} color={color} />
        <Text preset="black" style={styles.label}>
          {label}
        </Text>
      </View>
      {selected ? (
        <View style={[styles.selected, { backgroundColor: theme.backgroundColor }]}>
          <Icon name="done" color={theme.color} size={24} />
        </View>
      ) : null}
    </TouchableOpacity>
  );
});

export default MenuThemeOption;
