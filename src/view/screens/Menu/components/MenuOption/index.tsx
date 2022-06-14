import Card from '@components/Card';
import Icon from '@components/Icon';
import Text from '@components/Text';
import { appStore } from '@mobx/appStore';
import { observer } from 'mobx-react';
import React, { useCallback } from 'react';
import { View } from 'react-native';
import Animated, { BaseAnimationBuilder, EntryExitAnimationFunction } from 'react-native-reanimated';
import ToggleSwitch from 'toggle-switch-react-native';
import { styles } from './styles';

type Props = {
  entering?: BaseAnimationBuilder | typeof BaseAnimationBuilder | EntryExitAnimationFunction | Keyframe;
  label: string;
  value?: string;
  onPress: () => void;
};

const MenuOption = ({ entering, label, value, onPress }: Props) => {
  const onToggle = useCallback(isOn => {
    appStore.setThemeScheme(isOn ? 'dark' : 'light');
  }, []);

  return (
    <Animated.View entering={entering}>
      <Card preset="light" style={styles.wrapper} onPress={onPress}>
        <View>
          <Text preset="dark" style={styles.label}>
            {label}
          </Text>
          <Text preset="default" style={styles.value}>
            {value}
          </Text>
        </View>
        <Icon name="chevron" preset="inactive" size={16} />
      </Card>
    </Animated.View>
  );
};

export default MenuOption;
