/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {StyleSheet, View} from 'react-native';

import {Metrics} from './constants';
import {Chat} from './screens';

const App = () => (
  <View id="root">
    <Chat />
  </View>
);

export default App;

const styles = StyleSheet.create({
  root: {
    width: Metrics.screenWidth,
    height: Metrics.screenHeight,
  },
});
