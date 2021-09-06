import React, {useRef, useEffect, useState} from 'react';
import {Animated, useWindowDimensions, View, ScrollView} from 'react-native';
import Transparent from './Transparent';
import {PanGestureHandler} from 'react-native-gesture-handler';
import BottomSheetTopBar from './BottomSheetTopBar';

let isVisible = false;

export default ({
  height = 0,
  setIsShowing,
  show,
  children,
  style,
  topBarStyle,
}) => {
  const [initialHeight, setInitialHeight] = useState(height);

  const heightAnimVal = useRef(
    new Animated.Value(show ? 0 : initialHeight),
  ).current;

  const autoCloseHeightLimit = initialHeight / 4;

  const dimensions = useWindowDimensions();
  const heightLimitForSurroundWithScrollView = dimensions.height * 0.9;

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

  const onEndOfTouch = event => {
    const {translationY: eventY} = event.nativeEvent;
    if (eventY > autoCloseHeightLimit) {
      setIsShowing(false);
    } else if (eventY > 0) {
      anim(initialHeight);
    }
  };

  const animViewStyle = {
    height: heightAnimVal,
    width: dimensions.width,
    zIndex: 2,
    position: 'absolute',
    bottom: 0,
  };

  const BottomSheetChildren = () => {
    const Component =
      initialHeight == heightLimitForSurroundWithScrollView ? ScrollView : View;
    return (
      <>
        <BottomSheetTopBar style={topBarStyle} />
        <Component style={{backgroundColor: 'white'}}>{children}</Component>
      </>
    );
  };

  const styleForInvisible = {
    position: 'absolute',
    width: 0,
    top: dimensions.height,
  };

  const calculateAndSetTheInitialHeight = () => {
    return (
      <View
        style={{...styleForInvisible}}
        onLayout={event => {
          const {height: totalHeight} = event.nativeEvent.layout;
          !height &&
            setInitialHeight(
              totalHeight > heightLimitForSurroundWithScrollView ||
                totalHeight === heightLimitForSurroundWithScrollView
                ? heightLimitForSurroundWithScrollView
                : totalHeight,
            );
        }}>
        <BottomSheetChildren />
      </View>
    );
  };

  return (
    <>
      {!!height || calculateAndSetTheInitialHeight()}
      {show && <Transparent onPress={() => setIsShowing(false)} />}
      {isVisible && (
        <PanGestureHandler
          onGestureEvent={onSwipeDownAction}
          onEnded={onEndOfTouch}>
          <Animated.View style={{...style, ...animViewStyle}}>
            <BottomSheetChildren />
          </Animated.View>
        </PanGestureHandler>
      )}
    </>
  );
};
