import Icon from '@components/Icon';
import Text from '@components/Text';
import { appStore } from '@mobx/appStore';
import { TxKeyPath } from '@types/language';
import { observer } from 'mobx-react-lite';
import React, { useMemo } from 'react';
import { View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { translate } from 'src/common/languages';
import { styles } from './styles';

type Props = { t: TxKeyPath; onPress: () => void; selected?: boolean };

const MenuLanguageOption = observer(({ t, onPress, selected }: Props) => {
  const theme = useMemo(() => appStore.theme.option.active, [appStore.theme]);
  return (
    <TouchableOpacity style={styles.wrapper} onPress={onPress}>
      <View>
        <Text preset="black" style={styles.title} t={t} />
        <Text preset="default" style={styles.subtitle}>
          {translate(t, t)}
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

export default MenuLanguageOption;
