import Card from '@components/Card';
import Icon from '@components/Icon';
import Text from '@components/Text';
import { appStore } from '@mobx/appStore';
import { TxKeyPath } from '@types/language';
import React, { useCallback } from 'react';
import { View } from 'react-native';
import Animated, { BaseAnimationBuilder, EntryExitAnimationFunction } from 'react-native-reanimated';
import { styles } from './styles';

type Props = {
  entering?: BaseAnimationBuilder | typeof BaseAnimationBuilder | EntryExitAnimationFunction | Keyframe;
  title: TxKeyPath;
  subtitle?: TxKeyPath;
  onPress: () => void;
};

const MenuOption = ({ entering, title, subtitle, onPress }: Props) => {
  const onToggle = useCallback(isOn => {
    appStore.setThemeScheme(isOn ? 'dark' : 'light');
  }, []);

  return (
    <Animated.View entering={entering}>
      <Card preset="light" style={styles.wrapper} onPress={onPress}>
        <View>
          <Text preset="dark" style={styles.label} t={title}/>
          <Text preset="default" style={styles.value} t={subtitle}/>
        </View>
        <Icon name="chevron" preset="inactive" size={16} />
      </Card>
    </Animated.View>
  );
};

export default MenuOption;
