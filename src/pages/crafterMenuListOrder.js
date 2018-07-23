import React, { Component } from 'react'
import { ToastAndroid, View, Text, ImageBackground, Image, AsyncStorage, TouchableOpacity, ScrollView, StyleSheet, TouchableHighlight, TouchableWithoutFeedback, StatusBar, Modal } from 'react-native'
// import axios from 'axios';

export class crafterMenuListOrderPage extends React.Component {


    static navigationOptions = {
        headerTitle: 'Pesanan Saya',
        headerStyle: {
            // shadowOpacity: 0,
            elevation: 0,
            borderBottomColor: 'white',
            borderBottomWidth: 0
        },
    }

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
                    flexDirection: 'row',
                    backgroundColor: 'white'
                }}>

                    <View style={{
                        width: '50%',
                        height: '100%',
                        justifyContent: 'center',
                        alignContent: 'center',
                        flexDirection: 'column',
                    }}>

                        <TouchableOpacity style={{ alignSelf: 'center' }}>
                            <Image
                                style={{
                                    width: 18,
                                    height: 18,
                                    borderRadius: 0,
                                    alignSelf: 'center',

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
                            <Text style={{ paddingTop: 5, fontFamily: 'Quicksand-Bold', fontSize: 13 }}>Filter</Text>
                        </TouchableOpacity>

                    </View>

                </View>

                <ScrollView style={{
                    backgroundColor: '#eaeaea',
                    flex: 1
                }}>
                    <TouchableOpacity
                    // onPress={() => this.pressBUtton()}
                    // onPress={() => this.props.navi.navigate('OrderWithTrack')}
                    >
                        <View style={{
                            height: 165,
                            width: '100%',
                            // backgroundColor: 'blue',
                            flexDirection: 'row',
                            justifyContent: 'center',
                            flex: 2,
                            marginTop: 10
                        }}>

                            <View style={{
                                width: '35%',
                                height: 155,
                                // backgroundColor: 'skyblue',
                                alignSelf: 'center'
                            }}>
                                <Image
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                        borderRadius: 0,
                                        alignSelf: 'center'
                                    }}
                                    source={require('./../assets/images/table1_example.jpg')}
                                />
                            </View>


                            <View style={{
                                width: '55%',
                                height: 140,
                                // backgroundColor: 'black',
                                alignSelf: 'center',
                                flexDirection: 'column',
                                // flex: 1,
                                // borderRadius: 20,
                                backgroundColor: '#ffffff',
                                // shadowColor: 'black',
                                shadowOffset: { width: 10, heigth: 10 },
                                shadowRadius: 5,
                                shadowOpacity: 1.0,
                                // borderWidth: 0.5,
                                borderColor: '#d6d7da',
                            }}>

                                <View style={{
                                    width: '100%',
                                    height: 85,
                                    // backgroundColor: 'skyblue',
                                    // justifyContent: 'center',
                                    flexDirection: 'row'
                                }}>
                                    <View style={{
                                        height: 100,
                                        // width: '60%',
                                        // backgroundColor: 'red',
                                        // justifyContent: 'center',
                                        flex: 1
                                    }}>
                                        <View style={{ paddingTop: 15, paddingLeft: 10 }}>
                                            <Text style={{ fontSize: 13, fontFamily: 'Quicksand-Regular', color: 'black' }}>Pesanan          :</Text>
                                            <Text style={{ fontSize: 13, fontFamily: 'Quicksand-Regular', color: 'black' }}>Dipesan Oleh  :</Text>
                                            <Text style={{ fontSize: 13, fontFamily: 'Quicksand-Regular', color: 'black' }}>Service Type   :</Text>
                                        </View>

                                    </View>

                                    <View style={{
                                        height: 100,
                                        flex: 1,
                                        // width: '40%',
                                        // backgroundColor: 'yellow',
                                        // justifyContent: 'center'
                                    }}>
                                        <View style={{ paddingTop: 13.5, paddingLeft: 5 }}>
                                            <Text style={{ fontSize: 12, fontFamily: 'Quicksand-Regular', color: 'black', fontWeight: 'bold' }}>199AGKJH87</Text>
                                            <Text style={{ fontSize: 12, fontFamily: 'Quicksand-Regular', color: 'black', fontWeight: 'bold' }}>Gal Gadot</Text>
                                            <Text style={{ fontSize: 12, fontFamily: 'Quicksand-Regular', color: 'black', fontWeight: 'bold' }}>Workshop</Text>
                                            <Text style={{ fontSize: 12, fontFamily: 'Quicksand-Regular', color: 'black', fontWeight: 'bold' }}>(Adv.Custom)</Text>
                                        </View>

                                    </View>


                                </View>


                                <View style={{
                                    width: '100%',
                                    height: 45,
                                    // backgroundColor: 'yellow',
                                    flexDirection: 'row',
                                    flex: 2
                                    // justifyContent:'center'
                                }}>
                                    <View style={{
                                        height: '100%',
                                        // width: '50%',
                                        // backgroundColor: 'red',
                                        justifyContent: 'center',
                                        flex: 1
                                    }}>
                                        <View style={{ margin: 5, borderRadius: 100, borderColor: 'gray', borderWidth: 2, flex: 1, justifyContent: 'center' }}>
                                            <TouchableOpacity>
                                                <Text style={{ fontSize: 13, textAlign: 'center', fontFamily: 'Quicksand-Regular', color: 'green', fontWeight: 'bold' }}>OK</Text>
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                    <View style={{
                                        height: 50,
                                        // width: '50%',
                                        flex: 1,
                                        // backgroundColor: 'blue',
                                        justifyContent: 'center',
                                    }}>
                                        <TouchableOpacity>
                                            <Image
                                                style={{
                                                    width: 30,
                                                    height: 30,
                                                    borderRadius: 0,
                                                    // alignSelf: 'center'
                                                    marginLeft: 5
                                                }}
                                                source={require('./../assets/images/Chat.png')}
                                            />
                                        </TouchableOpacity>
                                    </View>
                                </View>


                            </View>

                        </View>
                    </TouchableOpacity>




                </ScrollView>





            </View >
        )
    }

}

const styles = StyleSheet.create({


});

export default crafterMenuListOrderPage

