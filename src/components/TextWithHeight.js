import React from 'react';
import {View, Text, Platform} from 'react-native';

export default ({children, style, height, setHeight}) => {
  return (
    <View style={[height && {height: height}]}>
      <Text
        onTextLayout={evnt => {
          const {lines} = evnt.nativeEvent;
          !height &&
            lines.length > 1 &&
            lines[0].text.length > 1 &&
            setHeight((lines.length + 2) * lines[0].height);
        }}
        style={style}>
        {children}
      </Text>
    </View>
  );
};
