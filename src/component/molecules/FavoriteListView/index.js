import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import {getWidth, getHeight} from '../../../services/getsize';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import SmallRounded from '../../atoms/RoundedButton';
import Form from '../../atoms/Form';

const FavoriteListView = ({movieTitle, rating, buyOnpress, deleteonPress, poster}) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{
            uri: 'https://image.tmdb.org/t/p/w780' + poster,
          }} />
      <View style={styles.itemInfo}>
        <View style={styles.containerText}>
          <Text style={styles.title}>
            {movieTitle}
            {'\n'}
          </Text>
        </View>
        <View style={styles.iconWrap}>
          <SmallRounded
            width={getWidth(30)}
            height={getHeight(30)}
            onPress={deleteonPress}
            imgSource={require('../../../assets/icon/blue/Delete.png')}
          />
          <SmallRounded
            backgroundColor="#06A7E7"
            width={getWidth(30)}
            height={getHeight(30)}
            onPress={buyOnpress}
            imgSource={require('../../../assets/icon/blue/Buy.png')}
          />
        </View>
      </View>
    </View>
  );
};

export default FavoriteListView;

const styles = StyleSheet.create({
  container: {
    alignSelf: "center",
    // backgroundColor: 'tomato',
    marginTop: 15,
    height: getHeight(145),
    width: getWidth(336),
    flexDirection: "row",
    justifyContent: 'space-between',
  },
  itemInfo: {
    marginTop : getHeight(91),
    // paddingLeft : 20,
    paddingRight : 10,
    zIndex: -1,
    backgroundColor: '#dadada',
    justifyContent: 'space-between',
    // marginLeft: -20,
    height: getHeight(54),
    width: getWidth(238),
    alignItems: 'center',
    flexDirection: 'row',
    borderBottomRightRadius: 5,
    borderTopRightRadius: 5,
  },
  image: {
    // backgroundColor: 'grey',
    height: getHeight(145),
    width: getWidth(100),
    borderRadius: 20,
    resizeMode: "contain"
  },
  containerText: {
    marginLeft: 5,
    width: getWidth(140),
    height: getHeight(54),
    // backgroundColor: 'grey',
  },
  iconWrap:{
    width:getWidth(70),
    height:getHeight(30),
    flexDirection : "row",
    justifyContent : 'space-between'
  },
  txt: {
    marginTop: 12,
    fontSize: 14,
    fontFamily: 'SFPROText-Semibold',
    color: '#393B63',
  },
  title: {
    fontSize: 16,
    fontFamily: 'SFPROText-Bold',
    color: '#393B63',
  },
});
