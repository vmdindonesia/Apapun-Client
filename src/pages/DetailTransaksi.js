import React, { Component } from 'react'
import { View, Text, ImageBackground, Image, AsyncStorage, TouchableOpacity, ScrollView, StyleSheet, TouchableHighlight, TouchableWithoutFeedback, StatusBar, Modal } from 'react-native'
import { Container, ContainerSection, Button, Input, InputDate } from '../components/common';
// import axios from 'axios';
import { COLOR } from './../shared/config';
import { CheckBox } from 'react-native-elements';

export class DetailTransaksiPage extends React.Component {

    static navigationOptions = {
        header: null
    }
    render() {
        return (
            <ScrollView
                style={styles.containerStyle}
                keyboardShouldPersistTaps="always"
                ref={ref => this.scrollView = ref}
            >

                <View style={{ flexDirection: 'row', height: 80, width: '100%', alignItems: 'center' }}>


                    <Image style={{ height: 18, width: 18, borderRadius: 0, }}
                        source={require('./../assets/images/envelope.png')}
                    />

                    <Text style={{ fontSize: 20, fontFamily: 'Quicksand-Bold', paddingLeft: 10, alignItems: 'center' }}>
                        total apresiasi design
                    </Text>
                </View>

                <Text style={{ fontSize: 30, fontFamily: 'Quicksand-Bold' }}>
                    Rp. 120.000
                </Text>

                <Text style={{ fontSize: 14, fontFamily: 'Quicksand-Bold', paddingTop: 50, paddingLeft: 30 }}>
                    April 2018
                </Text>

                <View style={styles.containerMainAddress}>


                    <View style={{
                        width: '100%',
                        height: 50,
                        flexDirection: 'row',
                        marginTop: 5
                    }}>

                        <View style={{
                            width: '100%',
                            paddingTop: 15,
                            height: 100
                        }}>
                            <View style={{
                                paddingTop: -10
                            }}>
                                <Text style={{ fontWeight: 'bold', fontSize: 10, paddingLeft: 30 }}> 28 April 2015</Text>
                            </View>
                            <View>
                                <Text style={{ fontSize: 8, paddingTop: 3, paddingLeft: 30 }}> 12:30 PM </Text>
                            </View>
                            <View>
                                <Text style={{ fontWeight: 'bold', fontSize: 10, paddingLeft: 30 }}> 15 April 2016 </Text>
                            </View>
                            <View>
                                <Text style={{ fontSize: 8, paddingTop: 3, paddingLeft: 30 }}> 01:25 PM </Text>
                            </View>
                            <View>
                                <Text style={{ fontWeight: 'bold', fontSize: 10, paddingLeft: 30 }}> 04 April 2018 </Text>
                            </View>
                            <View>
                                <Text style={{ fontSize: 8, paddingTop: 3, paddingLeft: 30 }}> 05:00 PM </Text>
                            </View>


                        </View>

                    </View>
                </View>


            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    containerMainAddress: {
        // flex: 1,
        borderRadius: 20,
        backgroundColor: 'white',
        shadowColor: 'black',
        shadowOffset: { width: 10, heigth: 10 },
        shadowRadius: 5,
        shadowOpacity: 1.0,
        elevation: 3,
        flexDirection: 'column',
        marginTop: 5,
        height: 150,
        width: '90%',
        // alignItems: 'center',
        // justifyContent: 'center',
        alignSelf: 'center',
        // zIndex: 1,
        borderColor: '#d6d7da',
    },


})

export default DetailTransaksiPage