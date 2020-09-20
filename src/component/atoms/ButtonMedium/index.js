import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {getWidth, getHeight} from '../../../services/getsize'

const ButtonMedium = ({title, onPress, alignSelf, marginTop,color}) => {
  return (
    <TouchableOpacity
      style={[{marginTop: marginTop, alignSelf: alignSelf,backgroundColor: color}, styles.container]}
      onPress={onPress}>
      <Text style={styles.titel}>{title}</Text>
    </TouchableOpacity>
  );
};

export default ButtonMedium;

const styles = StyleSheet.create({
  container: {
    height: 38,
    width: 130,
    borderRadius: 6,
    justifyContent: 'center',
    marginRight: 10,
  },
  titel: {
    fontFamily: 'SFPROText-Semibold',
    color: '#F6F6F6',
    textAlign: 'center',
    fontSize: 13,
  },
});
