import React, {useState, useRef} from 'react';
import {ScrollView, View, Text, Dimensions, Animated, SafeAreaView} from 'react-native';
import BottomSheet from './components/BottomSheet';
import Button from './components/Button';
import CustomCard from './components/CustomCard';
import TextWithHeight from './TextWithHeight';

const randomHeight = Math.floor(Math.random() * 500 + 200);

export default () => {
  const [isShowing, setIsShowing] = useState(false);

  const openBottomSheet = () => {
    setIsShowing(true);
  };

  const CustomView = ({children}) => (
    <View
      style={{
        borderWidth: 2,
        borderColor: 'white',
        backgroundColor: 'skyblue',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      {children}
    </View>
  );

  const CustomViewWithRandomHeight = () => (
    <View
      style={{
        height: randomHeight,
        backgroundColor: 'orange',
        alignContent: 'stretch',
      }}>
      <CustomView />
      <CustomView>
        <Text>{randomHeight}</Text>
      </CustomView>
      <CustomView />
      <Text style={{fontSize: 50}}>asdf</Text>
      <CustomView />
    </View>
  );

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
            style={{fontSize: 20, padding: 10}}>
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
