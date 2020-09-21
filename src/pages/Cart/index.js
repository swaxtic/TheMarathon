import React, {useState, useEffect} from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View, 
  TextInput
} from 'react-native';
import Top from '../../component/molecules/Top';
import {formatPrice} from '../../util/format'
import {getWidth, getHeight} from '../../services/getsize';
import CartList from '../../component/molecules/CartList';
import Bottom from '../../component/molecules/BottomNav'
import {useDispatch, useSelector} from 'react-redux';
import * as CartActions from '../../store/actions/cartActions';

const Cart = () => {
  const total = useSelector((state) =>
    formatPrice(
      state.cartReducer.Cart.reduce((totalSum, product) => {
        return totalSum + product.price * product.qty;
      }, 0),
    ),
  );
  const cartList = useSelector((state) =>
      state.cartReducer.Cart.map((product) => ({
        ...product,
        subTotal: formatPrice(product.price * product.qty),
      })),
    );
  const dispatch = useDispatch();
    useEffect(() => {
      console.log('cartlist udate')
    }, [cartList]);

    var deleteData = (id) => {
      dispatch(CartActions.removeFromCart(id));
    };
    var increaseQTY = (id,qty) => {
      dispatch(CartActions.increaseQty(id,qty));
    };
    var decreaseQTY = (id,currqty, qty) => {
      if(currqty!=0){
        dispatch(CartActions.increaseQty(id, qty));
      }else{
        deleteData(id)
      }
    };
    return (
      <View style={styles.container}>
        <Top marginTop={getHeight(36)} text="Cart" />
        <ScrollView showsVerticalScrollIndicator={false}>
          {cartList.length ? (
            cartList.map((item, index) => {
              return (
                <CartList
                  value={item.qty}
                  total={formatPrice(item.subtotal)}
                  key={index}
                  movieTitle={item.title}
                  poster={item.poster}
                  price="Rp. 150.000"
                  deleteonPress={() => deleteData(item.id)}
                  addOnpress={() => increaseQTY(item.id, 1)}
                  minOnpress={() => decreaseQTY(item.id, item.qty, -1)}
                />
              );
            })
          ) : (
            <Text
              style={[
                {marginVertical: getHeight(200), alignSelf: 'center'},
                styles.txt,
              ]}>
              Ups...{'\n'} No data can be displayed here :(
            </Text>
          )}
        </ScrollView>
        <Bottom
          backgroundColor="#DEE6E9"
          price={total}
          onPress={() => alert('Chekout belum tersedia')}
        />
      </View>
    );
}

export default Cart

const styles = StyleSheet.create({
    container :{
        flex : 1,
        paddingHorizontal: 16,
        backgroundColor : '#F7F7F7'
    },
    txt:{
    fontSize: 14,
    fontFamily: 'SFPROText-Semibold',
    color: '#393B63',
    textAlign: "center"
  }
})
