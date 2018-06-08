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
import { setCustomText } from 'react-native-global-props';

import { createStackNavigator } from 'react-navigation';
import { DashboardPage } from './pages/dashboard.js';
import { OrderPage } from './pages/order.js';
import { LoginPage } from './pages/login';


console.disableYellowBox = true;

// font
const customTextProps = {
  style: {
    fontFamily: 'Quicksand-Regular'
  }
}
setCustomText(customTextProps)


const Routes = createStackNavigator({
  Dashboard: {
    screen: DashboardPage
  },
  Login: {
    screen: LoginPage
  },
  Order: {
    screen: OrderPage
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
