import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import {getWidth, getHeight} from '../../../services/getsize';

const MovieList = ({leftText, rightText}) => {
  return (
    <View style={styles.container}>
      <Text style={[{fontSize: 16, color: '#393B63'}, styles.txt]}>
        {leftText}
      </Text>
      <Text style={{fontSize: 13}}>{rightText}</Text>
    </View>
  );
};

export default MovieList;

const styles = StyleSheet.create({
  container: {
    alignSelf: 'center',
    marginTop: 15,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    // backgroundColor: 'pink',
    height: 19,
    width: getWidth(342),
    marginHorizontal: 17,
  },
  image: {
    width: 121,
    height: 145,
    resizeMode: 'contain',
    alignSelf: 'center',
    borderWidth: 1,
    borderColor: '#393B63',
  },
  txt: {
    // marginTop: 2,
    fontFamily: 'SFPROText-Bold',
  },
  title: {
    marginTop: 2,
    fontSize: 12,
    fontFamily: 'SFPROText-Bold',
    color: '#393B63',
  },
});
