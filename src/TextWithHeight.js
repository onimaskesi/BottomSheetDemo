import React from 'react';
import {Text, Animated} from 'react-native';

const TextWithHeight = ({children, style, heightAnimVal}) => {
  return (
    <>
      {!!heightAnimVal._value || (
        <Text
          style={[
            style,
            {
              flex: 1,
            },
          ]}
          onTextLayout={evnt => {
            console.log(evnt.nativeEvent);
            evnt.nativeEvent.lines.length > 1 &&
              heightAnimVal.setValue(
                (evnt.nativeEvent.lines.length + 1) *
                  evnt.nativeEvent.lines[0].height,
              );
          }}>
          {children}
        </Text>
      )}
      {!!heightAnimVal._value && (
        <Animated.Text style={[style, {height: heightAnimVal}]}>
          {children}
        </Animated.Text>
      )}
    </>
  );
};

export default TextWithHeight;

