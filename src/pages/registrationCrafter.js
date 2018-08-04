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
import AutoComplete from '../components/AutoComplete';

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
            profileImage: '',
            imageUri: '',
            craftername: '',
            phone: '',
            username: '',
            password: '',
            email: '',
            selfDeliveryService: '',
            categoryId: [],
            suggestionsProvince: [],
            suggestionsRegencies: [],
            suggestionsDistrict: [],
            province: '',
            idProvince: '',
            city: '',
            idCity: '',
            district: '',
            idDistrict: '',
            addressTxt: '',
            loadingAuto: false,
            loading: false,

            isModalVisible: false,
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
        category[this.state.categoryId.length] = 'Fashion';
        this.setState({ categoryId: category }, () => {
            console.log(this.state.categoryId, 'Data Check Category');
            this.setState({ selfDeliveryService: 1 }, () => {
                console.log(this.state.selfDeliveryService, 'Delivery Owner');
            })
        });
    }

    checkBoxFashion = () => {
        this.setState({ fashion: !this.state.fashion }, () => {
            if (this.state.fashion === true) {
                const category = this.state.categoryId;
                category[this.state.categoryId.length] = 'Fashion';
                this.setState({ categoryId: category }, () => {
                    console.log(this.state.categoryId, 'Data Check Category');
                });
            } else {
                this.setState({ categoryId: this.state.categoryId.filter(a => a !== 'Fashion') }, () => {
                    console.log(this.state.categoryId, 'Data Check Category');
                })
            }
        });
    }

    checkBoxLifestyle = () => {
        this.setState({ lifestyle: !this.state.lifestyle }, () => {
            if (this.state.lifestyle === true) {
                const category = this.state.categoryId;
                category[this.state.categoryId.length] = 'Lifestyle';
                this.setState({ categoryId: category }, () => {
                    console.log(this.state.categoryId, 'Data Check Category');
                });
            } else {
                this.setState({ categoryId: this.state.categoryId.filter(a => a !== 'Lifestyle') }, () => {
                    console.log(this.state.categoryId, 'Data Check Category');
                })
            }
        });
    }

    checkBoxFurniture = () => {
        this.setState({ furniture: !this.state.furniture }, () => {
            if (this.state.furniture === true) {
                const category = this.state.categoryId;
                category[this.state.categoryId.length] = 'Furniture';
                this.setState({ categoryId: category }, () => {
                    console.log(this.state.categoryId, 'Data Check Category');
                });
            } else {
                this.setState({ categoryId: this.state.categoryId.filter(a => a !== 'Furniture') }, () => {
                    console.log(this.state.categoryId, 'Data Check Category');
                })
            }
        });
    }

    checkBoxBeauty = () => {
        this.setState({ beauty: !this.state.beauty }, () => {
            if (this.state.beauty === true) {
                const category = this.state.categoryId;
                category[this.state.categoryId.length] = 'Beauty';
                this.setState({ categoryId: category }, () => {
                    console.log(this.state.categoryId, 'Data Check Category');
                });
            } else {
                this.setState({ categoryId: this.state.categoryId.filter(a => a !== 'Beauty') }, () => {
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

    queryProvinceSuggestion = (value) => {
        this.setState({
            province: value,
            loadingAuto: true,
            idProvince: ''
        })
        console.log(value, 'Keyword nya');
        if (value !== '') {
            const keyword = value;
            axios.post(`${IPSERVER}/ApapunProvinces/getProvinceAuto`, {
                keyword
            })
                .then(response => {
                    console.log(response, 'Auto Province');
                    const res = response.data;
                    this.setState({ suggestionsProvince: res, loadingAuto: false })
                })
                .catch(error => {
                    console.log(error, 'Error Auto Province');
                    this.setState({ loadingAuto: false })
                })
        } else {
            this.setState({ suggestionsProvince: [] })
        }
    }

    onProvinceSelected = (item) => {
        this.setState({
            suggestionsProvince: [],
            idProvince: item.id,
            province: item.name
        })
    }

    queryRegenciesSuggestion = (value) => {
        this.setState({
            city: value,
            loadingAuto: true,
            idCity: ''
        })
        console.log(value, 'Keyword nya');
        if (value !== '') {
            const keyword = value;
            const province_id = this.state.idProvince;
            axios.post(`${IPSERVER}/ApapunRegencies/getRegenciesAuto`, {
                keyword,
                province_id
            })
                .then(response => {
                    console.log(response, 'Auto City');
                    const res = response.data;
                    this.setState({ suggestionsRegencies: res, loadingAuto: false })
                })
                .catch(error => {
                    console.log(error, 'Error Auto City');
                    this.setState({ loadingAuto: false })
                })
        } else {
            this.setState({ suggestionsRegencies: [] })
        }
    }

    onRegenciesSelected = (item) => {
        this.setState({
            suggestionsRegencies: [],
            idCity: item.id,
            city: item.name
        })
    }

    queryDistrictSuggestion = (value) => {
        this.setState({
            district: value,
            loadingAuto: true,
            idDistrict: ''
        })
        console.log(value, 'Keyword nya');
        if (value !== '') {
            const keyword = value;
            const regency_id = this.state.idCity;
            axios.post(`${IPSERVER}/ApapunDistricts/getDistrictAuto`, {
                keyword,
                regency_id
            })
                .then(response => {
                    console.log(response, 'Auto District');
                    const res = response.data;
                    this.setState({ suggestionsDistrict: res, loadingAuto: false })
                })
                .catch(error => {
                    console.log(error, 'Error Auto District');
                    this.setState({ loadingAuto: false })
                })
        } else {
            this.setState({ suggestionsDistrict: [] })
        }
    }

    onDistrictSelected = (item) => {
        this.setState({
            suggestionsDistrict: [],
            idDistrict: item.id,
            district: item.name
        })
    }

    checkValidation() {
        console.log(this.state, 'State');
        const {
            imageUri,
            craftername,
            categoryId,
            selfDeliveryService,
            password,
            email,
            phone,
            idProvince,
            idCity,
            idDistrict,
            addressTxt,
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
                                        switch (password) {
                                            case '':
                                                return ToastAndroid.show('Password Tidak Boleh Kosong', ToastAndroid.SHORT);
                                            default:
                                                switch (email) {
                                                    case '':
                                                        return ToastAndroid.show('Email Tidak Boleh Kosong', ToastAndroid.SHORT);
                                                    default:
                                                        switch (phone) {
                                                            case '':
                                                                return ToastAndroid.show('Nomor Telepon Tidak Boleh Kosong', ToastAndroid.SHORT);
                                                            default:
                                                                switch (idProvince) {
                                                                    case '':
                                                                        return ToastAndroid.show('Provinse Tidak Boleh Kosong', ToastAndroid.SHORT);
                                                                    default:
                                                                        switch (idCity) {
                                                                            case '':
                                                                                return ToastAndroid.show('Kota Tidak Boleh Kosong', ToastAndroid.SHORT);
                                                                            default:
                                                                                switch (idDistrict) {
                                                                                    case '':
                                                                                        return ToastAndroid.show('District Tidak Boleh Kosong', ToastAndroid.SHORT);
                                                                                    default:
                                                                                        switch (addressTxt) {
                                                                                            case '':
                                                                                                return ToastAndroid.show('Alamat Lengkap Tidak Boleh Kosong', ToastAndroid.SHORT);
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
                                                }
                                        }
                                }
                        }
                }
        }
    }

    prosesRegisterCrafter() {
        const {
            imageUri,
            craftername,
            categoryId,
            selfDeliveryService,
            password,
            email,
            phone,
            idProvince,
            idCity,
            idDistrict,
            addressTxt,
            aggree
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

        this.props.navigation.navigate('pengaturanBank');
        // axios.post(`${IPSERVER}/ApapunUsers/UserRegister`, {
        //     profileImage,
        //     craftername,
        //     categoryId,
        //     selfDeliveryService,
        //     password,
        //     email,
        //     phone,
        //     idProvince,
        //     idCity,
        //     idDistrict,
        //     addressTxt
        // }).then(response => {
        //     console.log(response);
        //     request.open('POST', `${IPSERVER}/ApapunStorages/imagesUpload`);
        //     request.send(body);
        //     this.setState({ loading: false }, () => {
        //         this.props.navigation.navigate('pengaturanBank');
        //     });
        //     ToastAndroid.show('Sukses Registrasi, Silahkan Login', ToastAndroid.SHORT);
        // }).catch(error => {
        //     console.log(error, 'Error Upload Foto');
        //     this.setState({ loading: false });
        // });
    }

    render() {

        const {
            profileImage,
            imageUri,
            craftername,
            password,
            email,
            phone,
            suggestionsProvince,
            suggestionsRegencies,
            suggestionsDistrict,
            province,
            idProvince,
            city,
            idCity,
            district,
            idDistrict,
            addressTxt,
            loadingAuto,
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
                                        // onChange={(checked) => console.log('I am checked', checked)}
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

                            <View style={styles.textBox}>
                                <View >
                                    <Text style={styles.textStyle}>Kata Sandi</Text>
                                </View>
                                <View>
                                    <ContainerSection>
                                        <Input
                                            value={password}
                                            onChangeText={v => this.onChangeInput('password', v)}
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
                                            value={email}
                                            onChangeText={v => this.onChangeInput('email', v)}
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
                                            value={phone}
                                            onChangeText={v => this.onChangeInput('phone', v)}
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
                                                    <AutoComplete
                                                        autoFocus
                                                        suggestions={suggestionsProvince}
                                                        placeholder="Your Province"
                                                        onChangeText={text => this.queryProvinceSuggestion(text)}
                                                        value={province}
                                                        ref="input"
                                                    >
                                                        {
                                                            loadingAuto ?
                                                                <View style={{ flex: 1, height: 50 }}>
                                                                    <Spinner size='large' />
                                                                </View>
                                                                :
                                                                suggestionsProvince && suggestionsProvince.map(item =>
                                                                    <TouchableOpacity
                                                                        key={item.id}
                                                                        onPress={() => this.onProvinceSelected(item)}
                                                                    >
                                                                        <View style={styles.containerItemAutoSelect}>
                                                                            <Text>{item.name}</Text>
                                                                        </View>
                                                                    </TouchableOpacity>
                                                                )
                                                        }
                                                    </AutoComplete>
                                                </ContainerSection>
                                            </View>
                                        </View>

                                        <View style={styles.textaddressModal}>
                                            <View >
                                                <Text style={styles.textStyle}>City</Text>
                                            </View>
                                            <View>
                                                <ContainerSection>
                                                    <AutoComplete
                                                        placeholder="Your City"
                                                        suggestions={suggestionsRegencies}
                                                        onChangeText={text => this.queryRegenciesSuggestion(text)}
                                                        value={city}
                                                        ref="input"
                                                    >
                                                        {
                                                            loadingAuto ?
                                                                <View style={{ flex: 1 }}>
                                                                    <Spinner size='large' />
                                                                </View>
                                                                :
                                                                suggestionsRegencies && suggestionsRegencies.map(item =>
                                                                    <TouchableOpacity
                                                                        key={item.id}
                                                                        onPress={() => this.onRegenciesSelected(item)}
                                                                    >
                                                                        <View style={styles.containerItemAutoSelect}>
                                                                            <Text>{item.name}</Text>
                                                                        </View>
                                                                    </TouchableOpacity>
                                                                )
                                                        }
                                                    </AutoComplete>
                                                </ContainerSection>
                                            </View>
                                        </View>

                                        <View style={styles.textaddressModal}>
                                            <View >
                                                <Text style={styles.textStyle}>District</Text>
                                            </View>
                                            <View>
                                                <ContainerSection>
                                                    <AutoComplete
                                                        placeholder="Your Distrcit"
                                                        suggestions={suggestionsDistrict}
                                                        onChangeText={text => this.queryDistrictSuggestion(text)}
                                                        value={district}
                                                        ref="input"
                                                    >
                                                        {
                                                            loadingAuto ?
                                                                <View style={{ flex: 1 }}>
                                                                    <Spinner size='large' />
                                                                </View>
                                                                :
                                                                suggestionsDistrict && suggestionsDistrict.map(item =>
                                                                    <TouchableOpacity
                                                                        key={item.id}
                                                                        onPress={() => this.onDistrictSelected(item)}
                                                                    >
                                                                        <View style={styles.containerItemAutoSelect}>
                                                                            <Text>{item.name}</Text>
                                                                        </View>
                                                                    </TouchableOpacity>
                                                                )
                                                        }
                                                    </AutoComplete>
                                                </ContainerSection>
                                            </View>
                                        </View>

                                        <View style={styles.textaddressModal}>
                                            <View >
                                                <Text style={styles.textStyle}>Address Detail</Text>
                                            </View>
                                            <View>
                                                <ContainerSection>
                                                    <Input
                                                        multiline={true}
                                                        numberOfLines={150}
                                                        placeholder='Your detail address'
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
