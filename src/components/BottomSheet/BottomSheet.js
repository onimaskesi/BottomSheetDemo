import React, {useRef, useEffect} from 'react';
import {View, Animated, Dimensions} from 'react-native';
import styleWithHeight from './BottomSheetStyle';
import Transparent from '../Transparent';

let isVisible = true;

export default ({
  height = Dimensions.get('screen').height / 2,
  backgroundColor = 'black',
  borderRadius = 30,
  containerStyle,
  show,
  children,
  duration,
  onPressBackground,
}) => {
  const animStartHeight = show ? 0 : height;
  const animFinishHeight = show ? height : 0;

  const styles = styleWithHeight(
    height,
    backgroundColor,
    borderRadius,
    containerStyle,
  );

  const movementAnim = useRef(new Animated.Value(animStartHeight)).current;

  let anim = () => {
    Animated.timing(movementAnim, {
      toValue: animFinishHeight,
      duration: duration,
      useNativeDriver: false,
    }).start();
  };

  anim();

  useEffect(() => {
    isVisible = true;
    return (isVisible = false);
  }, []);

  return (
    <>
      {show && <Transparent onPress={onPressBackground} />}
      <Animated.View
        style={[
          {
            height: movementAnim,
            zIndex: 1,
          },
        ]}>
        {!isVisible && <View style={styles.container}>{children}</View>}
      </Animated.View>
    </>
  );
};
