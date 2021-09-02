import React, {useState} from 'react';
import {View, Text, SafeAreaView, ScrollView} from 'react-native';
import BottomSheet from './components/BottomSheet/BottomSheet';
import Button from './components/Button';
import CustomCard from './components/CustomCard';
import TextWithHeight from './TextWithHeight';

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
    console.log(buttons);
    return buttons;
  };

  const [textHeight, setTextHeight] = useState();

  const BottomSheetChildren = () => {
    return (
      <View style={{backgroundColor: 'white'}}>
        <Text style={{backgroundColor: 'orange', color: 'white', fontSize: 15}}>
          Test
        </Text>
        <TextWithHeight
          height={textHeight}
          setHeight={setTextHeight}
          style={{fontSize: 20, padding: 10}}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </TextWithHeight>
        <Text
          style={{
            backgroundColor: 'orange',
            color: 'white',
            fontSize: 15,
            padding: 20,
          }}>
          Test
        </Text>
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
