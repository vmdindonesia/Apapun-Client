import React, { Component } from 'react';
import { ToastAndroid, View, Text, ImageBackground, Image, AsyncStorage, TouchableOpacity, TextInput, ScrollView, StyleSheet, TouchableHighlight, TouchableWithoutFeedback, StatusBar, Modal } from 'react-native'
// import axios from 'axios';
import Swiper from 'react-native-swiper';
import { Container, ContainerSection, Button, Input, InputDate, InputNumber } from '../components/common';

export class UlasanOnCrafterProfilePage extends React.Component {


    static navigationOptions = {
        headerTitle: 'Ulasan',
        headerStyle: {
            // shadowOpacity: 0,
            elevation: 0,
            borderBottomColor: 'white',
            borderBottomWidth: 0
        },
    }


    constructor(props) {
        super(props)
        this.state = {
            // screen: 'Custom'

        }
    }

    renderProductImage = (data) => {
        console.log(data, '098');
        return (
            <TouchableOpacity>

                <View style={{ flex: 1, flexDirection: 'row', marginTop: 5, marginRight: 5, marginBottom: 5, }}>
                    <Image
                        style={styles.thumbnailStyle}
                        source={{ uri: data.item }}
                    />
                </View>

            </TouchableOpacity >
        )
    }



    render() {
        return (
            <View style={{ flex: 1 }}>
                <View style={{ width: '100%', height: 90, flexDirection: 'row', }}>
                    <View style={{ width: '25%', flexDirection: 'column', backgroundColor: 'white', justifyContent: 'center', alignItems: 'center' }}>

                        <Image
                            style={{
                                width: 50,
                                height: 50,
                                alignSelf: 'center'
                            }}
                            resizeMode='contain'
                            source={require('./../assets/images/Buruk.png')}
                        />
                        <Text style={{ fontFamily: 'Quicksand-Regular', fontSize: 13, color: 'black', alignSelf: 'center', marginTop: 5 }}>Buruk</Text>
                    </View>

                    <View style={{ width: '25%', flexDirection: 'column', backgroundColor: 'white', justifyContent: 'center', alignItems: 'center' }}>
                        <Image
                            style={{
                                width: 50,
                                height: 50,
                                alignSelf: 'center',
                                marginTop: 5
                            }}
                            resizeMode='contain'
                            source={require('./../assets/images/Cukup.png')}
                        />
                        <Text style={{ fontFamily: 'Quicksand-Regular', fontSize: 13, color: 'black', alignSelf: 'center', marginTop: 3 }}>Cukup</Text>
                    </View>
                    <View style={{ width: '25%', flexDirection: 'column', backgroundColor: 'white', justifyContent: 'center', alignItems: 'center' }}>
                        <Image
                            style={{
                                width: 50,
                                height: 50,
                                alignSelf: 'center',
                                marginTop: 5
                            }}
                            resizeMode='contain'
                            source={require('./../assets/images/Bagus.png')}
                        />
                        <Text style={{ fontFamily: 'Quicksand-Regular', fontSize: 13, color: 'black', alignSelf: 'center', marginTop: 5 }}>Baik</Text>
                    </View>
                    <View style={{ width: '25%', flexDirection: 'column', backgroundColor: 'white', justifyContent: 'center', alignItems: 'center' }}>
                        <Image
                            style={{
                                width: 50,
                                height: 50,
                                alignSelf: 'center'
                            }}
                            resizeMode='contain'
                            source={require('./../assets/images/sempurna.png')}
                        />
                        <Text style={{ fontFamily: 'Quicksand-Regular', fontSize: 13, color: 'black', alignSelf: 'center', marginTop: 11 }}>Sempurna</Text>
                    </View>
                </View>

                <View style={{ width: '100%', height: 30, flexDirection: 'row', backgroundColor: 'white' }}>
                    <View style={{ width: '25%', flexDirection: 'column', alignItems: 'center' }}>

                        <Text style={{ fontFamily: 'Quicksand-Bold', fontSize: 13, color: 'black', alignSelf: 'center' }}>(0)</Text>

                    </View>

                    <View style={{ width: '25%', flexDirection: 'column', alignItems: 'center' }}>

                        <Text style={{ fontFamily: 'Quicksand-Bold', fontSize: 13, color: 'black', alignSelf: 'center' }}>(1)</Text>

                    </View>

                    <View style={{ width: '25%', flexDirection: 'column', alignItems: 'center' }}>

                        <Text style={{ fontFamily: 'Quicksand-Bold', fontSize: 13, color: 'black', alignSelf: 'center' }}>(2)</Text>

                    </View>

                    <View style={{ width: '25%', flexDirection: 'column', alignItems: 'center' }}>

                        <Text style={{ fontFamily: 'Quicksand-Bold', fontSize: 13, color: 'black', alignSelf: 'center' }}>(4)</Text>

                    </View>

                </View>



                <ScrollView style={{
                    backgroundColor: '#eaeaea',
                    flex: 1
                }}>

                    <View style={{ flex: 1, backgroundColor: 'white', marginTop: 12.5, marginLeft: 15, marginRight: 15 }}>

                        <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 10, marginRight: 20, marginLeft: 20 }}>

                            <View style={{ width: '60%', flexDirection: 'row', alignItems: 'center', }}>
                                <View style={{ height: 65, width: 65, borderRadius: 100, backgroundColor: 'black' }}>
                                    {/* <Image
                                        style={{
                                            width: 50,
                                            height: 50,
                                            alignSelf: 'center',
                                            borderRadius: 50
                                        }}
                                        resizeMode='stretch'
                                        source={require('./../assets/images/profile.png')}
                                    /> */}
                                </View>

                                <View style={{ justifyContent: 'center', flex: 1 }}>
                                    <Text style={{ fontFamily: 'Quicksand-Bold', fontSize: 13, color: 'black', paddingLeft: 10 }}>Gal Gadot</Text>
                                    <Text style={{ fontFamily: 'Quicksand-Regular', fontSize: 13, color: 'black', paddingLeft: 10 }}>28 Januari 2018, 18.04</Text>
                                </View>
                            </View>
                            <View style={{ width: '40%', height: '100%', flexDirection: 'row' }}>
                                <Image
                                    style={{
                                        width: 50,
                                        height: 50,
                                        alignSelf: 'center',
                                        marginLeft: 50
                                    }}
                                    resizeMode='contain'
                                    source={require('./../assets/images/sempurna.png')}
                                />
                            </View>
                        </View>

                        <View style={{ margin: 5, height: '80%', }}>

                            <View style={{}}>
                                <Text style={{ fontFamily: 'Quicksand-Bold', fontSize: 15, color: 'black', paddingLeft: 10 }}>Rekomen Banget</Text>
                            </View>
                            <View style={{ paddingTop: 5, flex: 1 }}>
                                <Text style={{ fontFamily: 'Quicksand-Regular', fontSize: 13, color: 'black', paddingLeft: 10 }}>Kecocokan barang dengan barang yang saya buat cukup memuaskan Kecocokan barang dengan barang yang saya buat cukup memuaskanKecocokan barang dengan barang yang saya buat cukup memuaskan.</Text>
                            </View>
                        </View>

                    </View>








                </ScrollView >


            </View >
        )
    }

}

const styles = StyleSheet.create({

    thumbnailContainerStyle: {

        margin: 10,
    },
    thumbnailStyle: {
        height: 90,
        width: 90,
        resizeMode: 'cover',
        // borderRadius: 1
    }


});

export default UlasanOnCrafterProfilePage;

