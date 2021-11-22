import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const PositionScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.cajaMorada} />
      <View style={styles.cajaNaranja} />
      <View style={styles.cajaVerde} />
      <View style={styles.cajaVerde} />
      <View style={styles.cajaRoja} />
    </View>
  );
};

export default PositionScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#28C4D9',
    // justifyContent: 'center',
    // alignItems: 'center',
  },

  cajaMorada: {
    width: 100,
    height: 100,
    backgroundColor: '#591491',
    borderWidth: 10,
    borderColor: 'white',
    position: 'absolute',
    bottom: 0,
  },
  cajaNaranja: {
    width: 100,
    height: 100,
    backgroundColor: '#EB6B0E',
    borderWidth: 10,
    borderColor: 'white',
  },
  cajaVerde: {
    width: 100,
    height: 100,
    backgroundColor: '#67DD5C',
    borderWidth: 10,
    borderColor: 'white',
    position: 'absolute',
    bottom: 0,
    right: 0,
  },
  cajaRoja: {
    width: 100,
    height: 100,
    backgroundColor: '#DD6B5C',
    borderWidth: 10,
    borderColor: 'white',
    position: 'absolute',
    top: 0,
    right: 0,
  },
});
