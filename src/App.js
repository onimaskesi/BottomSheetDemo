import React, {useState} from 'react';
import {ScrollView, View} from 'react-native';
import BottomSheet from './components/BottomSheet';
import Button from './components/Button';
import CustomCard from './components/CustomCard';
import Text from './components/Text';

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
      <CustomView />
    </View>
  );

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
      </ScrollView>
      <BottomSheet show={isShowing} setIsShowing={setIsShowing}>
        <CustomViewWithRandomHeight />
      </BottomSheet>
    </>
  );
};
