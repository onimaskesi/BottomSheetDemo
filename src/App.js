import React, {useState} from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import BottomSheet from './components/BottomSheet/BottomSheet';
import Button from './components/Button';
import CustomCard from './components/CustomCard';
import TextWithHeight from './TextWithHeight';

export default () => {
  const [isShowing, setIsShowing] = useState(false);

  const openBottomSheet = () => {
    setIsShowing(true);
  };

  const [textHeight, setTextHeight] = useState();

  return (
    <>
      <SafeAreaView style={{flex: 1}}>
        <Text>onimaskesi</Text>
        <Text>onimaskesi</Text>
        <Text>onimaskesi</Text>
        <Button title="show the bottom sheet" onPress={openBottomSheet} />
        <Text>onimaskesi</Text>
        <Text>onimaskesi</Text>
        <Text>onimaskesi</Text>
        <Text>onimaskesi</Text>
        <Text>onimaskesi</Text>
        <Button title="show the bottom sheet" onPress={openBottomSheet} />
        <Text>onimaskesi</Text>
        <Text>onimaskesi</Text>
        <Text>onimaskesi</Text>
        <Text>onimaskesi</Text>
        <Text>onimaskesi</Text>
        <Button title="show the bottom sheet" onPress={openBottomSheet} />
        <Text>onimaskesi</Text>
        <Text>onimaskesi</Text>
        <Text>onimaskesi</Text>
      </SafeAreaView>
      <BottomSheet show={isShowing} setIsShowing={setIsShowing}>
        <View style={{backgroundColor: 'white'}}>
          <Text
            style={{backgroundColor: 'orange', color: 'white', fontSize: 15}}>
            Test
          </Text>
          <TextWithHeight
            height={textHeight}
            setHeight={setTextHeight}
            style={{fontSize: 30, padding: 10}}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
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
        </View>
      </BottomSheet>
    </>
  );
};
