import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import Colors from '../../themes/Colors';
import Fonts from '../../themes/Fonts';
const Header = () => {
  return (
    <View style={styles.headerContainer}>
      <View style={styles.iconAddress}>
        <Image source={require('../../assets/Images/map.png')} style={styles.iconAddress} />
      </View>
      <View style={styles.txtAddressContainer}>
        <Text style={styles.txtAddress}>6 Leigh Place, West Pennant Hills ...</Text>
      </View>
      <TouchableOpacity style={styles.tobChangeContainer}>
        <Text style={styles.tboChange}>Change</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  iconAddress: {
    width: 18.75,
    height: 4.85,
  },
  txtAddress: {
    fontWeight: '700',
    lineHeight: 23,
    letterSpacing: 0.2,
    color: Colors.main,
    fontSize: 14,
    fontStyle: 'normal',
    fontFamily: Fonts.type.text,
  },
  txtAddressContainer: {
    marginLeft: 4.62,
    width: 254,
    height: 23,
  },
  headerContainer: {
    marginTop: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
  tboChange: {
    color: Colors.primary,
    lineHeight: 23,
    fontSize: 10,
    fontStyle: 'normal',
  },
  tobChangeContainer: {
    width: 39,
    height: 23,
  },
});
