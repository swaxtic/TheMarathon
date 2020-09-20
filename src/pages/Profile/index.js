import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Menu from '../../component/atoms/Menu';
import ProfileCard from '../../component/molecules/ProfileCard';
import TopWithIcon from '../../component/molecules/TopWithIcon';
import { getHeight, getWidth } from '../../services/getsize';

const Profile = () => {
    return (
      <View style={styles.container}>
        <TopWithIcon
          count={20}
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
