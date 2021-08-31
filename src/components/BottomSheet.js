import React, {useRef, useEffect, useState} from 'react';
import {Animated, Dimensions, View} from 'react-native';
import Transparent from './Transparent';
import {PanGestureHandler} from 'react-native-gesture-handler';

let isVisible = false;

export default ({height = 0, setIsShowing, show, children, style}) => {
  const [initialHeight, setInitialHeight] = useState(height);

  const heightAnimVal = useRef(
    new Animated.Value(show ? 0 : initialHeight),
  ).current;

  const autoCloseHeightLimit = initialHeight / 4;

  const anim = toValue => {
    Animated.timing(heightAnimVal, {
      toValue: toValue,
      duration: 250,
      useNativeDriver: false,
    }).start();
  };

  useEffect(() => {
    return (isVisible = true);
  }, []);

  anim(show ? initialHeight : 0);

  const onSwipeDownAction = event => {
    const {translationY: eventY} = event.nativeEvent;
    eventY > 0 && heightAnimVal.setValue(initialHeight - eventY);
  };

  const onEnded = event => {
    const {translationY: eventY} = event.nativeEvent;
    if (eventY > autoCloseHeightLimit) {
      setIsShowing(false);
    } else if (eventY > 0) {
      anim(initialHeight);
    }
  };

  const animViewStyle = [
    {
      height: heightAnimVal,
      width: Dimensions.get('screen').width,
      zIndex: 2,
      position: 'absolute',
      bottom: 0,
    },
  ];

  const calculateAndSetTheInitialHeight = () => (
    <View
      style={{position: 'absolute', width: 0, top: initialHeight * -1}}
      onLayout={event => {
        initialHeight || setInitialHeight(event.nativeEvent.layout.height);
      }}>
      {children}
    </View>
  );

  return (
    <>
      {!!initialHeight || calculateAndSetTheInitialHeight()}
      {show && <Transparent onPress={() => setIsShowing(false)} />}
      {isVisible && (
        <PanGestureHandler onGestureEvent={onSwipeDownAction} onEnded={onEnded}>
          <Animated.View style={[animViewStyle, style]}>
            {children}
          </Animated.View>
        </PanGestureHandler>
      )}
    </>
  );
};
