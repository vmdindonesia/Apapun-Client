import React, { Component } from 'react'
import { View, Text, ImageBackground, Image, AsyncStorage, TouchableOpacity, ScrollView, StyleSheet, TouchableHighlight, Modal } from 'react-native'
import { Container, ContainerSection, Button, InputLogin, Spinner, Input } from '../components/common';
// import axios from 'axios';
import { COLOR } from './../shared/config';
// import { NavigationActions, StackActions } from 'react-navigation';
// import { IPSERVER } from './../shared/config';
import { CheckBox } from 'react-native-elements'

export class RegistrationPage extends React.Component {
    static navigationOptions = {
        header: null
    }

    state = {
        modalVisible: false,
      };

    setModalVisible(visible) {
        this.setState({modalVisible: visible});
      }

    render() {
        return (

            <ImageBackground
                // source={require('./../assets/images/bg-dashboard.png')}
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

                        {/* <View style={styles.formPosition}>
                            <Text style={{ color: 'black', marginLeft: 5, fontSize: 12, fontWeight: 'bold' }}>Username</Text>
                            <ContainerSection>
                                <Input
                                    placeholder='please input your username'
                                />
                            </ContainerSection>

                            <Text style={{ color: 'black', marginLeft: 5, fontSize: 12, fontWeight: 'bold' }}>Gender</Text>

                            <View style={styles.containerCheckBox}>

                                <View style={styles.checkBoxMale}>
                                    <CheckBox
                                        // label='Male'
                                        checkedIcon='dot-circle-o'
                                        checked={true}
                                        onChange={(checked) => console.log('I am checked', checked)}
                                    />
                                </View>

                                <View style={styles.checkBoxFemale}>
                                    <CheckBox
                                        // label='Female'
                                        checkedIcon='dot-circle-o'
                                        checked={false}
                                        onChange={(checked) => console.log('I am checked', checked)}
                                    />
                                </View>
                            </View>




                            <Text style={{ color: 'black', marginLeft: 5, fontSize: 12, fontWeight: 'bold' }}>Password</Text>
                            <ContainerSection>
                                <Input
                                    placeholder='please input your password'
                                />
                            </ContainerSection>


                        </View> */}

                    </View>
                    <TouchableOpacity style={styles.buttonSignUp}>
                        <Text style={{ textAlign: 'center', color: 'white', fontSize: 20, fontWeight: 'bold' }}>SIGN UP</Text>
                    </TouchableOpacity>

                </ScrollView>
            </ImageBackground>
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
        backgroundColor: 'rgba(0,0,0,0.5)',
        shadowColor: '#000',
        shadowOffset: { width: 0, heigth: 2 },
        shadowRadius: 2,
        flexDirection: 'column',
        marginTop: -75,
        // marginLeft: 20,
        height: 470,
        width: 320,
        alignItems: 'center',
        alignSelf: 'center',
        zIndex: 1
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
        height: 35,
        width: 165,
        justifyContent: 'center',
        alignSelf: 'center',
        zIndex: 4,
        marginTop: -17
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
    containerCheckBox: {
        marginLeft: 5,
        height: 35,
        width: 265,
        flexDirection: 'row',
        // backgroundColor: 'blue'
    },
    checkBoxMale: {
        marginLeft: 45,
        height: 35,
        width: 110,
        // backgroundColor: 'yellow'
    },
    checkBoxFemale: {
        height: 35,
        width: 110,
        // backgroundColor: 'red'
    },
});

export default RegistrationPage;