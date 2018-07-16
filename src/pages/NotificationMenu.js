import React, { Component } from 'react'
import { View, Text, ImageBackground, Image, AsyncStorage, TouchableOpacity, ScrollView, StyleSheet, TouchableHighlight, TouchableWithoutFeedback, StatusBar, Modal } from 'react-native'
import { Container, ContainerSection, Button, Input, InputSearch, InputDate } from '../components/common';
// import axios from 'axios';
import { COLOR } from './../shared/config';
import { NotificationSystemPage } from './NotificationSystem';
import { NotificationTransactionPage } from './NotificationTransaction';
import Icon from 'react-native-vector-icons/Ionicons';


export class NotificationMenuPage extends React.Component {

    static navigationOptions = ({ navigation }) => ({
        headerLeft:
            <TouchableOpacity
                onPress={() => { navigation.goBack(); console.log(navigation.goBack(), 'Props Order') }}
            >
                <Icon size={30} style={{ marginLeft: 25, color: '#EF1C25' }} name='ios-arrow-back' />
            </TouchableOpacity>,
        headerTitle: 'Notifikasi'
    });

    constructor(props) {
        super(props)
        this.state = {
            screen: ''
        }
    }

    componentWillMount() {
        if (!this.props.navigation.state.params) {
            console.log('Params tidak ada')
            this.setState({ screen: 'NotificationTransactionPage' })
        } else {
            console.log('Params Ada')
            this.setState({ screen: this.props.navigation.state.params.screenDefault })
        }
    }

    renderScreen = () => {

        if (this.state.screen === 'NotificationSystemPage') {
            return <NotificationSystemPage navi={this.props.navigation} />
        }

        return <NotificationTransactionPage navi={this.props.navigation} />
    }


    render() {

        const {
            screen,
        } = this.state;

        const {
            tabContainerActive, tabContainer
        } = styles;

        return (
            <View style={{
                flex: 1
            }}>

                <View style={{
                    // flex: 2,
                    // backgroundColor: 'red',
                    width: '100%',
                    height: 50,
                    flexDirection: 'row',
                    // flex:4,
                    borderBottomWidth: 2,
                    marginBottom: 3,
                    borderColor: '#e5e5e5'
                }}>

                    <View
                        style={{
                            // backgroundColor: 'skyblue',
                            flex: 1,
                            height: 50,
                            flexDirection: 'row',
                            // flex:4,
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}>
                        <TouchableOpacity onPress={() => this.setState({ screen: 'NotificationTransactionPage' })}>
                            <View style={screen === 'NotificationTransactionPage' ? tabContainerActive : tabContainer}>
                                <Text>Transaksi</Text>
                            </View>
                        </TouchableOpacity>

                    </View>


                    <View
                        style={{
                            // backgroundColor: 'skyblue',
                            // width: '33.3%',
                            flex: 1,
                            height: 50,
                            flexDirection: 'row',
                            // flex:4,
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}>
                        <TouchableOpacity onPress={() => this.setState({ screen: 'NotificationSystemPage' })}>
                            <View style={screen === 'NotificationSystemPage' ? tabContainerActive : tabContainer}>
                                <Text>Sistem</Text>
                            </View>
                        </TouchableOpacity>
                    </View>

                </View>

                {this.renderScreen()}



            </View>
        )
    }

}

const styles = StyleSheet.create({
    tabContainerActive: {
        // backgroundColor: COLOR.element_a4,
        height: 50,
        justifyContent: 'center',
        borderBottomWidth: 3,
        borderColor: 'red',
    },
    tabContainer: {
        // backgroundColor: COLOR.element_a3,
        height: 50,
        justifyContent: 'center',
        // borderBottomWidth: 1,
    },


});

export default NotificationMenuPage;

