import React, {useRef, useEffect, useState} from 'react';
import {
  Animated,
  useWindowDimensions,
  View,
  ScrollView,
  Text,
} from 'react-native';
import Transparent from './Transparent';
import {PanGestureHandler} from 'react-native-gesture-handler';
import BottomSheetTopBar from './BottomSheetTopBar';

let isVisible = false;

export default ({height = 0, setIsShowing, show, children, topBarStyle}) => {
  const dimensions = useWindowDimensions();
  const heightLimit = dimensions.height * 0.9;

  const [initialHeight, setInitialHeight] = useState(
    height > heightLimit ? heightLimit : height,
  );

  const heightAnimVal = useRef(
    new Animated.Value(show ? 0 : initialHeight),
  ).current;

  const autoCloseHeightLimit = initialHeight / 4;

  const anim = toValue => {
    Animated.timing(heightAnimVal, {
      toValue: toValue,
      duration: 300,
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
              totalHeight > heightLimit || totalHeight === heightLimit
                ? heightLimit
                : totalHeight,
            );
        }}>
        <BottomSheetTopBar style={topBarStyle} />
        {children}
      </View>
    );
  };

  const isChildInScrollView = initialHeight === heightLimit;

  return (
    <>
      {!height && calculateAndSetTheInitialHeight()}
      {show && <Transparent onPress={() => setIsShowing(false)} />}
      {isVisible && (
        <Animated.View style={animViewStyle}>
          <PanGestureHandler
            onGestureEvent={onSwipeDownAction}
            onEnded={onEndOfTouch}>
            <View
              style={[
                {width: dimensions.width},
                !isChildInScrollView && {position: 'absolute'},
              ]}>
              <BottomSheetTopBar style={topBarStyle} />
              {!isChildInScrollView && children}
            </View>
          </PanGestureHandler>
          {isChildInScrollView && (
            <ScrollView style={{backgroundColor: 'white'}}>
              {children}
            </ScrollView>
          )}
        </Animated.View>
      )}
    </>
  );
};
