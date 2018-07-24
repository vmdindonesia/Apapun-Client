import React, { Component } from 'react';
import { View, Text, Animated, ImageBackground, Image, AsyncStorage, TouchableOpacity, ScrollView, StyleSheet, TouchableHighlight, TouchableWithoutFeedback, StatusBar, Modal } from 'react-native'
import { Container, ContainerSection, Button, Input, InputSearch, InputDate } from '../components/common';
// import axios from 'axios';
import { COLOR } from '../shared/config';
import Icon from 'react-native-vector-icons/Ionicons';

export class DesignSayaPage extends React.Component {


    static navigationOptions = ({ navigation }) => ({
        headerLeft:
            <TouchableOpacity
                onPress={() => { navigation.goBack(); console.log(navigation.goBack(), 'Props Order') }}
            >
                <Icon size={30} style={{ marginLeft: 25, color: '#EF1C25' }} name='ios-arrow-back' />
            </TouchableOpacity>,
        headerTitle: 'Design Saya',
        headerStyle: {
            elevation: 0
        }
    });

    render() {
        return (
            <View style={{
                flex: 1
            }}>

                <View style={{
                    width: '100%',
                    backgroundColor: 'white',
                    height: '12.5%',
                    flexDirection: 'row'
                }}>

                    <View style={{
                        width: '50%',
                        height: '100%',
                        justifyContent: 'center',
                        alignContent: 'center',
                        flexDirection: 'column'
                    }}>

                        <TouchableOpacity style={{ alignSelf: 'center' }}>
                            <Image
                                style={{
                                    width: 18,
                                    height: 18,
                                    borderRadius: 0,
                                    alignSelf: 'center'
                                }}
                                source={require('./../assets/images/ic_sort.png')}
                            />
                            <Text style={{ paddingTop: 5 }}>Urutkan</Text>
                        </TouchableOpacity>
                    </View>

                    <Image
                        style={{
                            width: 18,
                            height: 35,
                            borderRadius: 0,
                            alignSelf: 'center'
                        }}
                        source={require('./../assets/images/line_vertical.png')}
                    />

                    <View style={{
                        width: '50%',
                        height: '100%',
                        // backgroundColor: 'blue',
                        justifyContent: 'center',
                        alignContent: 'center',
                        flexDirection: 'column'
                    }}>
                        <TouchableOpacity style={{ alignSelf: 'center' }}>
                            <Image
                                style={{
                                    width: 18,
                                    height: 18,
                                    borderRadius: 0,
                                    alignSelf: 'center'
                                }}
                                source={require('./../assets/images/ic_filter.png')}
                            />
                            <Text style={{ paddingTop: 5 }}>Filter</Text>
                        </TouchableOpacity>

                    </View>

                </View>

                <ScrollView>
                        <View style={{
                            width: '100%',
                            height: '25%',
                            paddingTop: 50,
                            marginBottom: 230,
                            flexDirection: 'row'
                        }}>

                            <View style={{
                                width: '50%',
                                height: '120%',
                                paddingTop: 60,
                                justifyContent: 'center',
                                alignContent: 'center',
                                flexDirection: 'column'
                            }}>

                                <TouchableOpacity style={{ alignSelf: 'center' }}
                                    onPress={() => this.props.navigation.navigate('PageDesign')}>
                                    <Image
                                        style={{
                                            width: 195,
                                            height: 250,
                                            borderRadius: 0,
                                            alignSelf: 'center'
                                        }}
                                        source={require('./../assets/images/kaos.jpg')}
                                    />
                                </TouchableOpacity>
                                <View style={styles.containerSecondForm}>
                                    <View style={{
                                        height: 100,
                                        width: 200,
                                        backgroundColor: ''
                                    }}>
                                        <View style={{ paddingLeft: 180 }}>
                                            <Image
                                                style={{ width: 20, height: 20, paddingTop: 10 }}
                                                source={require('./../assets/images/Cukup.png')}
                                            />
                                            <Text>(1)</Text>
                                        </View>
                                        <View style={{ paddingLeft: 5, top: -35 }}>
                                            <Text style={{ fontFamily: 'Quicksand-Regular', fontWeight: 'bold', marginRight: 25, paddingTop: 10, paddingLeft: 10 }}>My Own Table</Text>
                                            <Text style={{ fontFamily: 'Quicksand-Regular', marginRight: 25, paddingTop: 20, paddingLeft: 10, fontSize: 13 }}>Total apresiasi</Text>
                                            <Text style={{ fontFamily: 'Quicksand-Regular', paddingLeft: 20, color: 'red' }}>Rp. 20.000</Text>

                                            <View style={{ paddingLeft: 130, top: -30 }}>
                                                <Text style={{ fontSize: 13, fontFamily: 'Quicksand-Regular' }}>Terjual</Text>
                                                <Text style={{ fontSize: 13, fontFamily: 'Quicksand-Regular', color: 'red', paddingLeft: 15 }}>10</Text>
                                            </View>

                                        </View>
                                    </View>


                                </View>

                            </View>


                            <View style={{
                                width: '50%',
                                height: '120%',
                                paddingTop: 60,
                                justifyContent: 'center',
                                paddingLeft: 15,
                                alignContent: 'center',
                                flexDirection: 'column'
                            }}>
                                <TouchableOpacity style={{ alignSelf: 'center' }}
                                    onPress={() => this.props.navigation.navigate('PageDesign')}>
                                    <Image
                                        style={{
                                            width: 195,
                                            height: 250,
                                            borderRadius: 0,
                                            alignSelf: 'center'
                                        }}
                                        source={require('./../assets/images/table1_example.jpg')}
                                    />
                                </TouchableOpacity>

                                <View style={styles.containerSecond}>
                                    <View style={{
                                        height: 100,
                                        width: 200,
                                        backgroundColor: ''
                                    }}>
                                        <View style={{ paddingLeft: 160 }}>
                                            <Image
                                                style={{ width: 20, height: 20, paddingTop: 10 }}
                                                source={require('./../assets/images/Cukup.png')}
                                            />
                                            <Text> (1)</Text>
                                        </View>
                                        <View style={{ paddingLeft: 5, top: -35 }}>
                                            <Text style={{ fontFamily: 'Quicksand-Regular', fontWeight: 'bold', marginRight: 25, paddingTop: 10, paddingLeft: 10 }}>legant Plain T-shirt</Text>
                                            <Text style={{ fontFamily: 'Quicksand-Regular', marginRight: 25, paddingTop: 20, paddingLeft: 10, fontSize: 13 }}>Total apresiasi</Text>
                                            <Text style={{ fontFamily: 'Quicksand-Regular', paddingLeft: 20, color: 'red' }}>Rp. 20.000</Text>

                                            <View style={{ paddingLeft: 130, top: -30 }}>
                                                <Text style={{ fontSize: 13, fontFamily: 'Quicksand-Regular' }}>Terjual</Text>
                                                <Text style={{ fontSize: 13, fontFamily: 'Quicksand-Regular', color: 'red', paddingLeft: 15 }}>10</Text>
                                            </View>

                                        </View>

                                    </View>





                                </View>


                            </View>



                        </View>

                    <View style={styles.anj}>
                        <View style={{
                            width: '100%',
                            height: '50%',
                            backgroundColor: '',
                            flexDirection: 'row'
                        }}>

                            <View style={{
                                width: '50%',
                                height: '120%',
                                paddingTop: 10,
                                justifyContent: 'center',
                                alignContent: 'center',
                                flexDirection: 'column'
                            }}>

                                <TouchableOpacity style={{ alignSelf: 'center' }}
                                    onPress={() => this.props.navigation.navigate('PageDesign')}>
                                    <Image
                                        style={{
                                            width: 200,
                                            height: 250,
                                            borderRadius: 0,
                                            alignSelf: 'center'
                                        }}
                                        source={require('./../assets/images/lala.jpg')}
                                    />
                                </TouchableOpacity>
                                <View style={styles.containerSec}>
                                    <Text style={{ fontFamily: 'Quicksand-Regular', paddingTop: 10, paddingLeft: 20 }}>Desain belum terdaftar</Text>


                                </View>

                               

                            </View>


                        </View>
                    </View>
                    <View style={styles.butin}>
                                    <TouchableOpacity style={styles.buttonSignUp}
                                   onPress={() => this.props.navigation.navigate('SettingProduct')} >
                                        <Text style={styles.signupButton}>Daftar</Text>
                                    </TouchableOpacity>
                                </View>


                </ScrollView>

            </View>
        )
    }

}

const styles = StyleSheet.create({
    containerSecondForm: {
        flex: 1,
        backgroundColor: '#ffffff',
        shadowColor: 'black',
        shadowOffset: { width: 10, heigth: 10 },
        shadowRadius: 5,
        shadowOpacity: 1.0,
        elevation: 3,
        flexDirection: 'row',
        height: 100,
        width: '100%',
        // alignItems: 'center',
        // justifyContent: 'center',
        // alignSelf: 'center',
        // zIndex: 1,
        borderWidth: 0.5,
        borderColor: '#d6d7da'
    },
    containerSecond: {
        flex: 1,
        backgroundColor: '#ffffff',
        shadowColor: 'black',
        shadowOffset: { width: 10, heigth: 10 },
        shadowRadius: 5,
        shadowOpacity: 1.0,
        elevation: 3,
        flexDirection: 'row',
        height: 100,
        marginRight: 20,
        width: '100%',
        // alignItems: 'center',
        // justifyContent: 'center',
        // alignSelf: 'center',
        // zIndex: 1,
        borderWidth: 0.5,
        borderColor: '#d6d7da'
    },
    containerSec: {
        flex: 1,
        backgroundColor: '#ffffff',
        shadowColor: 'black',
        shadowOffset: { width: 10, heigth: 10 },
        shadowRadius: 5,
        shadowOpacity: 1.0,
        elevation: 3,
        flexDirection: 'row',
        height: 30,
        width: '100%',
        // alignItems: 'center',
        // justifyContent: 'center',
        // alignSelf: 'center',
        // zIndex: 1,
        borderWidth: 0.5,
        borderColor: '#d6d7da'
    },
    anj: {
        flex: 1,
        width: '100%',
        marginTop: -85,
        zIndex:0,
    },
    butin: {
        zIndex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        height: 90,
        marginTop: -245,
        width: 200
    },
    signupButton: {
        textAlign: 'center',
        color: 'white',
        fontSize: 15,
        fontFamily: 'Quicksand-Reguler'
    },
    buttonSignUp: {
        backgroundColor: 'red',
        borderRadius: 20,
        height: 40,
        width: 100,
        marginTop: -50,
        justifyContent: 'center',
        alignSelf: 'center',
        fontFamily: 'Quicksand-Regular'
        // zIndex: 2
    }



})

export default DesignSayaPage