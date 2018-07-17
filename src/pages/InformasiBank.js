import React, { Component } from 'react'
import { View, Text, ImageBackground, Image, AsyncStorage, TouchableOpacity, ScrollView, StyleSheet, TouchableHighlight, TouchableWithoutFeedback, StatusBar, Modal } from 'react-native'
import { Container, ContainerSection, Button, Input, InputDate } from '../components/common';
// import axios from 'axios';
import { COLOR } from './../shared/config';
import { CheckBox } from 'react-native-elements';

export class InformasiBankPage extends React.Component {

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
                            <Text style={{ fontFamily: 'Quicksand-Bold', fontSize: 15, paddingTop: 10 }}>Nama Belakang</Text>
                            <View style={{ width: '50%', borderWidth: 0, height: 50, paddingLeft: 2, paddingTop: 2 }}>
                                <Text style={{
                                    fontFamily: 'Quicksand-Regular', alignSelf: 'auto', paddingTop: 10, fontSize: 13
                                }}
                                >gal</Text>
                            </View>

                        </View>

                        <View style={{
                            width: '50%',
                            paddingTop: 15,
                            flexDirection: 'column',
                            height: 100
                        }}>
                            <Text style={{ fontFamily: 'Quicksand-Bold', fontSize: 15, paddingTop: 10 }}>Nama Belakang</Text>
                            <View style={{ width: '50%', borderWidth: 0, height: 50, paddingLeft: 2, paddingTop: 2 }}>
                                <Text style={{
                                    fontFamily: 'Quicksand-Regular', alignSelf: 'auto', paddingTop: 10, fontSize: 13
                                }}
                                >Gadod</Text>
                            </View>
                        </View>


                    </View>

                    <View style={{
                        width: '150%',
                        height: 70,
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
                            <Text style={{ fontFamily: 'Quicksand-Bold', fontSize: 15 }}>No Rekening</Text>
                            <View style={{ width: '150%', borderWidth: 0, height: 50, paddingLeft: 2, paddingTop: 2 }}>
                                <Text style={{
                                    fontFamily: 'Quicksand-Regular', alignSelf: 'auto', paddingTop: 10, fontSize: 13
                                }}
                                >1234567</Text>
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
                            paddingTop: 15,
                            height: 100
                        }}>
                            <Text style={{ fontFamily: 'Quicksand-Bold', fontSize: 15, paddingTop: 10 }}>Nama Bank</Text>
                            <View style={{ width: '50%', borderWidth: 0, height: 50, paddingLeft: 2, paddingTop: 2, backgroundColor: '' }}>
                                <Text style={{
                                    fontFamily: 'Quicksand-Regular', alignSelf: 'auto', paddingTop: 10, fontSize: 13
                                }}
                                >Mandiri</Text>
                            </View>

                        </View>

                        <View style={{
                            width: '50%',
                            paddingTop: 15,
                            flexDirection: 'column',
                            height: 100
                        }}>
                            <Text style={{ fontFamily: 'Quicksand-Bold', fontSize: 15, paddingTop: 10 }}>Cabang</Text>
                            <View style={{ width: '50%', borderWidth: 0, height: 50, paddingLeft: 2, paddingTop: 2, backgroundColor: '' }}>
                                <Text style={{
                                    fontFamily: 'Quicksand-Regular', alignSelf: 'auto', paddingTop: 10, fontSize: 13
                                }}
                                >Gading Serpong</Text>
                            </View>
                        </View>
                    </View>
                </View>


                <Text style={[styles.pickerTextStyle, { marginLeft: 5, fontFamily: 'Quicksand-Bold', margintop: 20 }]}>Photo Profil Asli</Text>
                <ContainerSection>
                    <View style={{ flex: 1, width: '100%' }}>

                        <View>
                            <Image
                                source={require('../assets/images/icon_profile.png')}
                                style={{ width: '35%', height: 250 }}
                                resizeMode='cover'
                            />

                        </View>

                    </View>
                </ContainerSection>


                <Text style={[styles.pickerTextStyle, { marginTop: 20, fontFamily: 'Quicksand-Bold' }]}>Photo KTP</Text>
                <ContainerSection>
                    <View style={{ flex: 1, width: '100%' }}>

                        <View>
                            <Image
                                source={require('../assets/images/icon_profile.png')}
                                style={{ width: '100%', height: 300 }}
                                resizeMode='cover'
                            />

                        </View>

                    </View>
                </ContainerSection>

                <Text style={[styles.pickerTextStyle, { marginLeft: 5, marginTop: 20, fontFamily: 'Quicksand-Bold' }]}>Photo Rekening Anda</Text>
                <ContainerSection>
                    <View style={{ flex: 1, width: '100%' }}>

                        <View>
                            <Image
                                source={require('../assets/images/icon_profile.png')}
                                style={{ width: '100%', height: 300 }}
                                resizeMode='cover'
                            />

                        </View>

                    </View>
                </ContainerSection>

            </ScrollView >
        )
    }
}


const styles = StyleSheet.create({
    containerMainAddress: {
        // flex: 1,
        borderRadius: 20,
        shadowColor: 'black',
        shadowOffset: { width: 10, heigth: 10 },
        shadowRadius: 5,
        shadowOpacity: 1.0,
        elevation: 3,
        flexDirection: 'column',
        marginTop: 5,
        height: 300,
        width: '90%',
        // alignItems: 'center',
        // justifyContent: 'center',
        alignSelf: 'center',
        // zIndex: 1,
        borderColor: '#d6d7da',
    },


})

export default InformasiBankPage