import {StyleSheet} from 'react-native';

const styleWithHeight = (
  height,
  backgroundColor,
  borderRadius,
  containerStyle = {},
) =>
  StyleSheet.create({
    container: {
      ...containerStyle,
      zIndex: 2,
      backgroundColor,
      height,
      borderRadius,
    },
  });

export default styleWithHeight;
