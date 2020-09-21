import 'react-native-gesture-handler';
import * as React from 'react';
import {Button, View, Text, Dimensions, Image} from 'react-native';
import {
  NavigationContainer,
  getFocusedRouteNameFromRoute,
} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import {Provider} from 'react-redux'
import {store} from '../store'
/////////////////////////////////////////////////////////////
import Splash from './Splash';
import Login from './Login';
import Home from './Home';
import Cart from './Cart';
import Profile from './Profile';
import Favorite from './WatchList';
import Detail from './Detail';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();


const MyHome = () => {
  return (
    <Tab.Navigator
      screenOptions={({route, navigation}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name == 'Home') {
            iconName = focused
              ? require('../assets/icon/blue/Home.png')
              : require('../assets/icon/grey/Home.png');
          } else if (route.name === 'Favorite') {
            iconName = focused
              ? require('../assets/icon/blue/Heart.png')
              : require('../assets/icon/grey/Heart.png');
          } else if (route.name === 'Profile') {
            iconName = focused
              ? require('../assets/icon/blue/Profile.png')
              : require('../assets/icon/grey/Profile.png');
          }
          return <Image source={iconName} size={size} color={color} />;
        },
      })}
      backBehavior= 'none'
      tabBarOptions={{
        showLabel: false,
        activeTintColor: '#393B63',
        inactiveTintColor: 'gray',
        style: {
          backgroundColor: '#F9F8F7',
          width: windowWidth,
          height: 60,
        },
      }}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Favorite" component={Favorite} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
};

const Main = () => {
  return (
    <Provider store={store}>
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen
          options={{headerShown: false}}
          name="Splash"
          component={Splash}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="MyHome"
          component={MyHome}
          options={{
            animationEnabled: false,
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Cart"
          component={Cart}
          options={{
            animationEnabled : false,
            title: '',
            headerTransparent: true,
            headerStyle: {
              backgroundColor: 'transparent',
              elevation: 0,
            },
            headerTitleAlign: 'center',
            headerTitleStyle: {
              fontFamily: 'SFPRODisplay-Bold',
            },
            headerBackImage: () => <Icon color='#393B63' name="close" size={32} />,
          }}
        />
        <Stack.Screen
          name="Detail"
          component={Detail}
          options={{
            animationEnabled : false,
            title: '',
            headerTransparent: true,
            headerStyle: {
              backgroundColor: 'transparent',
              elevation: 0,
            },
            headerTitleAlign: 'center',
            headerTitleStyle: {
              fontFamily: 'SFPRODisplay-Bold',
            },
            headerBackImage: () => <Icon color='#393B63' name="close" size={32} />,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
    </Provider>
  );
};

export default Main;
