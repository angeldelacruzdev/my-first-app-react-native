import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const BoxObjectModelScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Box Object Model</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    borderWidth: 2,
    padding: 4,
    marginTop: 20,
  },
});
export default BoxObjectModelScreen;
