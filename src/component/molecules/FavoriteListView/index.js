import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import {getWidth, getHeight} from '../../../services/getsize';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import SmallRounded from '../../atoms/RoundedButton';
import Form from '../../atoms/Form';

const FavoriteListView = ({movieTitle, rating, buyOnpress, deleteonPress, poster}) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={poster} />
      <View style={styles.itemInfo}>
        <View style={styles.containerText}>
          <Text style={styles.title}>
            {movieTitle}
            {'\n'}
            <Text style={styles.txt}>{rating}</Text>
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
    paddingLeft : 12,
    zIndex: -1,
    // backgroundColor: 'pink',
    justifyContent: 'space-between',
    marginLeft: -12,
    height: getHeight(54),
    width: getWidth(228),
    alignItems: 'center',
    flexDirection: 'row',
  },
  image: {
    backgroundColor: 'grey',
    height: getHeight(145),
    width: getWidth(120),
    borderRadius: 20,
  },
  containerText: {
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
