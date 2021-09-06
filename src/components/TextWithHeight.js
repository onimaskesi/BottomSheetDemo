import React from 'react';
import {View, Text} from 'react-native';

export default ({children, style, height, setHeight}) => {
  return (
    <View style={[height && {height: height}]}>
      <Text
        onTextLayout={evnt => {
          const {lines} = evnt.nativeEvent;
          !height &&
            lines.length > 1 && // for ios make sure that take the correct value
            lines[0].text.length > 1 && // for android make sure that take the correct value
            setHeight((lines.length + 2) * lines[0].height); // calculate the total height and set it
        }}
        style={style}>
        {children}
      </Text>
    </View>
  );
};
