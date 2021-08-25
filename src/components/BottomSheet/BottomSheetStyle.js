import {StyleSheet} from 'react-native';

const styleWithHeight = (height, containerStyle = {}) =>
  StyleSheet.create({
    container: {
      ...containerStyle,
      zIndex: 2,
      height,
    },
  });

export default styleWithHeight;
