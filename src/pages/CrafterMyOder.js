import React, { Component } from 'react';
import { ToastAndroid, View, Text, ImageBackground, Image, AsyncStorage, TouchableOpacity, ScrollView, StyleSheet, TouchableHighlight, TouchableWithoutFeedback, StatusBar, Modal } from 'react-native'
import { Container, ContainerSection, Button, Input, InputSearch, InputDate } from '../components/common';
// import axios from 'axios';
import { COLOR } from '../shared/config';
import Icon from 'react-native-vector-icons/Ionicons';
import { OrderOnMyOrderPage } from './OrderOnMyOder';
import { WishlistOnMyOrderPage } from './WishListOnMyOrder';
import { HistoryOnMyOrderPage } from './HistoryOnMyOrder';



export class CrafterMyOrderPage extends React.Component {

    static navigationOptions = ({ navigation }) => ({
        headerLeft:
            <TouchableOpacity
                onPress={() => { navigation.goBack(); console.log(navigation.goBack(), 'Props Order') }}
            >
                <Icon size={30} style={{ marginLeft: 25, color: '#EF1C25' }} name='ios-arrow-back' />
            </TouchableOpacity>,
        headerTitle: 'Pesanan Saya'
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
            this.setState({ screen: 'OrderOnMyOrderPage' })
        } else {
            console.log('Params Ada')
            this.setState({ screen: this.props.navigation.state.params.screenDefault })
        }
    }


    renderScreen = () => {
        if (this.state.screen === 'WishlistOnMyOrderPage') {
            return <WishlistOnMyOrderPage navi={this.props.navigation} />
        }
        if (this.state.screen === 'HistoryOnMyOrderPage') {
            return <HistoryOnMyOrderPage navi={this.props.navigation} />
        }

        return <OrderOnMyOrderPage navi={this.props.navigation} />
    }



    render() {

        const {
            screen,
        } = this.state;

        const {
            tabContainerActive, tabContainer, fontActive, fontNotActive
        } = styles;

        return (
            <View style={{
                flex: 1
            }}>

                <View style={{
                    width: '100%',
                    height: 50,
                    flexDirection: 'row',
                    borderBottomWidth: 2,
                    marginBottom: 3,
                    borderColor: '#e5e5e5',
                    backgroundColor: 'white'
                }}>

                    <View
                        style={{
                            width: '33.3%',
                            height: 50,
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}>
                        <TouchableOpacity
                            onPress={() => this.setState({ screen: 'OrderOnMyOrderPage' })}
                        >
                            <View style={screen === 'OrderOnMyOrderPage' ? tabContainerActive : tabContainer}>
                                <Text style={screen === 'OrderOnMyOrderPage' ? fontActive : fontNotActive}>Pesanan Saya</Text>
                            </View>
                        </TouchableOpacity>

                    </View>

                    <View
                        style={{
                            // backgroundColor: 'skyblue',
                            width: '33.3%',
                            height: 50,
                            flexDirection: 'row',
                            // flex:4,
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}>
                        <TouchableOpacity onPress={() => this.setState({ screen: 'WishlistOnMyOrderPage' })}>
                            <View style={screen === 'WishlistOnMyOrderPage' ? tabContainerActive : tabContainer}>
                                <Text style={screen === 'WishlistOnMyOrderPage' ? fontActive : fontNotActive}>Wishlist</Text>
                            </View>
                        </TouchableOpacity>

                    </View>

                    <View
                        style={{
                            // backgroundColor: 'skyblue',
                            width: '33.3%',
                            height: 50,
                            flexDirection: 'row',
                            // flex:4,
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}>
                        <TouchableOpacity onPress={() => this.setState({ screen: 'HistoryOnMyOrderPage' })}>
                            <View style={screen === 'HistoryOnMyOrderPage' ? tabContainerActive : tabContainer}>
                                <Text style={screen === 'HistoryOnMyOrderPage' ? fontActive : fontNotActive}>History</Text>
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
        height: 50,
        justifyContent: 'center',
        borderBottomWidth: 2,
        borderColor: 'red'
    },
    tabContainer: {
        // backgroundColor: COLOR.element_a3,
        height: 50,
        justifyContent: 'center',
        // borderBottomWidth: 1,
    },
    fontActive: {
        fontFamily: 'Quicksand-Bold',
        fontSize: 15
    },
    fontNotActive: {
        fontFamily: 'Quicksand-Regular',
        fontSize: 15,
        color: '#c6c6c6'
    }


});

export default CrafterMyOrderPage

