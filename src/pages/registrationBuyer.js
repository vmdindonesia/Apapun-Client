import React, { Component } from 'react';
import { View, Text, ImageBackground, Image, AsyncStorage, TouchableOpacity, ToastAndroid, ScrollView, StyleSheet, TouchableHighlight, TouchableWithoutFeedback, StatusBar, Modal } from 'react-native'
import { Container, ContainerSection, Button, Input, InputDate, InputNumber } from '../components/common';
import { COLOR } from '../shared/config';
import { CheckBox } from 'react-native-elements'
import ImagePicker from 'react-native-image-picker';
import DateTimePicker from 'react-native-modal-datetime-picker';
import moment from 'moment';
import Icon from 'react-native-vector-icons/Ionicons';


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
            isModalVisible: false,
            pathPhotoRegistBuyer: null,
            BirthdayDate: false,
            datePickBirthday: '',
            viewBirthday: '',
            male: true,
            female: false,
            gendermale: '',
            genderfemale: '',
            agree: false,
            agreeterms: ''
        };
    }

    checkedMale = () => {
        this.setState({ male: true, female: false }, () => {
            if (this.state.male === true) { this.setState({ gendermale: "Pria", genderfemale: '' }) }
        });
    }

    checkedFemale = () => {
        this.setState({ female: !this.state.female, male: false }, () => {
            if (this.state.female === true) { this.setState({ genderfelame: "Perempuan", gendermale: '' }) }
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
                    pathPhotoRegistBuyer: source
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
        this.setState({ viewBirthday: dateNow, datePickBirthday: dateTemp })
        this.hideDateBirthday();
    };

    onChangeInput = (name, v) => {
        this.setState({ [name]: v }, () => {
            console.log(this.state[name], 'Birth');
        });
    }


    render() {

        const {
            viewBirthday,
            male,
            female,
            agree
        } = this.state


        return (

            <View
                style={{ width: '100%', height: '100%', backgroundColor: '#e8e8e8' }}
            >

                <ScrollView keyboardShouldPersistTaps="always">

                    <View style={styles.containerImage}>
                        <TouchableWithoutFeedback onPress={this.selectPhotoRegisterBuyer.bind(this)}>
                            <View>
                                {this.state.pathPhotoRegistBuyer == null ?
                                    <Image
                                        style={styles.containerUpload}
                                        source={require('./../assets/images/icon_profile.png')}
                                    />
                                    :
                                    <Image
                                        style={styles.containerUpload}
                                        resizeMode='cover'
                                        source={this.state.pathPhotoRegistBuyer} />
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
                                    <Text style={styles.textStyle}>Username</Text>
                                </View>
                                <View>
                                    <ContainerSection>
                                        <Input
                                            placeholder='please input your username'
                                        />
                                    </ContainerSection>
                                </View>
                            </View>

                            <View style={{ paddingTop: 10, height: 90 }}>
                                <View >
                                    <Text style={styles.textStyle}>Gender</Text>
                                </View>

                                <View style={styles.containerCheckBox}>

                                    <View style={styles.checkBoxMale}>

                                        <CheckBox
                                            containerStyle={{ backgroundColor: 'transparent', borderColor: 'transparent', }}
                                            title='Male'
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
                                            title='Female'
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
                                    <Text style={styles.textStyle}>Birthday</Text>
                                </View>
                                <ContainerSection>
                                    <InputDate
                                        placeholder='please input your date of birthday'
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
                                            placeholder='please input your password'
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
                                            placeholder='please input your email'
                                        />
                                    </ContainerSection>
                                </View>
                            </View>

                            <View style={{ paddingTop: 5, height: 90 }}>
                                <View >
                                    <Text style={styles.textStyle}>Phone Number</Text>
                                </View>
                                <View>
                                    <ContainerSection>
                                        <InputNumber
                                            placeholder='please input your phone number'
                                            keyboardType='numeric'
                                        />
                                    </ContainerSection>
                                </View>
                            </View>

                            <View style={{ paddingTop: 5, height: 90 }}>
                                <View >
                                    <Text style={styles.textStyle}>Address</Text>
                                </View>

                                <View>
                                    <ContainerSection >
                                        <Input
                                            onFocus={() => {
                                                this.setModalVisible(true);
                                            }}
                                            placeholder='please input your address'
                                        />
                                    </ContainerSection>
                                </View>
                            </View>

                            <View style={styles.textAgree}>
                                <View style={{ flexDirection: 'row' }}>
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
                    <TouchableOpacity style={styles.buttonSignUp}
                        onPress={() => this.props.navigation.navigate('Login')}
                    // onPress={() => { ToastAndroid.show('Under Development', ToastAndroid.SHORT); }}
                    >
                        <Text style={styles.signupButton}>Sign Up</Text>
                    </TouchableOpacity>

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
                                                <Text style={styles.textStyle}>Province</Text>
                                            </View>
                                            <View>
                                                <ContainerSection>
                                                    <Input
                                                        placeholder='please input your province'
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
                                                        placeholder='please input your district'
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
                                                        placeholder='please input your district'
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

                                                        placeholder='please input your detail address'

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
        backgroundColor: '#ffffff',
        shadowColor: '#000',
        shadowOffset: { width: 0, heigth: 2 },
        shadowRadius: 2,
        flexDirection: 'column',
        marginTop: -65,
        height: 800,
        width: '90%',
        alignItems: 'center',
        alignSelf: 'center',
        zIndex: 1,
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
        backgroundColor: 'red',
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
        flex: 8,
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
        justifyContent: 'center'
    },
    signupButton: {
        textAlign: 'center',
        color: 'white',
        fontSize: 17,
        fontWeight: 'bold',
        fontFamily: 'Quicksand-Regular'
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

export default RegistrationBuyerPage;