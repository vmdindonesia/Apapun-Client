import React, { Component } from 'react'
import { View, Text, ImageBackground, Image, AsyncStorage, TouchableOpacity, ScrollView, StyleSheet, TouchableHighlight, TouchableWithoutFeedback, StatusBar, Modal } from 'react-native'
import { Container, ContainerSection, Button, Input, InputDate, InputSearch } from '../components/common';
// import axios from 'axios';
import { BerandaCrafterPage } from './BerandaCrafter';
import { FashionCrafterPage } from './FashionCrafter';
import { FurnitureCrafterPage } from './FurnitureCrafter';
import { BeautyCrafterPage } from './BeautyCrafter';
import Icon from 'react-native-vector-icons/Ionicons';
import { NavigationActions } from 'react-navigation';


export class CrafterListPage extends React.Component {

    static navigationOptions = ({ navigation }) => ({
        headerLeft:
            <TouchableOpacity
                onPress={() => { navigation.goBack(); console.log(navigation, 'Props Order') }}
            >
                <Icon size={30} style={{ marginLeft: 25, color: '#EF1C25' }} name='ios-arrow-back' />
            </TouchableOpacity>,
        headerTitle: 'Crafter List'
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
            this.setState({ screen: 'BerandaCrafterPage' })
        } else {
            console.log('Params Ada')
            this.setState({ screen: this.props.navigation.state.params.screenDefault })
        }
    }

    renderScreen = () => {
        if (this.state.screen === 'FurnitureCrafterPage') {
            return <FurnitureCrafterPage navi={this.props.navigation} />
        }
        if (this.state.screen === 'FashionCrafterPage') {
            return <FashionCrafterPage navi={this.props.navigation} />
        }
        if (this.state.screen === 'BeautyCrafterPage') {
            return <BeautyCrafterPage navi={this.props.navigation} />
        }

        return <BerandaCrafterPage navi={this.props.navigation} />
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
                flex: 1,
            }}>
                <View style={{
                    width: '100%',
                    height: 50,
                    flexDirection: 'row',
                }}>
                    <ScrollView
                        showsHorizontalScrollIndicator={false}
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                    >
                        <View
                            style={{
                                width: 90,
                                height: 50,
                                flexDirection: 'row',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}>
                            <TouchableOpacity onPress={() => this.setState({ screen: 'BerandaCrafterPage' })}>
                                <View style={screen === 'BerandaCrafterPage' ? tabContainerActive : tabContainer}>
                                    <Text style={screen === 'BerandaCrafterPage' ? fontActive : fontNotActive}>Beranda</Text>
                                </View>
                            </TouchableOpacity>

                        </View>

                        <View
                            style={{
                                width: 90,
                                height: 50,
                                flexDirection: 'row',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}>
                            <TouchableOpacity onPress={() => this.setState({ screen: 'FashionCrafterPage' })}>
                                <View style={screen === 'FashionCrafterPage' ? tabContainerActive : tabContainer}>
                                    <Text style={screen === 'FashionCrafterPage' ? fontActive : fontNotActive}>Fashion</Text>
                                </View>
                            </TouchableOpacity>

                        </View>

                        <View
                            style={{
                                width: 170,
                                height: 50,
                                flexDirection: 'row',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}>
                            <TouchableOpacity onPress={() => this.setState({ screen: 'FurnitureCrafterPage' })}>
                                <View style={screen === 'FurnitureCrafterPage' ? tabContainerActive : tabContainer}>
                                    <Text style={screen === 'FurnitureCrafterPage' ? fontActive : fontNotActive}>Furniture & Appliance</Text>
                                </View>
                            </TouchableOpacity>

                        </View>

                        <View
                            style={{
                                width: 90,
                                height: 50,
                                flexDirection: 'row',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}>
                            <TouchableOpacity onPress={() => this.setState({ screen: 'BeautyCrafterPage' })}>
                                <View style={screen === 'BeautyCrafterPage' ? tabContainerActive : tabContainer}>
                                    <Text style={screen === 'BeautyCrafterPage' ? fontActive : fontNotActive}>Beauty</Text>
                                </View>
                            </TouchableOpacity>

                        </View>
                    </ScrollView>
                </View>
                {this.renderScreen()}
            </View>
        )
    }

}

const styles = StyleSheet.create({

    imageCommercial: {
        width: '100%',
        height: '100%',
        borderRadius: 10
    },
    tabContainerActive: {
        height: 50,
        justifyContent: 'center',
        borderBottomWidth: 2,
        borderColor: 'red'
    },
    tabContainer: {
        height: 50,
        justifyContent: 'center',
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

export default CrafterListPage

