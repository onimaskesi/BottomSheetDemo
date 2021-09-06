import React, {useState} from 'react';
import {View, ScrollView} from 'react-native';
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

  const BottomSheetChildren = () => {
    return (
      <View style={{backgroundColor: 'white'}}>
        <CustomCard />
        {/* <CustomCard />
        <CustomCard />
        <CustomCard /> */}
      </View>
    );
  };

  return (
    <>
      <ScrollView style={{flex: 1}}>
        <ButtonsForOpenBottomSheet />
      </ScrollView>
      <BottomSheet show={isShowing} setIsShowing={setIsShowing}>
        <BottomSheetChildren />
      </BottomSheet>
    </>
  );
};
