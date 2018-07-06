import React, { Component } from 'react'
import { View, Text, ImageBackground, Image, TouchableNativeFeedback, TouchableOpacity, ScrollView, StyleSheet, TouchableHighlight, TouchableWithoutFeedback, StatusBar, Modal } from 'react-native'
import { InformasiBankPage } from './InformasiBank';
import { DetailTransaksiPage } from './DetailTransaksi';

export class AkunBankPage extends React.Component {

    static navigationOptions = {
        headerTitle: 'Akun Bank'
    }

    constructor(props) {
        super(props)
        this.state = {
          screen: 'InformasiBank'
        }
    
      }
    
      renderScreen = () => {
        if (this.state.screen === 'InformasiBank') {
          return <InformasiBankPage navi={this.props.navigation} />
        }else if (this.state.screen === 'DetailTransaksi') {
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
        justifyContent: 'center'
      },
      tabText: {
        color: 'black',
        textAlign: 'center',
        fontSize: 14
      },
      tabTextActive: {
        color: 'red',
        textAlign: 'center',
        fontSize: 14,
        fontFamily: 'Quicksand-Regular'
      }
    })

export default AkunBankPage;