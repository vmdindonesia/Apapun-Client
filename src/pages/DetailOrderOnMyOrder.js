import React, { Component } from 'react';
import { View, Text, ImageBackground, Image, AsyncStorage, TouchableOpacity, ScrollView, StyleSheet, TouchableHighlight, TouchableWithoutFeedback, StatusBar, Modal } from 'react-native'
import { Container, ContainerSection, Button, Input, InputSearch, InputDate } from '../components/common';
// import axios from 'axios';
import { COLOR } from '../shared/config';
import Icon from 'react-native-vector-icons/Ionicons';



export class DetailOrderPage extends React.Component {

    static navigationOptions = ({ navigation }) => ({
        headerLeft:
            <TouchableOpacity
                onPress={() => { navigation.goBack(); console.log(navigation.goBack(), 'Props Order') }}
            >
                <Icon size={30} style={{ marginLeft: 25, color: '#EF1C25' }} name='ios-arrow-back' />
            </TouchableOpacity>,
        headerTitle: 'Detail Pesanan'
    });

    render() {
        return (
            <View style={{ flex: 1, flexDirection: 'column', backgroundColor: '#eaeaea' }}>
                <View style={{ width: '100%', height: '88%' }}>
                    <ScrollView >
                        <View style={styles.container}>
                            <Text style={{ fontFamily: 'Quicksand-Bold', fontSize: 15, color: 'black', marginLeft: 15, marginRight: 15 }}>Pesanan: <Text style={{ fontFamily: 'Quicksand-Regular', fontSize: 15, color: 'red' }}>171227155OPQ</Text></Text>
                            <View style={{ flexDirection: 'row', marginTop: 15, height: 180, marginLeft: 10, marginRight: 10 }}>
                                <View
                                    style={{
                                        width: '35%', justifyContent: 'center',
                                    }}
                                >
                                    <Image
                                        style={{ width: 110, height: 110, alignSelf: 'center' }}
                                        source={require('./../assets/images/design1.jpg')}
                                        resizeMode='contain'
                                    />
                                </View>
                                <View
                                    style={{
                                        width: '63%', height: 150, flexDirection: 'column', marginLeft: 5
                                    }}
                                >
                                    <Text style={{ fontFamily: 'Quicksand-Bold', fontSize: 15, color: 'black', paddingTop: 2 }}>Nama Produk</Text>
                                    <View style={{ width: '100%', borderWidth: 0, height: 20, paddingLeft: 2, marginTop: 5, backgroundColor: '#fff' }}>
                                        <Text style={{
                                            fontFamily: 'Quicksand-Regular', alignSelf: 'auto', fontSize: 13, color: 'black'
                                        }}
                                        >My Own Table</Text>
                                    </View>
                                    <Text style={{ fontFamily: 'Quicksand-Bold', fontSize: 15, color: 'black', paddingTop: 5 }}>Dibuat dari</Text>
                                    <View style={{ width: '100%', borderWidth: 0, height: 20, paddingLeft: 2, marginTop: 5, backgroundColor: '#fff' }}>
                                        <Text style={{
                                            fontFamily: 'Quicksand-Regular', alignSelf: 'auto', fontSize: 13, color: 'black'
                                        }}
                                        >Workshop
                    </Text>
                                    </View>
                                    <Text style={{ fontFamily: 'Quicksand-Bold', fontSize: 15, color: 'black', paddingTop: 5 }}>Kategori</Text>
                                    <View style={{ width: '100%', borderWidth: 0, height: 20, paddingLeft: 2, marginTop: 5, backgroundColor: '#fff' }}>
                                        <Text style={{
                                            fontFamily: 'Quicksand-Regular', alignSelf: 'auto', fontSize: 13, color: 'black'
                                        }}
                                        >Furniture
                    </Text>
                                    </View>
                                    <Text style={{ fontFamily: 'Quicksand-Bold', fontSize: 15, color: 'black', paddingTop: 5 }}>Estimasi Selesai</Text>
                                    <View style={{ width: '100%', borderWidth: 0, height: 20, paddingLeft: 5, marginTop: 5, backgroundColor: '#fff' }}>
                                        <Text style={{
                                            fontFamily: 'Quicksand-Regular', alignSelf: 'auto', fontSize: 13, color: 'black'
                                        }}
                                        >10 hari
                    </Text>
                                    </View>
                                </View>
                            </View>




                            <Text style={{ fontFamily: 'Quicksand-Bold', color: 'black', marginLeft: 10, marginRight: 20, marginTop: 20, fontSize: 15 }}>Crafter</Text>
                            <View style={{ flex: 1, height: 120, flexDirection: 'row', backgroundColor: '#fff', marginTop: 5 }}>
                                <View style={{ width: '40%', justifyContent: 'center' }}>
                                    <Image
                                        style={{ height: 100, width: 100, borderRadius: 100, borderColor: 'white', alignSelf: 'center' }}
                                        source={require('./../assets/images/gal-gadot.jpg')}
                                    />
                                </View>

                                <View style={{ width: '60%', flexDirection: 'column', justifyContent: 'center' }}>
                                    <View style={{ width: '100%', }} >
                                        <Text style={{ fontFamily: 'Quicksand-Bold', color: 'black', fontSize: 15 }}>Gal Gadot</Text>
                                    </View>
                                    <View style={{ flexDirection: 'row', marginTop: 3, alignContent: 'center', }}>
                                        <Image
                                            style={{ height: 24, width: 15, marginLeft: 5 }}
                                            source={require('./../assets/images/location_icon.png')}
                                        />
                                        <View style={{ flex: 1 }}>
                                            <Text style={{ marginLeft: 10, fontSize: 13, color: 'black', fontFamily: 'Quicksand-Regular' }}>Indonesia, Kalimantan Selatan</Text>
                                        </View>
                                    </View>
                                    <View style={{ width: '100%', flexDirection: 'row', marginTop: 3 }}>
                                        <Image
                                            style={{ height: 15, width: 22, }}
                                            source={require('./../assets/images/Cukup.png')}
                                        />
                                        < View style={{ flex: 1 }}>
                                            <Text style={{ marginLeft: 7, fontSize: 13, color: 'black', fontFamily: 'Quicksand-Regular' }}>Rating:<Text style={{ fontFamily: 'Quicksand-Regular', color: 'red', fontSize: 13 }}> Cukup (35)</Text></Text>
                                        </View>
                                    </View>
                                </View>

                            </View>


                            <Text style={{ fontFamily: 'Quicksand-Bold', color: 'black', marginLeft: 10, marginRight: 20, marginTop: 20, fontSize: 15 }}>Jasa Pengiriman</Text>
                            <View
                                style={{ marginLeft: 10, marginRight: 10, flexDirection: 'row', backgroundColor: '#fff', marginTop: 10 }}>
                                <Image
                                    style={{ marginTop: 10, marginBottom: 10, width: '40%', height: 70 }}
                                    source={require('../assets/images/pos-indonesia.png')}
                                    resizeMode='contain'
                                />
                                <Text style={{
                                    marginLeft: 10, marginTop: 35, flex: 1, fontFamily: 'Quicksand-Bold', color: 'black'
                                }}>
                                    Pos Indonesia</Text>
                            </View>



                            <Text style={{ fontFamily: 'Quicksand-Bold', color: 'black', marginLeft: 10, marginRight: 20, marginTop: 20, fontSize: 15 }}>Alamat Pengiriman</Text>
                            <View style={{ height: 120, backgroundColor: '#fff', marginLeft: 10, marginRight: 10, marginTop: 5 }}>
                                <Text style={{ fontFamily: 'Quicksand-Bold', marginTop: 8, marginLeft: 5, fontSize: 13, color: 'black' }}>Home 1 {'\n'}</Text>
                                <Text style={{ fontFamily: 'Quicksand-Regular', marginLeft: 5, fontSize: 13, color: 'black' }}>Penerima: <Text style={{ fontFamily: 'Quicksand-Bold', fontSize: 13, color: 'black' }}>Judy {'\n'}{'\n'}</Text>
                                    <Text style={{ fontFamily: 'Quicksand-Regular', marginLeft: 5, fontSize: 13, color: 'black' }}>(+62) 8129676388 {'\n'}Jl. Kembang Ayu III blok E5 no.20 Perumahan Puri Indah,{'\n'}
                                        DKI Jakarta, JAKARTA BARAT, KEMBANGAN </Text></Text>
                            </View>


                            <Text style={{ fontFamily: 'Quicksand-Bold', color: 'black', marginLeft: 10, marginRight: 20, marginTop: 20, fontSize: 15 }}>Jumlah Biaya</Text>
                            <View style={{ width: '100%', height: 150, backgroundColor: '#fff', padding: 10, marginTop: 7 }}>

                                <View style={{ flexDirection: 'row', height: 25, borderBottomColor: '#e5e5e5', borderBottomWidth: 1, alignItems: 'center' }}>
                                    <Text style={{ fontFamily: 'Quicksand-Regular', color: 'black', fontSize: 13 }}>Harga Produk</Text>
                                    <View style={{ flex: 1, }}>
                                        <Text style={{ fontFamily: 'Quicksand-Bold', color: 'black', fontSize: 13, alignSelf: 'flex-end' }}>Rp 840.000</Text>
                                    </View>
                                </View>

                                <View style={{ flexDirection: 'row', height: 25, borderBottomColor: '#e5e5e5', borderBottomWidth: 1, alignItems: 'center' }}>
                                    <Text style={{ fontFamily: 'Quicksand-Regular', color: 'black', fontSize: 13 }}>Pengiriman</Text>
                                    <View style={{ flex: 1, }}>
                                        <Text style={{ fontFamily: 'Quicksand-Bold', color: 'black', fontSize: 13, textAlign: 'right' }}>Rp 20.000</Text>
                                    </View>
                                </View>

                                <View style={{ flexDirection: 'row', height: 25, borderBottomColor: '#e5e5e5', borderBottomWidth: 1, alignItems: 'center' }}>
                                    <Text style={{ fontFamily: 'Quicksand-Regular', color: 'black', fontSize: 13 }}>Jumlah yang dipesan</Text>
                                    <View style={{ flex: 1, }}>
                                        <Text style={{ fontFamily: 'Quicksand-Bold', color: 'black', fontSize: 13, textAlign: 'right' }}>1 PCS</Text>
                                    </View>
                                </View>

                                <View style={{ flexDirection: 'row', height: 50, borderBottomColor: '#e5e5e5', borderBottomWidth: 1, alignItems: 'center' }}>
                                    <Text style={{ fontFamily: 'Quicksand-Bold', color: 'black', fontSize: 15 }}>TOTAL</Text>
                                    <View style={{ flex: 1, }}>
                                        <Text style={{ fontFamily: 'Quicksand-Bold', color: 'red', fontSize: 15, textAlign: 'right' }}>Rp 860.000</Text>
                                    </View>
                                </View>


                            </View>
                        </View>
                    </ScrollView>
                </View>



                <View style={{
                    flexDirection: 'row',
                    width: '100%',
                    height: 70,
                    backgroundColor: '#1f2021',
                    justifyContent: 'center'
                }}>
                    <View style={{
                        height: '100%',
                        width: '20%',
                        // backgroundColor: 'skyblue'
                        justifyContent: 'center'
                    }}>

                        <Image
                            style={{
                                width: 35,
                                height: 40,
                                borderRadius: 0,
                                alignSelf: 'center'
                            }}
                            source={require('./../assets/images/ic_lock.png')}
                        />


                    </View>

                    <View style={{
                        height: '100%',
                        width: '40%',
                        // backgroundColor: 'red',
                        justifyContent: 'center'
                    }}>

                        <Text style={{
                            color: 'white',
                            fontSize: 12
                        }}>Pesanan akan terkunci setelah menekan tombol PRESS</Text>

                    </View>

                    <Image
                        style={{
                            width: 18,
                            height: 35,
                            borderRadius: 0,
                            alignSelf: 'center'
                        }}
                        source={require('./../assets/images/line_vertical.png')}
                    />

                    <View style={{
                        height: '100%',
                        width: '40%',
                        // backgroundColor: 'yellow',
                        justifyContent: 'center',
                    }}>
                        <TouchableOpacity style={{
                            backgroundColor: 'red',
                            borderRadius: 20,
                            height: '70%',
                            width: '80%',
                            justifyContent: 'center',
                            alignSelf: 'center',
                            marginLeft: -15,

                        }}
                            onPress={() => this.props.navigation.navigate('FinalProcessOrder')}
                        >
                            <Text style={{ color: 'white', fontWeight: 'bold', alignSelf: 'center', fontSize: 17.5 }}>PROSES</Text>
                        </TouchableOpacity>

                    </View>
                </View>
            </View>
        )
    }

}

const styles = StyleSheet.create({


});

export default DetailOrderPage

