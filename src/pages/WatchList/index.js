import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View } from 'react-native'
import {useDispatch, useSelector} from 'react-redux';
import * as CartActions from '../../store/actions/cartActions';
import * as FavActions from '../../store/actions/favActions';
///////////////////////////////////////
import TopWithIcon from '../../component/molecules/TopWithIcon'
import FavoriteList from '../../component/molecules/FavoriteListView'
import { ScrollView } from 'react-native-gesture-handler';
import { getHeight } from '../../services/getsize';

const WatchList = ({navigation}) => {
  const cartList = useSelector((state) => state.cartReducer.Cart);
  const favList = useSelector((state) => state.favReducer.Favorite);
  const dispatch = useDispatch();

    useEffect(() => {}, []);
    var addToCart = (title, id, poster, price = 150000, qty = 1) => {
      dispatch(CartActions.addToCartSuccess(id, title, poster, price, qty));
    };
    var delFav = (id) => {
      dispatch(FavActions.removeFromFav(id));
    };
    return (
      <View style={styles.container}>
        <TopWithIcon
          count={cartList.length}
          text="Favorite"
          imgSource={require('../../assets/icon/blue/Buy.png')}
          onPress={() => navigation.push('Cart')}
        />
        <ScrollView showsVerticalScrollIndicator={false}>
        {
        favList.length ? (
          favList.map((item, index) => {
            return (
              <FavoriteList
                key={index}
                poster={item.poster}
                movieTitle={item.title}
                deleteonPress={() => delFav(item.id)}
                buyOnpress={() => addToCart(item.title, item.id, item.poster)}
              />
            );
          })
          ):(
          <Text style={[{marginVertical: getHeight(200),alignSelf: 'center'},styles.txt]}>Ups...{'\n'} No data can be displayed here :(</Text>
          )}
        </ScrollView>
      </View>
    );
}

export default WatchList

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    backgroundColor: '#F7F7F7',
  },
  txt:{
    fontSize: 14,
    fontFamily: 'SFPROText-Semibold',
    color: '#393B63',
    textAlign: "center"
  }
});
