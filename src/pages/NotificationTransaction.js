import React, { Component } from 'react';
import { View, Text, ImageBackground, Image, AsyncStorage, TouchableOpacity, ScrollView, StyleSheet, TouchableHighlight, TouchableWithoutFeedback, StatusBar, Modal } from 'react-native'
import { Container, ContainerSection, Button, Input, InputSearch, InputDate } from '../components/common';
// import axios from 'axios';
import { COLOR } from '../shared/config';


export class NotificationTransactionPage extends React.Component {


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
                                    source={require('./../assets/images/profile.png')}
                                    resizeMode='cover'
                                />
                            </View>
                        </View>

                        <View style={{ height: '100%', width: '70%', flexDirection: 'column', padding: 5 }}>
                            <View style={{ height: '70%', justifyContent: 'center' }}>
                                <Text style={{ color: 'black', fontFamily: 'Quicksand-Bold',  }}>Gal Gadot</Text>
                                <Text style={{ color: 'black', }}>Anda Mendapat Pesan Baru</Text>
                            </View>
                            <View style={{ height: '30%', }}>

                                <Text style={{ color: 'black', }}>16 Januari 2018, 21 30</Text>
                            </View>
                          

                        </View>





                    </View>
                </ScrollView>
            </View>
        )
    }

}

const styles = StyleSheet.create({
    tabContainerActive: {
        // backgroundColor: COLOR.element_a4,
        height: 50,
        justifyContent: 'center',
        borderBottomWidth: 2,
        borderColor: '#ef1c25'
    },
    tabContainer: {
        // backgroundColor: COLOR.element_a3,
        height: 50,
        justifyContent: 'center',
        // borderBottomWidth: 1,
    },


});

export default NotificationTransactionPage;

