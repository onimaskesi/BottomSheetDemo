import React, {useState} from 'react';
import {View} from 'react-native';
import CustomCard from './components/CustomCard';

const getHeight = () => {
  <View
    onLayout={event => {
      var {height} = event.nativeEvent.layout;
      console.log(height);
    }}>
    <CustomCard />
  </View>;
};

export default getHeight;
