import React, { Component } from 'react';
import { StyleSheet, Text, TouchableNativeFeedback, View, TouchableOpacity, Image } from 'react-native';
import { OrderForCrafterPage } from './orderForCrafter';
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
<<<<<<< HEAD
        <View style={{ flexDirection: 'row', paddingBottom: 15, paddingTop: 20 }}>
          <View style={{ flex: 1, borderRightWidth: 0.7 }}>
            <TouchableNativeFeedback onPress={() => this.setState({ screen: 'orderForCrafter' })}>
              <View style={screen === 'orderForCrafter' ? tabContainerActive : tabContainer}>
              <Image style={{ width: 25, height: 25, alignSelf: 'center'}}
              source={require('./../assets/images/List.png')}
              />
                <Text style={screen === 'orderForCrafter' ? tabTextActive : tabText}>Pesanan</Text>
=======
        <View style={{ flexDirection: 'row' }}>
          <View style={{ flex: 1, borderColor: 'grey', borderRightWidth: 0.3 }}>
            <TouchableNativeFeedback onPress={() => this.setState({ screen: 'CrafterOrderMenu' })}>
              <View style={screen === 'CrafterOrderMenu' ? tabContainerActive : tabContainer}>
                <Text style={screen === 'CrafterOrderMenu' ? tabTextActive : tabText}>Pesanan</Text>
>>>>>>> e61090c8ddcaf8bdea6a59cb92525fc21c6b7349
              </View>
            </TouchableNativeFeedback>
          </View>
          {/* <View style={{ borderRightWidth: 0.7 }} /> */}
          <View style={{ flex: 1, borderColor: 'grey' }}>
            <TouchableNativeFeedback onPress={() => this.setState({ screen: 'menuCrafter' })}>
              <View style={screen === 'menuCrafter' ? tabContainerActive : tabContainer}>
              <Image style={{ width: 25, height: 25, alignSelf: 'center'}}
              source={require('./../assets/images/menu.png')}
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