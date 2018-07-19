import React, { Component } from 'react'
import { ToastAndroid, View, Text, ImageBackground, Image, AsyncStorage, TouchableOpacity, ScrollView, StyleSheet, TouchableHighlight, TouchableWithoutFeedback, StatusBar, Modal } from 'react-native'
import { Container, ContainerSection, Button, Input, InputSearch, InputDate } from '../components/common';
// import axios from 'axios';
import { COLOR } from './../shared/config';



export class WishlistOnMyOrderPage extends React.Component {

    render() {
        return (
            <View style={{
                flex: 1
            }}>

                <View style={{
                    // marginTop: 5,
                    width: '100%',
                    height: '12.5%',
                    paddingTop: 10,
                    paddingBottom: 10,
                    // flex : 1, 
                    backgroundColor: 'white',
                    flexDirection: 'row'
                }}>

                    <View style={{
                        width: '50%',
                        height: '100%',
                        // backgroundColor: 'blue',
                        justifyContent: 'center',
                        alignContent: 'center',
                        flexDirection: 'column',
                        // borderRightWidth: 1, borderRightColor: '#e5e5e5',
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
                            <Text style={{ paddingTop: 5, fontFamily: 'Quicksand-Bold', fontSize: 13 }}>Urutkan</Text>
                        </TouchableOpacity>
                    </View>


                    <View style={{ flexDirection: 'column', borderColor: '#e5e5e5', borderWidth: 1, height: '70%', alignSelf: 'center' }} />

                    <View style={{
                        width: '50%',
                        height: '100%',
                        // backgroundColor: 'blue',
                        justifyContent: 'center',
                        alignContent: 'center',
                        flexDirection: 'column',
                        // marginTop: 20
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
                            <Text style={{ paddingTop: 5, fontFamily: 'Quicksand-Bold', fontSize: 13 }}>Filter</Text>
                        </TouchableOpacity>

                    </View>

                </View>


                <ScrollView style={{
                    backgroundColor: '#eaeaea',
                    flex: 1
                }}>

                    <View style={{
                        height: 140,
                        width: '100%',
                        // backgroundColor: 'blue',
                        flexDirection: 'row',
                        justifyContent: 'center',
                        flex: 2,
                        marginTop: 10
                    }}>

                        <View style={{
                            width: '37%',
                            height: 125,
                            // backgroundColor: 'skyblue',
                            // alignSelf: 'center'
                        }}>
                            <Image
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    borderRadius: 0,
                                    alignSelf: 'center'
                                }}
                                source={require('./../assets/images/pot_bunga.jpg')}
                            />
                        </View>


                        <View style={{
                            width: '55%',
                            height: 115,
                            // backgroundColor: 'white',
                            // alignSelf: 'center',
                            flexDirection: 'row',
                            // flex: 1,
                            // borderRadius: 20,
                            backgroundColor: '#ffffff',
                            // shadowColor: 'black',
                            shadowOffset: { width: 10, heigth: 10 },
                            shadowRadius: 5,
                            shadowOpacity: 1.0,
                            // borderWidth: 0.5,
                            borderColor: '#d6d7da',
                            zIndex: 1,
                            marginTop: 5
                        }}>

                            <View style={{
                                height: '100%',
                                width: '100%',
                                paddingLeft: 20,
                                marginTop: 20
                                // backgroundColor: 'red',
                                // justifyContent: 'center'
                            }}>
                                <View style={{ justifyContent: 'center' }}>

                                    <Text style={{ fontSize: 15, paddingTop: 5, fontFamily: 'Quicksand-Bold' }}>Elegant Pottery</Text>
                                    <Text style={{ fontSize: 13, paddingTop: 5, fontFamily: 'Quicksand-Regular' }}>Dipesan Dari :
                                          <Text style={{ color: 'red', fontSize: 13, paddingTop: 3, fontFamily: 'Quicksand-Regular' }}>Workshop</Text></Text>


                                </View>
                            </View>
                        </View>

                        <View style={{
                            backgroundColor: 'red',
                            height: 40,
                            width: 100,
                            flexDirection: 'row',
                            justifyContent: 'center',
                            borderRadius: 100,
                            zIndex: 2,
                            marginLeft: -110,
                            marginTop: 100,
                            paddingRight: 10,
                            marginRight: 10
                        }}>
                            <TouchableOpacity style={{ alignSelf: 'center', paddingRight: 2 }}
                                onPress={() => { ToastAndroid.show('Under Development', ToastAndroid.SHORT); }}
                            >
                                <Image
                                    style={{
                                        width: 20,
                                        height: 20,
                                        borderRadius: 0,
                                        // alignSelf: 'center'
                                    }}
                                    source={require('./../assets/images/pen_white.png')}

                                />
                            </TouchableOpacity>


                            <Image
                                style={{
                                    width: 18,
                                    height: 18,
                                    borderRadius: 0,
                                    alignSelf: 'center'
                                }}
                                source={require('./../assets/images/line_vertical.png')}
                            />

                            <TouchableOpacity style={{ alignSelf: 'center', paddingLeft: 5 }}
                                onPress={() => { ToastAndroid.show('Under Development', ToastAndroid.SHORT); }}
                            >
                                <Image
                                    style={{
                                        width: 18,
                                        height: 24,
                                        borderRadius: 0,
                                        alignSelf: 'center'
                                    }}
                                    source={require('./../assets/images/trash_white.png')}

                                />
                            </TouchableOpacity>

                        </View>
                    </View>

                    <View style={{
                        height: 140,
                        width: '100%',
                        // backgroundColor: 'blue',
                        flexDirection: 'row',
                        justifyContent: 'center',
                        flex: 2,
                        marginTop: 10
                    }}>

                        <View style={{
                            width: '37%',
                            height: 125,
                            // backgroundColor: 'skyblue',
                            // alignSelf: 'center'
                        }}>
                            <Image
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    borderRadius: 0,
                                    alignSelf: 'center'
                                }}
                                source={require('./../assets/images/air_jordan.jpg')}
                            />
                        </View>


                        <View style={{
                            width: '55%',
                            height: 115,
                            // backgroundColor: 'white',
                            // alignSelf: 'center',
                            flexDirection: 'row',
                            // flex: 1,
                            // borderRadius: 20,
                            backgroundColor: '#ffffff',
                            // shadowColor: 'black',
                            shadowOffset: { width: 10, heigth: 10 },
                            shadowRadius: 5,
                            shadowOpacity: 1.0,
                            // borderWidth: 0.5,
                            borderColor: '#d6d7da',
                            zIndex: 1,
                            marginTop: 5
                        }}>

                            <View style={{
                                height: '100%',
                                width: '100%',
                                paddingLeft: 20,
                                marginTop: 20
                                // backgroundColor: 'red',
                                // justifyContent: 'center'
                            }}>
                                <View style={{ justifyContent: 'center' }}>

                                    <Text style={{ fontSize: 15, paddingTop: 5, fontFamily: 'Quicksand-Bold' }}>Air Jordan</Text>
                                    <Text style={{ fontSize: 13, paddingTop: 5, fontFamily: 'Quicksand-Regular' }}>Dipesan Dari :
                                          <Text style={{ color: 'red', fontSize: 13, paddingTop: 3, fontFamily: 'Quicksand-Regular' }}>Market</Text></Text>


                                </View>
                            </View>
                        </View>

                        <View style={{
                            backgroundColor: 'red',
                            height: 40,
                            width: 100,
                            flexDirection: 'row',
                            justifyContent: 'center',
                            borderRadius: 100,
                            zIndex: 2,
                            marginLeft: -110,
                            marginTop: 100,
                            paddingRight: 10,
                            marginRight: 10
                        }}>
                            <TouchableOpacity style={{ alignSelf: 'center', paddingRight: 2, }}
                                onPress={() => { ToastAndroid.show('Under Development', ToastAndroid.SHORT); }}
                            >
                                <Image
                                    style={{
                                        width: 20,
                                        height: 20,
                                        borderRadius: 0,
                                        // alignSelf: 'center'

                                    }}
                                    source={require('./../assets/images/pen_white.png')}
                                />
                            </TouchableOpacity>


                            <Image
                                style={{
                                    width: 18,
                                    height: 18,
                                    borderRadius: 0,
                                    alignSelf: 'center'
                                }}
                                source={require('./../assets/images/line_vertical.png')}
                            />

                            <TouchableOpacity style={{ alignSelf: 'center', paddingLeft: 5 }}
                                onPress={() => { ToastAndroid.show('Under Development', ToastAndroid.SHORT); }}
                            >
                                <Image
                                    style={{
                                        width: 18,
                                        height: 24,
                                        borderRadius: 0,
                                        alignSelf: 'center'
                                    }}
                                    source={require('./../assets/images/trash_white.png')}
                                />
                            </TouchableOpacity>

                        </View>
                    </View>





                </ScrollView>


            </View >
        )
    }

}

const styles = StyleSheet.create({


});

export default WishlistOnMyOrderPage

