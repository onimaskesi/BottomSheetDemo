import React, {useRef, useEffect} from 'react';
import {Animated, Dimensions} from 'react-native';
import Transparent from './Transparent';
import {PanGestureHandler} from 'react-native-gesture-handler';

let isVisible = false;

export default ({
  height = Dimensions.get('screen').height / 2,
  setIsShowing,
  show,
  children,
}) => {
  const heightAnimVal = useRef(new Animated.Value(show ? 0 : height)).current;

  const autoCloseHeightLimit = height / 4;

  useEffect(() => {
    return (isVisible = true);
  }, []);

  const anim = toValue => {
    Animated.timing(heightAnimVal, {
      toValue: toValue,
      duration: 250,
      useNativeDriver: false,
    }).start();
  };

  anim(show ? height : 0);

  const onSwipeDownAction = event => {
    const {translationY: eventY} = event.nativeEvent;
    eventY > 0 && heightAnimVal.setValue(height - eventY);
  };

  const onEnded = event => {
    const {translationY: eventY} = event.nativeEvent;
    if (eventY > autoCloseHeightLimit) {
      setIsShowing(false);
    } else if (eventY > 0) {
      anim(height);
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

  return (
    <>
      {show && <Transparent onPress={() => setIsShowing(false)} />}
      {isVisible && (
        <PanGestureHandler onGestureEvent={onSwipeDownAction} onEnded={onEnded}>
          <Animated.View style={animViewStyle}>{children}</Animated.View>
        </PanGestureHandler>
      )}
    </>
  );
};
