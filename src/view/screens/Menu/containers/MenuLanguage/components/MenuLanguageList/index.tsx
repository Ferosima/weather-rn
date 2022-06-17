import { IconsId } from '@assets/fonts/Icons/Icons';
import Text from '@components/Text';
import { appStore } from '@mobx/appStore';
import { weatherStore } from '@mobx/weatherStore';
import { observer } from 'mobx-react';
import React, { useCallback } from 'react';
import { View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { languages } from 'src/common/languages';
import MenuLanguageOption from '../MenuLanguageOption';
import { styles } from './styles';

type Props = {};

const array: [] = Object.keys(languages);

const MenuLanguageList = observer((props: Props) => {
  const onPress = useCallback(
    language => () => {
      props.onOptionPress(() => {
        appStore.setLanguage(language);
        weatherStore.fetchWeather();
      });
    },
    [appStore.language],
  );

  const isSelected = useCallback(language => language == appStore.language, [appStore.language]);

  return (
    <View style={styles.wrapper}>
      <Text preset="black" style={styles.title} t="language" />
      <ScrollView style={styles.content}>
        {array.map(language => (
          <MenuLanguageOption t={language} selected={isSelected(language)} onPress={onPress(language)} />
        ))}
      </ScrollView>
    </View>
  );
});

export default MenuLanguageList;
