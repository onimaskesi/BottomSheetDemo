import React from 'react';
import {View, Text} from 'react-native';

export default ({children}) => {
  return (
    <View style={{borderWidth: 15}}>
      <Text style={{fontSize: 20, alignSelf: 'center'}}>{children}</Text>
    </View>
  );
};
