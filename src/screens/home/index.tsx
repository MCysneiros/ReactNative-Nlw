import React from 'react';

import { View } from 'react-native';
import { Header } from '../../components/header/index';
import { Styles } from './style';

export function Home() {
  return (
    <View style={Styles.container}>
      <Header />
    </View>
  );
}
