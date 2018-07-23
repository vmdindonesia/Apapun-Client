import React, { Component } from 'react';
import { StyleSheet, Text, TouchableNativeFeedback, View, TouchableOpacity, Image, AsyncStorage } from 'react-native';
import { MyOrderPage } from './myOrder';
import { CrafterPage } from './crafter';
import Icon from 'react-native-vector-icons/Ionicons';
import Axios from 'axios';

export class FindingCrafterPage extends React.Component {

  static navigationOptions = ({ navigation }) => ({
    headerLeft: (
      <TouchableOpacity
        onPress={() => { navigation.goBack(); console.log(navigation.goBack(), 'Props Order') }}
      >
        <Icon size={30} style={{ marginLeft: 25, color: '#EF1C25' }} name='ios-arrow-back' />
      </TouchableOpacity>

    ),
    headerTitle: 'Mencari Crafter',
    headerStyle: {
      elevation: 0
    }
  });

  constructor(props) {
    super(props)
    this.state = {
      screen: 'crafter'
    }
  }

  renderScreen = () => {
    if (this.state.screen === 'myOrder') {
      return <MyOrderPage navi={this.props.navigation} />
    } else if (this.state.screen === 'crafter') {
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
                <Image style={{ width: 25, height: 25, alignSelf: 'center' }}
                  source={require('./../assets/images/ic_list.png')}
                />
                <Text style={screen === 'myOrder' ? tabTextActive : tabText}>Pesanan Saya</Text>
              </View>
            </TouchableNativeFeedback>
          </View>
          <View style={{ flex: 1, borderColor: '#3484d7', borderRightWidth: 0.3 }}>
            <TouchableNativeFeedback onPress={() => this.setState({ screen: 'crafter' })}>
              <View style={screen === 'crafter' ? tabContainerActive : tabContainer}>
                <Image style={{ width: 25, height: 25, alignSelf: 'center' }}
                  source={require('./../assets/images/search.png')}
                />
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
export default FindingCrafterPage;