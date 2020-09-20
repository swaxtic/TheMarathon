import React from 'react';
import {StyleSheet, Text, View, TextInput, Image} from 'react-native';
import SmallCircleButton from '../../atoms/SmallCircleButton'
import {getWidth,getHeight} from '../../../services/getsize'

const TopWithIcon = ({text, imgSource ,marginTop, alignSelf,onPress,count}) => {
  return (
      <View
        style={[styles.container]}>
        <Text style={styles.text}>{text}</Text>
        <SmallCircleButton count={count} imgSource={imgSource} onPress={onPress}>
        </SmallCircleButton>
      </View>
  );
};

export default TopWithIcon;

const styles = StyleSheet.create({
  container: {
    fontFamily: 'SFPROText-Bold',
    height: getHeight(40),
    width: getWidth(342),
    marginTop: getHeight(28),
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
    marginLeft: 0,
  },
  icon: {
    // left : getWidth(307),
    width: 35,
    height: 35,
    borderRadius: 35 / 2,
    backgroundColor: '#DEE6E9',
  },
});
