import React from 'react';
import {TouchableOpacity} from 'react-native';
import styles from './TransparentStyle';

const Transparent = ({onPress}) => {
  return <TouchableOpacity style={styles.container} onPress={onPress} />;
};

export default Transparent;
