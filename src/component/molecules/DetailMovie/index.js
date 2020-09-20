import React from 'react';
import {StyleSheet, Text, View, Dimensions} from 'react-native';
import {getWidth, getHeight} from '../../../services/getsize';

const DetailMovie = ({
  title,
  date,
  imdb='-',
  overview
}) => {
  return (
    <View>
      <View style={styles.container}>
        <Text style={[{fontSize: 26}, styles.txt]}>{title}</Text>
        <View style={styles.info}>
          <Text style={styles.txt}>IMDB {imdb}</Text>
          <Text style={styles.txt}>Release Date :
          <Text style={[styles.date]}>{date}</Text>
          </Text>
        </View>
      </View>
      <View style={styles.overview}>
        <Text style={[{marginBottom: 5, fontSize: 18}, styles.txt]}>
          Overview
        </Text>
        <Text style={styles.txt}>{overview}</Text>
      </View>
    </View>
  );
};

export default DetailMovie;

const styles = StyleSheet.create({
  container: {
    marginTop: 5,
    width: getWidth(348),
    height: getHeight(84),
  },
  info: {
    marginTop: 10,
    justifyContent: 'space-between',
    flexDirection: 'row',
    // backgroundColor: 'yellow',
    width: getWidth(348),
    height: getHeight(16),
  },
  overview: {
    marginBottom: getHeight(110),
    height: getHeight(200),
    width: getWidth(347),
    // backgroundColor: 'pink',
  },
  txt: {
    fontFamily: 'SFPROText-Semibold',
    color: '#393B63',
  },
  date: {
    fontFamily: 'SFPROText-Semibold',
    color: '#F4BB8A',
  },
});