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
      zIndex: 20,
      backgroundColor,
      height,
      borderRadius,
    },
  });

export default styleWithHeight;
