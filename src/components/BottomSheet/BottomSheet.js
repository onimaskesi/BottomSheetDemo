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

  const translateY = useRef(new Animated.Value(0)).current;

  const movementAnim = new Animated.Value(animStartHeight);

  const anim = () => {
    Animated.timing(movementAnim, {
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
    show && translateY.setValue(0);
    setAnimStartHeight(show ? 0 : height);
  }, [show]);

  const onPanGestureEvent = Animated.event(
    [
      {
        nativeEvent: {
          translationY: translateY,
        },
      },
    ],
    {useNativeDriver: false},
  );

  const onSwipeDownAction = event => {
    const {translationY} = event.nativeEvent;
    if (translationY > height / 4) {
      translateY.setValue(translationY);
      setIsShowing(false);
    } else if (translationY < 0) {
      translateY.setValue(0);
    } else if (translationY !== 0) {
      translateY.setValue(0);
      setAnimStartHeight(height - event.nativeEvent.translationY);
    }
  };

  return (
    <>
      {show && <Transparent onPress={() => setIsShowing(false)} />}
      {isVisible && (
        <PanGestureHandler
          onGestureEvent={onPanGestureEvent}
          onHandlerStateChange={onSwipeDownAction}>
          <Animated.View
            style={[
              {
                height: movementAnim,
                width: Dimensions.get('screen').width,
                zIndex: 2,
                position: 'absolute',
                bottom: 0,
                transform: [
                  {
                    translateY: translateY.interpolate({
                      inputRange: [0, height],
                      outputRange: [0, height],
                      extrapolateLeft: 'clamp',
                    }),
                  },
                ],
              },
            ]}>
            {children}
          </Animated.View>
        </PanGestureHandler>
      )}
    </>
  );
};
