import React, {useState, useEffect} from 'react';
import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Dimensions, 
  TextInput
} from 'react-native';
import Top from '../../component/molecules/Top';
import {getWidth, getHeight} from '../../services/getsize';
import CartList from '../../component/molecules/CartList';
import Bottom from '../../component/molecules/BottomNav'


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Cart = () => {
    const [cart] = useState([{
            nama: "#tag 1", price: 150},
        {   nama: "#tag 2", price: 150},
        {   nama: "#tag 3", price: 150},
        {   nama: "#tag 4", price: 150},
        {   nama: "#tag 5", price: 150}
    ]);
    useEffect(() => {
      
    }, []);
    return (
      <View style={styles.container}>
          <Top marginTop={getHeight(36)} text="Cart" />
          <ScrollView showsVerticalScrollIndicator={false} >
            {cart.map((item, index) => {
              return (
                <CartList
                  key={index}
                  movieTitle={item.nama}
                  price={item.price}
                  deleteonPress={() => alert('delete')}
                />
              );
            })}
          </ScrollView>
          {/* <FlatList
          initialNumToRender={3}
          data={cart}
          onEndReachedThreshold={0.5}
          keyExtractor={(x, i) => i.toString()}
          renderItem={({item}) => 
          <CartList movieTitle={item.nama} price={item.price} deleteonPress={()=> alert('delete')} />
        }
        /> */}
        <Bottom
          backgroundColor="#DEE6E9"
          price={0}
          onPress={() => alert('h')}
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
    }
})
