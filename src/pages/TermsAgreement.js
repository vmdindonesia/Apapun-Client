import React, { Component } from 'react'
import { View, Text, ImageBackground, Image, AsyncStorage, TouchableOpacity, ScrollView, StyleSheet, TouchableHighlight, TouchableWithoutFeedback, StatusBar, Modal } from 'react-native'
import { Container, ContainerSection, Button, Input, InputSearch, InputDate } from '../components/common';
// import axios from 'axios';
import { COLOR } from './../shared/config';
import SwitchToggle from 'react-native-switch-toggle';
import Icon from 'react-native-vector-icons/Ionicons';


export class TermsAndAgreementPage extends React.Component {

    static navigationOptions = ({ navigation }) => ({
        headerLeft:
            <TouchableOpacity
                onPress={() => { navigation.goBack(); console.log(navigation.goBack(), 'Props Order') }}
            >
                <Icon size={30} style={{ marginLeft: 25, color: '#EF1C25' }} name='ios-arrow-back' />
            </TouchableOpacity>,
        headerTitle: 'Terms And Condition'
    });


    render() {

        return (
            <View style={{ flex: 1, backgroundColor: '#e5e5e5' }}>

                <ScrollView>

                    <View style={{
                        flex: 1,
                        height: 300,
                        // backgroundColor: 'skyblue',
                        marginTop: 15,
                        alignContent: 'center'
                    }}>
                        <View>
                            <Text style={{ fontWeight: 'bold', fontSize: 15, paddingLeft: 10, color: 'black' }}>Syarat dan Ketentuan</Text>
                        </View>

                        <View style={{
                            flex: 1,
                            height: 250,
                            flexDirection: 'column',
                            backgroundColor: 'white',
                            marginTop: 15,
                            marginLeft: 10,
                            marginRight: 10,
                        }}>
                            <Text style={{ fontSize: 11.4, textAlign: 'left', padding: 5 }}>
                                Selamat datang di website www.apapun.co.id dan / aplikasi mobile<Text style={{ fontWeight: 'bold' }}> apapun </Text>.
                                Silakan membaca Syarat penggunaan ini dengan seksama. Syarat Penggunaan ini mengatur penggunaan dan akses Platform (di definisikan di bawah)
                            maka Anda jangan/berhenti mengakses dan/atau menggunakan Platform atau Layanan ini. {'\n'}{'\n'}

                                Akses atau password dan penggunaan password dilindungi dan / atau area tertentu yang diterlindungi pada Platform dan / atau penggunaan
                                Layanan dibatasi hanya untuk Pelanggan yang memiliki akun saja. Anda tidak diperbolehkan memperoleh atau berusaha memperoleh akses tidak sah
                                ke area Platform dan / atau Layanan ini, atau ke area informasi lain yang dilindungi, dengan cara apapun yang tanpa ijin penggunaan khusus oleh
                                kami. Pelanggan terhadap ketentuan ini merupakan pelanggaran yang didasarkan hukum Indonesia dan / atau undang-undang dan peraturan yang berlaku.
                            </Text>
                        </View>


                    </View>



                    <View style={{
                        flex: 1,
                        height: 200,
                        // backgroundColor: 'skyblue',
                        marginTop: 15,
                        alignContent: 'center'
                    }}>
                        <View>
                            <Text style={{ fontWeight: 'bold', fontSize: 15, paddingLeft: 10, color: 'black' }}>Konten</Text>
                        </View>

                        <View style={{
                            flex: 3,
                            height: 50,
                            flexDirection: 'column',
                            // backgroundColor: 'red',
                            marginTop: 15,
                            backgroundColor: '#e5e5e5',
                            // marginLeft: 10,
                            // marginLeft: 10,
                        }}>

                            <View style={{ flex: 1, backgroundColor: 'white', height: 30, marginLeft: 10, marginRight: 10, marginBottom: 7, justifyContent: 'center' }}>
                                <Text style={{ fontSize: 13, paddingLeft: 20, color: 'red' }}>General/Umum</Text>
                            </View>

                            <View style={{ flex: 1, backgroundColor: 'white', height: 30, marginLeft: 10, marginRight: 10, marginBottom: 7, justifyContent: 'center' }}>
                                <Text style={{ fontSize: 13, paddingLeft: 20, color: 'red' }}>Transaksi</Text>
                            </View>

                            <View style={{ flex: 1, backgroundColor: 'white', height: 30, marginLeft: 10, marginRight: 10, marginBottom: 7, justifyContent: 'center' }}>
                                <Text style={{ fontSize: 13, paddingLeft: 20, color: 'red' }}>Crafter</Text>
                            </View>
                        </View>


                    </View>

                    <View style={{ flex: 1, height: 50 }} />

                </ScrollView>

            </View >
        )
    }

}




const styles = StyleSheet.create({


});

export default TermsAndAgreementPage;

