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
  const onPress = useCallback(() => {
    navigation.navigate(SCREENS.MODAL, { snapPoints: ['25%'], Content: MenuThemeList });
  }, [appStore.scheme]);

  return <MenuOption title="theme" subtitle={appStore.scheme} entering={props.entering} onPress={onPress} />;
});

export default MenuTheme;
