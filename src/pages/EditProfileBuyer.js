import React, { Component } from 'react'
import { View, Text, ImageBackground, Image, AsyncStorage, TouchableOpacity, ScrollView, StyleSheet, TouchableHighlight, TouchableWithoutFeedback, StatusBar, Modal } from 'react-native'
import { Container, ContainerSection, Button, Input, InputDate } from '../components/common';
// import axios from 'axios';
import { COLOR } from './../shared/config';



export class EditProfileBuyerPage extends React.Component {

    static navigationOptions = {
        headerTitle: 'Edit Profile '

    }

    render() {
        return (
            <ScrollView
                style={styles.containerStyle}
                keyboardShouldPersistTaps="always"
                ref={ref => this.scrollView = ref}
            >
                <ContainerSection>
                    <Input
                        Text=''
                        label='ID Akun'
                    />
                </ContainerSection>

                <ContainerSection>
                    <Input
                        Text=''
                        label='Ganti Kata Sandi'
                    />
                </ContainerSection>

                <ContainerSection>
                    <Input
                        Text=''
                        label='Jenis Kelamin'
                    />
                </ContainerSection>

                <ContainerSection>
                    <Input
                        Text=''
                        label='Tanggal Lahir'
                    />
                </ContainerSection>

                <ContainerSection>
                    <Input
                        Text=''
                        label='Email'
                    />
                </ContainerSection>

                <ContainerSection>
                    <Input
                        Text=''
                        label='No Telfon'
                        keyboardType='numeric'
                    />
                </ContainerSection>

                <ContainerSection>
                    <TouchableOpacity
                        onPress={() => this.props.navigation.navigate('SettingAddressBuyerPage')}>
                        <Text style={{ textAlign: 'center', color: 'black', fontSize: 15, fontWeight: 'bold' }}>Alamat</Text>
                    </TouchableOpacity>
                </ContainerSection>

                 <View>
                     <Text style={{ fontWeight: 'bold' }}> Hubungkan Dengan Sosial Media </Text>
                </View>

                <ContainerSection>
                    <View style={{ flex: 1, flexDirection: 'row' }}>
                        <View style={{ flex: 1 }}>
                            <TouchableOpacity>
                                <Image style={{ width: 20, height: 20, marginTop: 7 }} source={require('../assets/images/facebook.jpg')} />
                            </TouchableOpacity>
                        </View>
                        <View>
                            <Text style={{ padding: 5, fontFamily: 'Quicksand-Bold' }}> Not Connection </Text>
                        </View>
                    </View>
                </ContainerSection>

                <TouchableOpacity style={styles.button}
                    onPress={() => this.props.navigation.navigate('ProfilePage')}>
                    <Text style={{ textAlign: 'center', color: 'white', fontSize: 15, fontFamily: 'Quicksand-Bold' }}>Keluar</Text>
                </TouchableOpacity>



                <TouchableOpacity style={styles.buttonJoin}
                    onPress={() => this.props.navigation.navigate('SettingAddressBuyerPage')}>
                    <Text style={{ textAlign: 'center', color: 'white', fontSize: 15, fontFamily: 'Quicksand-Bold' }}>SIMPAN</Text>
                </TouchableOpacity>



            </ScrollView>
        )
    }

}

const styles = StyleSheet.create({
    input: {
        height: 36,
        padding: 10,
        margin: 18,
        fontSize: 18,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: '#48BBEC',
        backgroundColor: 'rgba(0,0,0,0)',
    },
    buttonJoin: {
        backgroundColor: 'red',
        borderRadius: 20,
        height: 35,
        width: 180,
        alignSelf: 'center',
        justifyContent: 'center',
        marginTop: 50
    },

    button: {
        backgroundColor: 'red',
        borderRadius: 20,
        height: 35,
        width: 180,
        alignSelf: 'center',
        justifyContent: 'center',
        marginTop: 50
    },


});

export default EditProfileBuyerPage
