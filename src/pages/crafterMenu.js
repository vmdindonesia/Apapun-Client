import React, { Component } from 'react';
import { StyleSheet, Text, TouchableNativeFeedback, View, TouchableOpacity } from 'react-native';
import { OrderForCrafterPage } from './orderForCrafter';
import { CrafterPage } from './crafter';
import { MenuCrafterPage } from './menuCrafter';
import Icon from 'react-native-vector-icons/Ionicons';

export class CrafterMenuPage extends React.Component {

  static navigationOptions = ({ navigation }) => ({
    headerLeft:
        <TouchableOpacity
            onPress={() => { navigation.goBack(); console.log(navigation.goBack(), 'Props Order') }}
        >
            <Icon size={30} style={{ marginLeft: 25, color: '#EF1C25' }} name='ios-arrow-back' />
        </TouchableOpacity>,
    headerTitle: 'Crafter Menu'
});

  constructor(props) {
    super(props)
    this.state = {
      screen: 'menuCrafter'
    }
  }

  renderScreen = () => {
    if (this.state.screen === 'orderForCrafter') {
      return <OrderForCrafterPage navi={this.props.navigation} />
    } else if (this.state.screen === 'menuCrafter') {
      return <MenuCrafterPage navi={this.props.navigation} />
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
            <TouchableNativeFeedback onPress={() => this.setState({ screen: 'menuCrafter' })}>
              <View style={screen === 'menuCrafter' ? tabContainerActive : tabContainer}>
                <Text style={screen === 'menuCrafter' ? tabTextActive : tabText}>Menu</Text>
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