import { SCREENS } from '@constants/screens';
import { appStore } from '@mobx/appStore';
import MenuOption from '@screens/Menu/components/MenuOption';
import { navigation } from '@utils/navigation';
import { observer } from 'mobx-react';
import React, { useCallback } from 'react';
import { BaseAnimationBuilder, EntryExitAnimationFunction } from 'react-native-reanimated';
import MenuThemeList from './components/MenuThemeList';

type Props = { entering?: BaseAnimationBuilder | typeof BaseAnimationBuilder | EntryExitAnimationFunction | Keyframe };

const MenuTheme = observer((props: Props) => {
  const onToggle = useCallback(() => {
    navigation.navigate(SCREENS.MODAL, { snapPoints: ['25%'], content: <MenuThemeList /> });
  }, [appStore.scheme]);

  return <MenuOption label="Theme" value={appStore.scheme} entering={props.entering} onPress={onToggle} />;
});

export default MenuTheme;
