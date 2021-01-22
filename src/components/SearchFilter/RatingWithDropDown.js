/* eslint-disable react/jsx-no-duplicate-props */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { StyleSheet, View } from 'react-native';
import Colors from '../../themes/Colors';
import Fonts from '../../themes/Fonts';
import DropDownPicker from 'react-native-dropdown-picker';
import RatingContainerTop from './RatingContainerTop';

const RatingWithDropDown = ({ source, title }) => {
  return (
    <View style={styles.ratingContainer}>
      <RatingContainerTop source={source} title={title} />
      <DropDownPicker
        items={[
          {
            label: 'Exceeding or Excellent NQS',
            value: 'Exceeding or Excellent NQS',
            hidden: true,
          },
          {
            label: 'Exceeding or Excellent NQSs',
            value: 'Exceeding or Excellent NQSs',
          },
        ]}
        defaultValue={'Exceeding or Excellent NQS'}
        selectedLabelStyle={{
          color: Colors.primary,
        }}
        dropDownStyle={{
          height: 48,
        }}
        style={styles.dropdown}
        itemStyle={{
          justifyContent: 'flex-start',
        }}
        dropDownStyle={{ backgroundColor: '#fafafa' }}
        onChangeItem={(item) => {
          console.log('item');
        }}
      />
    </View>
  );
};

export default RatingWithDropDown;

const styles = StyleSheet.create({
  //
  iconRatingTop: {
    tintColor: Colors.primary,
  },
  ratingTitleContainerText: {
    fontFamily: Fonts.type.mulish,
    fontSize: 16,
    fontWeight: '700',
    lineHeight: 20.08,
    letterSpacing: 0.02,
  },
  ratingContainer: {
    marginBottom: 28,
  },
  //
  dropdown: {
    color: Colors.primary,
    marginTop: 18,
    borderRadius: 4,
    borderColor: Colors.primary,
  },
});
