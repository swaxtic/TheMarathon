import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TextInput,
  // TouchableOpacity,
  Alert,
  Image,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import MaterialC from 'react-native-vector-icons/MaterialCommunityIcons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Button from '../../component/atoms/Button';
import Form from '../../component/atoms/Form';
import {NavigationHelpersContext} from '@react-navigation/native';
// import {useSelector} from 'react-redux';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Login = ({navigation}) => {
//   const globalState = useSelector((state) => state);
//   const [form, setForm] = useState({
//     fullName: '',
//     email: '',
//     password: '',
//   });
//   useEffect(() => {
//     console.log('Did Mount');
//   }, []);
  return (
    <View style={styles.container}>
    <View style={styles.bigTextContainer}>
        <Image 
        style={{width: 188, height: 65, marginTop: '8.1%',alignSelf: "center"}}
        resizeMode = "contain"
        source={require('../../assets/logo/Marvel_The_Marathon_Blue.png')} />
    </View>
    <Form height='7.8%'width= '91.47%' placeholder="Email .." marginTop={72} alignSelf='center' />
    <Form height='7.8%'width= '91.47%'secure={true} placeholder="Password" marginTop={13} alignSelf='center' />
    <Button backgroundColor= '#393B63'height ='7.8%' width = '91.47%'title="Login" marginTop={28} alignSelf='center' onPress={()=>navigation.push('MyHome')}/>
    <Text 
    style={[{marginTop: 13,marginLeft: '62.4%',}, styles.text]}>
        Forgot Password ?</Text>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6F6F6',
    padding: 16,
  },
  smallText: {
    // backgroundColor: 'yellow',
    fontSize: 12,
    fontFamily: 'SFPRODisplay-Regular',
    left: 5,
  },
  text: {
    fontSize: 15,
    fontFamily: 'SFPRODisplay-Regular',
    color: '#06A7E7',
    // backgroundColor: 'pink',
  },
});
