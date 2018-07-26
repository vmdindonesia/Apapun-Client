import React, { Component } from 'react';
import { View, Text, ImageBackground, Image, AsyncStorage, TouchableOpacity, ScrollView, StyleSheet, TouchableHighlight, TouchableWithoutFeedback, StatusBar, Modal } from 'react-native'
import { Container, ContainerSection, Button, Input, InputDate } from '../components/common';
// import axios from 'axios';
import { COLOR } from '../shared/config';
import { CheckBox } from 'react-native-elements';
import Icon from 'react-native-vector-icons/Ionicons';
import ImagePicker from 'react-native-image-picker';


export class PengaturanBankPage extends React.Component {

    static navigationOptions = ({ navigation }) => ({
        headerLeft:
            <TouchableOpacity
                onPress={() => { navigation.goBack(); console.log(navigation.goBack(), 'Props Order') }}
            >
                <Icon size={30} style={{ marginLeft: 25, color: '#EF1C25' }} name='ios-arrow-back' />
            </TouchableOpacity>,
        headerTitle: 'Pengaturan Akun Bank'
    });

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

    checkedAgreement = () => {
        this.setState({ agree: !this.state.agree });
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
                style={{ flex: 1, backgroundColor: '#eaeaea' }}
                keyboardShouldPersistTaps="always"
                ref={ref => this.scrollView = ref}
            >

                <View style={{ flex: 1, height: 400, marginRight: 10, marginLeft: 10, }}>


                    <View style={{ flex: 1, justifyContent: 'center', alignContent: 'center' }}>
                        <Text style={{ paddingLeft: 5, fontSize: 15, fontFamily: 'Quicksand-Regular', color: 'gray', }}>Nama akun APAPUN anda  : <Text style={{ color: 'gray', fontSize: 15, fontFamily: 'Quicksand-Regular', fontWeight: 'bold' }}>Gal Gadot </Text> </Text>
                    </View>

                    <View style={{ flex: 1, flexDirection: 'row' }}>

                        <View style={{ flex: 1 }}>
                            <Text style={{ paddingLeft: 5, fontSize: 15, fontFamily: 'Quicksand-Regular', fontWeight: 'bold', color: 'black' }}>Nama Depan</Text>

                            <ContainerSection>
                                <Input
                                    placeholder='silakan isi nama depan anda'

                                />
                            </ContainerSection>

                        </View>

                        <View style={{ flex: 1 }}>
                            <Text style={{ paddingLeft: 5, fontSize: 15, fontFamily: 'Quicksand-Regular', fontWeight: 'bold', color: 'black' }}>Nama Belakang</Text>

                            <ContainerSection>
                                <Input
                                    placeholder='silakan isi nama belakang anda'

                                />
                            </ContainerSection>

                        </View>

                    </View>

                    <View style={{ flex: 1, }}>
                        <Text style={{ paddingLeft: 5, fontSize: 15, fontFamily: 'Quicksand-Regular', fontWeight: 'bold', color: 'black' }}>Nomor Rekening</Text>

                        <ContainerSection>
                            <Input
                                placeholder='silakan isi no rekening anda'

                            />
                        </ContainerSection>

                    </View>

                    <View style={{ flex: 1, }}>
                        <Text style={{ paddingLeft: 5, fontSize: 15, fontFamily: 'Quicksand-Regular', fontWeight: 'bold', color: 'black' }}>Nama Bank</Text>

                        <ContainerSection>
                            <Input
                                placeholder='silakan isi nama bank anda'

                            />
                        </ContainerSection>

                    </View>

                    <View style={{ flex: 1, }}>
                        <Text style={{ paddingLeft: 5, fontSize: 15, fontFamily: 'Quicksand-Regular', fontWeight: 'bold', color: 'black' }}>Cabang</Text>

                        <ContainerSection>
                            <Input
                                placeholder='silakan isi cabang bank'

                            />
                        </ContainerSection>

                    </View>
                </View>

                <View style={{ flex: 1, height: 600, marginRight: 10, marginLeft: 10, }}>

                    <View style={{ flex: 1, }}>
                        <Text style={{ paddingLeft: 5, fontSize: 15, fontFamily: 'Quicksand-Regular', fontWeight: 'bold', color: 'black' }}>Foto Profil Asli</Text>
                        <View style={{ flex: 1, justifyContent: 'center', alignContent: 'center' }}>
                            <TouchableWithoutFeedback
                                onPress={this.getPhotoProfile.bind(this)}>
                                <View>
                                    {
                                        this.state.pathPhotoProfile == null ?

                                            <Image
                                                style={{ height: 165, width: 165, alignSelf: 'center' }}
                                                source={require('./../assets/images/Upload-Photo.png')}
                                            />
                                            :
                                            <Image
                                                style={{ height: 165, width: 165, alignSelf: 'center' }}
                                                resizeMode='cover'
                                                source={this.state.pathPhotoProfile}
                                            />
                                    }
                                </View>
                            </TouchableWithoutFeedback>
                        </View>

                    </View>

                    <View style={{ flex: 1, }}>
                        <Text style={{ paddingLeft: 5, fontSize: 15, fontFamily: 'Quicksand-Regular', fontWeight: 'bold', color: 'black' }}>KTP</Text>
                        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', alignContent: 'center' }}>
                            <TouchableWithoutFeedback
                                onPress={this.getPhotoKTP.bind(this)}>
                                {
                                    this.state.pathPhotoKTP == null ?

                                        <Image
                                            style={{ height: 160, width: '100%', alignSelf: 'center' }}
                                            source={require('./../assets/images/Upload-Photo.png')}
                                            resizeMode='stretch'
                                        />
                                        :
                                        <Image
                                            style={{ height: 160, width: '100%', alignSelf: 'center' }}
                                            resizeMode='cover'
                                            source={this.state.pathPhotoKTP}
                                        />
                                }
                            </TouchableWithoutFeedback>
                        </View>

                    </View>

                    <View style={{ flex: 1, }}>
                        <Text style={{ paddingLeft: 5, fontSize: 15, fontFamily: 'Quicksand-Regular', fontWeight: 'bold', color: 'black' }}>Foto Buku Rekening</Text>
                        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', alignContent: 'center', }}>
                            <TouchableWithoutFeedback
                                onPress={this.getBankBook.bind(this)}
                            >
                                {
                                    this.state.pathPhotoBankBook == null ?

                                        <Image
                                            style={{ height: 160, width: '100%', alignSelf: 'center' }}
                                            source={require('./../assets/images/Upload-Photo.png')}
                                            resizeMode='stretch'
                                        />
                                        :
                                        <Image
                                            style={{ height: 160, width: '100%', alignSelf: 'center' }}
                                            resizeMode='cover'
                                            source={this.state.pathPhotoBankBook}
                                        />
                                }

                            </TouchableWithoutFeedback>
                        </View>

                    </View>
                </View>

                <View style={{ flex: 1, height: 80, marginRight: 10, marginLeft: 10 }}>
                    <View style={{ flex: 1, }}>
                        <Text style={{ paddingLeft: 5, fontSize: 15, fontFamily: 'Quicksand-Regular', fontWeight: 'bold', color: 'black' }}>Kode Verifikasi</Text>
                        <ContainerSection>
                            <Input
                                placeholder='silakan masukan kode verifikasi'

                            />
                        </ContainerSection>
                    </View>
                </View>

                <View style={{ flex: 1, height: 80, marginRight: 10, marginLeft: 10, }}>
                    <TouchableOpacity style={{ flex: 1 }}>
                        <View style={{ flex: 1, height: 10, backgroundColor: 'black', justifyContent: 'center', marginTop: 10, marginBottom: 20, borderRadius: 50 }}>
                            <Text style={{ textAlign: 'center', fontSize: 15, fontFamily: 'Quicksand-Regular', fontWeight: 'bold', color: 'white' }}>Kirim Kode Verifikasi</Text>
                        </View>
                    </TouchableOpacity>
                </View>

                <View style={{ flex: 1, height: 80, marginRight: 10, marginLeft: 10 }}>
                    <View style={{ flex: 1, }}>
                        <Text style={{ paddingLeft: 5, fontSize: 15, fontFamily: 'Quicksand-Regular', fontWeight: 'bold', color: 'black' }}>Password</Text>

                        <ContainerSection>
                            <Input
                                placeholder='silakan isi password anda'

                            />
                        </ContainerSection>


                    </View>
                </View>


                <View style={{ flex: 1, height: 50, marginRight: 10, marginLeft: 15, justifyContent: 'center' }}>

                    <CheckBox
                        containerStyle={{ backgroundColor: 'transparent', borderColor: 'transparent' }}
                        title={<Text style={{ color: 'black', fontSize: 13, paddingLeft: 5, color: 'black' }}> Setuju dengan <Text onPress={() => this.props.navigation.navigate('TermsAndAgreement')} style={{ textDecorationLine: 'underline', color: 'red', fontSize: 13 }}>Syarat & Ketentuan</Text>
                        </Text>}
                        checked={agree}
                        onPress={() => this.checkedAgreement()}
                    />
                </View>

                <View style={{ flex: 1, height: 80, marginRight: 5, marginLeft: 10, }}>
                    <TouchableOpacity style={{ flex: 1 }}
                        onPress={() => this.props.navigation.navigate('CrafterMenu')}
                    >
                        <View style={{ flex: 1, height: 10, backgroundColor: 'red', justifyContent: 'center', marginTop: 10, marginBottom: 20, borderRadius: 50 }}>
                            <Text style={{ textAlign: 'center', fontSize: 15, fontFamily: 'Quicksand-Regular', fontWeight: 'bold', color: 'white' }}>OK</Text>
                        </View>
                    </TouchableOpacity>
                </View>


            </ScrollView >
        )
    }
}

const styles = StyleSheet.create({


})

export default PengaturanBankPage