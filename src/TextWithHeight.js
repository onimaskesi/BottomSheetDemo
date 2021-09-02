import React from 'react';
import {Text, Animated} from 'react-native';

const TextWithHeight = ({children, style, height, setHeight}) => {
  return (
    <>
      {!height && (
        <Text
          style={{...style, flex: 1, backgroundColor: 'red'}}
          onTextLayout={evnt => {
            console.log(evnt.nativeEvent);
            evnt.nativeEvent.lines.length > 1 &&
              setHeight(
                (evnt.nativeEvent.lines.length + 1) *
                  evnt.nativeEvent.lines[0].height,
              );
          }}>
          {children}
        </Text>
      )}
      {!!height && (
        <Animated.Text
          style={{...style, height: height, backgroundColor: 'blue'}}>
          {children}
        </Animated.Text>
      )}
    </>
  );
};

export default TextWithHeight;
