import React from 'react'
import { StyleSheet, Text, View,Dimensions } from 'react-native'
import BottomNav from '../../component/molecules/BottomNav';
import Top from '../../component/molecules/TopBigPicture'
import DetailMov from '../../component/molecules/DetailMovie'

const Detail = () => {
    return (
      <View style={styles.container}>
        <Top/>
        <DetailMov title='Judul' date='' overview='tes'/>
        <BottomNav
          icon={true}
          onPress1={() => alert('press 1')}
          onPress2={() => alert('press2')}
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
