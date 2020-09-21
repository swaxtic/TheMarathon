import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View,Dimensions } from 'react-native'
import BottomNav from '../../component/molecules/BottomNav';
import TopBigPicture from '../../component/molecules/TopBigPicture'
import DetailMov from '../../component/molecules/DetailMovie'
//////////////////////////////////////
import {useDispatch, useSelector} from 'react-redux';
import * as CartActions from '../../store/actions/cartActions';
import * as FavActions from '../../store/actions/favActions';
import detailApi from '../../services/apiDetailMovie';

const Detail = ({route,navigation}) => {
  const cartList = useSelector((state) => state.cartReducer.Cart);
  // const favList = useSelector((state) => state.favReducer.Favorite);
  const dispatch = useDispatch();
  const [data, setData] = useState([]);
  const {itemId} = route.params;
  useEffect(() => {
    async function load(page) {
      await detailApi
          .get(`${itemId}`)
          .then((response) => {
            const data = response.data;
            setData({
              id: itemId,
              title: data.title,
              imdb: data.vote_average,
              poster: data.poster_path,
              overview: data.overview,
              backdrop: data.backdrop_path,
              release_date: data.release_date,
            });
            // setLoading(false);
          })
          .catch((error) => {
            console.log(error.response);
          });
    }
    load();
    return () => {
      // console.log(JSON.stringify(data.posterr));
    };
  }, [cartList]);
  var addData = (title, id,poster,price=150000,qty=1) => {
    dispatch(CartActions.addToCartSuccess(id, title,poster,price,qty));
    alert('Film Berhasil Dimasukkan ke Dalam Keranjang')
  };
  var addFav = (title, id, poster, price = 150000, qty = 1) => {
    dispatch(FavActions.addToFavSuccess(id, title, poster,price,qty));
    alert('Berhasil Menambahkan Film ke Favorite')
  };
    return (
      <View style={styles.container}>
        <TopBigPicture poster={data.backdrop} />
        <DetailMov title={data.title} imdb={data.imdb} date={data.release_date} overview={data.overview}/>
        <BottomNav
          price='Rp. 150.000'
          icon={true}
          onPress1={() => addFav(data.title,data.id,data.poster)}
          onPress2={() => addData(data.title,data.id,data.poster)}
          icon1={require('../../assets/icon/blue/HeartSmall.png')}
          icon2={require('../../assets/icon/blue/Buy.png')}
          backgroundColor="#393B63"
        />
      </View>
    );
}

export default Detail

const styles = StyleSheet.create({
  container: {
    flex :1,
    paddingHorizontal: 16,
    backgroundColor: '#F7F7F7',
  },
});
