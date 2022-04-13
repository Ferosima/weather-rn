import Box from '@components/Box';
import { observer } from 'mobx-react';
import React, { useMemo } from 'react';
import { KeyboardAvoidingView, Platform } from 'react-native';
import { FadeInDown } from 'react-native-reanimated';
import { SafeAreaView } from 'react-native-safe-area-context';
import SearchCities from './components/SearchCities';
import SearchInput from './components/SearchInput';
import { styles } from './styles';

type Props = {};

const SearchScreen = observer((props: Props) => {
  const delayRender = useMemo(() => 200, []);

  return (
    <Box edges={['top']} style={styles.wrapper}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 20 : 115}>
        <SearchCities entering={FadeInDown.duration(400).delay(1 * delayRender)} />
        <SearchInput entering={FadeInDown.duration(400).delay(2 * delayRender)} />
      </KeyboardAvoidingView>
    </Box>
  );
});

export default SearchScreen;
