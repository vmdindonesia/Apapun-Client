import React, { Component } from 'react';
import { StyleSheet, Text, TouchableNativeFeedback, View, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { CrafterOrderMenuPage } from './CrafterOrderMenu';
import { MenuCrafterPage } from './menuCrafter';

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
      screen: 'CrafterOrderMenu'
    }
  }

  renderScreen = () => {
    if (this.state.screen === 'CrafterOrderMenu') {
      return <CrafterOrderMenuPage navi={this.props.navigation} />
    } else if (this.state.screen === 'menuCrafter') {
      return <MenuCrafterPage navi={this.props.navigation} />
    }
  }

  render() {
    const { screen } = this.state;
    console.log(this.props.onScreen, 'PROPS SCREEN')
    const {
      menuContainerStyle, tabContainer, tabContainerActive, tabText, tabTextActive
    } = styles;

    return (
      <View style={menuContainerStyle}>
        <View style={{ flexDirection: 'row' }}>
          <View style={{ flex: 1 }}>
            <TouchableNativeFeedback onPress={() => this.setState({ screen: 'CrafterOrderMenu' })}>
              <View style={screen === 'CrafterOrderMenu' ? tabContainerActive : tabContainer}>
                <Image
                  style={{ width: 30, height: 30, alignSelf: 'center' }}
                  source={require('./../assets/images/List.png')}
                  resizeMode='stretch'
                />
                <Text style={screen === 'CrafterOrderMenu' ? tabTextActive : tabText}>Pesanan</Text>
              </View>
            </TouchableNativeFeedback>
          </View>
          <View style={{ borderRightWidth: 1, height: 30, alignSelf: 'center' }} />
          <View style={{ flex: 1 }}>
            <TouchableNativeFeedback onPress={() => this.setState({ screen: 'menuCrafter' })}>
              <View style={screen === 'menuCrafter' ? tabContainerActive : tabContainer}>
                <Image
                  style={{ width: 30, height: 30, alignSelf: 'center' }}
                  source={require('./../assets/images/ic_menu.png')}
                  resizeMode='stretch'
                />
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
    flex: 1
  },
  tabContainer: {
    height: 60,
    justifyContent: 'center',
  },
  tabContainerActive: {
    height: 60,
    justifyContent: 'center'
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