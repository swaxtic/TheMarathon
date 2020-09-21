import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import {getWidth, getHeight} from '../../../services/getsize';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import SmallRounded from '../../atoms/RoundedButton';
import Form from '../../atoms/Form';

const CartList = ({value,addOnpress,minOnpress,movieTitle, price, bottomText, deleteonPress, poster,total}) => {
  return (
    <View style={styles.container}>
      <View style={styles.itemInfo}>
        <Image
          source={{
            uri: 'https://image.tmdb.org/t/p/w780' + poster,
          }}
          style={styles.image}
        />
        <View style={styles.containerText}>
          <Text style={styles.title}>
            {movieTitle}
            {'\n'}
            <Text style={styles.txt}>{price}</Text>
          </Text>
        </View>
        <SmallRounded
          width={getWidth(30)}
          height={getHeight(30)}
          onPress={deleteonPress}
          imgSource={require('../../../assets/icon/blue/Delete.png')}
        />
      </View>
      <View style={styles.qty}>
        <View style={{alignItems: 'center', flexDirection: 'row'}}>
          <Icon onPress={minOnpress} color="#393B63" name="minus-circle-outline" size={23} />
          <Form
            value={`${value}`}
            keyboardType="numeric"
            marginHorizontal={5}
            height={getHeight(36)}
            width={getWidth(60)}
          />
          <Icon onPress={addOnpress} color="#393B63" name="plus-circle-outline" size={23} />
          <Text style={[{marginLeft: getWidth(90)}, styles.subtotal]}>{total}</Text>
        </View>
      </View>
    </View>
  );
};

export default CartList;

const styles = StyleSheet.create({
  container: {
    marginTop: 15,
    height: getHeight(138),
    width: getWidth(345),
    justifyContent: 'space-between',
  },
  itemInfo: {
    paddingRight: 5,
    justifyContent: 'space-between',
    height: getHeight(85),
    width: null,
    alignItems: 'center',
    flexDirection: 'row',
  },
  image: {
    // backgroundColor: 'blue',
    height: getHeight(84),
    resizeMode: 'contain',
    width: getWidth(84),
    borderRadius: 20,
  },
  containerText: {
    width: getWidth(200),
    height: getHeight(85),
    // backgroundColor: 'grey',
  },
  qty: {
    alignSelf: "center",
    height: getHeight(49),
    width: null,
    backgroundColor: '#DEE6E9',
    justifyContent: 'center',
    paddingHorizontal: 5,
    borderRadius: 5,
  },
  txt: {
    marginTop: 12,
    fontSize: 16,
    fontFamily: 'SFPROText-Semibold',
    color: '#393B63',
  },
  title: {
    fontSize: 20,
    fontFamily: 'SFPROText-Bold',
    color: '#393B63',
  },
  subtotal: {
    fontSize: 16,
    fontFamily: 'SFPROText-Bold',
    color: '#393B63',
  },
});
