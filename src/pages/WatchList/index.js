import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View } from 'react-native'
import TopWithIcon from '../../component/molecules/TopWithIcon'
import FavoriteList from '../../component/molecules/FavoriteListView'
import { ScrollView } from 'react-native-gesture-handler';

const WatchList = ({navigation}) => {
    const [cart] = useState([
      {nama: '#tag 1',price: 150},
      {nama: '#tag 2', price: 150},
      {nama: '#tag 3', price: 150},
      {nama: '#tag 4', price: 150},
      {nama: '#tag 5', price: 150},
    ]);
    useEffect(() => {}, []);
    return (
      <View style={styles.container}>
        <TopWithIcon
          count={20}
          text="Favorite"
          imgSource={require('../../assets/icon/blue/Buy.png')}
          onPress={() => navigation.push('Cart')}
        />
        <ScrollView showsVerticalScrollIndicator={false} >
          {cart.map((item, index) => {
            return (
              <FavoriteList
                //poster={}
                key={index}
                movieTitle={item.nama}
                rating={item.price}
                deleteonPress={() => alert('delete')}
                buyOnpress={()=> alert('buy')}
              />
            );
          })}
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
});
