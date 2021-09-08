import React from 'react';
import {View, Text} from 'react-native';

// in onTextLayout the first nativeEvent.lines is incorrect but the second is correct so because of that we use this variable
let isCorrectLines = false;
export default ({children, style, height, setHeight}) => {
  return (
    <View style={[height && {height: height}]}>
      <Text
        onTextLayout={evnt => {
          const {lines} = evnt.nativeEvent;
          !height &&
            isCorrectLines &&
            setHeight((lines.length + 2) * lines[0].height); // calculate the total height and set it
          isCorrectLines = true;
        }}
        style={style}>
        {children}
      </Text>
    </View>
  );
};
