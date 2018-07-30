import React, { Component } from 'react';
import { StyleSheet, Text, TouchableNativeFeedback, View, TouchableOpacity, Image, ToastAndroid } from 'react-native';
import { MyOrderPage } from './myOrder';
import { CrafterPage } from './crafter';
import Icon from 'react-native-vector-icons/Ionicons';
import axios from 'axios';
import { IPSERVER } from './../shared/config';

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
      screen: 'crafter',
      dataOrder: ''
    }
  }

  componentDidMount() {
    console.log(this.props.navigation.state.params, 'Param ID Order');
    const orderId = this.props.navigation.state.params;
    axios.post(`${IPSERVER}/ApapunBets/getBetCrafterByOrder`, { orderId }).then(response => {
      console.log(response.data, 'Response Get Bet')
      // this.setState({ dataOrder: response.data });
    }).catch(error => {
      console.log(error, 'Error Get Order Betting');
      return ToastAndroid.show('Connection Time Out, Server Maybe Down', ToastAndroid.SHORT);
    })
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
      menuContainerStyle, tabContainer, tabContainerActive, tabText, tabTextActive, image, imageActive
    } = styles;

    return (
      <View style={menuContainerStyle}>
        <View style={{ flexDirection: 'row' }}>
          <View style={{ flex: 1, backgroundColor: 'white' }}>
            <TouchableNativeFeedback onPress={() => this.setState({ screen: 'myOrder' })}>
              <View style={screen === 'myOrder' ? tabContainerActive : tabContainer}>
                <Image style={imageActive}
                  source={screen === 'myOrder' ? require('./../assets/images/line_vertical.png') : require('./../assets/images/List.png')}
                />
                <Text style={screen === 'myOrder' ? tabTextActive : tabText}>Pesanan Saya</Text>
              </View>
            </TouchableNativeFeedback>
          </View>
          <View style={{ borderColor: '#ddd', borderRightWidth: 1, height: 30, alignSelf: 'center' }} />
          <View style={{ flex: 1, backgroundColor: 'white' }}>
            <TouchableNativeFeedback onPress={() => this.setState({ screen: 'crafter' })}>
              <View style={screen === 'crafter' ? tabContainerActive : tabContainer}>
                <Image style={imageActive}
                  source={screen === 'crafter' ? require('./../assets/images/Search_Person_Red.png') : require('./../assets/images/Search_Person.png')}
                />
                <Text style={screen === 'crafter' ? tabTextActive : tabText}>Crafter</Text>
              </View>
            </TouchableNativeFeedback>
          </View>
        </View>
        <View style={{ flex: 1 }}>
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
    fontFamily: 'Quicksand-Regular',
    color: 'red'
  },
  imageActive: {
    width: 25,
    height: 25,
    alignSelf: 'center'
  }
})
export default FindingCrafterPage;