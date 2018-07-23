import React, { Component } from 'react'
import { View, Text, ImageBackground, Image, AsyncStorage, TouchableOpacity, ScrollView, StyleSheet, TouchableHighlight, TouchableWithoutFeedback, Modal, ToastAndroid } from 'react-native'
import { Container, ContainerSection, Button, InputLogin, Spinner, Input } from '../components/common';
// import axios from 'axios';
import { COLOR } from './../shared/config';
// import { NavigationActions, StackActions } from 'react-navigation';
// import { IPSERVER } from './../shared/config';
import { CheckBox } from 'react-native-elements'
import ImagePicker from 'react-native-image-picker';
import Icon from 'react-native-vector-icons/Ionicons';

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
            latitude: null,
            longitude: null,
            error: null,
            isModalVisible: false,
            pathPhotoRegistCrafter: null,
            fashion: false,
            furniture: false,
            DIY: false,
            beauty: false,
            sendserviceone: false,
            sendservicetwo: false,
            agree: false,
        };
    }

    componentDidMount() {
        console.log('Registration Start');
        navigator.geolocation.getCurrentPosition(
            (position) => {
                console.log(position, 'Get Position');
                this.setState({
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude,
                    error: null,
                }, () => {
                    console.log(this.state.latitude, 'Latitude');
                    console.log(this.state.longitude, 'Longtitude');
                    console.log(this.state.error, 'Error');
                });
            },
            (error) => this.setState({ error: error.message }, () => { console.log(this.state.error, 'Error'); }),
            { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 },
        );
    }

    checkBoxFashion = () => {
        this.setState({ fashion: !this.state.fashion });
    }

    checkBoxFurniture = () => {
        this.setState({ furniture: !this.state.furniture });
    }

    checkBoxDIY = () => {
        this.setState({ DIY: !this.state.DIY });
    }

    checkBoxBeauty = () => {
        this.setState({ beauty: !this.state.beauty });
    }

    checkedIHave = () => {
        this.setState({ sendserviceone: true, sendservicetwo: false }, () => {
            if (this.state.sendserviceone === true) { this.setState({ sendserviceone: "Punya", sendservicetwo: '' }) }
        });
    }

    checkedNoIdontHave = () => {
        this.setState({ sendservicetwo: !this.state.sendservicetwo, sendserviceone: false }, () => {
            if (this.state.sendservicetwo === true) { this.setState({ sendservicetwo: "Perempuan", sendserviceone: '' }) }
        });
    }

    checkedAgreement = () => {
        this.setState({ agree: !this.state.agree });
    }


    setModalVisible(visible) {
        this.setState({ isModalVisible: visible });
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
                    pathPhotoRegistCrafter: source
                });
            }
        });
    }




    render() {

        const {
            fashion,
            furniture,
            DIY,
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
                                {this.state.pathPhotoRegistCrafter == null ?
                                    <Image
                                        style={styles.containerUpload}
                                        source={require('./../assets/images/icon_profile.png')}
                                    />
                                    :
                                    <Image
                                        style={styles.containerUpload}
                                        resizeMode='cover'
                                        source={this.state.pathPhotoRegistCrafter} />
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
                                            containerStyle={{ backgroundColor: 'transparent', borderColor: 'transparent', fontSize: 13, fontFamily: 'Quicksand-Regular' }}
                                            title='Fashion'
                                            checked={fashion}
                                            onPress={() => this.checkBoxFashion()}
                                        />
                                    </View>
                                </View>
                                <View style={styles.containerCheckBoxAbility}>
                                    <View style={styles.checkBoxAbility}>
                                        <CheckBox
                                            containerStyle={{ backgroundColor: 'transparent', borderColor: 'transparent', fontSize: 13, fontFamily: 'Quicksand-Regular' }}
                                            title='Furniture & Appliances'
                                            checked={furniture}
                                            onPress={() => this.checkBoxFurniture()}
                                        />
                                    </View>
                                </View>
                                <View style={styles.containerCheckBoxAbility}>
                                    <View style={styles.checkBoxAbility}>
                                        <CheckBox
                                            containerStyle={{ backgroundColor: 'transparent', borderColor: 'transparent', fontSize: 13, fontFamily: 'Quicksand-Regular' }}
                                            title='Beauty'
                                            checked={beauty}
                                            onPress={() => this.checkBoxBeauty()}
                                        />

                                    </View>
                                </View>
                                <View style={styles.containerCheckBoxAbility}>
                                    <View style={styles.checkBoxAbility}>
                                        <CheckBox
                                            containerStyle={{ backgroundColor: 'transparent', borderColor: 'transparent', fontSize: 13, fontFamily: 'Quicksand-Regular' }}
                                            title='DIY, Hobbies & Toys'
                                            checked={DIY}
                                            onPress={() => this.checkBoxDIY()}
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
                                            containerStyle={{ backgroundColor: 'transparent', borderColor: 'transparent', fontSize: 13, fontFamily: 'Quicksand-Regular' }}
                                            title='Punya'
                                            checkedIcon='dot-circle-o'
                                            uncheckedIcon='circle-o'
                                            checked={sendserviceone}
                                            onPress={() => this.checkedIHave()}
                                        // onChange={(checked) => console.log('I am checked', checked)}
                                        />

                                    </View>

                                    <View style={styles.iDontHave}>
                                        <CheckBox
                                            containerStyle={{ backgroundColor: 'transparent', borderColor: 'transparent', fontSize: 13, fontFamily: 'Quicksand-Regular' }}
                                            title='Tidak Punya'
                                            checkedIcon='dot-circle-o'
                                            uncheckedIcon='circle-o'
                                            checked={sendservicetwo}
                                            onPress={() => this.checkedNoIdontHave()}
                                        />
                                    </View>
                                </View>
                            </View>

                            <View style={styles.textBox}>
                                <View >
                                    <Text style={styles.textStyle}>Kata Sandi</Text>
                                </View>
                                <View>
                                    <ContainerSection>
                                        <Input
                                            secureTextEntry={true}
                                            placeholder='silakan isi password anda'
                                        />
                                    </ContainerSection>
                                </View>
                            </View>

                            <View style={styles.textBox}>
                                <View >
                                    <Text style={styles.textStyle}>E-Mail</Text>
                                </View>
                                <View>
                                    <ContainerSection>
                                        <Input
                                            placeholder='silakan isi email anda'
                                        />
                                    </ContainerSection>
                                </View>
                            </View>

                            <View style={styles.textBox}>
                                <View >
                                    <Text style={styles.textStyle}>Nomor Telepon</Text>
                                </View>
                                <View>
                                    <ContainerSection>
                                        <Input
                                            placeholder='silakan isi nomor telepon anda'
                                            keyboardType='numeric'
                                        />
                                    </ContainerSection>
                                </View>
                            </View>

                            <View style={styles.textBox}>
                                <View >
                                    <Text style={styles.textStyle}>Alamat</Text>
                                </View>
                                <View>
                                    <ContainerSection>
                                        <Input
                                            onFocus={() => {
                                                this.setModalVisible(true);
                                            }}
                                            placeholder='please input your name address'
                                        />
                                    </ContainerSection>
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




                    <TouchableOpacity style={styles.buttonSignUp}
                        onPress={() => this.props.navigation.navigate('pengaturanBank')}
                    >
                        <Text style={styles.signupButtonText}>Sign Up</Text>
                    </TouchableOpacity>



                    <View style={{ marginTop: 65 }}>
                        <Modal
                            animationType="slide"
                            transparent={true}
                            visible={this.state.isModalVisible}
                            onRequestClose={() => {
                                alert('Modal has been closed.');
                            }}>

                            < View style={{ flex: 1, marginTop: 50 }}>
                                <View style={styles.modalAddress}>
                                    <ScrollView>
                                        <View style={styles.textaddressModal}>
                                            <View >
                                                <Text style={styles.textStyle}>Province</Text>
                                            </View>
                                            <View>
                                                <ContainerSection>
                                                    <Input
                                                        placeholder='silakan input provinsi tempat anda tinggal'
                                                    />
                                                </ContainerSection>
                                            </View>
                                        </View>

                                        <View style={styles.textaddressModal}>
                                            <View >
                                                <Text style={styles.textStyle}>City</Text>
                                            </View>
                                            <View>
                                                <ContainerSection>
                                                    <Input
                                                        placeholder='silakan input kota tempat anda tinggal'
                                                    />
                                                </ContainerSection>
                                            </View>
                                        </View>

                                        <View style={styles.textaddressModal}>
                                            <View >
                                                <Text style={styles.textStyle}>District</Text>
                                            </View>
                                            <View>
                                                <ContainerSection>
                                                    <Input
                                                        placeholder='silakan input wilayah tempat anda tinggal'
                                                    />
                                                </ContainerSection>
                                            </View>
                                        </View>

                                        <View style={styles.textaddressModal}>
                                            <View >
                                                <Text style={styles.textStyle}>Address Detail</Text>
                                            </View>
                                            <View>
                                                <ContainerSection>
                                                    <Input style={{ height: 30 }}
                                                        multiline={true}
                                                        numberOfLines={150}

                                                        placeholder='silakan isi alamat lengkap anda'

                                                    />
                                                </ContainerSection>
                                            </View>
                                        </View>

                                        <View style={styles.buttonOnModalAddress}>

                                            <View>
                                                <TouchableHighlight
                                                    onPress={() => {
                                                        this.setModalVisible(!this.state.isModalVisible);
                                                    }}>
                                                    <Text style={styles.AddressTextCancel}>Cancel</Text>
                                                </TouchableHighlight>
                                            </View>

                                            <View style={{ paddingLeft: 20 }}>
                                                <TouchableHighlight
                                                    onPress={() => {
                                                        this.setModalVisible(!this.state.isModalVisible);
                                                    }}>
                                                    <Text style={styles.AddressTextSave}>Save</Text>
                                                </TouchableHighlight>
                                            </View>
                                        </View>
                                    </ScrollView>
                                </View>
                            </View>

                        </Modal>
                    </View>


                </ScrollView>
            </ImageBackground >
        );
    };
};

const styles = StyleSheet.create({
    containerImage: {
        flex: 1,
        // justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
        zIndex: 2,

        // backgroundColor:'yellow'
    },
    containerUpload: {
        height: 155,
        width: 155,
        borderRadius: 100,
        // zIndex: 2
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
        height: 855,
        width: '90%',
        alignItems: 'center',
        alignSelf: 'center',
        zIndex: 1,
        borderWidth: 0.5,
        borderColor: '#d6d7da',
        // backgroundColor:'skyblue'
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
        // marginTop: 60,
        backgroundColor: 'red',
        borderRadius: 20,
        height: 40,
        width: 110,
        justifyContent: 'center',
        alignSelf: 'center',
        zIndex: 4,
        marginTop: -17,
        marginBottom: -30
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
        // position: 'absolute',
        zIndex: 0,
        // backgroundColor:'yellow'
    },
    textStyle: {
        color: 'black',
        marginLeft: 5,
        fontSize: 13,
        fontWeight: 'bold',
        fontFamily: 'Quicksand-Regular'
    },
    containerCheckBox: {
        // marginLeft: 5,
        height: 55,
        width: 265,
        flexDirection: 'row',
        // backgroundColor: 'blue',
        // justifyContent: 'center',
        // alignItems: 'center'
    },
    BoxAblity: {
        // flex: 4,
        paddingTop: 10,
        height: 185,
        flexDirection: 'column',
        width: '100%',
        // backgroundColor: 'blue'
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
