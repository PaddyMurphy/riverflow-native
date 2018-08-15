import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Riverflow from './src/components/Riverflow';
// prevent warning: disable warning while in dev
// or use external debugger in separate window (not tab)
console.ignoredYellowBox = ['Remote debugger'];

export default class App extends React.Component {
  render() {
    return <Riverflow />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
