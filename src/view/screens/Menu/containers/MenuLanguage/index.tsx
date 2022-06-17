import { SCREENS } from '@constants/screens';
import { appStore } from '@mobx/appStore';
import MenuOption from '@screens/Menu/components/MenuOption';
import { navigation } from '@utils/navigation';
import { observer } from 'mobx-react';
import React, { useCallback } from 'react';
import { BaseAnimationBuilder, EntryExitAnimationFunction } from 'react-native-reanimated';
import MenuLanguageList from './components/MenuLanguageList';

type Props = { entering?: BaseAnimationBuilder | typeof BaseAnimationBuilder | EntryExitAnimationFunction | Keyframe };

const MenuLanguage = observer((props: Props) => {
  const onPress = useCallback(() => {
    navigation.navigate(SCREENS.MODAL, { snapPoints: ['60%'], Content: MenuLanguageList });
  }, [appStore.language]);

  return <MenuOption title="language" subtitle={appStore.language} entering={props.entering} onPress={onPress} />;
});

export default MenuLanguage;
