import React, { Component } from 'react';
import { View, Text, ImageBackground, Keyboard, Image, Picker, TouchableOpacity, ToastAndroid, ScrollView, StyleSheet, TouchableHighlight, TouchableWithoutFeedback, StatusBar, Modal } from 'react-native'
import { Container, Spinner, ContainerSection, Button, Input, InputDate, InputNumber } from '../components/common';
import { IPSERVER } from '../shared/config';
import { CheckBox } from 'react-native-elements'
import ImagePicker from 'react-native-image-picker';
import DateTimePicker from 'react-native-modal-datetime-picker';
import moment from 'moment';
import Icon from 'react-native-vector-icons/Ionicons';
import uuid from 'react-native-uuid';
import AutoComplete from '../components/AutoComplete';
import { NavigationActions, StackActions } from 'react-navigation';
import axios from 'axios';

export class RegistrationBuyerPage extends React.Component {

    static navigationOptions = ({ navigation }) => ({
        headerLeft:
            <TouchableOpacity
                onPress={() => { navigation.goBack(); console.log(navigation.goBack(), 'Props Order') }}
            >
                <Icon size={30} style={{ marginLeft: 25, color: '#EF1C25' }} name='ios-arrow-back' />
            </TouchableOpacity>,
        headerTitle: 'Register'
    });

    constructor(props) {
        super(props);
        this.state = {
            realm: '',
            username: '',
            password: '',
            noPhone: '',
            email: '',
            birthDate: '',
            birthPlace: 'VMD Indonesia',
            gender: 'Pria',
            imageUri: '',
            emailverified: 0,
            suggestionsProvince: [],
            suggestionsRegencies: [],
            suggestionsDistrict: [],
            province: '',
            idProvince: '',
            city: '',
            idCity: '',
            district: '',
            idDistrict: '',
            location: '-6.123123123,101.2312312',
            addressTxt: '',

            loading: false,
            loadingAuto: false,
            isModalVisible: false,
            pathPhotoRegistBuyer: null,
            BirthdayDate: false,
            viewBirthday: '',
            male: true,
            female: false,
            gendermale: '',
            genderfemale: '',
            agree: false,
            agreeterms: '',
            dataProvince: '',
            dataRegency: '',
            dataDistrict: ''
        };
    }

    componentDidMount() {
        axios.get(`${IPSERVER}/ApapunProvinces/getProvinceAll`)
            .then(response => {
                console.log(response, 'Data Province');
                this.setState({ dataProvince: response.data });
            }).catch(error => {
                console.log(error, 'Error Get Province');
                return ToastAndroid.show('Connection Time Out, Server Maybe Down', ToastAndroid.SHORT);
            });
    }

    onChangeProvince = (name, value) => {
        console.log(name, value, 'Province Selected');
        this.setState({ [name]: value }, () => {
            axios.post(`${IPSERVER}/ApapunRegencies/getRegenciesByProvinceId`, {
                provinceId: value
            })
                .then(response => {
                    console.log(response, 'Data Regency');
                    this.setState({ dataRegency: response.data });
                }).catch(error => {
                    console.log(error, 'Error Get Regency');
                    return ToastAndroid.show('Connection Time Out, Server Maybe Down', ToastAndroid.SHORT);
                });
        });
    }

    onChangeRegency = (name, value) => {
        console.log(name, value, 'Province Selected');
        this.setState({ [name]: value }, () => {
            console.log(this.state[name]);
            axios.post(`${IPSERVER}/ApapunDistricts/getDistrictsByRegencyId`, {
                regencyId: value
            })
                .then(response => {
                    console.log(response, 'Data District');
                    this.setState({ dataDistrict: response.data });
                }).catch(error => {
                    console.log(error, 'Error Get District');
                    return ToastAndroid.show('Connection Time Out, Server Maybe Down', ToastAndroid.SHORT);
                });
        });
    }

    onChangeDistrict = (name, value) => {
        console.log(name, value, 'Province Selected');
        this.setState({ [name]: value }, () => {
            console.log(this.state[name]);
        });
    }

    renderProvince = () => {
        const renderProvince = this.state.dataProvince;
        if (renderProvince) {
            return renderProvince.map((data, index) => {
                return <Picker.Item label={data.name} value={data.id} key={index} />
            })
        }
        return <Picker.Item label='Tidak ada Province' value='0' />
    }

    renderRegency = () => {
        const renderRegency = this.state.dataRegency;
        if (renderRegency) {
            return renderRegency.map((data, index) => {
                return <Picker.Item label={data.name} value={data.id} key={index} />
            })
        }
        return <Picker.Item label='Harap Pilih Provinsi Terlebih Dahulu' value='0' />
    }

    renderDistrict = () => {
        const renderDistrict = this.state.dataDistrict;
        if (renderDistrict) {
            return renderDistrict.map((data, index) => {
                return <Picker.Item label={data.name} value={data.id} key={index} />
            })
        }
        return <Picker.Item label='Harap Pilih Kota Terlebih Dahulu' value='0' />
    }

    checkedMale = () => {
        this.setState({ male: true, female: false }, () => {
            if (this.state.male === true) { this.setState({ gender: "Pria" }) }
        });
    }

    checkedFemale = () => {
        this.setState({ female: true, male: false }, () => {
            if (this.state.female === true) { this.setState({ gender: "Perempuan" }) }
        });
    }

    checkedAgree = () => {
        this.setState({ agree: !this.state.agree })
    }


    setModalVisible(visible) {
        this.setState({ isModalVisible: visible });
    }

    selectPhotoRegisterBuyer() {
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

    showBirthdayDateFocus = () => this.setState({ BirthdayDate: true });

    hideDateBirthday = () => this.setState({ BirthdayDate: false });

    handleDatePickedBirthday = (date) => {
        console.log(date, 'Date Nya DP')
        const dateTemp = moment(date).format('YYYY-MM-DD h:mm:ss');
        const dateNow = moment(date).format('DD/MM/YYYY');
        this.setState({ viewBirthday: dateNow, birthDate: dateTemp })
        this.hideDateBirthday();
    };

    onChangeInput = (name, v) => {
        this.setState({ [name]: v }, () => {
            console.log(this.state[name], 'Birth');
        });
    }


    checkValidation() {
        Keyboard.dismiss();

        const {
            realm,
            username,
            password,
            noPhone,
            email,
            birthDate,
            gender,
            imageUri,
            province,
            city,
            district,
            addressTxt,
            agree
        } = this.state;

        const validate = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        const validateEmail = validate.test(email);

        switch (imageUri) {
            case '':
                return ToastAndroid.show('Foto Profile Tidak Boleh Kosong', ToastAndroid.SHORT);
            default:
                switch (realm) {
                    case '':
                        return ToastAndroid.show('Nama Lengkap Tidak Boleh Kosong', ToastAndroid.SHORT);
                    default:
                        switch (username) {
                            case '':
                                return ToastAndroid.show('Username Tidak Boleh Kosong', ToastAndroid.SHORT);
                            default:
                                switch (gender) {
                                    case '':
                                        return ToastAndroid.show('Jenis Kelamin Tidak Boleh Kosong', ToastAndroid.SHORT);
                                    default:
                                        switch (birthDate) {
                                            case '':
                                                return ToastAndroid.show('Tanggal Lahir Tidak Boleh Kosong', ToastAndroid.SHORT);
                                            default:
                                                switch (password) {
                                                    case '':
                                                        return ToastAndroid.show('Password Tidak Boleh Kosong', ToastAndroid.SHORT);
                                                    default:
                                                        switch (validateEmail) {
                                                            case false:
                                                                return ToastAndroid.show('Format Email Salah', ToastAndroid.SHORT);
                                                            default:
                                                                switch (noPhone) {
                                                                    case '':
                                                                        return ToastAndroid.show('Nomor Telepon Tidak Boleh Kosong', ToastAndroid.SHORT);
                                                                    default:
                                                                        switch (province) {
                                                                            case '':
                                                                                return ToastAndroid.show('Provinse Tidak Boleh Kosong', ToastAndroid.SHORT);
                                                                            default:
                                                                                switch (city) {
                                                                                    case '':
                                                                                        return ToastAndroid.show('Kota Tidak Boleh Kosong', ToastAndroid.SHORT);
                                                                                    default:
                                                                                        switch (district) {
                                                                                            case '':
                                                                                                return ToastAndroid.show('Daerah Tidak Boleh Kosong', ToastAndroid.SHORT);
                                                                                            default:
                                                                                                switch (addressTxt) {
                                                                                                    case '':
                                                                                                        return ToastAndroid.show('Alamat Lengkap Tidak Boleh Kosong', ToastAndroid.SHORT);
                                                                                                    default:
                                                                                                        switch (agree) {
                                                                                                            case false:
                                                                                                                return ToastAndroid.show('Anda belum menyetujui Terms & Condition', ToastAndroid.SHORT);
                                                                                                            default:
                                                                                                                this.setState({ loading: true });
                                                                                                                this.prosesRegistration();
                                                                                                        }
                                                                                                }
                                                                                        }
                                                                                }
                                                                        }
                                                                }
                                                        }
                                                }
                                        }
                                }
                        }
                }
        }
    }

    prosesRegistration() {
        const {
            realm,
            username,
            password,
            noPhone,
            email,
            birthDate,
            birthPlace,
            gender,
            imageUri,
            emailverified,
            idProvince,
            idCity,
            idDistrict,
            location,
            addressTxt
        } = this.state;

        const nameFile = 'IMG_' + uuid.v1();
        var body = new FormData();
        var photo = {
            uri: imageUri.uri,
            type: 'image/jpeg',
            name: nameFile.toUpperCase() + '.jpg'
        };
        body.append('photo', photo);
        var request = new XMLHttpRequest();
        request.open('POST', `${IPSERVER}/ApapunStorageImages/imagesUpload`);
        request.send(body);

        request.onreadystatechange = (e) => {
            if (request.readyState !== 4) {
                return;
            }

            if (request.status === 200) {
                console.log('success', request.responseText);
                const profileUrl = nameFile.toUpperCase() + '.jpg';
                axios.post(`${IPSERVER}/ApapunUsers/UserRegister`, {
                    realm,
                    username,
                    password,
                    noPhone,
                    email,
                    birthDate,
                    birthPlace,
                    gender,
                    profileUrl,
                    emailverified,
                    idProvince,
                    idCity,
                    idDistrict,
                    location,
                    addressTxt
                }).then(response => {
                    console.log(response);
                    this.setState({ loading: false }, () => {
                        const resetAction = StackActions.reset({
                            index: 0,
                            actions: [NavigationActions.navigate({ routeName: 'MenuLogin' })],
                        });
                        this.props.navigation.dispatch(resetAction);
                    });
                    ToastAndroid.show('Sukses Registrasi, Silahkan Login', ToastAndroid.SHORT);
                }).catch(error => {
                    console.log(error, 'Error Upload Foto');
                    this.setState({ loading: false });
                });
            } else {
                console.warn('error', request);
            }
        };
    }

    renderButton = () => {
        if (this.state.loading) {
            return <Spinner size="small" />
        }
        return (
            <TouchableOpacity style={styles.buttonSignUp}
                onPress={() => this.checkValidation()}
            >
                <Text style={styles.signupButton}>Sign Up</Text>
            </TouchableOpacity>
        )
    }


    render() {

        const {
            realm,
            username,
            password,
            noPhone,
            email,
            birthPlace,
            imageUri,
            suggestionsProvince,
            suggestionsRegencies,
            suggestionsDistrict,
            province,
            city,
            district,
            addressTxt,

            loadingAuto,
            viewBirthday,
            male,
            female,
            agree
        } = this.state

        // console.log(this.state.imageUri, 'Image');
        return (
            <View style={{ width: '100%', height: '100%', backgroundColor: '#e8e8e8' }}>
                <ScrollView keyboardShouldPersistTaps="always">
                    <View style={styles.containerImage}>
                        <TouchableWithoutFeedback onPress={this.selectPhotoRegisterBuyer.bind(this)}>
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

                            <View style={{ paddingTop: 20, height: 90 }}>
                                <View >
                                    <Text style={styles.textStyle}>Nama Lengkap</Text>
                                </View>
                                <View>
                                    <ContainerSection>
                                        <Input
                                            placeholder=''
                                            value={realm}
                                            onChangeText={v => this.onChangeInput('realm', v)}
                                        />
                                    </ContainerSection>
                                </View>
                            </View>

                            <View style={{ paddingTop: 20, height: 90 }}>
                                <View >
                                    <Text style={styles.textStyle}>Username</Text>
                                </View>
                                <View>
                                    <ContainerSection>
                                        <Input
                                            placeholder=''
                                            value={username}
                                            onChangeText={v => this.onChangeInput('username', v)}
                                        />
                                    </ContainerSection>
                                </View>
                            </View>

                            <View style={{ paddingTop: 10, height: 90 }}>
                                <View >
                                    <Text style={styles.textStyle}>Jenis Kelamin</Text>
                                </View>

                                <View style={styles.containerCheckBox}>

                                    <View style={styles.checkBoxMale}>

                                        <CheckBox
                                            containerStyle={{ backgroundColor: 'transparent', borderColor: 'transparent', }}
                                            title='Laki Laki '
                                            fontFamily='Quicksand-Regular'
                                            checkedIcon='dot-circle-o'
                                            uncheckedIcon='circle-o'
                                            onPress={() => this.checkedMale()}
                                            // checked={() => { this.setState({ male: !this.state.female }) }}
                                            checked={male}

                                        />

                                    </View>


                                    <View style={styles.checkBoxFemale}>
                                        <CheckBox
                                            containerStyle={{ backgroundColor: 'transparent', borderColor: 'transparent' }}
                                            title='Perempuan'
                                            fontFamily='Quicksand-Regular'
                                            checkedIcon='dot-circle-o'
                                            uncheckedIcon='circle-o'
                                            onPress={() => this.checkedFemale()}
                                            // checked={() => { this.setState({ female: !this.state.male }) }}
                                            checked={female}
                                        />
                                    </View>
                                </View>

                            </View>

                            <View style={{ height: 90, paddingTop: 5, }}>
                                <View >
                                    <Text style={styles.textStyle}>Tanggal Lahir</Text>
                                </View>
                                <ContainerSection>
                                    <InputDate
                                        // placeholder='Your date of birthday'
                                        value={viewBirthday}
                                        onChangeText={v => this.onChangeInput('viewBirthday', v)}
                                        onFocus={() => {
                                            this.showBirthdayDateFocus()
                                        }}
                                    />
                                </ContainerSection>
                                <DateTimePicker
                                    datePickerModeAndroid='spinner'
                                    isVisible={this.state.BirthdayDate}
                                    onConfirm={this.handleDatePickedBirthday}
                                    onCancel={this.hideDateBirthday}
                                    maximumDate={new Date()}
                                />
                            </View>

                            <View style={{ paddingTop: 5, height: 90 }}>
                                <View >
                                    <Text style={styles.textStyle}>Password</Text>
                                </View>
                                <View>
                                    <ContainerSection>
                                        <Input
                                            secureTextEntry={true}
                                            value={password}
                                            onChangeText={v => this.onChangeInput('password', v)}
                                        // placeholder='Your Password'
                                        />
                                    </ContainerSection>
                                </View>
                            </View>

                            <View style={{ paddingTop: 5, height: 90 }}>
                                <View >
                                    <Text style={styles.textStyle}>E-mail</Text>
                                </View>
                                <View>
                                    <ContainerSection>
                                        <Input
                                            value={email}
                                            onChangeText={v => this.onChangeInput('email', v)}
                                            placeholder=''
                                        />
                                    </ContainerSection>
                                </View>
                            </View>

                            <View style={{ paddingTop: 5, height: 90 }}>
                                <View >
                                    <Text style={styles.textStyle}>Nomor Telepon</Text>
                                </View>
                                <View>
                                    <ContainerSection>
                                        <InputNumber
                                            value={noPhone}
                                            onChangeText={v => this.onChangeInput('noPhone', v)}
                                            // placeholder='Y'
                                            keyboardType='numeric'
                                        />
                                    </ContainerSection>
                                </View>
                            </View>

                            <View style={{ paddingTop: 5, height: 90 }}>
                                <View >
                                    <Text style={styles.textStyle}>Alamat</Text>
                                </View>

                                <View style={{ height: 50 }}>
                                    <TouchableOpacity style={{
                                        marginTop: 4,
                                        height: 48,
                                        width: 263,
                                        justifyContent: 'center',
                                        alignSelf: 'center',
                                        borderWidth: 1,
                                        borderColor: '#a9a9a9',
                                        borderRadius: 4,
                                        paddingLeft: 7,
                                        paddingRight: 7
                                    }}
                                        onPress={() => this.setModalVisible(true)}
                                    >
                                        <Text style={{ color: 'black' }}>{province ? 'Provinsi,' : ''} {city ? 'City,' : ''} {district ? 'District,' : ''} {addressTxt ? 'Address detail' : ''}</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>

                            <View style={styles.textAgree}>
                                <View style={{ flex: 1, flexDirection: 'row' }}>
                                    <CheckBox
                                        containerStyle={{ backgroundColor: 'transparent', borderColor: 'transparent' }}
                                        title={<Text style={{ color: 'black', fontSize: 13, paddingLeft: 5, fontFamily: 'Quicksand-Regular' }}> Agree with our <Text onPress={() => this.props.navigation.navigate('TermsAndAgreement')} style={{ textDecorationLine: 'underline', color: 'red', fontSize: 12 }}>term & condition</Text>
                                        </Text>}
                                        onPress={() => this.checkedAgree()}
                                        checked={agree}
                                    />
                                </View>
                            </View>



                        </View>

                    </View>

                    {this.renderButton()}

                    <View style={{ flex: 1, marginTop: 65 }}>
                        <Modal
                            animationType="slide"
                            transparent={true}
                            visible={this.state.isModalVisible}
                            onRequestClose={() => {
                                alert('Modal has been closed.');
                            }}>
                            <View style={{ marginTop: 50 }}>
                                <View style={styles.modalAddress}>
                                    <ScrollView>

                                        <View style={styles.textaddressModal}>
                                            <View >
                                                <Text style={styles.textStyle}>Provinsi</Text>
                                            </View>
                                            <View>
                                                <ContainerSection>
                                                    <View style={{ flex: 1, width: '90%', flexDirection: 'row', justifyContent: 'flex-end', marginTop: 5 }}>
                                                        <View style={{
                                                            flex: 1, borderColor: '#e5e5e5', borderRadius: 5, borderWidth: 2, justifyContent: 'center',
                                                            backgroundColor: '#fff',
                                                        }}>
                                                            <Picker
                                                                selectedValue={province}
                                                                onValueChange={v => this.onChangeProvince('province', v)}
                                                            >
                                                                <Picker.Item label='Pilih Province' value='0' />
                                                                {this.renderProvince()}
                                                            </Picker>
                                                        </View>
                                                    </View>
                                                </ContainerSection>
                                            </View>
                                        </View>

                                        <View style={styles.textaddressModal}>
                                            <View >
                                                <Text style={styles.textStyle}>Kota</Text>
                                            </View>
                                            <View>
                                                <ContainerSection>
                                                    <View style={{ flex: 1, width: '90%', flexDirection: 'row', justifyContent: 'flex-end', marginTop: 5 }}>
                                                        <View style={{
                                                            flex: 1, borderColor: '#e5e5e5', borderRadius: 5, borderWidth: 2, justifyContent: 'center',
                                                            backgroundColor: '#fff',
                                                        }}>
                                                            <Picker
                                                                selectedValue={city}
                                                                onValueChange={v => this.onChangeRegency('city', v)}
                                                            >
                                                                <Picker.Item label='Pilih Kota' value='0' />
                                                                {this.renderRegency()}
                                                            </Picker>
                                                        </View>
                                                    </View>
                                                </ContainerSection>
                                            </View>
                                        </View>

                                        <View style={styles.textaddressModal}>
                                            <View >
                                                <Text style={styles.textStyle}>Kecamatan</Text>
                                            </View>
                                            <View>
                                                <ContainerSection>
                                                    <View style={{ flex: 1, width: '90%', flexDirection: 'row', justifyContent: 'flex-end', marginTop: 5 }}>
                                                        <View style={{
                                                            flex: 1, borderColor: '#e5e5e5', borderRadius: 5, borderWidth: 2, justifyContent: 'center',
                                                            backgroundColor: '#fff',
                                                        }}>
                                                            <Picker
                                                                selectedValue={district}
                                                                onValueChange={v => this.onChangeDistrict('district', v)}
                                                            >
                                                                <Picker.Item label='Pilih Kecamatan' value='0' />
                                                                {this.renderDistrict()}
                                                            </Picker>
                                                        </View>
                                                    </View>
                                                </ContainerSection>
                                            </View>
                                        </View>

                                        <View style={styles.textaddressModal}>
                                            <View >
                                                <Text style={styles.textStyle}>Alamat Detail</Text>
                                            </View>
                                            <View>
                                                <ContainerSection>
                                                    <Input
                                                        multiline={true}
                                                        numberOfLines={150}
                                                        placeholder=''
                                                        value={addressTxt}
                                                        onChangeText={v => this.onChangeInput('addressTxt', v)}
                                                    />
                                                </ContainerSection>
                                            </View>
                                        </View>



                                        <View style={styles.buttonOnModalAddress}>

                                            <View>
                                                <TouchableHighlight
                                                    onPress={() => {
                                                        this.setState({
                                                            province: '',
                                                            city: '',
                                                            district: '',
                                                            addressTxt: ''
                                                        });
                                                        this.setModalVisible(!this.state.isModalVisible);
                                                    }}>
                                                    <Text style={styles.AddressTextCancel}>Batalkan</Text>
                                                </TouchableHighlight>
                                            </View>

                                            <View style={{ paddingLeft: 20 }}>
                                                <TouchableHighlight
                                                    onPress={() => {
                                                        this.setModalVisible(!this.state.isModalVisible);
                                                    }}>
                                                    <Text style={styles.AddressTextSave}>Simpan</Text>
                                                </TouchableHighlight>
                                            </View>

                                        </View>
                                    </ScrollView>
                                </View>

                            </View>
                        </Modal>
                    </View>
                </ScrollView>
            </View >
        );
    }
}

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
        backgroundColor: '#fff',
        shadowColor: '#000',
        shadowOffset: { width: 0, heigth: 2 },
        shadowRadius: 2,
        flexDirection: 'column',
        marginTop: -65,
        height: 900,
        width: '90%',
        alignItems: 'center',
        alignSelf: 'center',
        zIndex: 0,
        borderWidth: 0.10,
        borderColor: '#d6d7da',
    },
    iconCamera: {
        height: 40,
        width: 40,
        borderRadius: 100,
        zIndex: 5,
        marginTop: -40,
        marginLeft: 100,

    },
    buttonSignUp: {
        // marginTop: 60,
        backgroundColor: '#ef1c25',
        borderRadius: 20,
        height: 40,
        width: 110,
        justifyContent: 'center',
        alignSelf: 'center',
        zIndex: 4,
        marginTop: -22.5,
        marginBottom: -30
    },
    formPosition: {
        flex: 1,
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
        fontSize: 15,
        // fontWeight: 'bold',
        fontFamily: 'Quicksand-Bold'
    },
    containerCheckBox: {
        // marginLeft: 5,
        height: 55,
        width: 265,
        flexDirection: 'row',
        // backgroundColor: 'blue',
        // justifyContent: 'center',
        // alignContent: 'center'
        alignItems: 'center'
    },
    checkBoxMale: {
        marginLeft: 35,
        height: 60,
        width: 110,
        // backgroundColor: 'yellow',
        justifyContent: 'center',
        alignItems: 'center'
        // backgroundColor: 'transparent',
        // borderColor: 'transparent'
    },
    checkBoxFemale: {
        height: 60,
        width: 110,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textBox: {
        paddingTop: 10,
        height: 80,
        fontFamily: 'Quicksand-Regular'
    },
    textAgree: {
        height: 50,
        alignItems: 'center',
        // fontFamily: 'Quicksand-Regular',
        justifyContent: 'center'
    },
    signupButton: {
        textAlign: 'center',
        color: 'white',
        fontSize: 17,
        fontFamily: 'Quicksand-Bold'
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
        marginTop: 20,
        flex: 2,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        width: '96%',
        height: 70,
        // backgroundColor: 'red'
    },
    AddressTextSave: {
        // fontWeight: 'bold',
        color: '#ef1c25',
        fontFamily: 'Quicksand-Bold'
    },
    AddressTextCancel: {
        // fontWeight: 'bold',
        color: 'black',
        fontFamily: 'Quicksand-Bold'
    }
});

export default RegistrationBuyerPage;