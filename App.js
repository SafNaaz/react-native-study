import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

const App = () => {
  return (
    <View style={styles.containor}>
      <Text style={styles.text}>Hello World!</Text>
      <Image
        source={{uri: 'https://randomuser.me/api/portraits/men/1.jpg'}}
        style={styles.img}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  containor: {flex: 1, justifyContent: 'center', alignItems: 'center'},
  text: {color: 'darkslateblue', fontSize: 20},
  img: {
    width: 100,
    height: 100,
    borderRadius: 30, //from 0 to 100
  },
});

export default App;
