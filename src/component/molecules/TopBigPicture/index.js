import React from 'react';
import {StyleSheet, Text, View, Dimensions} from 'react-native';
import {getWidth, getHeight} from '../../../services/getsize';
import Button from '../../atoms/Button';
import Rounded from '../../atoms/RoundedButton';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const TopBigPicture = ({
  source,
}) => {
  return (
    <View
      style={styles.container}></View>
  );
};

export default TopBigPicture;

const styles = StyleSheet.create({
  container: {
    alignSelf: 'center',
    borderBottomRightRadius: 15,
    borderBottomLeftRadius: 15,
    backgroundColor: '#DADADA',
    height: getHeight(180),
    width: windowWidth,
  },
});
