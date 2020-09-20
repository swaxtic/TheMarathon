import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';

const Button = ({backgroundColor,title, onPress,alignSelf,marginTop,height,width}) => {
  return (
    <TouchableOpacity
      style={[
        {
          backgroundColor: backgroundColor,
          marginTop: marginTop,
          alignSelf: alignSelf,
          height: height,
          width: width,
        },
        styles.container,
      ]}
      onPress={onPress}>
      <Text style={styles.titel}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: {
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
