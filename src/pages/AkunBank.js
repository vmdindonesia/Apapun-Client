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
        <Icon size={30} style={{ marginLeft: 25 }} name='ios-arrow-back' />
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

        <View style={{ flex: 1 }}>
          <View style={{
            width: '100%',
            height: 50,
            flexDirection: 'row',
            borderBottomWidth: 2,
            marginBottom: 3,
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
        borderBottomWidth: 3,
        borderColor: 'red'
      },
  tabText: {
          color: 'black',
        textAlign: 'center',
        fontSize: 14
      },
  tabTextActive: {
          textAlign: 'center',
        fontSize: 14,
        fontFamily: 'Quicksand-Regular'
      }
    })
    
export default AkunBankPage;