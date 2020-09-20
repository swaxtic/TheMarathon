import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';

const ButtonSmall = ({title, onPress, alignSelf, marginTop}) => {
  return (
    <TouchableOpacity
      style={[{marginTop: marginTop, alignSelf: alignSelf}, styles.container]}
      onPress={onPress}>
      <Text style={styles.titel}>{title}</Text>
    </TouchableOpacity>
  );
};

export default ButtonSmall;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#393B63',
    height: '7.8%',
    width: '91.47%',
    borderRadius: 6,
    justifyContent: 'center',
  },
  titel: {
    fontFamily: 'SFPROText-Bold',
    color: '#F4BB8A',
    textAlign: 'center',
    fontSize: 18,
  },
});
