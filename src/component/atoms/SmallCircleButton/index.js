import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';

const SmallCircleButton = ({onPress,imgSource, alignSelf, marginTop,count=0}) => {
  return (
    <TouchableOpacity
      style={[{marginTop: marginTop, alignSelf: alignSelf}, styles.container]}
      onPress={onPress}>
      <View style={styles.num}>
      <Text style={styles.text}>{count}</Text>
      </View>
      <Image style={{alignSelf: "center"}} source={imgSource}/>
    </TouchableOpacity>
  );
};

export default SmallCircleButton;

const styles = StyleSheet.create({
  container: {
    // left : getWidth(307),
    width: 35,
    height: 35,
    borderRadius: 35 / 2,
    backgroundColor: '#DEE6E9',
    justifyContent: 'center',
  },
  num: {
    // marginRight: 0,
    zIndex: 1,
    alignSelf: "center",
    marginBottom: -13,
    marginLeft: 15,
    justifyContent: "center",
    alignItems: "center",
    width: 14,
    height: 14,
    borderRadius: 14 / 2,
    backgroundColor: '#F4BB8A',
  },
  text:{
    fontFamily: 'SFPROText-Bold',
    color: '#393B63',
    fontSize: 10,
    // textAlign: 'left',
    marginLeft: 0,
  }
});
