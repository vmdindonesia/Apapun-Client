import React, { Component } from 'react'
import { View, Text, ImageBackground, Image, AsyncStorage, ToastAndroid, TouchableOpacity, ScrollView, StyleSheet, TouchableHighlight, TouchableWithoutFeedback, StatusBar, Modal } from 'react-native'
import { Container, ContainerSection, Button, Input, InputDate } from '../components/common';
// import axios from 'axios';
import { COLOR } from './../shared/config';
import Icon from 'react-native-vector-icons/Ionicons';


export class SettingAddressBuyerPage extends React.Component {

    static navigationOptions = ({ navigation }) => ({
        headerLeft:
            <TouchableOpacity
                onPress={() => { console.log(this.props, 'Props Order') }}
            >
                <Icon size={30} style={{ marginLeft: 25, color: '#EF1C25' }} name='ios-arrow-back' />
            </TouchableOpacity>,
        headerTitle: 'Edit Address',
        headerRight:
            <View>
                <TouchableOpacity
                    onPress={() => { ToastAndroid.show('Under Development', ToastAndroid.SHORT); }}
                >
                    <Image
                        style={{ height: 20, width: 20, margin: 20 }}
                        source={require('./../assets/images/icon_plus.jpg')}
                    />
                </TouchableOpacity>
            </View>
    });


    render() {
        return (

            <View >


                <View style={styles.containerMainAddress}>


                    <View style={{
                        width: '100%',
                        height: 50,
                        // backgroundColor: 'red',
                        flexDirection: 'row',
                        justifyContent: 'center',
                        marginTop: 5
                    }}>

                        <View style={{
                            width: '45%',
                            height: 50,
                            // backgroundColor: 'yellow'
                        }}>

                            <View style={{
                                paddingTop: 10
                            }}>
                                <Text style={{ fontWeight: 'bold', fontSize: 15 }}> Home 1</Text>
                            </View>
                            <View>
                                <Text style={{ fontSize: 13, paddingTop: 3 }}> Penerima : Judy </Text>
                            </View>


                        </View>

                        <View style={{
                            width: '35%',
                            height: 50,
                            // backgroundColor: 'skyblue',
                            flexDirection: 'row',
                            justifyContent: 'flex-end'
                        }}>
                            <View style={{
                                paddingTop: 10
                            }}>
                                <TouchableWithoutFeedback
                                    onPress={() => this.props.navigation.navigate('SettingAddressDetailBuyer')}>

                                    <Image style={{ height: 20, width: 20, borderRadius: 0, }}
                                        source={require('./../assets/images/pen_address.png')}
                                    />

                                </TouchableWithoutFeedback>
                            </View>

                            <View style={{
                                paddingLeft: 15, paddingTop: 10
                            }}>
                                <TouchableWithoutFeedback
                                    onPress={() => { ToastAndroid.show('Under Development', ToastAndroid.SHORT); }}
                                >
                                    <Image style={{ height: 20, width: 15, borderRadius: 0 }}
                                        source={require('./../assets/images/trash_address.png')}
                                    />
                                </TouchableWithoutFeedback>
                            </View>



                        </View>
                    </View>


                    <View style={{
                        width: '78%',
                        height: 50,
                        // backgroundColor: 'red',
                        alignSelf: 'center',
                        marginTop: 5
                    }}>

                        <View>
                            <Text style={{ fontSize: 12 }}>(+62)<Text> 84485300 </Text></Text>


                            <Text style={{ fontSize: 12 }}>Jl. Duri Kepa 4 No 5 </Text>

                            <Text style={{ fontSize: 12 }} >Kebon Jeruk, Jakarta Barat </Text>
                        </View>


                    </View>


                    <View style={{
                        width: '78%',
                        height: 20,
                        // backgroundColor: 'skyblue',
                        alignSelf: 'center',
                        marginTop: 5

                    }}>
                        <View>
                            <Text style={{ fontSize: 12, color: 'red' }}>Alamat Utama </Text>
                        </View>

                    </View>




                </View>





                <View style={styles.containerMainAddress}>


                    <View style={{
                        width: '100%',
                        height: 50,
                        // backgroundColor: 'red',
                        flexDirection: 'row',
                        justifyContent: 'center',
                        marginTop: 5
                    }}>

                        <View style={{
                            width: '45%',
                            height: 50,
                            // backgroundColor: 'yellow'
                        }}>

                            <View style={{
                                paddingTop: 10
                            }}>
                                <Text style={{ fontWeight: 'bold', fontSize: 15 }}> Office Tangerang</Text>
                            </View>
                            <View>
                                <Text style={{ fontSize: 13.5, paddingTop: 3 }}> Penerima : Judy </Text>
                            </View>


                        </View>

                        <View style={{
                            width: '35%',
                            height: 50,
                            // backgroundColor: 'skyblue'
                            flexDirection: 'row',
                            justifyContent: 'flex-end'
                        }}>
                            <View style={{
                                paddingTop: 10
                            }}>
                                <TouchableWithoutFeedback
                                    onPress={() => this.props.navigation.navigate('SettingAddressDetailBuyer')}
                                >
                                    <Image style={{ height: 20, width: 20, borderRadius: 0, }}
                                        source={require('./../assets/images/pen_address.png')}
                                    />

                                </TouchableWithoutFeedback>
                            </View>

                            <View style={{
                                paddingLeft: 15, paddingTop: 10
                            }}>
                                <TouchableWithoutFeedback
                                    onPress={() => { ToastAndroid.show('Under Development', ToastAndroid.SHORT); }}>
                                    <Image style={{ height: 20, width: 15, borderRadius: 0 }}
                                        source={require('./../assets/images/trash_address.png')}
                                    />
                                </TouchableWithoutFeedback>
                            </View>



                        </View>
                    </View>


                    <View style={{
                        width: '78%',
                        height: 50,
                        // backgroundColor: 'red',
                        alignSelf: 'center',
                        marginTop: 5
                    }}>

                        <View>
                            <Text style={{ fontSize: 12 }}>(+62)<Text> 84485300 </Text></Text>


                            <Text style={{ fontSize: 12 }}>Jl. Ruko Golden No.08 </Text>

                            <Text style={{ fontSize: 12 }} >Kebon Jeruk, Jakarta Barat </Text>
                        </View>


                    </View>


                    {/* <View style={{
                        width: '78%',
                        height: 20,
                        // backgroundColor: 'skyblue',
                        alignSelf: 'center',
                        marginTop: 5

                    }}>
                    

                    </View> */}




                </View>


















            </View>





        )
    }

}

const styles = StyleSheet.create({

    containerMainAddress: {
        // flex: 1,
        borderRadius: 20,
        backgroundColor: '#ffffff',
        shadowColor: 'black',
        shadowOffset: { width: 10, heigth: 10 },
        shadowRadius: 5,
        shadowOpacity: 1.0,
        elevation: 3,
        flexDirection: 'column',
        marginTop: 5,
        height: 150,
        width: '90%',
        // alignItems: 'center',
        // justifyContent: 'center',
        alignSelf: 'center',
        // zIndex: 1,
        borderWidth: 0.5,
        borderColor: '#d6d7da',
        marginBottom: 7.5
    },

    containerSecondAddress: {
        // flex: 1,
        borderRadius: 20,
        backgroundColor: '#ffffff',
        shadowColor: 'black',
        shadowOffset: { width: 10, heigth: 10 },
        shadowRadius: 5,
        shadowOpacity: 1.0,
        elevation: 3,
        flexDirection: 'row',
        marginTop: 5,
        height: 70,
        width: '90%',
        // alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        // zIndex: 1,
        borderWidth: 0.5,
        borderColor: '#d6d7da',
    },
    containerIcon: {
        height: 155,
        width: 155,
        borderRadius: 100,
        // zIndex: 5
        borderColor: 'white',
        borderWidth: 3
    },


});

export default SettingAddressBuyerPage

