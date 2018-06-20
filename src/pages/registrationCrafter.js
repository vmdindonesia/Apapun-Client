import React, { Component } from 'react'
import { View, Text, ImageBackground, Image, AsyncStorage, TouchableOpacity, ScrollView, StyleSheet, TouchableHighlight, TextInput, Modal } from 'react-native'
import { Container, ContainerSection, Button, InputLogin, Spinner, Input } from '../components/common';
// import axios from 'axios';
import { COLOR } from './../shared/config';
// import { NavigationActions, StackActions } from 'react-navigation';
// import { IPSERVER } from './../shared/config';
import { CheckBox } from 'react-native-elements'

export class RegistrationCrafterPage extends React.Component {

    state = {
        isModalVisible: true,
    };

    setModalVisible(visible) {
        this.setState({ modalVisible: visible });
    }


    static navigationOptions = {
        headerTitle: 'Register Crafter'
    }

    render() {
        return (

            <ImageBackground
                style={{ width: '100%', height: '100%', backgroundColor: '#e8e8e8' }}
            >
                <ScrollView>

                    <View style={styles.containerImage}>
                        <View>
                            <Image
                                style={styles.containerUpload}
                                source={require('./../assets/images/icon_profile.png')}
                            />
                        </View>
                    </View>
                    <View>
                        <Image
                            style={styles.iconCamera}
                            source={require('./../assets/images/Icon_camera.png')}
                        />
                    </View>

                    <View style={styles.containerForm}>
                        <View style={styles.formPosition}>


                            <View style={{ paddingTop: 30, height: 100 }}>
                                <View >
                                    <Text style={styles.textStyle}>Name As a Crafter</Text>
                                </View>
                                <View>
                                    <ContainerSection>
                                        <Input
                                            placeholder='please input your name as a crafter'
                                        />
                                    </ContainerSection>
                                </View>
                            </View>

                            <View style={styles.BoxAblity}>
                                <View style={{ marginBottom: 5 }}>
                                    <Text style={styles.textStyle}>Delivery Services</Text>
                                </View>
                                <View style={styles.containerCheckBoxAbility}>
                                    <View style={styles.checkBoxAbility}>
                                        <CheckBox
                                            containerStyle={{ backgroundColor: 'transparent', borderColor: 'transparent' }}
                                            title='Fashion'
                                            checked={this.state.checked}
                                            onChange={() => this.setState({ checked: !this.state.checked })}
                                        />
                                    </View>
                                </View>
                                <View style={styles.containerCheckBoxAbility}>
                                    <View style={styles.checkBoxAbility}>
                                        <CheckBox
                                            containerStyle={{ backgroundColor: 'transparent', borderColor: 'transparent' }}
                                            title='Furniture & Appliances'
                                            checked={this.state.checked}
                                            onChange={() => this.setState({ checked: !this.state.checked })}
                                        />
                                    </View>
                                </View>
                                <View style={styles.containerCheckBoxAbility}>
                                    <View style={styles.checkBoxAbility}>
                                        <CheckBox
                                            containerStyle={{ backgroundColor: 'transparent', borderColor: 'transparent' }}
                                            title='Beauty'
                                            checked={this.state.checked}
                                            onChange={() => this.setState({ checked: !this.state.checked })}
                                        />

                                    </View>
                                </View>
                                <View style={styles.containerCheckBoxAbility}>
                                    <View style={styles.checkBoxAbility}>
                                        <CheckBox
                                            containerStyle={{ backgroundColor: 'transparent', borderColor: 'transparent' }}
                                            title='DIY, Hobbies & Toys'
                                            checked={true}
                                            onChange={() => this.setState({ checked: !this.state.checked })}
                                        />
                                    </View>
                                </View>

                            </View>

                            <View style={styles.textBox}>
                                <View >
                                    <Text style={styles.textStyle}>Name As a Crafter</Text>
                                </View>
                                <View style={styles.containerCheckBoxDeliveryServices}>

                                    <View style={styles.iHave}>
                                        <CheckBox
                                            containerStyle={{ backgroundColor: 'transparent', borderColor: 'transparent' }}
                                            title='Yes, I Have'
                                            checkedIcon='dot-circle-o'
                                            uncheckedIcon='dot-circle-o'
                                            checked={true}
                                        // onChange={(checked) => console.log('I am checked', checked)}
                                        />
                                    </View>

                                    <View style={styles.iDontHave}>
                                        <CheckBox
                                            containerStyle={{ backgroundColor: 'transparent', borderColor: 'transparent' }}
                                            title='No, I Dont Have'
                                            checkedIcon='dot-circle-o'
                                            uncheckedIcon='circle-o'
                                            checked={false}
                                        // onChange={(checked) => console.log('I am checked', checked)}
                                        />
                                    </View>
                                </View>
                            </View>

                            <View style={styles.textBox}>
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

                            <View style={styles.textBox}>
                                <View >
                                    <Text style={styles.textStyle}>E-Mail</Text>
                                </View>
                                <View>
                                    <ContainerSection>
                                        <Input
                                            placeholder='please input your e-mail'
                                        />
                                    </ContainerSection>
                                </View>
                            </View>

                            <View style={styles.textBox}>
                                <View >
                                    <Text style={styles.textStyle}>Phone Number</Text>
                                </View>
                                <View>
                                    <ContainerSection>
                                        <Input
                                            placeholder='please input your phone number'
                                        />
                                    </ContainerSection>
                                </View>
                            </View>

                            <View style={styles.textBox}>
                                <View >
                                    <Text style={styles.textStyle}>Address</Text>
                                </View>
                                <View>
                                    <ContainerSection>
                                        <Input
                                            placeholder='please input your name address'
                                        />
                                    </ContainerSection>
                                </View>
                            </View>

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
                            </View>

                        </View>
                    </View>




                    <TouchableOpacity style={styles.buttonSignUp}>
                        <Text style={styles.signupButtonText}>Sign Up</Text>
                    </TouchableOpacity>






                </ScrollView>
            </ImageBackground>


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
        height: 870,
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
        marginLeft: 200
    },
    buttonSignUp: {
        // marginTop: 60,
        backgroundColor: 'red',
        borderRadius: 20,
        height: 40,
        width: 165,
        justifyContent: 'center',
        alignSelf: 'center',
        zIndex: 4,
        marginTop: -17,
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
        // position: 'absolute',
        zIndex: 0,
        // backgroundColor:'yellow'
    },
    textStyle: {
        color: 'black',
        marginLeft: 5,
        fontSize: 12,
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
        height: 40,
        width: '100%',
        flexDirection: 'row',
        // backgroundColor: 'red',
        // justifyContent: 'center',
        alignItems: 'center'
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
        // alignItems: 'center'
    },
    iHave: {
        // marginLeft: 40,
        height: 55,
        width: '50%',
        // backgroundColor: 'yellow'
        // backgroundColor: 'transparent',
        // borderColor: 'transparent'
    },
    iDontHave: {
        height: 55,
        width: '60%',
        // backgroundColor: 'red',
        marginLeft: -10
    },
    textAgree: {
        paddingTop: 10,
        height: 120
    },
});

export default RegistrationCrafterPage
