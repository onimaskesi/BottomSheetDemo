import React from 'react';
import {View} from 'react-native';
import styles from './BottomSheetTopBarStyle';

const BottomSheetTopBar = ({style}) => (
  <View style={{...styles.container, ...style}}>
    <View style={styles.line} />
  </View>
);

export default BottomSheetTopBar;
