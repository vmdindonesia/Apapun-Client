import React, { Component } from 'react';
import { StyleSheet, Text, TouchableNativeFeedback, View } from 'react-native';
import { MyOrderPage } from './myOrder';
import { CrafterPage } from './crafter';

export class CrafterMenuPage extends React.Component {
  static navigationOptions = {
    headerTitle: 'Crafter Menu'
  }

  constructor(props) {
    super(props)
    this.state = {
      screen: 'crafter'
    }
  }

  renderScreen = () => {
    if (this.state.screen === 'orderForCrafter') {
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
              <TouchableNativeFeedback onPress={() => this.setState({ screen: 'crafterMenu' })}>
                <View style={screen === 'crafterMenu' ? tabContainerActive : tabContainer}>
                  <Text style={screen === 'crafterMenu' ? tabTextActive : tabText}>Pesanan</Text>
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
export default CrafterMenuPage;