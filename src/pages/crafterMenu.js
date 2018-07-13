import React, { Component } from 'react';
import { StyleSheet, Text, TouchableNativeFeedback, View } from 'react-native';
import { OrderForCrafterPage } from './orderForCrafter';
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
      return <OrderForCrafterPage navi={this.props.navigation} />
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
            <View style={{ flex: 1, borderColor: 'grey', borderRightWidth: 0.3 }}>
              <TouchableNativeFeedback onPress={() => this.setState({ screen: 'orderForCrafter' })}>
                <View style={screen === 'orderForCrafter' ? tabContainerActive : tabContainer}>
                  <Text style={screen === 'orderForCrafter' ? tabTextActive : tabText}>Pesanan</Text>
                </View>
              </TouchableNativeFeedback>
            </View>
            <View style={{ flex: 1, borderColor: 'grey', borderRightWidth: 0.3 }}>
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
    justifyContent: 'center',
},
tabContainerActive: {
    height: 50,
    justifyContent: 'center',
    borderBottomColor: 'red',
    borderBottomWidth: 1
},
tabText: {
    textAlign: 'center',
    fontSize: 15
},
tabTextActive: {
    textAlign: 'center',
    fontSize: 15,
    fontFamily: 'Quicksand-Bold'
},
})
export default CrafterMenuPage;