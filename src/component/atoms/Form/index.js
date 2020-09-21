import React from 'react';
import {StyleSheet, Text, View,TextInput} from 'react-native';

const Form = ({value='',title,height,width, keyboardType='default',marginHorizontal, placeholder,secure=false,marginTop,alignSelf}) => {
  return (
    <TextInput
      style={[{marginHorizontal: marginHorizontal,height: height,width:width,marginTop: marginTop, alignSelf: alignSelf}, styles.container]}
      placeholder={placeholder}
      keyboardType={keyboardType}
      value={`${value}`}
      secureTextEntry={secure}></TextInput>
  );
};

export default Form;

const styles = StyleSheet.create({
  container: {
    fontFamily: 'SFPROText-Bold',
    borderWidth: 1,
    borderColor: '#F4BB8A',
    backgroundColor: '#F9F9F9',
  },
});
