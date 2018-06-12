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
import { COLOR } from './shared/config';
import { createStackNavigator } from 'react-navigation';
import { DashboardPage } from './pages/dashboard.js';
import { LoginPage } from './pages/login.js';
import { OrderPage } from './pages/order.js';

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
}, {
    cardStyle: { backgroundColor: '#fafafa' },
    navigationOptions: {
      headerTitleStyle: {
        color: '#ffffff',
        fontFamily: 'Muli-Bold',
        fontWeight: '300',
      },
      headerStyle: {
        backgroundColor: COLOR.secondary_b,
      },
      headerTintColor: '#ffffff',
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
