import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Header from './components/header';

const App = () => {
  return (
    <View style={styles.containor}>
      <Header />
    </View>
  );
};

const styles = StyleSheet.create({
  containor: {flex: 1},
});

export default App;
