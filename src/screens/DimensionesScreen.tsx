import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Dimensions,
  useWindowDimensions,
} from 'react-native';

// const {height, width} = Dimensions.get('window');

const DimensionesScreen = () => {
  const {height, width} = useWindowDimensions();
  return (
    <View>
      <View style={styles.container}>
        <View style={{...styles.cajaMorada, width: width * 0.5}} />
        <View style={styles.cajaNaranja} />
      </View>
      <Text style={styles.titulo}>H: {height}</Text>
      <Text style={styles.titulo}>W: {width}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 200,
    backgroundColor: 'red',
  },
  cajaMorada: {
    backgroundColor: '#381A78',
    // width: '50%',
    height: '50%',
  },
  cajaNaranja: {
    backgroundColor: '#D4690A',
    width: '50%',
    height: '20%',
  },
  titulo: {
    fontSize: 24,
  },
});

export default DimensionesScreen;
