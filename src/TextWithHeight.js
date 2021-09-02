import React from 'react';
import {Text, Animated} from 'react-native';

const TextWithHeight = ({children, style, height, setHeight}) => {
  return (
    <>
      {!height && (
        <Text
          style={{...style, flex: 1}}
          onTextLayout={evnt => {
            const {lines} = evnt.nativeEvent;
            lines.length > 1 && setHeight((lines.length + 1) * lines[0].height);
          }}>
          {children}
        </Text>
      )}
      {!!height && (
        <Animated.Text style={{...style, height: height}}>
          {children}
        </Animated.Text>
      )}
    </>
  );
};

export default TextWithHeight;
