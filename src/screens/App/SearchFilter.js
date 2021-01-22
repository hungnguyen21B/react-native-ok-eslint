/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import Colors from '../../themes/Colors';
import Fonts from '../../themes/Fonts';
import Header from '../../components/SearchFilter/Header';
import ServiceType from '../../components/SearchFilter/ServiceType';
import RatingContent from '../../components/SearchFilter/RatingContent';
import ButtonValue from '../../components/SearchFilter/ButtonValue';
import RatingValue from '../../components/SearchFilter/RatingValue';
import RatingWithDropDown from '../../components/SearchFilter/RatingWithDropDown';
//
const SearchFilter = () => {
  return (
    <ScrollView style={styles.mainContainer}>
      <Header />
      <ServiceType />
      <RatingContent
        source={'ic-baby'}
        title={'KindiCare Rating'}
        firstText={'8.0'}
        lastText={'10.0'}
        percent={20}
      />
      <RatingContent
        source={'ic-abc'}
        title={'The shorted distance from home'}
        firstText={'0 km'}
        lastText={'50 km'}
        percent={0}
      />
      <RatingValue source={'ic-family'} title={'Value For Money For The Area'} />

      <RatingContent
        source={'ic-bag'}
        title={'Cost Per Day'}
        firstText={'$55'}
        lastText={'$127'}
        percent={10}
      />
      <RatingWithDropDown source={'ic-bag'} title={'National Quality Standard Rating'} />
      <RatingWithDropDown source={'ic-bag'} title={'Highest KindiCare Rating'} />
      <ButtonValue
        value={'Find Childcare'}
        styleContainer={styles.btnFindChildcareContainer}
        styleText={styles.btnFindChildcareText}
      />
    </ScrollView>
  );
};
//
export default SearchFilter;

const styles = StyleSheet.create({
  //
  btnFindChildcareContainer: {
    height: 48,
    width: '100%',
    backgroundColor: Colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 21,
  },
  btnFindChildcareText: {
    fontSize: 14,
    fontWeight: '700',
    lineHeight: 20,
    color: Colors.white,
    fontFamily: Fonts.type.mulish,
  },
  //
  mainContainer: {
    marginHorizontal: 20,
    flexDirection: 'column',
  },
});
