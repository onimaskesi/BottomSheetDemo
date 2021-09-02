import React, {useRef, useEffect, useState} from 'react';
import {
  Animated,
  Dimensions,
  useWindowDimensions,
  View,
  ScrollView,
} from 'react-native';
import Transparent from './Transparent';
import {PanGestureHandler} from 'react-native-gesture-handler';

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

  const BottomSheetTopBar = () => (
    <View
      style={[
        topBarStyle,
        {
          backgroundColor: 'white',
          height: 30,
          borderTopStartRadius: 20,
          borderTopEndRadius: 20,
          alignItems: 'center',
          justifyContent: 'center',
        },
      ]}>
      <View
        style={{
          borderTopWidth: 4,
          width: 40,
          borderColor: 'lightgray',
          borderRadius: 5,
        }}
      />
    </View>
  );

  const BottomSheetChildren = () => {
    if (initialHeight === heightLimitForSurroundWithScrollView) {
      return (
        <>
          <BottomSheetTopBar />
          <ScrollView style={{backgroundColor: 'white'}}>{children}</ScrollView>
        </>
      );
    }
    return (
      <>
        <BottomSheetTopBar />
        {children}
      </>
    );
  };

  const calculateAndSetTheInitialHeight = () => {
    return (
      <View
        style={{
          position: 'absolute',
          width: 0,
          top: Dimensions.get('window').height,
        }}
        onLayout={event => {
          const {height: totalHeight} = event.nativeEvent.layout;
          if (!height) {
            setInitialHeight(
              totalHeight > heightLimitForSurroundWithScrollView ||
                totalHeight === heightLimitForSurroundWithScrollView
                ? heightLimitForSurroundWithScrollView
                : totalHeight,
            );
          }
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
        <PanGestureHandler onGestureEvent={onSwipeDownAction} onEnded={onEnded}>
          <Animated.View style={[animViewStyle, style]}>
            <BottomSheetChildren />
          </Animated.View>
        </PanGestureHandler>
      )}
    </>
  );
};
