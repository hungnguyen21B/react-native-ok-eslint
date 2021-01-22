// In index.js of a new project
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { Navigation } from 'react-native-navigation';
import HomeScreen from './screens/App/index';
import SearchFilter from './screens/App/SearchFilter';
import defaultColors from './themes/Colors';
// Home screen declaration

HomeScreen.options = {
  topBar: {
    title: {
      text: 'Home',
    },
  },
};

// Settings screen declaration - this is the screen we'll be pushing into the stack

Navigation.registerComponent('Home', () => HomeScreen);
Navigation.registerComponent('SearchFilter', () => SearchFilter);

Navigation.setDefaultOptions({
  statusBar: {
    backgroundColor: defaultColors.white,
  },
  topBar: {
    title: {
      color: defaultColors.black,
    },
    backButton: {
      color: defaultColors.black,
    },
    background: {
      color: defaultColors.white,
    },
  },
});

// eslint-disable-next-line no-undef
export default App = () => {
  Navigation.events().registerAppLaunchedListener(async () => {
    Navigation.setRoot({
      root: {
        stack: {
          children: [
            {
              component: {
                id: 'HomeScreen',
                name: 'Home',
              },
            },
          ],
        },
      },
    });
  });
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'whitesmoke',
  },
});
