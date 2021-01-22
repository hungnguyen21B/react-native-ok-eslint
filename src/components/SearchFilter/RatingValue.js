import React from 'react';
import { StyleSheet, View } from 'react-native';
import RatingContainerTop from './RatingContainerTop';
import ButtonValue from './ButtonValue';
const RatingValue = ({ source, title }) => {
  return (
    <View style={styles.ratingContainer}>
      <RatingContainerTop source={source} title={title} />
      <View style={styles.ratingValueContainer}>
        <ButtonValue value={'Good'} />
        <ButtonValue value={'Good'} />
        <ButtonValue value={'Good'} />
      </View>
    </View>
  );
};

export default RatingValue;

const styles = StyleSheet.create({
  ratingValueContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 13,
  },
  ratingContainer: {
    marginBottom: 28,
  },
});
