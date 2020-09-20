import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity,Image} from 'react-native';
import {getWidth, getHeight} from '../../../services/getsize';

const MovieList = ({movieTitle,bottomText, onPress,poster}) => {
  return (
    <TouchableOpacity style={[styles.container]} onPress={onPress}>
      <Image
        style={styles.image}
        source={{
          uri: 'https://image.tmdb.org/t/p/w600_and_h900_bestv2' + poster,
        }}
      />
      <Text style={styles.title}>{movieTitle}</Text>
      <Text style={styles.txt}>IMDB Score : {bottomText}</Text>
    </TouchableOpacity>
  );
};

export default MovieList;

const styles = StyleSheet.create({
  container: {
    width: 121,
    height: 200,
    marginRight: 15,
    // borderColor: 'red',
    // borderWidth: 0.5,
  },
  image: {
    width: 121,
    height: 145,
    resizeMode: 'contain',
    alignSelf: 'center',
    borderWidth: 1,
    borderColor: '#393B63',
  },
  txt: {
    marginTop: 2,
    fontSize: 11,
    fontFamily: 'SFPROText-Semibold',
    color: '#393B63',
  },
  title: {
    marginTop: 2,
    fontSize: 12,
    fontFamily: 'SFPROText-Bold',
    color: '#393B63',
  },
});
