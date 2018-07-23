import React, { Component } from 'react';
import { View, Text, ImageBackground, Image, AsyncStorage, TouchableOpacity, ScrollView, StyleSheet, TouchableHighlight, TouchableWithoutFeedback, StatusBar, Modal } from 'react-native'
import { Container, ContainerSection, Button, Input, InputDate } from '../components/common';
// import axios from 'axios';
import { COLOR } from '../shared/config';
import { CheckBox } from 'react-native-elements';

export class InformasiBankPage extends React.Component {

    static navigationOptions = {
        header: null
    }

    constructor(props) {
        super(props);
        this.state = {
            agree: false,
            pathPhotoProfil: null,
            pathPhotoKTP: null,
            pathPhotoBankBook: null

        };
    }

    getPhotoProfile() {
        const options = {
            quality: 1.0,
            maxWidth: 500,
            maxHeight: 500,
            storageOptions: {
                skipBackup: true
            }
        }

        ImagePicker.showImagePicker(options, (response) => {
            console.log('Response = ', response);

            if (response.didCancel) {
                console.log('User cancelled photo picker');
            }
            else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            }
            else if (response.customButton) {
                console.log('User tapped custom button: ', response.customButton);
            }
            else {
                let source = { uri: response.uri };

                // You can also display the image using data:
                // let source = { uri: 'data:image/jpeg;base64,' + response.data };

                this.setState({
                    pathPhotoProfile: source
                });
            }
        });
    }

    getPhotoKTP() {
        const options = {
            quality: 1.0,
            maxWidth: 500,
            maxHeight: 500,
            storageOptions: {
                skipBackup: true
            }
        }

        ImagePicker.showImagePicker(options, (response) => {
            console.log('Response = ', response);

            if (response.didCancel) {
                console.log('User cancelled photo picker');
            }
            else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            }
            else if (response.customButton) {
                console.log('User tapped custom button: ', response.customButton);
            }
            else {
                let source = { uri: response.uri };

                // You can also display the image using data:
                // let source = { uri: 'data:image/jpeg;base64,' + response.data };

                this.setState({
                    pathPhotoKTP: source
                });
            }
        });
    }


    getBankBook() {
        const options = {
            quality: 1.0,
            maxWidth: 500,
            maxHeight: 500,
            storageOptions: {
                skipBackup: true
            }
        }

        ImagePicker.showImagePicker(options, (response) => {
            console.log('Response = ', response);

            if (response.didCancel) {
                console.log('User cancelled photo picker');
            }
            else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            }
            else if (response.customButton) {
                console.log('User tapped custom button: ', response.customButton);
            }
            else {
                let source = { uri: response.uri };

                // You can also display the image using data:
                // let source = { uri: 'data:image/jpeg;base64,' + response.data };

                this.setState({
                    pathPhotoBankBook: source
                });
            }
        });
    }



    checkedAgree = () => {
        this.setState({ agree: !this.state.agree })
    }


    render() {

        const {
            agree,
            getPhotoProfile
        } = this.state

        return (
            <ScrollView
                style={{ flex: 1, backgroundColor: 'white' }}
                keyboardShouldPersistTaps="always"
                ref={ref => this.scrollView = ref}
            >
                <View style={{ flex: 1, height: 110, backgroundColor: 'white' }}>
                    <View style={{ flexDirection: 'row', height: 50, width: '100%', alignItems: 'center', flex: 1, paddingLeft: 40 }}>
                        <Image style={{ height: 35, width: 35, borderRadius: 0, }}
                            source={require('./../assets/images/ic_wallet.png')}
                        />
                        <Text style={{ fontSize: 15, color: 'black', fontFamily: 'Quicksand-Regular', fontWeight: 'bold', paddingLeft: 10, alignItems: 'center' }}>
                            Total Apresiasi Design Anda
                        </Text>
                    </View>

                    <Text style={{ fontSize: 27, margintop: 20, marginBottom: 20, textAlign: 'center', color: 'black', fontFamily: 'Quicksand-Regular', fontWeight: 'bold' }}>
                        Rp. 120.000
                    </Text>
                </View>

                <View style={{ flex: 1, height: 400, marginRight: 10, marginLeft: 10, }}>

                    <View style={{ flex: 1, flexDirection: 'row' }}>

                        <View style={{ flex: 1 }}>
                            <Text style={{ paddingLeft: 5, fontSize: 15, fontFamily: 'Quicksand-Regular', fontWeight: 'bold', color: 'black' }}>Nama Depan</Text>

                            <ContainerSection>
                                <Input
                                    placeholder='Gal '
                                    editable={false}

                                />
                            </ContainerSection>

                        </View>

                        <View style={{ flex: 1 }}>
                            <Text style={{ paddingLeft: 5, fontSize: 15, fontFamily: 'Quicksand-Regular', fontWeight: 'bold', color: 'black' }}>Nama Belakang</Text>

                            <ContainerSection>
                                <Input
                                    placeholder='Gadot'
                                    editable={false}
                                />
                            </ContainerSection>

                        </View>

                    </View>

                    <View style={{ flex: 1, }}>
                        <Text style={{ paddingLeft: 5, fontSize: 15, fontFamily: 'Quicksand-Regular', fontWeight: 'bold', color: 'black' }}>Nomor Rekening</Text>

                        <ContainerSection>
                            <Input
                                placeholder='10942387'
                                editable={false}
                            />
                        </ContainerSection>

                    </View>

                    <View style={{ flex: 1, }}>
                        <Text style={{ paddingLeft: 5, fontSize: 15, fontFamily: 'Quicksand-Regular', fontWeight: 'bold', color: 'black' }}>Nama Bank</Text>

                        <ContainerSection>
                            <Input
                                placeholder='Mandiri'
                                editable={false}
                            />
                        </ContainerSection>

                    </View>

                    <View style={{ flex: 1, }}>
                        <Text style={{ paddingLeft: 5, fontSize: 15, fontFamily: 'Quicksand-Regular', fontWeight: 'bold', color: 'black' }}>Cabang</Text>

                        <ContainerSection>
                            <Input
                                placeholder='Jakarta'
                                editable={false}
                            />
                        </ContainerSection>

                    </View>
                </View>

                <View style={{ flex: 1, height: 600, marginRight: 10, marginLeft: 10, }}>

                    <View style={{ flex: 1, }}>
                        <Text style={{ paddingLeft: 5, fontSize: 15, fontFamily: 'Quicksand-Regular', fontWeight: 'bold', color: 'black' }}>Foto Profil Asli</Text>
                        <View style={{ flex: 1, justifyContent: 'center', alignContent: 'center' }}>
                            {/* <TouchableWithoutFeedback
                                onPress={this.getPhotoProfile.bind(this)}> */}
                            <View>
                                {
                                    this.state.pathPhotoProfile == null ?

                                        <Image
                                            style={{ height: 165, width: 165, alignSelf: 'center' }}
                                            source={require('./../assets/images/profile.png')}
                                        />
                                        :
                                        <Image
                                            style={{ height: 165, width: 165, alignSelf: 'center' }}
                                            resizeMode='cover'
                                            source={this.state.pathPhotoProfile}
                                        />
                                }
                            </View>
                            {/* </TouchableWithoutFeedback> */}
                        </View>

                    </View>

                    <View style={{ flex: 1, }}>
                        <Text style={{ paddingLeft: 5, fontSize: 15, fontFamily: 'Quicksand-Regular', fontWeight: 'bold', color: 'black' }}>KTP</Text>
                        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', alignContent: 'center' }}>
                            {/* <TouchableWithoutFeedback
                                onPress={this.getPhotoKTP.bind(this)}> */}
                            {
                                this.state.pathPhotoKTP == null ?

                                    <Image
                                        style={{ height: 160, width: '100%', alignSelf: 'center' }}
                                        source={require('./../assets/images/ktp.jpg')}
                                        resizeMode='stretch'
                                    />
                                    :
                                    <Image
                                        style={{ height: 160, width: '100%', alignSelf: 'center' }}
                                        resizeMode='cover'
                                        source={this.state.pathPhotoKTP}
                                    />
                            }
                            {/* </TouchableWithoutFeedback> */}
                        </View>

                    </View>

                    <View style={{ flex: 1, }}>
                        <Text style={{ paddingLeft: 5, fontSize: 15, fontFamily: 'Quicksand-Regular', fontWeight: 'bold', color: 'black' }}>Foto Buku Rekening</Text>
                        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', alignContent: 'center', }}>
                            {/* <TouchableWithoutFeedback
                                onPress={this.getBankBook.bind(this)}
                            > */}
                            {
                                this.state.pathPhotoBankBook == null ?

                                    <Image
                                        style={{ height: 160, width: '100%', alignSelf: 'center' }}
                                        source={require('./../assets/images/rekening.jpg')}
                                        resizeMode='stretch'
                                    />
                                    :
                                    <Image
                                        style={{ height: 160, width: '100%', alignSelf: 'center' }}
                                        resizeMode='cover'
                                        source={this.state.pathPhotoBankBook}
                                    />
                            }

                            {/* </TouchableWithoutFeedback> */}
                        </View>

                    </View>
                </View>

                {/* <View style={{ flex: 1, height: 80, marginRight: 10, marginLeft: 10 }}>
                    <View style={{ flex: 1, }}>
                        <Text style={{ paddingLeft: 5, fontSize: 15, fontFamily: 'Quicksand-Regular', fontWeight: 'bold', color: 'black' }}>Kode Verifikasi</Text>
                        <ContainerSection>
                            <Input
                                placeholder='silakan masukan kode verifikasi'

                            />
                        </ContainerSection>
                    </View>
                </View> */}

                {/* <View style={{ flex: 1, height: 80, marginRight: 10, marginLeft: 10, }}>
                    <TouchableOpacity style={{ flex: 1 }}>
                        <View style={{ flex: 1, height: 10, backgroundColor: 'black', justifyContent: 'center', marginTop: 10, marginBottom: 20, borderRadius: 50 }}>
                            <Text style={{ textAlign: 'center', fontSize: 15, fontFamily: 'Quicksand-Regular', fontWeight: 'bold', color: 'white' }}>Kirim Kode Verifikasi</Text>
                        </View>
                    </TouchableOpacity>
                </View> */}

                <View style={{ flex: 1, height: 80, marginRight: 10, marginLeft: 10 }}>
                    <View style={{ flex: 1, }}>
                        <Text style={{ paddingLeft: 5, fontSize: 15, fontFamily: 'Quicksand-Regular', fontWeight: 'bold', color: 'black' }}>Password</Text>

                        <ContainerSection>
                            <Input
                                placeholder='**********'
                                editable={false}
                            />
                        </ContainerSection>


                    </View>
                </View>


                {/* <View style={{ flex: 1, height: 50, marginRight: 10, marginLeft: 15, justifyContent: 'center' }}>

                    <CheckBox
                        containerStyle={{ backgroundColor: 'transparent', borderColor: 'transparent' }}
                        title={<Text style={{ color: 'black', fontSize: 13, paddingLeft: 5, color: 'black' }}> Setuju dengan <Text style={{ textDecorationLine: 'underline', color: 'red', fontSize: 13 }}>Syarat & Ketentuan</Text>
                        </Text>}
                        onPress={() => this.checkedAgree()}
                        checked={agree}
                    />
                </View> */}

                {/* <View style={{ flex: 1, height: 80, marginRight: 5, marginLeft: 10, }}>
                    <TouchableOpacity style={{ flex: 1 }}
                        onPress={() => this.props.navigation.navigate('CrafterMenu')}
                    >
                        <View style={{ flex: 1, height: 10, backgroundColor: 'red', justifyContent: 'center', marginTop: 10, marginBottom: 20, borderRadius: 50 }}>
                            <Text style={{ textAlign: 'center', fontSize: 15, fontFamily: 'Quicksand-Regular', fontWeight: 'bold', color: 'white' }}>OK</Text>
                        </View>
                    </TouchableOpacity>
                </View> */}


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