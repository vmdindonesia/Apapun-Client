import React, { Component } from 'react'
import { View, Text, ImageBackground, Image, AsyncStorage, TouchableOpacity, ScrollView, StyleSheet, TouchableHighlight, TouchableWithoutFeedback, StatusBar, Modal } from 'react-native'
import { Container, ContainerSection, Button, Input, InputSearch, InputDate } from '../components/common';
// import axios from 'axios';
import { COLOR } from './../shared/config';




export class OrderOnMyOrderPage extends React.Component {

    pressBUtton() {
        console.log('Press!');
        console.log(this.props, 'Props')
        this.props.navi.navigate('DetailOrder')
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
                    // flex : 1, 
                    // backgroundColor: 'yellow',
                    flexDirection: 'row'
                }}>

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

                <ScrollView style={{
                    backgroundColor: '#eaeaea',
                    flex: 1
                }}>
                    <TouchableOpacity
                        onPress={() => this.pressBUtton()}
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
                                width: '37%',
                                height: 155,
                                backgroundColor: 'skyblue',
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
                                height: 150,
                                // backgroundColor: 'white',
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
                                    height: 100,
                                    // backgroundColor: 'black'
                                    // justifyContent: 'center',
                                    flexDirection: 'row'
                                }}>
                                    <View style={{
                                        height: 100,
                                        width: '60%',
                                        // backgroundColor: 'red',
                                        justifyContent: 'center'
                                    }}>
                                        <View style={{ alignSelf: 'center' }}>

                                            <Text style={{ fontSize: 12, color: 'red' }}>19749373437D</Text>
                                            <Text style={{ fontSize: 15, paddingTop: 5, fontWeight: 'bold' }}>My Own Table</Text>
                                            <Text style={{ fontSize: 10, paddingTop: 5 }}>Dipesan Dari : </Text>
                                            <Text style={{ color: 'red', fontSize: 10, paddingTop: 3 }}>Workshop</Text>

                                        </View>

                                    </View>
                                    <View style={{
                                        height: 100,
                                        width: '40%',
                                        // backgroundColor: 'skyblue',
                                        justifyContent: 'center'
                                    }}>
                                        <Image
                                            style={{
                                                width: 50,
                                                height: 50,
                                                borderRadius: 100,

                                                alignSelf: 'center',
                                                // paddingTop:-15
                                            }}
                                            source={require('./../assets/images/ic_onprocess.png')}
                                        />
                                    </View>
                                </View>


                                <View style={{
                                    width: '100%',
                                    height: 50,
                                    // backgroundColor: 'yellow',
                                    flexDirection: 'row',
                                    flex: 2
                                    // justifyContent:'center'
                                }}>
                                    <View style={{
                                        height: 50,
                                        width: '50%',
                                        // backgroundColor: 'red',
                                        justifyContent: 'center'
                                    }}>
                                        <Text style={{ fontSize: 12, textAlign: 'center' }}>Jumlah : (2)</Text>
                                    </View>
                                    <View style={{
                                        height: 50,
                                        width: '50%',
                                        // backgroundColor: 'blue',
                                        justifyContent: 'center',
                                    }}>
                                        <Text style={{ fontSize: 12, textAlign: 'center', fontWeight: 'bold' }} >Rp. 1.500.000 </Text>
                                    </View>
                                </View>


                            </View>

                        </View>
                    </TouchableOpacity>


                    <TouchableOpacity>
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
                                width: '37%',
                                height: 155,
                                backgroundColor: 'skyblue',
                                alignSelf: 'center'
                            }}>
                                <Image
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                        borderRadius: 0,
                                        alignSelf: 'center'
                                    }}
                                    source={require('./../assets/images/vans_shoes.jpg')}
                                />
                            </View>

                            <View style={{
                                width: '55%',
                                height: 150,
                                // backgroundColor: 'white',
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
                                    height: 100,
                                    // backgroundColor: 'black'
                                    // justifyContent: 'center',
                                    flexDirection: 'row'
                                }}>
                                    <View style={{
                                        height: 100,
                                        width: '60%',
                                        // backgroundColor: 'red',
                                        justifyContent: 'center'
                                    }}>
                                        <View style={{ alignSelf: 'center' }}>
                                            {/* <TouchableOpacity> */}
                                            <Text style={{ fontSize: 12, color: 'red' }}>1934378UDJA9</Text>
                                            <Text style={{ fontSize: 15, paddingTop: 5, fontWeight: 'bold' }}>Vans Shoes</Text>
                                            <Text style={{ fontSize: 10, paddingTop: 5 }}>Dipesan Dari : </Text>
                                            <Text style={{ color: 'red', fontSize: 10, paddingTop: 3 }}>Seija Company</Text>
                                            {/* </TouchableOpacity> */}
                                        </View>

                                    </View>
                                    <View style={{
                                        height: 100,
                                        width: '40%',
                                        // backgroundColor: 'skyblue',
                                        justifyContent: 'center'
                                    }}>
                                        <Image
                                            style={{
                                                width: 50,
                                                height: 50,
                                                borderRadius: 100,

                                                alignSelf: 'center',
                                                // paddingTop:-15
                                            }}
                                            source={require('./../assets/images/ic_sending.png')}
                                        />
                                    </View>


                                </View>

                                <View style={{
                                    width: '100%',
                                    height: 50,
                                    // backgroundColor: 'yellow',
                                    flexDirection: 'row',
                                    flex: 2
                                    // justifyContent:'center'
                                }}>
                                    <View style={{
                                        height: 50,
                                        width: '50%',
                                        // backgroundColor: 'red',
                                        justifyContent: 'center'
                                    }}>
                                        <Text style={{ fontSize: 12, textAlign: 'center' }}>Jumlah : (1)</Text>
                                    </View>
                                    <View style={{
                                        height: 50,
                                        width: '50%',
                                        // backgroundColor: 'blue',
                                        justifyContent: 'center',
                                    }}>
                                        <Text style={{ fontSize: 12, textAlign: 'center', fontWeight: 'bold' }} >Rp. 900.000 </Text>
                                    </View>
                                </View>


                            </View>
                        </View>
                    </TouchableOpacity>

                </ScrollView>





            </View>
        )
    }

}

const styles = StyleSheet.create({


});

export default OrderOnMyOrderPage
