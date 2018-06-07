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
import { LoginPage } from './pages/login.js';
import { DashboardPage } from './pages/dashboard.js';
import { OrderPage } from './pages/order.js';
import { StartScreenPage } from './pages/StartScreen';


console.disableYellowBox = true;

const Routes = createStackNavigator({
  Screen: {
    screen: StartScreenPage
  },
  Order: {
    screen: OrderPage
  },
  Dashboard: {
    screen: DashboardPage
  },
  Login: {
    screen: LoginPage
  }
});

// font
const customTextProps = {
  style: {
    fontFamily: 'Quicksand-Regular'
  }
}
setCustomText(customTextProps)

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
