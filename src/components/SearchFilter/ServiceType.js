import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import Colors from '../../themes/Colors';
import Fonts from '../../themes/Fonts';
import ServiceTypeItem from './ServiceTypeItem';

const ServiceType = () => {
  return (
    <View style={styles.serviceTypeContainer}>
      <View>
        <Text style={styles.serviceTypeTitle}>Choose Service Type</Text>
      </View>
      <View style={styles.serviceTypeContent}>
        <ServiceTypeItem
          source={require('../../assets/Images/map.png')}
          title={'Child Care Centre'}
        />
        <ServiceTypeItem
          source={require('../../assets/Images/map.png')}
          title={'Child Care Centre'}
          picked={true}
        />
        <ServiceTypeItem
          source={require('../../assets/Images/map.png')}
          title={'Child Care Centre'}
        />
        <ServiceTypeItem
          source={require('../../assets/Images/map.png')}
          title={'Child Care Centre'}
        />
      </View>
    </View>
  );
};

export default ServiceType;

const styles = StyleSheet.create({
  serviceTypeContainer: {
    marginTop: 26,
    marginBottom: 53.62,
  },
  serviceTypeTitleContainer: {
    width: 183,
    height: 23,
  },
  serviceTypeTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: Colors.primary,
    fontFamily: Fonts.mulish,
    lineHeight: 22.59,
  },
  serviceTypeContent: {
    flexDirection: 'row',
    marginLeft: 3,
    marginTop: 25,
  },
});
