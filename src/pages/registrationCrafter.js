import React, { Component } from 'react';
import { View, Text, ImageBackground, Image, AsyncStorage, TouchableOpacity, ScrollView, StyleSheet, TouchableHighlight, TouchableWithoutFeedback, Modal, ToastAndroid } from 'react-native'
import { Container, ContainerSection, Spinner, Input } from '../components/common';
import axios from 'axios';
import { COLOR } from '../shared/config';
import { NavigationActions, StackActions } from 'react-navigation';
import { IPSERVER } from './../shared/config';
import { CheckBox } from 'react-native-elements'
import ImagePicker from 'react-native-image-picker';
import Icon from 'react-native-vector-icons/Ionicons';
import uuid from 'react-native-uuid';

export class RegistrationCrafterPage extends React.Component {

    static navigationOptions = ({ navigation }) => ({
        headerLeft:
            <TouchableOpacity
                onPress={() => { navigation.goBack(); console.log(navigation.goBack(), 'Props Order') }}
            >
                <Icon size={30} style={{ marginLeft: 25, color: '#EF1C25' }} name='ios-arrow-back' />
            </TouchableOpacity>,
        headerTitle: 'Register Crafter'
    });

    constructor(props) {
        super(props);
        this.state = {
            idUser: '',
            profileImage: '',
            imageUri: '',
            craftername: '',
            selfDeliveryService: '',
            categoryId: [],
            loading: false,

            fashion: true,
            lifestyle: false,
            furniture: false,
            beauty: false,
            sendserviceone: true,
            sendservicetwo: false,
            agree: false,
        };
    }

    componentDidMount() {
        console.log('Registration Start');
        const category = this.state.categoryId;
        category[this.state.categoryId.length] = '1';
        this.setState({ categoryId: category }, () => {
            console.log(this.state.categoryId, 'Data Check Category');
            this.setState({ selfDeliveryService: 1 }, () => {
                console.log(this.state.selfDeliveryService, 'Delivery Owner');
                AsyncStorage.getItem('VMDDEVELOPER').then((value) => {
                    console.log(JSON.parse(value), 'Json Parse');
                    const dataLogin = JSON.parse(value);
                    if (value) {
                        this.setState({ idUser: dataLogin.userId }, () => {
                            console.log(this.state.idUser, 'ID USER');
                        })
                    }
                });
            })
        });
    }

    checkBoxFashion = () => {
        this.setState({ fashion: !this.state.fashion }, () => {
            if (this.state.fashion === true) {
                const category = this.state.categoryId;
                category[this.state.categoryId.length] = '1';
                this.setState({ categoryId: category }, () => {
                    console.log(this.state.categoryId, 'Data Check Category');
                });
            } else {
                this.setState({ categoryId: this.state.categoryId.filter(a => a !== '1') }, () => {
                    console.log(this.state.categoryId, 'Data Check Category');
                })
            }
        });
    }

    checkBoxLifestyle = () => {
        this.setState({ lifestyle: !this.state.lifestyle }, () => {
            if (this.state.lifestyle === true) {
                const category = this.state.categoryId;
                category[this.state.categoryId.length] = '2';
                this.setState({ categoryId: category }, () => {
                    console.log(this.state.categoryId, 'Data Check Category');
                });
            } else {
                this.setState({ categoryId: this.state.categoryId.filter(a => a !== '2') }, () => {
                    console.log(this.state.categoryId, 'Data Check Category');
                })
            }
        });
    }

    checkBoxFurniture = () => {
        this.setState({ furniture: !this.state.furniture }, () => {
            if (this.state.furniture === true) {
                const category = this.state.categoryId;
                category[this.state.categoryId.length] = '3';
                this.setState({ categoryId: category }, () => {
                    console.log(this.state.categoryId, 'Data Check Category');
                });
            } else {
                this.setState({ categoryId: this.state.categoryId.filter(a => a !== '3') }, () => {
                    console.log(this.state.categoryId, 'Data Check Category');
                })
            }
        });
    }

    checkBoxBeauty = () => {
        this.setState({ beauty: !this.state.beauty }, () => {
            if (this.state.beauty === true) {
                const category = this.state.categoryId;
                category[this.state.categoryId.length] = '4';
                this.setState({ categoryId: category }, () => {
                    console.log(this.state.categoryId, 'Data Check Category');
                });
            } else {
                this.setState({ categoryId: this.state.categoryId.filter(a => a !== '4') }, () => {
                    console.log(this.state.categoryId, 'Data Check Category');
                })
            }
        });
    }

    checkedIHave = () => {
        this.setState({ sendserviceone: true, sendservicetwo: false }, () => {
            if (this.state.sendserviceone === true) {
                this.setState({ selfDeliveryService: 1 }, () => {
                    console.log(this.state.selfDeliveryService, 'Delivery Owner');
                })
            }
        });
    }

    checkedNoIdontHave = () => {
        this.setState({ sendservicetwo: true, sendserviceone: false }, () => {
            if (this.state.sendservicetwo === true) {
                this.setState({ selfDeliveryService: 0 }, () => {
                    console.log(this.state.selfDeliveryService, 'Delivery Owner');
                })
            }
        });
    }

    checkedAgreement = () => {
        this.setState({ agree: !this.state.agree });
    }

    selectPhotoRegister() {
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
                    imageUri: source
                });
            }
        });
    }

    onChangeInput = (name, v) => {
        this.setState({ [name]: v }, () => {
            console.log(this.state[name], 'Birth');
        });
    }

    checkValidation() {
        console.log(this.state, 'State');
        const {
            imageUri,
            craftername,
            categoryId,
            selfDeliveryService,
            aggree
        } = this.state;

        switch (imageUri) {
            case '':
                return ToastAndroid.show('Foto Tidak Boleh Kosong', ToastAndroid.SHORT);
            default:
                switch (craftername) {
                    case '':
                        return ToastAndroid.show('Nama Crafter Tidak Boleh Kosong', ToastAndroid.SHORT);
                    default:
                        const lengtCategory = categoryId.length;
                        switch (lengtCategory) {
                            case 0:
                                return ToastAndroid.show('Bidang Kemampuan Tidak Boleh Kosong', ToastAndroid.SHORT);
                            default:
                                switch (selfDeliveryService) {
                                    case '':
                                        return ToastAndroid.show('Jasa Pengirman Tidak Boleh Kosong', ToastAndroid.SHORT);
                                    default:
                                        switch (aggree) {
                                            case false:
                                                return ToastAndroid.show('Anda harus menyetujui Syarat & Ketentuan Berlaku', ToastAndroid.SHORT);
                                            default:
                                                this.setState({ loading: true });
                                                this.prosesRegisterCrafter();
                                        }
                                }
                        }
                }
        }
    }

    prosesRegisterCrafter() {
        const {
            idUser,
            imageUri,
            craftername,
            categoryId,
            selfDeliveryService
        } = this.state;
        console.log(this.state, 'State');
        this.setState({ loading: false });

        const nameFile = 'IMG_' + uuid.v1();
        var body = new FormData();
        var photo = {
            uri: imageUri.uri,
            type: 'image/jpeg',
            name: nameFile.toUpperCase() + '.jpg'
        };
        body.append('photo', photo);
        var request = new XMLHttpRequest();
        request.onreadystatechange = (e) => {
            if (request.readyState !== 4) {
                return;
            }

            if (request.status === 200) {
                console.log('success', request.responseText);
            } else {
                console.warn('error', request);
            }
        };

        const profileUrlFirst = 'IMG_' + uuid.v1();
        const profileImage = profileUrlFirst.toUpperCase() + '.jpg';
        console.log(profileImage, 'Format Name Image');

        console.log(this.state, 'STATE REGISTER CRAFTER', profileImage);
        axios.post(`${IPSERVER}/ApapunCrafters/CrafterRegister`, {
            idUser,
            profileImage,
            craftername,
            categoryId,
            selfDeliveryService,
        }).then(response => {
            console.log(response);
            request.open('POST', `${IPSERVER}/ApapunStorages/imagesUpload`);
            request.send(body);
            this.setState({ loading: false }, () => {
                const resetAction = StackActions.reset({
                    index: 1,
                    actions: [
                        NavigationActions.navigate({ routeName: 'MenuCrafter' }),
                        NavigationActions.navigate({ routeName: 'pengaturanBank', params: { Namecrafter: this.state.craftername, idUser: this.state.idUser } }),
                    ],
                });
                this.props.navigation.dispatch(resetAction);
            });
            ToastAndroid.show('Sukses Registrasi, Silahkan Login', ToastAndroid.SHORT);
        }).catch(error => {
            console.log(error, 'Error Upload Foto');
            this.setState({ loading: false });
        });
    }

    render() {

        const {
            imageUri,
            craftername,
            loading,

            fashion,
            lifestyle,
            furniture,
            beauty,
            sendserviceone,
            sendservicetwo,
            agree
        } = this.state

        return (
            <ImageBackground
                style={{ width: '100%', height: '100%', backgroundColor: '#e8e8e8' }}
            >
                <ScrollView>
                    <View style={styles.containerImage}>
                        <TouchableWithoutFeedback onPress={this.selectPhotoRegister.bind(this)}>
                            <View>
                                {imageUri === '' ?
                                    <Image
                                        style={styles.containerUpload}
                                        source={require('./../assets/images/icon_profile.png')}
                                    />
                                    :
                                    <Image
                                        style={styles.containerUpload}
                                        resizeMode='cover'
                                        source={imageUri} />
                                }
                                <Image
                                    style={styles.iconCamera}
                                    source={require('./../assets/images/Icon_camera.png')}
                                />
                            </View>
                        </TouchableWithoutFeedback>
                    </View>

                    <View style={styles.containerForm}>
                        <View style={styles.formPosition}>
                            <View style={{ paddingTop: 30, height: 100 }}>
                                <View >
                                    <Text style={styles.textStyle}>Nama sebagi Crafter</Text>
                                </View>
                                <View>
                                    <ContainerSection>
                                        <Input
                                            value={craftername}
                                            onChangeText={v => this.onChangeInput('craftername', v)}
                                            placeholder='silakan input nama anda sebagai crafter'
                                        />
                                    </ContainerSection>
                                </View>
                            </View>

                            <View style={styles.BoxAblity}>
                                <View style={{ marginBottom: 5 }}>
                                    <Text style={styles.textStyle}>Bidang Kemampuan</Text>
                                </View>
                                <View style={styles.containerCheckBoxAbility}>
                                    <View style={styles.checkBoxAbility}>
                                        <CheckBox
                                            containerStyle={{ backgroundColor: 'transparent', borderColor: 'transparent' }}
                                            title='Fashion'
                                            checked={fashion}
                                            onPress={() => this.checkBoxFashion()}
                                        />
                                    </View>
                                </View>
                                <View style={styles.containerCheckBoxAbility}>
                                    <View style={styles.checkBoxAbility}>
                                        <CheckBox
                                            containerStyle={{ backgroundColor: 'transparent', borderColor: 'transparent' }}
                                            title='Lifestyle'
                                            checked={lifestyle}
                                            onPress={() => this.checkBoxLifestyle()}
                                        />
                                    </View>
                                </View>
                                <View style={styles.containerCheckBoxAbility}>
                                    <View style={styles.checkBoxAbility}>
                                        <CheckBox
                                            containerStyle={{ backgroundColor: 'transparent', borderColor: 'transparent' }}
                                            title='Furniture'
                                            checked={furniture}
                                            onPress={() => this.checkBoxFurniture()}
                                        />

                                    </View>
                                </View>
                                <View style={styles.containerCheckBoxAbility}>
                                    <View style={styles.checkBoxAbility}>
                                        <CheckBox
                                            containerStyle={{ backgroundColor: 'transparent', borderColor: 'transparent' }}
                                            title='Beauty'
                                            checked={beauty}
                                            onPress={() => this.checkBoxBeauty()}
                                        />
                                    </View>
                                </View>

                            </View>

                            <View style={styles.textBox}>
                                <View >
                                    <Text style={styles.textStyle}>Jasa Pengiriman Pribadi</Text>
                                </View>
                                <View style={styles.containerCheckBoxDeliveryServices}>

                                    <View style={styles.iHave}>

                                        <CheckBox
                                            containerStyle={{ backgroundColor: 'transparent', borderColor: 'transparent' }}
                                            title='Punya'
                                            checkedIcon='dot-circle-o'
                                            uncheckedIcon='circle-o'
                                            checked={sendserviceone}
                                            onPress={() => this.checkedIHave()}
                                        />

                                    </View>

                                    <View style={styles.iDontHave}>
                                        <CheckBox
                                            containerStyle={{ backgroundColor: 'transparent', borderColor: 'transparent' }}
                                            title='Tidak Punya'
                                            checkedIcon='dot-circle-o'
                                            uncheckedIcon='circle-o'
                                            checked={sendservicetwo}
                                            onPress={() => this.checkedNoIdontHave()}
                                        />
                                    </View>
                                </View>
                            </View>


                            <View style={styles.textAgree}>
                                <View>
                                    <CheckBox
                                        containerStyle={{ backgroundColor: 'transparent', borderColor: 'transparent' }}
                                        title={<Text style={{ color: 'black', fontSize: 12, paddingLeft: 5 }}> Agree with our <Text onPress={() => this.props.navigation.navigate('TermsAndAgreement')} style={{ textDecorationLine: 'underline', color: 'red', fontSize: 12 }}>term & condition</Text>
                                        </Text>}
                                        checked={agree}
                                        onPress={() => this.checkedAgreement()}

                                    />
                                </View>
                            </View>

                        </View>
                    </View>
                    {
                        loading ?
                            <Spinner size="small" />
                            :
                            <TouchableOpacity style={styles.buttonSignUp}
                                onPress={() => this.checkValidation()}
                            >
                                <Text style={styles.signupButtonText}>Sign Up</Text>
                            </TouchableOpacity>
                    }
                </ScrollView>
            </ImageBackground >
        );
    };
};

const styles = StyleSheet.create({
    containerImage: {
        flex: 1,
        alignItems: 'center',
        marginTop: 20,
        zIndex: 2
    },
    containerUpload: {
        height: 155,
        width: 155,
        borderRadius: 100
    },
    containerForm: {
        flex: 1,
        borderRadius: 20,
        backgroundColor: '#ffffff',
        shadowColor: '#000',
        shadowOffset: { width: 0, heigth: 2 },
        shadowRadius: 2,
        flexDirection: 'column',
        marginTop: -75,
        height: 530,
        width: '90%',
        alignItems: 'center',
        alignSelf: 'center',
        zIndex: 1,
        borderWidth: 0.5,
        borderColor: '#d6d7da',
        marginBottom: 50
    },
    iconCamera: {
        height: 40,
        width: 40,
        borderRadius: 100,
        zIndex: 3,
        marginTop: -40,
        marginLeft: 100
    },
    buttonSignUp: {
        backgroundColor: 'red',
        borderRadius: 20,
        height: 40,
        width: 110,
        justifyContent: 'center',
        alignSelf: 'center',
        zIndex: 4,
        marginTop: -70,
        marginBottom: 30
    },
    signupButtonText: {
        textAlign: 'center',
        color: 'white',
        fontSize: 17,
        fontWeight: 'bold'
    },
    formPosition: {
        flex: 7,
        marginTop: 80,
        height: 12,
        width: 275,
        zIndex: 0
    },
    textStyle: {
        color: 'black',
        marginLeft: 5,
        fontSize: 13,
        fontWeight: 'bold',
        fontFamily: 'Quicksand-Regular'
    },
    containerCheckBox: {
        height: 55,
        width: 265,
        flexDirection: 'row',
        // backgroundColor: 'blue',
        // justifyContent: 'center',
        // alignItems: 'center'
    },
    BoxAblity: {
        paddingTop: 10,
        height: 185,
        flexDirection: 'column',
        width: '100%'
    },
    textBox: {
        paddingTop: 10,
        height: 80
    },
    containerCheckBoxAbility: {
        height: 38,
        width: '100%',
        flexDirection: 'row',
        // backgroundColor: 'red',
        // justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 5,
        marginRight: 5
    },
    checkBoxAbility: {
        flex: 1,
        // height: 50,
        width: '100%',
        // backgroundColor: 'yellow'
        // backgroundColor: 'transparent',
        // borderColor: 'transparent'
    },
    containerCheckBoxDeliveryServices: {
        // marginLeft: 5,
        height: 55,
        width: '100%',
        flexDirection: 'row',
        // backgroundColor: 'blue',
        // justifyContent: 'center',
        // alignItems: 'center',
        // alignContent: 'center'
    },
    iHave: {
        // marginLeft: 40,
        height: 55,
        width: '50%',
        // backgroundColor: 'yellow',
        // backgroundColor: 'transparent',
        // borderColor: 'transparent'
        justifyContent: 'center',
        alignItems: 'center'
    },
    iDontHave: {
        height: 55,
        width: '50%',
        // backgroundColor: 'red',
        marginLeft: -12.5,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textAgree: {
        // paddingTop: 10,
        height: 60,
        // backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalAddress: {
        width: '100%',
        height: '100%',
        backgroundColor: '#ffffff',
        alignSelf: 'center',
        borderWidth: 0.9,
        shadowColor: '#000',
        shadowOpacity: 1.0,
    },
    textaddressModal: {
        marginLeft: 10,
        marginRight: 10,
        marginTop: 10,
        height: 80
    },
    buttonOnModalAddress: {
        marginTop: 10,
        flex: 2,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        width: '96%',
        height: 70,
        // backgroundColor: 'red'
    },
    AddressTextSave: {
        fontWeight: 'bold',
        color: 'red',
        fontFamily: 'Quicksand-Regular'
    },
    AddressTextCancel: {
        fontWeight: 'bold',
        color: 'black',
        fontFamily: 'Quicksand-Regular'
    }
});

export default RegistrationCrafterPage
