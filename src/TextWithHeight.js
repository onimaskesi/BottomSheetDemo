import React from 'react';
import {Text} from 'react-native';

const TextWithHeight = ({children, style, height, setHeight}) => {
  return (
    <>
      {!height ? (
        <Text
          style={[style, height && {height: height}]}
          onTextLayout={evnt => {
            console.log(evnt.nativeEvent.lines);
            const {lines} = evnt.nativeEvent;
            lines.length > 1 && setHeight((lines.length + 2) * lines[0].height);
          }}>
          {children}
        </Text>
      ) : (
        <Text style={{...style, height: height}}>{children}</Text>
      )}
    </>
  );
};

export default TextWithHeight;
