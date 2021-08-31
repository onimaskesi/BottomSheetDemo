import React from 'react';
import {View, Text} from 'react-native';

export default ({children, style}) => {
  return (
    <View
      style={{
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'black',
      }}>
      <Text style={[{fontSize: 20, padding: 10, color: 'white'}, style]}>
        {children}
      </Text>
    </View>
  );
};
