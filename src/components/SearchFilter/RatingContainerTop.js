import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import Colors from '../../themes/Colors';
import Fonts from '../../themes/Fonts';
import Icon from 'react-native-vector-icons/kindicare';

const RatingContainerTop = ({ source, title }) => {
  return (
    <View style={styles.iconRatingContainerTop}>
      <View>
        <Icon name={source} size={22} color={Colors.primary} />
      </View>
      <View style={styles.ratingTextContainer}>
        <Text style={styles.ratingTitleContainerText}>{title}</Text>
      </View>
    </View>
  );
};
export default RatingContainerTop;

const styles = StyleSheet.create({
  iconRatingContainerTop: {
    flexDirection: 'row',
  },
  iconRatingTop: {
    tintColor: Colors.primary,
  },
  ratingTextContainer: {
    marginLeft: 14.14,
  },
  ratingTitleContainerText: {
    fontFamily: Fonts.type.mulish,
    fontSize: 16,
    fontWeight: '700',
    lineHeight: 20.08,
    letterSpacing: 0.02,
  },
});
