import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const App = () => {
  return (
    <View style={styles.containor}>
      <Text style={styles.text}>Hello World!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  containor: {flex: 1, justifyContent: 'center', alignItems: 'center'},
  text: {color: 'darkslateblue', fontSize: 20},
});

export default App;
