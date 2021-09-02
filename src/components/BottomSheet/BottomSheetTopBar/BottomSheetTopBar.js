import React from 'react';
import {View} from 'react-native';
import styles from './BottomSheetTopBarStyle';

const BottomSheetTopBar = ({style}) => (
  <View style={[style, styles.container]}>
    <View style={styles.line} />
  </View>
);

export default BottomSheetTopBar;
