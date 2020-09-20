import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { getHeight, getWidth } from '../../../services/getsize';

import Menu from '../../atoms/Menu';

const ProfileCard = ({onpress1,onpress2,onpress3}) => {
    return (
    <View style={styles.container}>
          <View style={styles.infoAccount}>
              <View style={{height: 55,width: 55, borderRadius: 55/2,backgroundColor: 'grey'}}></View>
              <Text style={[{color: '#393B63',fontSize: 16},styles.titel]}>Muhammad Adip Kolili</Text>
              <Text style={[{color:'#F4BB8A',fontSize: 14,},styles.titel]}>Member</Text>
            </View>
          <View style={styles.body}>
              <View style={{marginTop:getHeight(88), width: getWidth(309),height: getHeight(194)}}>
                <Text style={[{fontSize : 16,marginBottom: 5,},styles.txt]}>Transactions</Text>
                <Menu width={getWidth(309)}height={getHeight(50)} onPress={onpress1} backgroundColor='#DADADA' title='Waiting for payment'descr='All unpaid transactions' nameIcon='chevron-right'/>
                <Menu width={getWidth(309)}height={getHeight(50)} onPress={onpress2} backgroundColor='#DADADA' title='Transaction History'descr='All transactions done' nameIcon='chevron-right'/>
                <Menu width={getWidth(309)}height={getHeight(50)} onPress={onpress3} backgroundColor='#DADADA' title='Logout'descr='' nameIcon='chevron-right'/>
              </View>
            </View>
    </View>
    )
}

export default ProfileCard

const styles = StyleSheet.create({
  container: {
    alignSelf: 'center',
    marginTop: getHeight(14),
  },
  infoAccount: {
    zIndex: 1,
    alignSelf: 'center',
    marginBottom: -getHeight(70),
    backgroundColor: 'transparent',
    width: getWidth(179),
    height: getHeight(96),
    elevation: 3,
    alignItems: 'center',
  },
  body: {
    alignItems: 'center',
    zIndex: -1,
    borderRadius: 15,
    backgroundColor: '#F9F8F7',
    height: getHeight(480),
    width: getWidth(338),
    elevation: 3,
  },
  titel: {
    fontFamily: 'SFPROText-Bold',
  },
  txt: {
    fontFamily: 'SFPROText-Regular',
    color: '#393B63',
  },
});
