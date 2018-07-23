import React, { Component } from 'react';
import { StyleSheet, Text, TouchableNativeFeedback, View, TouchableOpacity, Image } from 'react-native';
import { MenuCrafterPage } from './menuCrafter';
import Icon from 'react-native-vector-icons/Ionicons';
import { CrafterOrderMenuPage } from './CrafterOrderMenu';

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
    if (this.state.screen === 'CrafterOrderMenu') {
      return <CrafterOrderMenuPage navi={this.props.navigation} />
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
          <View style={{ flex: 1 }}>
            <TouchableNativeFeedback onPress={() => this.setState({ screen: 'CrafterOrderMenu' })}>
              <View style={screen === 'CrafterOrderMenu' ? tabContainerActive : tabContainer}>
              <Image style={{ width: 20, height: 20, alignSelf: 'center'}}
              source={require('./../assets/images/List.png')}
              />
                <Text style={screen === 'CrafterOrderMenu' ? tabTextActive : tabText}>Pesanan</Text>
              </View>
            </TouchableNativeFeedback>
          </View>
          <View style={{ borderRightWidth: 0.7, height: 30, borderRightColor: '#ddd', alignSelf: 'center' }} />
          <View style={{ flex: 1 }}>
            <TouchableNativeFeedback onPress={() => this.setState({ screen: 'menuCrafter' })}>
              <View style={screen === 'menuCrafter' ? tabContainerActive : tabContainer}>
              <Image style={{ width: 20, height: 20, alignSelf: 'center'}}
              source={require('./../assets/images/ic_menu.png')}
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
    height: 55,
    justifyContent: 'center',
  },
  tabContainerActive: {
    height: 55,
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