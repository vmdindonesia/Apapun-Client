import React, { Component } from 'react';
import { View, Text, AsyncStorage, Image, TouchableOpacity, ScrollView, StyleSheet, TouchableHighlight, TouchableWithoutFeedback, StatusBar, Modal } from 'react-native'
import { Container, ContainerSection, Button, Input, InputDate } from '../components/common';
import axios from 'axios';
import { IPSERVER } from '../shared/config';
import numeral from 'numeral';
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
            pathPhotoBankBook: null,
            dataAkun: '',
            dataHighLight: ''
        };
    }

    componentDidMount() {
        // console.log(this.props.navi.state.params.crafter_Id, 'Props Bank Inform');
        AsyncStorage.getItem('VMDDEVELOPER').then((value) => {
            console.log(JSON.parse(value), 'Json Parse');
            const dataLogin = JSON.parse(value);
            if (value) {
                axios.post(`${IPSERVER}/ApapunUsersBanks/getUserBankById`, {
                    crafterId: this.props.navi.state.params.crafter_Id
                })
                    .then(response => {
                        this.setState({ dataAkun: response.data }, () => {
                            console.log(this.state.dataAkun, 'Data Bank');
                            axios.post(`${IPSERVER}/ApapunUsers/getHighlightUser`, {
                                userId: dataLogin.userId
                            })
                                .then(response => {
                                    this.setState({ dataHighLight: response.data }, () => {
                                        console.log(this.state.dataHighLight, 'Data High Light');
                                    });
                                }).catch(error => {
                                    console.log(error, 'Error Get Data High Light');
                                    return ToastAndroid.show('Connection Time Out, Server Maybe Down', ToastAndroid.SHORT);
                                });
                        });
                    }).catch(error => {
                        console.log(error, 'Error Get Data Bank');
                        return ToastAndroid.show('Connection Time Out, Server Maybe Down', ToastAndroid.SHORT);
                    });
            }
        });
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
                style={{ flex: 1, backgroundColor: '#eaeaea' }}
                showsVerticalScrollIndicator={false}
                keyboardShouldPersistTaps="always"
                ref={ref => this.scrollView = ref}
            >
                <View style={{ flex: 1, height: 110, backgroundColor: 'white', }}>
                    <View style={{ flexDirection: 'row', height: 50, width: '100%', alignItems: 'center', flex: 1, paddingLeft: 40 }}>
                        <Image style={{ height: 35, width: 35, borderRadius: 0, }}
                            source={require('./../assets/images/ic_wallet.png')}
                        />
                        <Text style={{ fontSize: 15, color: 'black', fontFamily: 'Quicksand-Bold', paddingLeft: 10, alignItems: 'center' }}>
                            Total Apresiasi Desain Anda
                        </Text>
                    </View>

                    <Text style={{ fontSize: 27, marginBottom: 20, textAlign: 'center', color: 'black', fontFamily: 'Quicksand-Bold' }}>
                        Rp. {this.state.dataHighLight.length === 0 ? '-' : numeral(this.state.dataHighLight[0].user_total_apresiasi).format('0,0')}
                    </Text>
                </View>

                <View style={{ flex: 1, height: 235, marginRight: 10, marginLeft: 10, marginTop: 10 }}>

                    <View style={{ flex: 1, flexDirection: 'row' }}>

                        <View style={{ flex: 1 }}>
                            <Text style={{ paddingLeft: 5, fontSize: 15, fontFamily: 'Quicksand-Bold', color: 'black', flexDirection: 'row', justifyContent: 'center' }}>Nama Depan</Text>

                            <View style={{ height: 40, width: '92.5%', backgroundColor: 'white', marginTop: 5, marginLeft: 5, justifyContent: 'center' }}>
                                <Text style={{ fontFamily: 'Quicksand-Regular', color: 'black', fontSize: 15, paddingLeft: 5 }}>{this.state.dataAkun.nama_depan}</Text>
                            </View>

                        </View>

                        <View style={{ flex: 1 }}>
                            <Text style={{ paddingLeft: 5, fontSize: 15, fontFamily: 'Quicksand-Bold', color: 'black' }}>Nama Belakang</Text>

                            <View style={{ height: 40, width: '92.5%', backgroundColor: 'white', marginTop: 5, marginLeft: 5, justifyContent: 'center' }}>
                                <Text style={{ fontFamily: 'Quicksand-Regular', color: 'black', fontSize: 15, paddingLeft: 5 }}>{this.state.dataAkun.nama_belakang}</Text>
                            </View>

                        </View>

                    </View>

                    <View style={{ flex: 1, }}>
                        <Text style={{ paddingLeft: 5, fontSize: 15, fontFamily: 'Quicksand-Bold', color: 'black' }}>Nomor Rekening</Text>

                        <View style={{ height: 40, width: '96%', backgroundColor: 'white', marginTop: 5, marginLeft: 5, justifyContent: 'center' }}>
                            <Text style={{ fontFamily: 'Quicksand-Regular', color: 'black', fontSize: 15, paddingLeft: 5 }}>{this.state.dataAkun.accountHolderNumber === undefined ? '-' : this.state.dataAkun.accountHolderNumber}</Text>
                        </View>

                    </View>

                    <View style={{ flex: 1, flexDirection: 'row' }}>

                        <View style={{ flex: 1 }}>
                            <Text style={{ paddingLeft: 5, fontSize: 15, fontFamily: 'Quicksand-Bold', color: 'black', flexDirection: 'row', justifyContent: 'center' }}>Nama Bank</Text>

                            <View style={{ height: 40, width: '92.5%', backgroundColor: 'white', marginTop: 5, marginLeft: 5, justifyContent: 'center' }}>
                                <Text style={{ fontFamily: 'Quicksand-Regular', color: 'black', fontSize: 15, paddingLeft: 5 }}>{this.state.dataAkun.bankName === undefined ? '-' : this.state.dataAkun.bankName}</Text>
                            </View>

                        </View>

                        <View style={{ flex: 1 }}>
                            <Text style={{ paddingLeft: 5, fontSize: 15, fontFamily: 'Quicksand-Bold', color: 'black' }}>Cabang</Text>

                            <View style={{ height: 40, width: '92.5%', backgroundColor: 'white', marginTop: 5, marginLeft: 5, justifyContent: 'center' }}>
                                <Text style={{ fontFamily: 'Quicksand-Regular', color: 'black', fontSize: 15, paddingLeft: 5 }}>{this.state.dataAkun.bankBranch === undefined ? '-' : this.state.dataAkun.bankBranch}</Text>
                            </View>

                        </View>

                    </View>
                </View>

                <View style={{ flex: 1, height: 600, marginRight: 10, marginLeft: 10, }}>

                    <View style={{ flex: 1, }}>
                        <Text style={{ paddingLeft: 5, fontSize: 15, fontFamily: 'Quicksand-Bold', color: 'black' }}>Foto Profil Asli</Text>
                        <View style={{ flex: 1, justifyContent: 'center', alignContent: 'center' }}>
                            {/* <TouchableWithoutFeedback
                                onPress={this.getPhotoProfile.bind(this)}> */}
                            <View>
                                {
                                    this.state.pathPhotoProfile == null ?

                                        <Image
                                            style={{ height: 165, width: 165, alignSelf: 'center' }}
                                            source={{ uri: `${IPSERVER}/ApapunStorageImages/images/download/${this.state.dataAkun.fotoUrl === undefined ? 'https://www.coastalsocks.com.ng/wp-content/uploads/2014/04/default-avatar.png' : this.state.dataAkun.fotoUrl}` }}
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
                        <Text style={{ paddingLeft: 5, fontSize: 15, fontFamily: 'Quicksand-Bold', color: 'black' }}>KTP</Text>
                        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', alignContent: 'center' }}>
                            {/* <TouchableWithoutFeedback
                                onPress={this.getPhotoKTP.bind(this)}> */}
                            {
                                this.state.pathPhotoKTP == null ?

                                    <Image
                                        style={{ height: 160, width: '100%', alignSelf: 'center' }}
                                        source={{ uri: `${IPSERVER}/ApapunStorageImages/images/download/${this.state.dataAkun.fotoUrl === undefined ? 'https://www.coastalsocks.com.ng/wp-content/uploads/2014/04/default-avatar.png' : this.state.dataAkun.ktpUrl}` }}
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
                        <Text style={{ paddingLeft: 5, fontSize: 15, fontFamily: 'Quicksand-Bold', color: 'black' }}>Foto Buku Rekening</Text>
                        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', alignContent: 'center', }}>
                            {/* <TouchableWithoutFeedback
                                onPress={this.getBankBook.bind(this)}
                            > */}
                            {
                                this.state.pathPhotoBankBook == null ?

                                    <Image
                                        style={{ height: 160, width: '100%', alignSelf: 'center' }}
                                        source={{ uri: `${IPSERVER}/ApapunStorageImages/images/download/${this.state.dataAkun.fotoUrl === undefined ? 'https://www.coastalsocks.com.ng/wp-content/uploads/2014/04/default-avatar.png' : this.state.dataAkun.rekeningUrl}` }}
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