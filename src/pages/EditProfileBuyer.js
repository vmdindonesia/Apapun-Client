import React, { Component } from 'react'
import { View, Text, ImageBackground, Image, AsyncStorage, TouchableOpacity, ScrollView, StyleSheet, TouchableHighlight, TouchableWithoutFeedback, StatusBar, Modal } from 'react-native'
import { Container, ContainerSection, Button, Input, InputDate } from '../components/common';
// import axios from 'axios';
import { COLOR } from './../shared/config';



export class EditProfileBuyerPage extends React.Component {

    static navigationOptions = {
        headerTitle: 'Pengaturan Profile'

    }

    render() {
        return (
            <ScrollView
                style={{ backgroundColor: '#e5e5e5' }}
                keyboardShouldPersistTaps="always"
                ref={ref => this.scrollView = ref}
            >

                <View style={{ flex: 1, height: 500, backgroundColor: 'white', paddingTop: 25 }}>

                    <View style={{ flex: 1, borderBottomWidth: 2, borderBottomColor: '#e5e5e5', flexDirection: 'row', alignItems: 'center', marginRight: 30, marginLeft: 30 }}>
                        <Text style={{ color: 'black', fontSize: 15, fontWeight: 'bold' }}>ID Akun</Text>
                        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'flex-end' }}>
                            <Text style={{ color: 'black', fontSize: 15, }}>Gal Gadot</Text>
                        </View>
                    </View>

                    <View style={{ flex: 1, borderBottomWidth: 2, borderBottomColor: '#e5e5e5', flexDirection: 'row', alignItems: 'center', marginRight: 30, marginLeft: 30 }}>
                        <Text style={{ color: 'black', fontSize: 15, fontWeight: 'bold' }}>Ganti Kata Sandi</Text>
                        {/* <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'flex-end' }}>
                            <Text style={{ color: '#e5e5e5', fontSize: 15, }}>Gal Gadot</Text>
                        </View> */}
                    </View>

                    <View style={{ flex: 1, borderBottomWidth: 2, borderBottomColor: '#e5e5e5', flexDirection: 'row', alignItems: 'center', marginRight: 30, marginLeft: 30 }}>
                        <Text style={{ color: 'black', fontSize: 15, fontWeight: 'bold' }}>Jenis Kelamin</Text>
                        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'flex-end' }}>
                            <Text style={{ color: 'black', fontSize: 15, }}>Female</Text>
                        </View>
                    </View>

                    <View style={{ flex: 1, borderBottomWidth: 2, borderBottomColor: '#e5e5e5', flexDirection: 'row', alignItems: 'center', marginRight: 30, marginLeft: 30 }}>
                        <Text style={{ color: 'black', fontSize: 15, fontWeight: 'bold' }}>Tanggal Lahir</Text>
                        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'flex-end' }}>
                            <Text style={{ color: 'black', fontSize: 15, }}>14 Februari 1998</Text>
                        </View>
                    </View>

                    <View style={{ flex: 1, borderBottomWidth: 2, borderBottomColor: '#e5e5e5', flexDirection: 'row', alignItems: 'center', marginRight: 30, marginLeft: 30 }}>
                        <Text style={{ color: 'black', fontSize: 15, fontWeight: 'bold' }}>Email</Text>
                        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'flex-end', }}>
                            <View style={{ flexDirection: 'column', alignItems: 'center' }}>
                                <Text style={{ color: 'black', fontSize: 15, }}>galgadot@gmail.com</Text>
                                <Text style={{ color: 'red', fontSize: 15, }}> {"<Verification>"}</Text>
                            </View>
                        </View>
                    </View>


                    <View style={{ flex: 1, borderBottomWidth: 2, borderBottomColor: '#e5e5e5', flexDirection: 'row', alignItems: 'center', marginRight: 30, marginLeft: 30 }}>
                        <Text style={{ color: 'black', fontSize: 15, fontWeight: 'bold' }}>Nomor Telepon</Text>
                        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'flex-end', }}>
                            <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                                <Text style={{ color: 'black', fontSize: 15, }}>+62 8567847493</Text>
                            </View>
                        </View>
                    </View>

                    <View style={{ flex: 1, borderBottomWidth: 2, borderBottomColor: '#e5e5e5', flexDirection: 'row', alignItems: 'center', marginRight: 30, marginLeft: 30 }}>
                        <View style={{ flex: 1 }}>
                            <TouchableOpacity
                                onPress={() => this.props.navigation.navigate('SettingAddressBuyer')}
                            >
                                <Text style={{ color: 'black', fontSize: 15, fontWeight: 'bold' }}>Alamat</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                </View>

                <View style={{ flex: 1, height: 125, backgroundColor: 'white', paddingTop: 20 }}>
                    <View style={{ flex: 1, flexDirection: 'column', marginRight: 30, marginLeft: 30 }}>
                        <Text style={{ color: 'black', fontSize: 15, fontWeight: 'bold' }}>Hubungkan Dengan Facebook</Text>
                        <View style={{ flexDirection: 'row', flex: 1, alignItems: 'center', paddingLeft: 25 }}>
                            <Image
                                style={{ height: 42.5, width: 42.5, }}
                                source={require('./../assets/images/ic_fb.jpg')}
                            />
                            <View style={{ flex: 1, flexDirection: 'row', }}>
                                <Text style={{ color: 'black', fontSize: 15, paddingLeft: 30, }}>Not Connected</Text>
                            </View>
                        </View>
                    </View>
                </View>

                <View style={{ flex: 1, height: 75, backgroundColor: 'white', marginTop: 22, flexDirection: "row" }}>
                    <View style={{ flex: 1, flexDirection: 'row', marginRight: 30, marginLeft: 30, alignItems: 'center' }}>
                        <Image
                            style={{ height: 42.5, width: 42.5, }}
                            source={require('./../assets/images/profile_out.png')}
                        />
                        <View style={{ flex: 1, flexDirection: 'row', }}>
                            <Text style={{ color: 'black', fontSize: 15, paddingLeft: 15, fontWeight: 'bold' }}>KELUAR</Text>
                        </View>
                    </View>
                </View>

                <View style={{ flex: 1, height: 50, flexDirection: 'row', backgroundColor: 'red', alignItems: 'center', justifyContent: 'center', marginRight: 30, marginLeft: 30, borderRadius: 100, alignItems: 'center', marginTop: 25 }}>
                    <Text style={{ color: 'white', fontSize: 15, textAlign: 'center', fontWeight: 'bold' }}>Simpan</Text>
                </View>

                <View style={{ marginTop: 25 }} />

            </ScrollView >
        )
    }

}

const styles = StyleSheet.create({



});

export default EditProfileBuyerPage
