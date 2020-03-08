/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import FlatListControlView from './src/components/FlatListControlView';
import SectionListControlView from './src/components/SectionListControlView';
import ScrollViewControl from './src/components/ScrollViewControl';

const App = () => {
  return (
    <>
      {/* <FlatListControlView /> */}

      {/* <SectionListControlView /> */}
      <ScrollViewControl />
    </>
  );
};


export default App;
