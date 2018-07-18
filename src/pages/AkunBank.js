import React, { Component } from 'react'
import { View, Text, ImageBackground, Image, TouchableNativeFeedback, TouchableOpacity, ScrollView, StyleSheet, TouchableHighlight, TouchableWithoutFeedback, StatusBar, Modal } from 'react-native'
import { InformasiBankPage } from './InformasiBank';
import { DetailTransaksiPage } from './DetailTransaksi';
import Icon from 'react-native-vector-icons/Ionicons';

export class AkunBankPage extends React.Component {

  static navigationOptions = ({ navigation }) => ({
    headerLeft:
      <TouchableOpacity
        onPress={() => { navigation.goBack(); console.log(navigation.goBack(), 'Props Order') }}
      >
        <Icon size={30} style={{ marginLeft: 25, color: '#EF1C25' }} name='ios-arrow-back' />
      </TouchableOpacity>,
    headerTitle: 'Akun Bank'
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
      <View style={menuContainerStyle}>
        <View style={{ flexDirection: 'row' }}>
          <View style={{ flex: 1, borderColor: '#3484d7', borderRightWidth: 0.3 }}>
            <TouchableNativeFeedback onPress={() => this.setState({ screen: 'InformasiBank' })}>
              <View style={screen === 'InformasiBank' ? tabContainerActive : tabContainer}>
                <Text style={screen === 'InformasiBank' ? tabTextActive : tabText}>Informasi Bank</Text>
              </View>
            </TouchableNativeFeedback>
          </View>
          <View style={{ flex: 1, borderColor: '#3484d7', borderRightWidth: 0.3 }}>
            <TouchableNativeFeedback onPress={() => this.setState({ screen: 'DetailTransaksi' })}>
              <View style={screen === 'DetailTransaksi' ? tabContainerActive : tabContainer}>
                <Text style={screen === 'DetailTransaksi' ? tabTextActive : tabText}>Detail Transaksi</Text>
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
    justifyContent: 'center',
    borderBottomWidth: 0.5,
    borderBottomColor: 'red'
  },
  tabText: {
    color: 'black',
    textAlign: 'center',
    fontSize: 15
  },
  tabTextActive: {
    textAlign: 'center',
    fontSize: 15,
    fontFamily: 'Quicksand-Regular'
  }
})

export default AkunBankPage;