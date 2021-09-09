import React, {useState} from 'react';
import {View, ScrollView, Text, StyleSheet} from 'react-native';
import Button from './components/Button';
import CustomCard from './components/CustomCard';
import {BottomSheet, TextWithHeight} from '@onimaskesi/bottomsheet';

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
      <View style={styles.view}>
        <TextWithHeight
          height={textHeight}
          setHeight={setTextHeight}
          style={{fontSize: 20, padding: 10}}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </TextWithHeight>
        <Button title="Button Title" />
      </View>
    );
  };

  const [textHeight, setTextHeight] = useState();

  const BottomSheetChildren4 = () => {
    return (
      <View style={styles.view}>
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
        <Button title="Button Title" />
      </View>
    );
  };

  const BottomSheetChildren5 = () => (
    <View style={{backgroundColor: 'skyblue'}}>
      <Button title="Press Me" />
      <Text
        style={{
          height: 30,
          alignSelf: 'center',
          fontSize: 25,
          color: 'white',
        }}>
        Hello World
      </Text>
      <CustomCard />
    </View>
  );

  return (
    <>
      <ScrollView style={{flex: 1}}>
        <ButtonsForOpenBottomSheet />
      </ScrollView>
      <BottomSheet show={isShowing} setIsShowing={setIsShowing}>
        <BottomSheetChildren2 />
      </BottomSheet>
    </>
  );
};

const styles = StyleSheet.create({
  view: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
});
