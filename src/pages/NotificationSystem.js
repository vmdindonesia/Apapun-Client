import React, { Component } from 'react';
import { View, Text, ImageBackground, Image, AsyncStorage, TouchableOpacity, ScrollView, StyleSheet, TouchableHighlight, TouchableWithoutFeedback, StatusBar, Modal } from 'react-native'
import { Container, ContainerSection, Button, Input, InputSearch, InputDate } from '../components/common';
// import axios from 'axios';
import { COLOR } from '../shared/config';


export class NotificationSystemPage extends React.Component {


    render() {



        return (
            <View style={{
                flex: 1,
                backgroundColor: '#e5e5e5'
            }}>

                <ScrollView>

                    <View style={{
                        // flex: 2,
                        height: 100,
                        backgroundColor: 'white',
                        flexDirection: 'row',
                        marginBottom: 5
                    }}>

                        <View style={{ height: '100%', width: '30%', justifyContent: 'center', alignItems: 'center' }}>
                            <View style={{ borderRadius: 100, height: 80, width: 80, backgroundColor: 'white' }}>
                                <Image
                                    style={{ flex: 1, width: '100%', borderRadius: 100 }}
                                    source={require('./../assets/images/ic_logo2.png')}
                                    resizeMode='cover'
                                />
                            </View>
                        </View>

                        <View style={{ flex: 1, flexDirection: 'column', padding: 5, justifyContent: 'center' }}>

                            <Text style={{ color: 'black', fontWeight: 'bold' }}>Pesanan 173AS8B6HG sudah bisa di review</Text>
                            <Text style={{ color: 'black', }}>26 jan 2018, 18.04</Text>

                        </View>
                    </View>


                    <View style={{
                        // flex: 2,
                        height: 100,
                        backgroundColor: 'white',
                        flexDirection: 'row',
                        // marginTop: 5
                    }}>

                        <View style={{ height: '100%', width: '30%', justifyContent: 'center', alignItems: 'center' }}>
                            <View style={{ borderRadius: 100, height: 80, width: 80, backgroundColor: 'white' }}>
                                <Image
                                    style={{ flex: 1, width: '100%', borderRadius: 100 }}
                                    source={require('./../assets/images/ic_logo2.png')}
                                    resizeMode='cover'
                                />
                            </View>
                        </View>

                        <View style={{ flex: 1, flexDirection: 'column', padding: 5, justifyContent: 'center' }}>

                            <Text style={{ color: 'black', fontWeight: 'bold' }}>Update 5.0.0.0</Text>
                            <Text style={{ color: 'black', }}>1 jan 2018, 07.04</Text>

                        </View>
                    </View>


                </ScrollView>

            </View >
        )
    }

}

const styles = StyleSheet.create({
    tabContainerActive: {
        // backgroundColor: COLOR.element_a4,
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


});

export default NotificationSystemPage;

