import React, { Component } from 'react';
import { View, Text, ImageBackground, Image, AsyncStorage, TouchableOpacity, ScrollView, StyleSheet, TouchableHighlight, TouchableWithoutFeedback, StatusBar, Modal } from 'react-native'
import { Container, ContainerSection, Button, Input, InputSearch, InputDate } from '../components/common';
// import axios from 'axios';
import { COLOR } from '../shared/config';
import { myOrderIdeaPage } from './myOrderIdea';
import { NotificationTransactionPage } from './NotificationTransaction';
import Icon from 'react-native-vector-icons/Ionicons';


export class searchCrafterIdeaMarketPage extends React.Component {

    static navigationOptions = ({ navigation }) => ({
        headerLeft:
            <TouchableOpacity
                onPress={() => { navigation.goBack(); console.log(navigation.goBack(), 'Props Order') }}
            >
                <Icon size={30} style={{ marginLeft: 25, color: '#EF1C25' }} name='ios-arrow-back' />
            </TouchableOpacity>,
        headerTitle: 'Mencari Crafter'
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
            this.setState({ screen: 'myOrderIdeaPage' })
        } else {
            console.log('Params Ada')
            this.setState({ screen: this.props.navigation.state.params.screenDefault })
        }
    }

    renderScreen = () => {

        if (this.state.screen === 'myOrderIdeaPage'  ) {
            return <myOrderIdeaPage navi={this.props.navigation} />
        }

        return <myOrderIdeaPage navi={this.props.navigation} />
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

                <View style={{ width: '100%', height: 65, flexDirection: 'row', }}>
                    <View style={{ width: '50%', flexDirection: 'row', backgroundColor: 'white', justifyContent: 'center', alignItems: 'center' }}>

                        <TouchableOpacity
                            onPress={() => this.setState({ screen: 'myOrderIdeaPage' })}
                        >
                            <Image
                                style={{
                                    width: 23,
                                    height: 23,
                                    alignSelf: 'center'
                                }}
                                resizeMode='stretch'
                                source={require('./../assets/images/List.png')}
                            />
                            <Text style={{ fontFamily: 'Quicksand-Regular', fontWeight: 'bold', fontSize: 13, color: 'black', paddingTop: 3 }}>Pesanan</Text>
                        </TouchableOpacity>

                    </View>

                    <View style={{ flexDirection: 'column', borderColor: '#e5e5e5', borderWidth: 1, height: '50%', alignSelf: 'center' }} />

                    <View style={{ width: '50%', flexDirection: 'row', backgroundColor: 'white', justifyContent: 'center', alignItems: 'center' }}>

                        <TouchableOpacity
                            onPress={() => this.setState({ screen: 'myOrderIdeaPage' })}
                        >
                            
                            <Image
                                style={{
                                    width: 22.5,
                                    height: 22.5,
                                    alignSelf: 'center'
                                }}
                                resizeMode='stretch'
                                source={require('./../assets/images/ic_menu.png')}
                            />
                            <Text style={{ fontFamily: 'Quicksand-Regular', fontWeight: 'bold', fontSize: 13, color: 'black', paddingTop: 3 }}>Menu</Text>
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

export default searchCrafterIdeaMarketPage;

