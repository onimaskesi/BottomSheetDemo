import React from 'react';
import {View} from 'react-native';
import Button from '../Button';
import styles from './CustomCardStyle';

const restartDeviceText = 'Cihazı yeniden başlat';
const signalsText = 'Sinyaller';

export default () => {
  return (
    <View style={styles.container}>
      <Button title={restartDeviceText} />
      <Button title={signalsText} />
    </View>
  );
};
