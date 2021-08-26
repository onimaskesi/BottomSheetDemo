import React, {useState} from 'react';
import {ScrollView, View} from 'react-native';
import BottomSheet from './components/BottomSheet';
import Button from './components/Button';
import CustomCard from './components/CustomCard';
import Text from './components/Text';

export default () => {
  const [isShowing, setIsShowing] = useState(false);

  const containerStyle = {
    borderWidth: 5,
    borderColor: 'green',
    justifyContent: 'center',
    borderRadius: 10,
  };

  const openBottomSheet = () => {
    setIsShowing(!isShowing);
  };

  return (
    <>
      <View style={{flex: 1}}>
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
      </View>
      <BottomSheet
        show={isShowing}
        setIsShowing={setIsShowing}
        height={270}
        containerStyle={containerStyle}>
        <CustomCard />
      </BottomSheet>
    </>
  );
};
