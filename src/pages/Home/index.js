import React, {useState, useEffect} from 'react';
import {
  Button,
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import api from '../../services/api'
import {getWidth,getHeight} from '../../services/getsize'
import Top from '../../component/molecules/TopWithIcon'
import Hastag from '../../component/atoms/ButtonMedium'
import MovieList from '../../component/molecules/MovieList'
import SeparatorList from '../../component/molecules/SeparatorList'
import Slide from '../../component/molecules/SliderImage'
import {useDispatch, useSelector} from 'react-redux';
// import * as CartActions from './store/actions/cartActions';
const Home = ({navigation}) => {
  const cartList = useSelector((state) => state.cartReducer.Cart);
    const [data, setData] = useState([]);
    const [imgSlider, setImgSlider] = useState([]);
    const [hastag] = useState([{
            tag: "#tag 1", color: "#F07B7B"},
        {   tag: "#tag 2", color: "#06A7E7"},
        {   tag: "#tag 3", color: "#FEBAC6"},
        {   tag: "#tag 4", color: "#F4BB8A"}
    ]);
    const [slice,setSlice] = useState(5);
    const [page,setPage] = useState(1);
    

    useEffect(() => {
      async function load(page) {
        await api.get('',{
          params:{
            page:page,
          }
        })
        .then((response) => {
            const data = response.data
            for (let i = 0; i < 3; i++) {
              imgSlider.push(
                'https://image.tmdb.org/t/p/w780' +
                  data.results[i].backdrop_path,
              );
            }
            setData(data.results);
            // setLoading(false);
        })
        .catch((error) => {
            console.log(error.response);
        });
      }
      load();
    }, []);

    const handleLoadMore=(slice)=>{
      if (slice == 20) {
        setPage(page+1);
      }
      setSlice(slice+5)
    }
    return (
      <View style={styles.container}>
        <Top
          count={cartList.length}
          text="Movies"
          imgSource={require('../../assets/icon/blue/Buy.png')}
          onPress={() => navigation.push('Cart')}
        />
        <ScrollView showsVerticalScrollIndicator={false}>
          <Slide imgSlider={imgSlider} />
          <View style={{}}>
            <FlatList
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              data={hastag}
              keyExtractor={(x, i) => i.toString()}
              renderItem={({item}) => (
                <Hastag
                  title={item.tag}
                  alignSelf="center"
                  marginTop={15}
                  color={item.color}
                />
              )}
            />
          </View>
          <SeparatorList rightText="See All" leftText="All Movie from Marvel" />
          <View style={{marginTop: 7}}>
            <FlatList
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              initialNumToRender={3}
              data={data.slice(0, slice)}
              onEndReached={() => handleLoadMore(slice)}
              onEndReachedThreshold={0.5}
              keyExtractor={(x, i) => i.toString()}
              renderItem={({item}) => (
                <MovieList
                  onPress={() =>
                    navigation.push('Detail', {
                      itemId: item.id,
                    })
                  }
                  poster={item.poster_path}
                  movieTitle={item.title}
                  bottomText={item.vote_average}
                />
              )}
            />
          </View>
          <SeparatorList rightText="" leftText="Upcoming" />
          <View style={{marginTop: 7}}>
            <FlatList
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              data={data.slice(0, slice)}
              onEndReached={() => handleLoadMore(slice)}
              onEndReachedThreshold={0.5}
              keyExtractor={(x, i) => i.toString()}
              renderItem={({item}) => (
                <MovieList
                  onPress={() =>
                    navigation.push('Detail', {
                      itemId: item.id,
                    })
                  }
                  poster={item.poster_path}
                  movieTitle={item.title}
                  bottomText={item.vote_average}
                />
              )}
            />
          </View>
        </ScrollView>
      </View>
    );
}

export default Home

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    backgroundColor: '#F7F7F7',
  },
});
