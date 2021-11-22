/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {SafeAreaView} from 'react-native';

// import ContadorScreen from './src/screens/ContadorScreen';
// import BoxObjectModelScreen from './src/screens/BoxObjectModelScreen';
// import DimensionesScreen from './src/screens/DimensionesScreen';
import PositionScreen from './src/screens/PositionScreen';

const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <PositionScreen />
    </SafeAreaView>
  );
};

export default App;
