import React, { Component } from 'react';
import { StyleSheet, BackHandler, Text, TouchableNativeFeedback, Picker, Alert, Keyboard, ToastAndroid, TouchableOpacity, View, Image } from 'react-native';
import { COLOR } from './../shared/config';
import { MyOrderPage } from './myOrder';
import { CrafterPage } from './crafter';

export class FindingCrafterPage extends React.Component {
  static navigationOptions = {
    headerTitle: 'Mencari Crafter'
  }

  constructor(props) {
    super(props)
    this.state = {
      screen: 'crafter'
    }
  }

  renderScreen = () => {
    if (this.state.screen === 'myOrder') {
      return <MyOrderPage navi={this.props.navigation} />
    }else if (this.state.screen === 'crafter') {
      return <CrafterPage navi={this.props.navigation} />
    }
  }

  render() {
    const { screen } = this.state;

    const {
      menuContainerStyle, tabContainer, tabContainerActive, tabText, tabTextActive
    } = styles;

    return (
        <View style={menuContainerStyle}>
          <View style={{ flexDirection: 'row' }}>
            <View style={{ flex: 1, borderColor: '#3484d7', borderRightWidth: 0.3 }}>
              <TouchableNativeFeedback onPress={() => this.setState({ screen: 'myOrder' })}>
                <View style={screen === 'myOrder' ? tabContainerActive : tabContainer}>
                  <Text style={screen === 'myOrder' ? tabTextActive : tabText}>Pesanan Saya</Text>
                </View>
              </TouchableNativeFeedback>
            </View>
            <View style={{ flex: 1, borderColor: '#3484d7', borderRightWidth: 0.3 }}>
              <TouchableNativeFeedback onPress={() => this.setState({ screen: 'crafter' })}>
                <View style={screen === 'crafter' ? tabContainerActive : tabContainer}>
                  <Text style={screen === 'crafter' ? tabTextActive : tabText}>Crafter</Text>
                </View>
              </TouchableNativeFeedback>
            </View>
          </View>
          <View style={styles.menuContainerStyle}>
              {this.renderScreen()}
            </View>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  menuContainerStyle: {
    flex: 4
  },
  tabContainer: {
    height: 50,
    justifyContent: 'center'
  },
  tabContainerActive: {
    height: 50,
    justifyContent: 'center'
  },
  tabText: {
    color: '#67a6e3',
    textAlign: 'center',
    fontSize: 14
  },
  tabTextActive: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 14,
    fontFamily: 'Quicksand-Regular'
  }
})
export default FindingCrafterPage;