import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';

const SmallRoundedButton = ({
  onPress,
  imgSource,
  alignSelf,
  marginTop,
  height,
  width,
  backgroundColor='#F07B7B',
  count = 0,
}) => {
  return (
    <TouchableOpacity
      style={[{backgroundColor:backgroundColor,width:width,height:height,marginTop: marginTop, alignSelf: alignSelf}, styles.container]}
      onPress={onPress}>
      <Image style={{alignSelf: 'center'}} source={imgSource} />
    </TouchableOpacity>
  );
};

export default SmallRoundedButton;

const styles = StyleSheet.create({
  container: {
    // left : getWidth(307),
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: "center"
  },
  text: {
    fontFamily: 'SFPROText-Bold',
    color: '#393B63',
    fontSize: 10,
    // textAlign: 'left',
    marginLeft: 0,
  },
});
