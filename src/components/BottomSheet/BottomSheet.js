import React, {useEffect, useState, useRef} from 'react';
import {Animated, Dimensions} from 'react-native';
import Transparent from '../Transparent';
import {PanGestureHandler} from 'react-native-gesture-handler';

let isVisible = false;

export default ({
  height = Dimensions.get('screen').height / 2,
  setIsShowing,
  show,
  children,
  duration,
}) => {
  const [animStartHeight, setAnimStartHeight] = useState(show ? 0 : height);
  const animFinishHeight = show ? height : 0;

  const translateYAnimVal = useRef(new Animated.Value(0)).current;

  const heightAnimVal = new Animated.Value(animStartHeight);

  const anim = () => {
    Animated.timing(heightAnimVal, {
      toValue: animFinishHeight,
      duration: duration,
      useNativeDriver: false,
    }).start();
  };

  anim();

  useEffect(() => {
    return (isVisible = true);
  }, []);

  useEffect(() => {
    show && translateYAnimVal.setValue(0);
    setAnimStartHeight(show ? 0 : height);
  }, [show]);

  const onPanGestureEvent = Animated.event(
    [
      {
        nativeEvent: {
          translationY: translateYAnimVal,
        },
      },
    ],
    {useNativeDriver: false},
  );

  const onSwipeDownAction = event => {
    const {translationY: eventY} = event.nativeEvent;
    if (eventY > height / 4) {
      translateYAnimVal.setValue(eventY);
      setIsShowing(false);
    } else if (eventY < 0) {
      translateYAnimVal.setValue(0);
    } else if (eventY !== 0) {
      translateYAnimVal.setValue(0);
      setAnimStartHeight(height - event.nativeEvent.translationY);
    }
  };

  const animViewStyle = [
    {
      height: heightAnimVal,
      width: Dimensions.get('screen').width,
      zIndex: 2,
      position: 'absolute',
      bottom: 0,
      transform: [
        {
          translateY: translateYAnimVal.interpolate({
            inputRange: [0, height],
            outputRange: [0, height],
            extrapolateLeft: 'clamp',
          }),
        },
      ],
    },
  ];

  return (
    <>
      {show && <Transparent onPress={() => setIsShowing(false)} />}
      {isVisible && height !== 0 && (
        <PanGestureHandler
          onGestureEvent={onPanGestureEvent}
          onHandlerStateChange={onSwipeDownAction}>
          <Animated.View style={animViewStyle}>{children}</Animated.View>
        </PanGestureHandler>
      )}
    </>
  );
};
