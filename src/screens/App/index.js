/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import NavigationUtils from '../../navigation/NavigationUtils';
import Icon from 'react-native-vector-icons/kindicare';
// import { Navigation } from 'react-native-navigation';
const HomeScreen = (props) => {
  return (
    <View>
      <Text>App Kindi</Text>
      <Icon name="ic-bag" size={30} color="#900" />
      <TouchableOpacity
        style={{ height: 100, width: 100, backgroundColor: 'green' }}
        onPress={() => NavigationUtils.push(props.componentId, 'SearchFilter', 'Search Filter')}
      >
        <Text>Search Filter</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
