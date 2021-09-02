import React from 'react';
import {Text} from 'react-native';

const TextWithHeight = ({children, style, height, setHeight}) => {
  return (
    <>
      <Text
        style={[style, !height ? {flex: 1} : {height: height}]}
        onTextLayout={evnt => {
          const {lines} = evnt.nativeEvent;
          lines.length > 1 && setHeight((lines.length + 1) * lines[0].height);
        }}>
        {children}
      </Text>
    </>
  );
};

export default TextWithHeight;
