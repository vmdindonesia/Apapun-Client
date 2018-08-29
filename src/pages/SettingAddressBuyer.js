import React, { Component } from 'react';
import { View, Text, ImageBackground, Image, AsyncStorage, ToastAndroid, TouchableOpacity, ScrollView, StyleSheet, TouchableHighlight, TouchableWithoutFeedback, StatusBar, Modal } from 'react-native'
import { Container, ContainerSection, Button, Input, InputDate } from '../components/common';
// import axios from 'axios';
import { COLOR } from '../shared/config';
import Icon from 'react-native-vector-icons/Ionicons';


export class SettingAddressBuyerPage extends React.Component {

    static navigationOptions = ({ navigation }) => ({
        headerLeft:
            <TouchableOpacity
                onPress={() => { navigation.goBack(); console.log(navigation.goBack(), 'Props Order') }}
            >
                <Icon size={30} style={{ marginLeft: 25, color: '#EF1C25' }} name='ios-arrow-back' />
            </TouchableOpacity>,
        headerTitle: 'Pengaturan Alamat',
        headerStyle: { marginBottom: 12.5 }
        // headerRight:
        //     <View style={{
        //         flexDirection: 'column', width: 50, height: '100%', marginRight: 15, justifyContent: 'center'
        //     }}>
        //         <TouchableOpacity
        //             onPress={() => navigation.navigate('NewAddressOnProfile')}
        //         >
        //             <Image
        //                 style={{ height: 20, width: 20, alignSelf: 'center' }}
        //                 source={require('./../assets/images/icon_plus.jpg')}
        //             />
        //             <Text style={{ fontSize: 10, color: 'black', textAlign: 'center' }}>Alamat Baru</Text>
        //         </TouchableOpacity>
        //     </View>


    });


    render() {
        return (

            <ScrollView style={{ flex: 1, color: '#eaeaea' }}>


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
                                <Text style={{ fontSize: 15, fontFamily: 'Quicksand-Bold', color: 'black' }}> Home 1</Text>
                            </View>
                            <View>
                                <Text style={{ fontSize: 15, paddingTop: 3, fontFamily: 'Quicksand-Regular', color: 'black' }}> Penerima : <Text style={{ fontSize: 15, fontFamily: 'Quicksand-Bold', color: 'black' }}>Judy</Text> </Text>
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
                        height: 60,
                        // backgroundColor: 'red',
                        alignSelf: 'center',
                        marginTop: 25
                    }}>

                        <View>
                            <Text style={{ fontSize: 15, fontFamily: 'Quicksand-Regular', color: 'black' }}>(+62)<Text> 84485300 </Text></Text>


                            <Text style={{ fontSize: 15, fontFamily: 'Quicksand-Regular', color: 'black' }}>Jl. Duri Kepa 4 No 5 </Text>

                            <Text style={{ fontSize: 15, fontFamily: 'Quicksand-Regular', color: 'black' }} >Kebon Jeruk, Jakarta Barat </Text>
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
                            <Text style={{ fontSize: 15, fontFamily: 'Quicksand-Regular', color: 'red' }}>Alamat Utama </Text>
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
                                <Text style={{ fontSize: 15, fontFamily: 'Quicksand-Bold', color: 'black' }}> Office Tangerang</Text>
                            </View>
                            <View>
                                <Text style={{ fontSize: 13.5, paddingTop: 3, fontSize: 15, fontFamily: 'Quicksand-Regular', color: 'black' }}> Penerima :<Text style={{ fontSize: 15, fontFamily: 'Quicksand-Bold', color: 'black' }}>Judy</Text> </Text>
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
                        marginTop: 25
                    }}>

                        <View>
                            <Text style={{ fontSize: 15, fontFamily: 'Quicksand-Regular', color: 'black' }}>(+62)<Text> 84485300 </Text></Text>


                            <Text style={{ fontSize: 15, fontFamily: 'Quicksand-Regular', color: 'black' }}>Jl. Ruko Golden No.08 </Text>

                            <Text style={{ fontSize: 15, fontFamily: 'Quicksand-Regular', color: 'black' }} >Kebon Jeruk, Jakarta Barat </Text>
                        </View>


                    </View>


                </View>

                <View style={{ flex: 1, height: 45, marginLeft: 15, marginRight: 15, backgroundColor: 'black', borderRadius: 25 }}
               
                >
                    <TouchableOpacity style={{ flex: 1, height: 30, marginLeft: 10, marginRight: 10, backgroundColor: 'black', borderRadius: 25, justifyContent: 'center' }}
                        onPress={() => this.props.navigation.navigate('NewAddressOnProfile')}
                    >
                        <Text style={{ fontSize: 15, fontFamily: 'Quicksand-Bold', color: 'white', textAlign: 'center' }}>Tambah Alamat</Text>
                    </TouchableOpacity>

                </View>


            </ScrollView>





        )
    }

}

const styles = StyleSheet.create({

    containerMainAddress: {
        flex: 1,
        borderRadius: 20,
        backgroundColor: '#ffffff',
        shadowColor: 'black',
        shadowOffset: { width: 10, heigth: 10 },
        shadowRadius: 5,
        shadowOpacity: 1.0,
        elevation: 3,
        flexDirection: 'column',
        // marginTop: 7.5,
        height: 180,
        width: '90%',
        // alignItems: 'center',
        // justifyContent: 'center',
        alignSelf: 'center',
        // zIndex: 1,
        borderWidth: 0.5,
        borderColor: '#d6d7da',
        marginBottom: 12.5
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
        marginTop: 3,
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

