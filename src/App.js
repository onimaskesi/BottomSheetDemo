import React, {useState} from 'react';
import {View, ScrollView} from 'react-native';
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
  };

  return (
    <>
      <View style={{flex: 1}}>
        <Text>onimaskesi</Text>
        <Text>onimaskesi</Text>
        <Text>onimaskesi</Text>
        <Button title="show/hide" onPress={() => setIsShowing(!isShowing)} />
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
        duration={500}
        height={500}
        backgroundColor="powderblue"
        containerStyle={containerStyle}>
        <CustomCard />
      </BottomSheet>
    </>
  );
};
