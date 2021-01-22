import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import Colors from '../../themes/Colors';
import Fonts from '../../themes/Fonts';

const ServiceTypeItem = ({ source, title, picked }) => {
  return (
    <View style={styles.serviceTypeItem}>
      <View style={[styles.drawServiceTypeItemCircle, picked && { borderColor: Colors.primary }]}>
        <Image
          source={source}
          style={[styles.iconServiceTypeItem, picked && { tintColor: Colors.primary }]}
        />
      </View>
      <View style={styles.serviceTypeItemTextContainer}>
        <Text style={[styles.serviceTypeItemText, picked && { color: Colors.primary }]}>
          {title}
        </Text>
      </View>
    </View>
  );
};
export default ServiceTypeItem;

const styles = StyleSheet.create({
  drawServiceTypeItemCircle: {
    width: 52,
    height: 52,
    borderWidth: 1,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 11,
    marginRight: 33,
  },
  serviceTypeItemTextContainer: {
    height: 30,
    width: 58,
  },
  serviceTypeItemText: {
    fontSize: 12,
    fontWeight: '400',
    textAlign: 'center',
    fontFamily: Fonts.mulish,
    lineHeight: 15.06,
  },
});
