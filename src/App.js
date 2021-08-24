import React, {useState} from 'react';
import {View} from 'react-native';
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

  const changeShowState = () => {
    setIsShowing(!isShowing);
  };

  return (
    <>
      <View style={{flex: 1}}>
        <Text>onimaskesi</Text>
        <Text>onimaskesi</Text>
        <Text>onimaskesi</Text>
        <Button title="show/hide" onPress={changeShowState} />
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
        height={270}
        backgroundColor="powderblue"
        borderRadius={10}
        containerStyle={containerStyle}
        onPressBackground={changeShowState}>
        <CustomCard />
      </BottomSheet>
    </>
  );
};
