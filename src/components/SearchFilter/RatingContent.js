import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import Colors from '../../themes/Colors';
import Slider from 'react-native-slider';
import RatingContainerTop from './RatingContainerTop';

const RatingContent = ({ source, title, firstText, lastText, percent }) => {
  return (
    <View style={styles.ratingContainer}>
      <RatingContainerTop source={source} title={title} />
      <View style={styles.ratingContentTextContainer}>
        <View>
          <Text style={styles.ratingContentText}>{firstText}</Text>
        </View>
        <View>
          <Text style={styles.ratingContentText}>{lastText}</Text>
        </View>
      </View>
      <View>
        <Slider
          value={percent}
          style={styles.sliderRating}
          onValueChange={(value) => {
            console.log(percent);
          }}
          minimumValue={0}
          maximumValue={30}
          minimumTrackTintColor={Colors.white}
          maximumTrackTintColor={Colors.primary}
        />
      </View>
    </View>
  );
};

export default RatingContent;

const styles = StyleSheet.create({
  ratingContainer: {
    marginBottom: 28,
  },
  ratingContentTextContainer: {
    marginTop: 13,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginRight: 20,
  },
  sliderRating: {
    // width: 111,
    // height: 10,
    borderRadius: 6,
    backgroundColor: Colors.mainL6,
    width: '100%',
    height: 10,
  },
});
