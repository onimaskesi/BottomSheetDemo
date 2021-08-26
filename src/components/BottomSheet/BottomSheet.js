import React, {useEffect, useState} from 'react';
import {View, Animated, Dimensions} from 'react-native';
import styleWithHeight from './BottomSheetStyle';
import Transparent from '../Transparent';
import {PanGestureHandler} from 'react-native-gesture-handler';

let translateYInitialValue;
let isVisible = false;

export default ({
  height = Dimensions.get('screen').height / 2,
  setIsShowing,
  show,
  containerStyle,
  children,
  duration,
}) => {
  const [dontMove, setDontMove] = useState(false);

  const [animStartHeight, setAnimStartHeight] = useState(show ? 0 : height);
  const animFinishHeight = show ? height : 0;

  const styles = styleWithHeight(height, containerStyle);

  let movementAnim = new Animated.Value(animStartHeight);

  let anim = () => {
    Animated.timing(movementAnim, {
      toValue: animFinishHeight,
      duration: duration,
      useNativeDriver: false,
    }).start();
  };

  dontMove || anim();

  useEffect(() => {
    return (isVisible = true);
  }, []);

  useEffect(() => {
    translateYInitialValue = 0;
    setAnimStartHeight(show ? 0 : height);
    setDontMove(false);
  }, [show, height]);

  let translateY = new Animated.Value(translateYInitialValue || 0);
  let zeroY = new Animated.Value(0);
  const onPanGestureEvent = Animated.event(
    [
      {
        nativeEvent: {
          translationY: dontMove ? zeroY : translateY,
        },
      },
    ],
    {useNativeDriver: false},
  );

  const onSwipeDownAction = event => {
    if (translateY._value > height / 4) {
      translateYInitialValue = translateY._value;
      setDontMove(false, setIsShowing(false));
    } else if (event.nativeEvent.translationY < 0) {
      setDontMove(true);
    } else {
      setDontMove(false, setAnimStartHeight(height - translateY._value));
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
                zIndex: 1,
              },
              {
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
            <View style={styles.container}>{children}</View>
          </Animated.View>
        </PanGestureHandler>
      )}
    </>
  );
};
