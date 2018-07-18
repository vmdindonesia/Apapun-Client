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
                    <Image style={{ marginLeft: 70, height: 18, width: 18, borderRadius: 0, }}
                        source={require('./../assets/images/envelope.png')}
                    />
                    <Text style={{ marginLeft: 20, fontSize: 20, fontFamily: 'Quicksand-Bold', paddingLeft: 10, alignItems: 'center' }}>
                        total apresiasi design
    </Text>
                </View>
                <Text style={{ fontSize: 30, textAlign: 'center', fontFamily: 'Quicksand-Bold' }}>
                    Rp. 120.000
</Text>
                <Text style={{ fontSize: 14, fontFamily: 'Quicksand-Bold', paddingTop: 50, paddingLeft: 30 }}>
                    April 2018
                </Text>
                <View style={styles.containerMainAddress}>
                    <View style={{
                        width: '100%',
                        height: 100,
                        backgroundColor: '',
                        flexDirection: 'row',
                        marginTop: 5
                    }}>
                        <View style={{
                            width: '50%',
                            flexDirection: 'column',
                            paddingTop: 15,
                            height: 100
                        }}>
                            <Text style={{ fontFamily: 'Quicksand-Bold', fontSize: 15, paddingTop: 5, paddingLeft: 30 }}>28 April 2015</Text>
                            <View style={{ width: '50%', borderWidth: 0, height: 50, paddingLeft: 2, paddingTop: 2 }}>
                                <Text style={{
                                    fontFamily: 'Quicksand-Regular', alignSelf: 'auto', paddingTop: 5, fontSize: 13, paddingLeft: 30
                                }}
                                >12:30 PM</Text>
                            </View>
                        </View>
                        <View style={{
                            width: '50%',
                            paddingTop: 15,
                            flexDirection: 'column',
                            height: 100
                        }}>
                            <View style={{
                                paddingTop: -10
                            }}>
                            </View>
                            <Text style={{ fontSize: 13, paddingTop: 5, paddingLeft: 30, fontFamily: 'Quicksand-Regular' }}>Total apresiasi design anda bulan ini telah kami transfer</Text>
                            <View style={{ width: '50%', borderWidth: 0, height: 50, paddingLeft: 2, paddingTop: 2 }}>
                            </View>
                        </View>
                    </View>
                    <View style={{
                        width: '100%',
                        height: 100,
                        backgroundColor: '',
                        flexDirection: 'row',
                        marginTop: 5
                    }}>

                        <View style={{
                            width: '50%',
                            flexDirection: 'column',
                            height: 100
                        }}>
                            <Text style={{ fontFamily: 'Quicksand-Bold', fontSize: 15, paddingTop: 5, paddingLeft: 30 }}>28 April 2015</Text>
                            <View style={{ width: '50%', borderWidth: 0, height: 50, paddingLeft: 2, paddingTop: 2 }}>
                                <Text style={{
                                    fontFamily: 'Quicksand-Regular', alignSelf: 'auto', paddingTop: 5, fontSize: 13, paddingLeft: 30
                                }}
                                >12:30 PM</Text>
                            </View>

                        </View>
                        <View style={{
                            width: '50%',
                            paddingTop: 15,
                            flexDirection: 'column',
                            height: 100
                        }}>
                            <Text style={{ fontSize: 13, paddingTop: 5, paddingLeft: 30, fontFamily: 'Quicksand-Regular' }}>Total apresiasi design anda bulan ini telah kami transfer</Text>
                            <View style={{ width: '50%', borderWidth: 0, height: 50, paddingLeft: 2, paddingTop: 2 }}>
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
        height: 250,
        width: '90%',
        alignSelf: 'center',
        borderColor: '#d6d7da',
    },
})

export default DetailTransaksiPage