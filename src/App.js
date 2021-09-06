import React, {useState} from 'react';
import {View, ScrollView, Text} from 'react-native';
import BottomSheet from './components/BottomSheet/BottomSheet';
import Button from './components/Button';
import CustomCard from './components/CustomCard';

export default () => {
  const [isShowing, setIsShowing] = useState(false);

  const openBottomSheet = () => {
    setIsShowing(true);
  };

  const ButtonsForOpenBottomSheet = () => {
    const buttons = [];
    for (let i = 0; i < 10; i++) {
      buttons.push(
        <Button
          key={i}
          title="show the bottom sheet"
          onPress={openBottomSheet}
        />,
      );
    }
    return buttons;
  };

  const BottomSheetChildren1 = () => {
    return (
      <View style={{backgroundColor: 'white'}}>
        <CustomCard />
      </View>
    );
  };

  const BottomSheetChildren2 = () => {
    return (
      <View style={{backgroundColor: 'white'}}>
        <CustomCard />
        <CustomCard />
        <CustomCard />
        <CustomCard />
      </View>
    );
  };

  const BottomSheetChildren3 = () => {
    return (
      <View style={{alignItems: 'center', justifyContent: 'center'}}>
        <Text style={{fontSize: 20, padding: 10, height: 100}}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Text>
        <Button title="Button Title" />
      </View>
    );
  };

  const BottomSheetChildren4 = () => {
    return (
      <View style={{alignItems: 'center', justifyContent: 'center'}}>
        <Text style={{fontSize: 30, padding: 10}}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Text>
        <Button title="Button Title" />
      </View>
    );
  };

  return (
    <>
      <ScrollView style={{flex: 1}}>
        <ButtonsForOpenBottomSheet />
      </ScrollView>
      <BottomSheet show={isShowing} setIsShowing={setIsShowing}>
        <BottomSheetChildren3 />
      </BottomSheet>
    </>
  );
};
