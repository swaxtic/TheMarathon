import React from 'react';
import {StyleSheet, Text, View, TextInput, Image} from 'react-native';
import SmallCircleButton from '../../atoms/SmallCircleButton'
import {getWidth,getHeight} from '../../../services/getsize'

const Top = ({text,marginTop,marginLeft}) => {
  return (
      <View
        style={[{marginTop:marginTop,marginLeft: marginLeft},styles.container]}>
        <Text style={styles.text}>{text}</Text>
      </View>
  );
};

export default Top;

const styles = StyleSheet.create({
  container: {
    fontFamily: 'SFPROText-Bold',
    height: getHeight(40),
    width: getWidth(342),
    // borderColor: '#F4BB8A',
    // backgroundColor: 'pink',
    // alignSelf: 'center',
    justifyContent: 'space-between',
    // justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  text: {
    fontFamily: 'SFPROText-Bold',
    color: '#393B63',
    fontSize: 28,
    textAlign: 'left',
  },
});
