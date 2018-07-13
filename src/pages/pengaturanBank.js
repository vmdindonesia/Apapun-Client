import React, { Component } from 'react'
import { View, Text, ImageBackground, Image, AsyncStorage, TouchableOpacity, ScrollView, StyleSheet, TouchableHighlight, TouchableWithoutFeedback, StatusBar, Modal } from 'react-native'
import { Container, ContainerSection, Button, Input, InputDate } from '../components/common';
// import axios from 'axios';
import { COLOR } from './../shared/config';
import { CheckBox } from 'react-native-elements';

export class PengaturanBankPage extends React.Component {

    static navigationOptions = {
        headerTitle: 'Pengaturan Akun Bank'

    }


    render() {
        return (
            <ScrollView
                style={styles.containerStyle}
                keyboardShouldPersistTaps="always"
                ref={ref => this.scrollView = ref}
            >
                <Text style={[styles.pickerTextStyle]}>
                    Total apresiasi anda akan di transfer ke akun bank yang telah anda daftarkan dan akan di transferkan setiap blannya.
        </Text>


                <Text style={{ marginLeft: 5, marginTop: 10, }}>Nama Akun Apapun Anda</Text>

                <ContainerSection>
                    <Input
                        Text=''
                        label='Nama Depan'
                    />
                </ContainerSection>

                <ContainerSection>
                    <Input
                        Text=''
                        label='Nama Belakang'
                    />
                </ContainerSection>

                <ContainerSection>
                    <Input
                        Text=''
                        label='No Rekening'
                    />
                </ContainerSection>

                <ContainerSection>
                    <Input
                        Text=''
                        label='Nama Bank'
                    />
                </ContainerSection>

                <ContainerSection>
                    <Input
                        Text=''
                        label='Cabang'
                    />
                </ContainerSection>

                <Text style={[styles.pickerTextStyle, { marginLeft: 5, marginTop: 10 }]}>Photo Profil Asli</Text>
                <ContainerSection>
                    <View style={{ flex: 1, width: '100%' }}>

                        <View>
                            <Image
                                source={require('../assets/images/Upload-Photo.png')}
                                style={{ width: '100%', height: 300 }}
                                resizeMode='cover'
                            />

                        </View>

                    </View>
                </ContainerSection>


                <Text style={[styles.pickerTextStyle, { marginLeft: 5, marginTop: 10 }]}>Photo KTP</Text>
                <ContainerSection>
                    <View style={{ flex: 1, width: '100%' }}>

                        <View>
                            <Image
                                source={require('../assets/images/Upload-Photo.png')}
                                style={{ width: '100%', height: 300 }}
                                resizeMode='cover'
                            />

                        </View>

                    </View>
                </ContainerSection>

                <Text style={[styles.pickerTextStyle, { marginLeft: 5, marginTop: 10 }]}>Photo Rekening Anda</Text>
                <ContainerSection>
                    <View style={{ flex: 1, width: '100%' }}>

                        <View>
                            <Image
                                source={require('../assets/images/Upload-Photo.png')}
                                style={{ width: '100%', height: 300 }}
                                resizeMode='cover'
                            />

                        </View>

                    </View>
                </ContainerSection>

                <ContainerSection>
                    <Input
                        Text=''
                        label='Kode Verifikasi'
                    />
                </ContainerSection>

                <TouchableOpacity style={styles.button}>
                    <Text style={{ textAlign: 'center', color: 'white', fontSize: 15, fontFamily: 'Quicksand-Bold' }}>Kirim Kode Verifikasi</Text>
                </TouchableOpacity>

                <ContainerSection>
                    <Input
                        Text=''
                        label='Password'
                    />
                </ContainerSection>

                <View style={styles.textAgree}>
                    <View>

                        <CheckBox
                            containerStyle={{ backgroundColor: 'transparent', borderColor: 'transparent' }}
                            title={<Text style={{ color: 'black', fontSize: 12, paddingLeft: 5 }}> Agree with our <Text style={{ textDecorationLine: 'underline', color: 'red', fontSize: 12 }}>term & condition</Text>
                            </Text>}
                        // checked={true}
                        // onChange={(checked) => console.log('I am checked', checked)}
                        />
                    </View>
                    <TouchableOpacity style={styles.button}
                    onPress={() => { ToastAndroid.show('Under Development', ToastAndroid.SHORT); this.props.navigation.navigate('CrafterMenu')}}>
                        <Text style={{ textAlign: 'center', color: 'white', fontSize: 15, fontFamily: 'Quicksand-Bold' }}>OK</Text>
                    </TouchableOpacity>
                </View>



            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    pickerTextStyle: {
        fontFamily: 'Quicksand-Bold',
        color: '#5e5e5e',
        fontSize: 14,
        flex: 1,
        marginTop: 10
    },
    button: {
        backgroundColor: 'red',
        borderRadius: 20,
        height: 35,
        width: 180,
        alignSelf: 'center',
        justifyContent: 'center',
        marginTop: 20
    },
    textAgree: {
        paddingTop: 10,
        height: 120
    },


})

export default PengaturanBankPage