import React from 'react';
import {StyleSheet, Text, View,Dimensions} from 'react-native';
import {getWidth, getHeight} from '../../../services/getsize';
import Button from '../../atoms/Button'
import Rounded from '../../atoms/RoundedButton'
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const BottomNav = ({icon1,icon2, price,onPress1,onPress2, onPress,icon=false, backgroundColor}) => {
  return (
    <View style={[{backgroundColor: backgroundColor}, styles.container]}>
      <View style={styles.itemHarga}>
        <Text style={styles.txt}>{price}</Text>
      </View>
      {icon ? (
        <View style={{flexDirection: "row",justifyContent:'space-between',height:getHeight(40),width: getWidth(94)}}>
          <Rounded
          backgroundColor='#D8D8D8'
          onPress={onPress1}
          imgSource={icon1}
          height={getHeight(40)}
          width={getWidth(40)}
          />
          <Rounded
          backgroundColor='#F4BB8A'
          onPress={onPress2}
          imgSource={icon2}
          height={getHeight(40)}
          width={getWidth(40)}
          />
        </View>
      ) : (
        <Button
        backgroundColor="#393B63"
        height={getHeight(46)}
        width={getWidth(125)}
        title="Checkout"
        onPress={onPress}
      />
      )}
    </View>
  );
};

export default BottomNav;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    flexDirection: 'row',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: getHeight(70),
    width: windowWidth,
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15,
  },
  itemHarga: {
    justifyContent: "center",
    height: getHeight(46),
    width: getWidth(125),
    backgroundColor: '#F4BB8A',
  },
  image: {
    backgroundColor: 'blue',
    height: getHeight(84),
    width: getWidth(84),
    borderRadius: 20,
  },
  txt: {
    alignSelf: "center",
    fontSize: 16,
    fontFamily: 'SFPROText-Semibold',
    color: '#393B63',
  },
  title: {
    fontSize: 20,
    fontFamily: 'SFPROText-Bold',
    color: '#393B63',
  },
});