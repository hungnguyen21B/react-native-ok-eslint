import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import Colors from '../../themes/Colors';
import Fonts from '../../themes/Fonts';
const ButtonValue = ({ value, styleContainer, styleText }) => {
  return (
    <TouchableOpacity style={[styles.btnValue, styleContainer]}>
      <Text style={[styles.txtValue, styleText]}>{value}</Text>
    </TouchableOpacity>
  );
};
export default ButtonValue;

const styles = StyleSheet.create({
  btnValue: {
    width: 91,
    height: 34,
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: Colors.primary,
  },
  txtValue: {
    fontFamily: Fonts.type.mulish,
    fontWeight: '400',
    lineHeight: 17.57,
    letterSpacing: 0.2,
    fontSize: 14,
  },
});
