import {Dimensions, StyleSheet} from 'react-native';

const styleWithHeight = (height, containerStyle = {}) =>
  StyleSheet.create({
    container: {
      ...containerStyle,
      zIndex: 2,
      height,
      width: Dimensions.get('screen').width,
    },
  });

export default styleWithHeight;
