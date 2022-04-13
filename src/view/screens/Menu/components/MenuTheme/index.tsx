import Text from '@components/Text';
import { appStore } from '@mobx/appStore';
import { observer } from 'mobx-react';
import React, { useCallback } from 'react';
import Animated, { BaseAnimationBuilder, EntryExitAnimationFunction } from 'react-native-reanimated';
import ToggleSwitch from 'toggle-switch-react-native';
import { styles } from './styles';

type Props = { entering?: BaseAnimationBuilder | typeof BaseAnimationBuilder | EntryExitAnimationFunction | Keyframe };

const MenuTheme = observer((props: Props) => {
  const onToggle = useCallback(isOn => {
    appStore.setThemeScheme(isOn ? 'dark' : 'light');
  }, []);

  return (
    <Animated.View style={styles.wrapper} entering={props.entering}>
      <Text preset="dark" style={styles.text}>
        Dark mode
      </Text>
      <ToggleSwitch isOn={appStore.scheme === 'dark'} onColor="#4A6ADA" offColor="#D9D9D9" onToggle={onToggle} />
    </Animated.View>
  );
});

export default MenuTheme;
