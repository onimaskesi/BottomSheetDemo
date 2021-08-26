import React, {useState} from 'react';
import {Dimensions, ScrollView, View} from 'react-native';
import BottomSheet from './components/BottomSheet';
import Button from './components/Button';
import CustomCard from './components/CustomCard';
import Text from './components/Text';

export default () => {
  const [isShowing, setIsShowing] = useState(false);

  const openBottomSheet = () => {
    setIsShowing(!isShowing);
  };

  return (
    <>
      <ScrollView style={{flex: 1}}>
        <Text>onimaskesi</Text>
        <Text>onimaskesi</Text>
        <Text>onimaskesi</Text>
        <Button title="show the bottom sheet" onPress={openBottomSheet} />
        <Text>onimaskesi</Text>
        <Text>onimaskesi</Text>
        <Text>onimaskesi</Text>
        <Text>onimaskesi</Text>
        <Text>onimaskesi</Text>
        <Text>onimaskesi</Text>
        <Text>onimaskesi</Text>
        <Text>onimaskesi</Text>
        <Text>onimaskesi</Text>
        <Text>onimaskesi</Text>
        <Text>onimaskesi</Text>
        <Text>onimaskesi</Text>
        <Text>onimaskesi</Text>
      </ScrollView>
      <BottomSheet show={isShowing} setIsShowing={setIsShowing} height={300}>
        <CustomCard />
      </BottomSheet>
    </>
  );
};
