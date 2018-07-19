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
                <View style={{ backgroundColor: 'white', alignItems: 'center', justifyContent:'center', textAlign: 'center' }}>
                <View style={{ flexDirection: 'row', height: 50, width: '100%', alignItems: 'center' }}>


                    <Image style={{ marginLeft: 50, height: 18, width: 18}}
                        source={require('./../assets/images/ic_wallet.png')}
                    />

                    <Text style={{ marginLeft: 10, fontSize: 15, fontFamily: 'Quicksand-Bold', paddingLeft: 10, alignItems: 'center' }}>
                        Total Apresiasi Design Anda
                        </Text>
                </View>

                <Text style={{ fontSize: 25, margintop: 20, marginBottom: 25, textAlign: 'center', fontFamily: 'Quicksand-Bold' }}>
                    Rp. 120.000
                    </Text>
                </View>

                <View style={ styles.containerMainAddress }>
                    <View style={{
                        width: '100%',
                        height: 50,
                        backgroundColor: '',
                        flexDirection: 'row'
                    }}>

                        <View style={{
                            width: '50%',
                            flexDirection: 'column',
                            marginTop: 10,
                            justifyContent: 'center',
                            backgroundColor:'',
                            height: 50
                        }}>
                            <Text style={{ fontFamily: 'Quicksand-Bold', fontSize: 15 }}>Nama Depan</Text>
                            <View style={{ width: '50%', borderWidth: 0, height: 30, paddingLeft: 2, backgroundColor: 'white' }}>
                                <Text style={{
                                    fontFamily: 'Quicksand-Regular', alignSelf: 'auto', paddingTop: 10, fontSize: 13
                                }}
                                >gal</Text>
                            </View>

                        </View>

                        <View style={{
                            width: '50%',
                            marginTop: 10,
                            justifyContent: 'center',
                            flexDirection: 'column',
                            height: 50
                        }}>
                            <Text style={{ fontFamily: 'Quicksand-Bold', fontSize: 15, }}>Nama Belakang</Text>
                            <View style={{ width: '50%', borderWidth: 0, height: 30, paddingLeft: 2, paddingTop: 2, backgroundColor: 'white' }}>
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
                            <View style={{ width: '150%', borderWidth: 0, height: 30, paddingLeft: 2, paddingTop: 2, backgroundColor: 'white' }}>
                                <Text style={{
                                    fontFamily: 'Quicksand-Regular', alignSelf: 'auto', paddingTop: 10, fontSize: 13
                                }}
                                >1234567</Text>
                            </View>

                        </View>
                    </View>

                    <View style={{
                        width: '100%',
                        height: 50,
                        backgroundColor: '',
                        flexDirection: 'row'
                    }}>

                        <View style={{
                            width: '50%',
                            flexDirection: 'column',
                            margintop: 10,
                            height: 50
                        }}>
                            <Text style={{ fontFamily: 'Quicksand-Bold', fontSize: 15, paddingTop: 10 }}>Nama Bank</Text>
                            <View style={{ width: '50%', borderWidth: 0, height: 30, paddingLeft: 2, paddingTop: 2, backgroundColor: 'white' }}>
                                <Text style={{
                                    fontFamily: 'Quicksand-Regular', alignSelf: 'auto', paddingTop: 10, fontSize: 13
                                }}
                                >Mandiri</Text>
                            </View>

                        </View>

                        <View style={{
                            width: '50%',
                            margintop: 10,
                            flexDirection: 'column',
                            height: 50
                        }}>
                            <Text style={{ fontFamily: 'Quicksand-Bold', fontSize: 15, paddingTop: 10 }}>Cabang</Text>
                            <View style={{ width: '50%', borderWidth: 0, height: 30, paddingLeft: 2, paddingTop: 2, backgroundColor: 'white' }}>
                                <Text style={{
                                    fontFamily: 'Quicksand-Regular', alignSelf: 'auto', paddingTop: 10, fontSize: 13
                                }}
                                >Serpong</Text>
                            </View>
                        </View>
                    </View>

                <Text style={[styles.pickerTextStyle, { marginLeft: 5, fontFamily: 'Quicksand-Bold', margintop: 15, paddingTop: 50, fontSize: 15, }]}>Photo Profil Asli</Text>
                <ContainerSection>
                    <View style={{ flex: 1, width: '100%' }}>

                        <View>
                            <Image
                                source={require('../assets/images/icon_profile.png')}
                                style={{ width: '35%', height: 200 }}
                                resizeMode='cover'
                            />

                        </View>

                    </View>
                </ContainerSection>
            </View>

                <Text style={[styles.pickerTextStyle, { marginLeft: 5, fontSize: 15, marginTop: 180, fontFamily: 'Quicksand-Bold' }]}>Photo KTP</Text>
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

                <Text style={[styles.pickerTextStyle, { marginLeft: 5, marginTop: 50, fontFamily: 'Quicksand-Bold', fontSize: 15, }]}>Photo Rekening Anda</Text>
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
        flexDirection: 'column',
        marginTop: 5,
        height: 350,
        width: '90%',
        // alignItems: 'center',
        // justifyContent: 'center',
        alignSelf: 'center'
    }


})

export default InformasiBankPage