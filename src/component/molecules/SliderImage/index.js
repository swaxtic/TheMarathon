import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import {SliderBox} from 'react-native-image-slider-box';
import {getWidth, getHeight} from '../../../services/getsize';

const MovieList = ({imgSlider}) => {
  return (
    <SliderBox
      ImageComponentStyle={{marginTop: 15}}
      imageLoadingColor="#2196F3"
      images={imgSlider}
      resizeMethod={'resize'}
      resizeMode={'contain'}
      sliderBoxHeight={140}
      onCurrentImagePressed={(index) => console.warn(`image ${index} pressed`)}
      dotColor="#393B63"
      inactiveDotColor="#90A4AE"
      paginationBoxVerticalPadding={20}
      autoplay
      circleLoop
    />
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
});
