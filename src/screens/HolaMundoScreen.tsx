import React from 'react';
import {View, Text} from 'react-native';

const HolaMundoScreen = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center'}}>
      <Text style={{fontSize: 45, textAlign: 'center'}}>
        Hola mundo, mi primera App
      </Text>
    </View>
  );
};

export default HolaMundoScreen;
