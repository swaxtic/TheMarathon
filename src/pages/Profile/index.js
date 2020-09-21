import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View } from 'react-native'
import {useDispatch, useSelector} from 'react-redux';
/////////////////////////////////////////////////////////////
import ProfileCard from '../../component/molecules/ProfileCard';
import TopWithIcon from '../../component/molecules/TopWithIcon';

const Profile = ({navigation}) => {
  const cartList = useSelector((state) => state.cartReducer.Cart);
    return (
      <View style={styles.container}>
        <TopWithIcon
          count={cartList.length}
          text="Profile"
          imgSource={require('../../assets/icon/blue/Buy.png')}
          onPress={() => navigation.push('Cart')}
        />
        <ProfileCard onpress1={()=> alert('1')} onpress2={()=> alert('2')} onpress3={()=> alert('3')}/>
      </View>
    );
}

export default Profile

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    backgroundColor: '#F7F7F7',
  },
});
