import React, { Component } from 'react'
import { View, Text, Image, TouchableNativeFeedback, TouchableOpacity, ScrollView, StyleSheet, TouchableHighlight } from 'react-native'
import { InformasiBankPage } from './InformasiBank';
import { DetailTransaksiPage } from './DetailTransaksi';
import Icon from 'react-native-vector-icons/Ionicons';

export class AkunBankPage extends React.Component {

  static navigationOptions = ({ navigation }) => ({
    headerLeft:

      <TouchableOpacity
        onPress={() => { navigation.goBack(); console.log(navigation.goBack(), 'Props Order') }}
      >
        <Icon size={30} style={{ marginLeft: 25,  color: '#EF1C25'  }} name='ios-arrow-back' />
      </TouchableOpacity>,
    headerTitle: 'Akun Bank',
    headerStyle: {
      elevation: 0
    }
  });

  constructor(props) {
    super(props)
    this.state = {
      screen: 'InformasiBank'
    }

  }

  renderScreen = () => {
    if (this.state.screen === 'InformasiBank') {
      return <InformasiBankPage navi={this.props.navigation} />
    } else if (this.state.screen === 'DetailTransaksi') {
      return <DetailTransaksiPage navi={this.props.navigation} />
    }
  }

  render() {
    const { screen } = this.state;

    const {
      menuContainerStyle, tabContainer, tabContainerActive, tabText, tabTextActive
    } = styles;

    return (
      <View style={{
        flex: 1
      }}>

        <View style={{
          width: '100%',
          flexDirection: 'row',
          borderBottomWidth: 2,
          marginBottom: 3,
          // flex: 1,
          borderColor: '#e5e5e5'
        }}>

          <View
            style={{
              flex: 1,
              height: 50,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
            <TouchableNativeFeedback onPress={() => this.setState({ screen: 'InformasiBank' })}>
              <View style={screen === 'InformasiBank' ? tabContainerActive : tabContainer}>
                <Text style={screen === 'InformasiBank' ? tabTextActive : tabText}>Informasi Bank</Text>
              </View>
            </TouchableNativeFeedback>
          </View>


          <View
            style={{
              flex: 1,
              height: 50,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
            <TouchableNativeFeedback onPress={() => this.setState({ screen: 'DetailTransaksi' })}>
              <View style={screen === 'DetailTransaksi' ? tabContainerActive : tabContainer}>
                <Text style={screen === 'DetailTransaksi' ? tabTextActive : tabText}>Detail Transaksi</Text>
              </View>
            </TouchableNativeFeedback>
          </View>
        </View>


        {this.renderScreen()}
      </View>


    )
  }
}

const styles = StyleSheet.create({
  tabContainer: {
    height: 50,
    justifyContent: 'center'
  },
  tabContainerActive: {
    height: 50,
    justifyContent: 'center',
    borderBottomWidth: 3,
    borderColor: '#ef1c25'
  },
  tabText: {
    color: '#c6c6c6',
    textAlign: 'center',
    fontSize: 15,
    fontFamily: 'Quicksand-Regular',

  },
  tabTextActive: {
    color: 'black',
    textAlign: 'center',
    fontSize: 15,
    fontFamily: 'Quicksand-Regular',
    // fontWeight: 'bold'
  }
})

export default AkunBankPage;