/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  View,
  StyleSheet
} from 'react-native';

import { createStackNavigator } from 'react-navigation';
import { LoginPage } from './pages/login.js';
import { DashboardPage } from './pages/dashboard.js';

const Routes = createStackNavigator({
  Dashboard: {
    screen: DashboardPage
  },
  Login: {
    screen: LoginPage
  }
});

class App extends Component<{}> {


  render() {
    return (
      <View style={styles.container}>
        <Routes />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default App;
