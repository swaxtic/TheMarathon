import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import Icon  from 'react-native-vector-icons/MaterialIcons';

const Menu = ({
  backgroundColor,
  title,
  descr,
  onPress,
  alignSelf,
  marginTop,
  height,
  width,
  nameIcon,
}) => {
  return (
    <TouchableOpacity
      style={[
        {
          backgroundColor: backgroundColor,
          marginTop: marginTop,
          alignSelf: alignSelf,
          height: height,
          width: width,
        },
        styles.container,
      ]}
      onPress={onPress}>
      <View style={{width: 200,height : null}}>
        <Text style={styles.titel}>{title}</Text>
        <Text style={styles.descr}>{descr}</Text>
      </View>
      <Icon color="#393B63" name={nameIcon} size={32} />
    </TouchableOpacity>
  );
};

export default Menu;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginBottom: 5,
    alignItems: 'center',
    alignSelf: 'center',
    borderColor: '#06A7E7',
    borderWidth: 0.5,
    paddingLeft : 5,
  },
  titel: {
    fontFamily: 'SFPROText-Regular',
    color: '#393B63',
    fontSize: 16,
  },
  descr: {
    fontFamily: 'SFPROText-Regular',
    color: 'rgba(0, 0, 0, 0.25)',
    fontSize: 14,
  },
});
