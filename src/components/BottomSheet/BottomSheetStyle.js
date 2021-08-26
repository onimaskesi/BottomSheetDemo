import {Dimensions, StyleSheet} from 'react-native';

const styleWithHeight = height =>
  StyleSheet.create({
    container: {
      height,
      width: Dimensions.get('screen').width,
    },
  });

export default styleWithHeight;
