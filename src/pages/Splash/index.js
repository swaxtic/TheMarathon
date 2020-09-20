import React, {useEffect} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

const Splash = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('Login');
    }, 2000);
  }, []);
  return (
    <View style={styles.container}>
    <Image
        style={{width: 188, height: 65}}
        resizeMode = "contain"
        source={require('../../assets/logo/Marvel_The_Marathon.png')}
    />
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#393B63',
  },
});
