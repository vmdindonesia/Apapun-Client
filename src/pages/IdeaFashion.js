import React, { Component } from 'react';
import { View, Text, ImageBackground, Image, AsyncStorage, TouchableOpacity, ScrollView, StyleSheet, TouchableHighlight, TouchableWithoutFeedback, StatusBar, Modal, ToastAndroid } from 'react-native'
import { Container, ContainerSection, Button, Input, InputSearch, InputDate } from '../components/common';
import { Card, CheckBox } from 'react-native-elements'
// import axios from 'axios';
import { COLOR } from '../shared/config';
// import { Icon } from 'react-native-elements'
import Icon from 'react-native-vector-icons/Ionicons';



export class IdeaFashionPage extends React.Component {

    static navigationOptions = ({ navigation }) => ({
        headerLeft:
            <TouchableOpacity
                onPress={() => { navigation.goBack(); console.log(navigation.goBack(), 'Props Order') }}
            >
                <Icon size={30} style={{ marginLeft: 25, color: '#EF1C25' }} name='ios-arrow-back' />
            </TouchableOpacity>,
        headerTitle: 'Fashion'
    });

    constructor(props) {
        super(props)
        this.state = {
            ManUp: false
        }
    }

    render() {

        const {
            ManUp
        } = this.state

        return (
            <View style={{ flex: 1, backgroundColor: '#eaeaea' }}>

                <ScrollView>
                    <View style={{ flex: 1, flexDirection: 'column', backgroundColor: 'white' }}>

                        <View style={{ flex: 1, height: 250, width: '100%', backgroundColor: 'skyblue' }}>
                            <Image
                                style={{
                                    flex: 1,
                                    width: '100%',
                                    height: '100%',
                                    // backgroundColor: 'red'
                                }}
                                source={require('./../assets/images/man_fashion.jpg')}
                            // resizeMode='contain'
                            />
                        </View>

                        <TouchableWithoutFeedback
                            onPress={() => this.setState({ ManUp: !this.state.ManUp })}
                        >
                            <View style={{ flex: 1, height: 70, marginRight: 10, marginLeft: 10, marginTop: 10, flexDirection: 'row' }}>

                                <View style={{ flex: 1, justifyContent: 'center' }}>
                                    <Text style={{ fontFamily: 'Quicksand-Bold', fontSize: 15, color: 'black', paddingLeft: 10 }}>Atasan Pria</Text>
                                </View>

                                <View style={{ flex: 1, backgroundColor: 'white', flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-end' }}>
                                    {
                                        ManUp === true ?
                                            <Icon
                                                size={30}
                                                name='md-arrow-dropup'
                                                // type='entypo'
                                                color='black'
                                            />
                                            :
                                            <Icon
                                                size={30}
                                                name='md-arrow-dropdown'
                                                // type='entypo'
                                                color='black'
                                            />
                                    }
                                </View>
                            </View>
                        </TouchableWithoutFeedback>

                        {
                            ManUp === true ?

                                <View style={{ flex: 1, height: 170, flexDirection: 'row', backgroundColor: '#eaeaea' }}>

                                    <View style={{ flex: 1, backgroundColor: '#eaeaea', justifyContent: 'center', alignItems: 'center' }}>
                                        <View style={{ height: 110, width: 110, backgroundColor: 'black', borderRadius: 100 }}>
                                            <TouchableWithoutFeedback
                                                onPress={() => this.props.navigation.navigate('ListTshirt')}
                                            >
                                                <Image
                                                    style={{
                                                        // flex: 1,
                                                        width: 110,
                                                        height: 110,
                                                        borderRadius: 100
                                                        // backgroundColor: 'red'
                                                    }}
                                                    source={require('./../assets/images/kaos.jpg')}
                                                    resizeMode='stretch'
                                                />
                                            </TouchableWithoutFeedback>
                                        </View>
                                        <Text style={{ fontFamily: 'Quicksand-Regular', fontSize: 15, color: 'black', paddingTop: 7 }}>Kaos</Text>
                                    </View>

                                    <View style={{ flex: 1, backgroundColor: '#eaeaea', justifyContent: 'center', alignItems: 'center' }}>
                                        <View style={{ height: 110, width: 110, backgroundColor: 'black', borderRadius: 100 }}>
                                            <TouchableWithoutFeedback
                                                onPress={() => this.props.navigation.navigate('ListKemeja')}
                                            >
                                                <Image
                                                    style={{
                                                        // flex: 1,
                                                        width: 110,
                                                        height: 110,
                                                        borderRadius: 100
                                                        // backgroundColor: 'red'
                                                    }}
                                                    source={require('./../assets/images/kemeja.jpg')}
                                                // resizeMode='contain'
                                                />
                                            </TouchableWithoutFeedback>
                                        </View>
                                        <Text style={{ fontFamily: 'Quicksand-Regular', fontSize: 15, color: 'black', paddingTop: 7 }}>Kemeja</Text>
                                    </View>

                                    <View style={{ flex: 1, backgroundColor: '#eaeaea', justifyContent: 'center', alignItems: 'center' }}>
                                        <View style={{ height: 110, width: 110, backgroundColor: 'black', borderRadius: 100 }}>
                                            <TouchableWithoutFeedback
                                                onPress={() => this.props.navigation.navigate('ListHoodie')}
                                            >
                                                <Image
                                                    style={{
                                                        // flex: 1,
                                                        width: 110,
                                                        height: 110,
                                                        borderRadius: 100
                                                        // backgroundColor: 'red'
                                                    }}
                                                    source={require('./../assets/images/hoodie.jpg')}
                                                // resizeMode='contain'
                                                />
                                            </TouchableWithoutFeedback>
                                        </View>
                                        <Text style={{ fontFamily: 'Quicksand-Regular', fontSize: 15, color: 'black', paddingTop: 7 }}>Hoodie</Text>
                                    </View>

                                </View>
                                :
                                <View />

                        }

                        <TouchableWithoutFeedback
                        // onPress={() => this.setState({ ManUp: !this.state.ManUp })}
                        >
                            <View style={{ flex: 1, height: 70, marginRight: 10, marginLeft: 10, marginTop: 10, flexDirection: 'row' }}>

                                <View style={{ flex: 1, justifyContent: 'center' }}>
                                    <Text style={{ fontFamily: 'Quicksand-Bold', fontSize: 15, color: 'black', paddingLeft: 10 }}>Atasan Wanita</Text>
                                </View>

                                <View style={{ flex: 1, backgroundColor: 'white', flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-end' }}>
                                    {
                                        ManUp === true ?
                                            <Icon
                                                size={30}
                                                name='md-arrow-dropup'
                                                // type='entypo'
                                                color='black'
                                            />
                                            :
                                            <Icon
                                                size={30}
                                                name='md-arrow-dropdown'
                                                // type='entypo'
                                                color='black'
                                            />
                                    }
                                </View>
                            </View>
                        </TouchableWithoutFeedback>

                        <TouchableWithoutFeedback
                        // onPress={() => this.setState({ ManUp: !this.state.ManUp })}
                        >
                            <View style={{ flex: 1, height: 70, marginRight: 10, marginLeft: 10, marginTop: 10, flexDirection: 'row' }}>

                                <View style={{ flex: 1, justifyContent: 'center' }}>
                                    <Text style={{ fontFamily: 'Quicksand-Bold', fontSize: 15, color: 'black', paddingLeft: 10 }}>Aksesoris</Text>
                                </View>

                                <View style={{ flex: 1, backgroundColor: 'white', flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-end' }}>
                                    {
                                        ManUp === true ?
                                            <Icon
                                                size={30}
                                                name='md-arrow-dropup'
                                                // type='entypo'
                                                color='black'
                                            />
                                            :
                                            <Icon
                                                size={30}
                                                name='md-arrow-dropdown'
                                                // type='entypo'
                                                color='black'
                                            />
                                    }
                                </View>
                            </View>
                        </TouchableWithoutFeedback>
                    </View>
                </ScrollView>

            </View>
        )
    }

}

const styles = StyleSheet.create({





});

export default IdeaFashionPage

