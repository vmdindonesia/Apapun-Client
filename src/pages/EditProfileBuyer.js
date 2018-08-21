import React, { Component } from 'react';
import { View, Text, ImageBackground, Image, AsyncStorage, TouchableOpacity, ScrollView, StyleSheet, TouchableHighlight, TouchableWithoutFeedback, StatusBar, Modal } from 'react-native'
import { Container, ContainerSection, Button, Input, InputDate } from '../components/common';
// import axios from 'axios';
import { COLOR } from '../shared/config';
import Icon from 'react-native-vector-icons/Ionicons';


export class EditProfileBuyerPage extends React.Component {

    static navigationOptions = ({ navigation }) => ({
        headerLeft:
            <TouchableOpacity
                onPress={() => { navigation.goBack(); console.log(navigation.goBack(), 'Props Order') }}
            >
                <Icon size={30} style={{ marginLeft: 25, color: '#EF1C25' }} name='ios-arrow-back' />
            </TouchableOpacity>,
        headerTitle: 'Pengaturan Profil'
    });

    render() {
        return (
            <ScrollView
                style={{ backgroundColor: '#e5e5e5' }}
                keyboardShouldPersistTaps="always"
                ref={ref => this.scrollView = ref}
            >

                <View style={{ flex: 1, height: 500, backgroundColor: 'white', paddingTop: 25 }}>

                    <View style={{ flex: 1, borderBottomWidth: 2, borderBottomColor: '#e5e5e5', flexDirection: 'row', alignItems: 'center', marginRight: 30, marginLeft: 30 }}>
                        <Text style={{
                            color: 'black', fontSize: 15, fontFamily: 'Quicksand-Bold',
                        }}>ID Akun</Text>
                        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'flex-end' }}>
                            <Text style={{ color: 'black', fontSize: 15, fontFamily: 'Quicksand-Regular', }}>Gal Gadot</Text>
                        </View>
                    </View>

                    <View style={{ flex: 1, borderBottomWidth: 2, borderBottomColor: '#e5e5e5', flexDirection: 'row', alignItems: 'center', marginRight: 30, marginLeft: 30 }}>
                        <Text style={{ color: 'black', fontSize: 15, fontFamily: 'Quicksand-Bold', }}>Ganti Kata Sandi</Text>
                        {/* <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'flex-end' }}>
                            <Text style={{ color: '#e5e5e5', fontSize: 15, }}>Gal Gadot</Text>
                        </View> */}
                    </View>

                    <View style={{ flex: 1, borderBottomWidth: 2, borderBottomColor: '#e5e5e5', flexDirection: 'row', alignItems: 'center', marginRight: 30, marginLeft: 30 }}>
                        <Text style={{ color: 'black', fontSize: 15, fontFamily: 'Quicksand-Bold', }}>Jenis Kelamin</Text>
                        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'flex-end' }}>
                            <Text style={{ color: 'black', fontSize: 15, fontFamily: 'Quicksand-Regular', }}>Female</Text>
                        </View>
                    </View>

                    <View style={{ flex: 1, borderBottomWidth: 2, borderBottomColor: '#e5e5e5', flexDirection: 'row', alignItems: 'center', marginRight: 30, marginLeft: 30 }}>
                        <Text style={{ color: 'black', fontSize: 15, fontFamily: 'Quicksand-Bold', }}>Tanggal Lahir</Text>
                        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'flex-end' }}>
                            <Text style={{ color: 'black', fontSize: 15, fontFamily: 'Quicksand-Regular', }}>14 Februari 1998</Text>
                        </View>
                    </View>

                    <View style={{ flex: 1, borderBottomWidth: 2, borderBottomColor: '#e5e5e5', flexDirection: 'row', alignItems: 'center', marginRight: 30, marginLeft: 30 }}>
                        <Text style={{ color: 'black', fontSize: 15, fontFamily: 'Quicksand-Bold', }}>Email</Text>
                        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'flex-end', }}>
                            <View style={{ flexDirection: 'column', alignItems: 'center' }}>
                                <Text style={{ color: 'black', fontSize: 15, fontFamily: 'Quicksand-Regular', }}>galgadot@gmail.com</Text>
                                <Text style={{ color: 'red', fontSize: 15, fontFamily: 'Quicksand-Regular', }}> {"<Verification>"}</Text>
                            </View>
                        </View>
                    </View>


                    <View style={{ flex: 1, borderBottomWidth: 2, borderBottomColor: '#e5e5e5', flexDirection: 'row', alignItems: 'center', marginRight: 30, marginLeft: 30 }}>
                        <Text style={{ color: 'black', fontSize: 15, fontFamily: 'Quicksand-Bold', }}>Nomor Telepon</Text>
                        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'flex-end', }}>
                            <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                                <Text style={{ color: 'black', fontSize: 15, fontFamily: 'Quicksand-Regular', }}>+62 8567847493</Text>
                            </View>
                        </View>
                    </View>

                    <View style={{ flex: 1, borderBottomWidth: 2, borderBottomColor: '#e5e5e5', flexDirection: 'row', alignItems: 'center', marginRight: 30, marginLeft: 30 }}>
                        <View style={{ flex: 1 }}>
                            <TouchableOpacity
                                onPress={() => this.props.navigation.navigate('SettingAddressBuyer')}
                            >
                                <Text style={{ color: 'black', fontSize: 15, fontFamily: 'Quicksand-Bold', }}>Alamat</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                </View>

                <View style={{ flex: 1, height: 125, backgroundColor: 'white', paddingTop: 20 }}>
                    <View style={{ flex: 1, flexDirection: 'column', marginRight: 30, marginLeft: 30 }}>
                        <Text style={{ color: 'black', fontSize: 15, fontFamily: 'Quicksand-Bold', }}>Hubungkan Dengan Facebook</Text>
                        <View style={{ flexDirection: 'row', flex: 1, alignItems: 'center', paddingLeft: 25 }}>
                            <Image
                                style={{ height: 42.5, width: 42.5, }}
                                source={require('./../assets/images/ic_fb.jpg')}
                            />
                            <View style={{ flex: 1, flexDirection: 'row', }}>
                                <Text style={{ color: 'black', fontSize: 15, paddingLeft: 30, fontFamily: 'Quicksand-Regular', }}>Not Connected</Text>
                            </View>
                        </View>
                    </View>
                </View>

                <View style={{ flex: 1, height: 50, flexDirection: 'row', backgroundColor: '#ef1c25', alignItems: 'center', justifyContent: 'center', marginRight: 30, marginLeft: 30, borderRadius: 100, alignItems: 'center', marginTop: 25 }}>
                    <TouchableOpacity
                        onPress={() => this.props.navigation.navigate('ProfilePage')}
                    >
                        <Text style={{ color: 'white', fontSize: 15, textAlign: 'center',fontFamily: 'Quicksand-Bold', }}>Simpan</Text>
                    </TouchableOpacity>
                </View>

                <View style={{ marginTop: 25 }} />

            </ScrollView >
        )
    }

}

const styles = StyleSheet.create({



});

export default EditProfileBuyerPage
