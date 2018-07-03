import React, { Component } from 'react'
import { View, Text, ImageBackground, Image, AsyncStorage, TouchableOpacity, ScrollView, StyleSheet, TouchableHighlight, TouchableWithoutFeedback, StatusBar, Modal } from 'react-native'
import { Container, ContainerSection, Button, Input, InputSearch, InputDate } from '../components/common';
// import axios from 'axios';
import { COLOR } from './../shared/config';



export class HistoryOnMyOrderPage extends React.Component {

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
                            <Text style={{ paddingTop: 5 }}>Filter</Text>
                        </TouchableOpacity>

                    </View>


                </View>
                <ScrollView style={{
                    backgroundColor: '#eaeaea',
                    flex: 1
                }}>

                    <View>
                        <View style={{
                            flexDirection: 'row',
                            justifyContent: 'flex-end',
                            alignItems: 'center',
                            // alignSelf:'center'
                        }}>
                            <Text style={{
                                color: 'black',
                                fontSize: 12,
                                marginBottom: -7,
                                marginTop: 7,
                                paddingRight: 10
                            }}>Dipesan pada 18 Februari 2018</Text>
                        </View>

                        <TouchableOpacity
                        // onPress={() => this.pressBUtton()}
                        >
                            <View style={{
                                height: 135,
                                width: '100%',
                                // backgroundColor: 'blue',
                                flexDirection: 'row',
                                justifyContent: 'center',
                                flex: 2,
                                marginTop: 10
                            }}>

                                <View style={{
                                    width: '40%',
                                    height: 130,
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
                                    height: 120,
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
                                        height: 120,
                                        // backgroundColor: 'black',
                                        justifyContent: 'center',
                                        flexDirection: 'row'
                                    }}>
                                        <View style={{
                                            height: 120,
                                            width: '75%',
                                            // backgroundColor: 'red',
                                            justifyContent: 'center'
                                        }}>
                                            <View style={{ paddingLeft: 15 }}>

                                                <Text style={{ fontSize: 12, color: 'red' }}>19749373437D</Text>
                                                <Text style={{ fontSize: 15, paddingTop: 5, fontWeight: 'bold' }}>My Own Table</Text>
                                                <Text style={{ fontSize: 10, paddingTop: 5 }}>Dipesan Dari :
                                             <Text style={{ color: 'red', fontSize: 10, paddingTop: 3 }}>Workshop</Text>
                                                </Text>


                                            </View>

                                        </View>
                                        <View style={{
                                            height: 50,
                                            width: '25%',
                                            // backgroundColor: 'skyblue',
                                            justifyContent: 'center'
                                        }}>
                                            <Image
                                                style={{
                                                    width: 30,
                                                    height: 30,
                                                    borderRadius: 0,

                                                    alignSelf: 'center',
                                                    marginTops: 20
                                                }}
                                                source={require('./../assets/images/green_check.png')}
                                            />
                                        </View>
                                    </View>



                                </View>

                            </View>
                        </TouchableOpacity>
                    </View>


                    <View>
                        <View style={{
                            flexDirection: 'row',
                            justifyContent: 'flex-end',
                            alignItems: 'center',
                            // alignSelf:'center'
                        }}>
                            <Text style={{
                                color: 'black',
                                fontSize: 12,
                                marginBottom: -7,
                                marginTop: 7,
                                paddingRight: 10
                            }}>Dipesan pada 20 Januari 2018</Text>
                        </View>

                        <TouchableOpacity
                        // onPress={() => this.pressBUtton()}
                        >
                            <View style={{
                                height: 135,
                                width: '100%',
                                // backgroundColor: 'blue',
                                flexDirection: 'row',
                                justifyContent: 'center',
                                flex: 2,
                                marginTop: 10
                            }}>

                                <View style={{
                                    width: '40%',
                                    height: 130,
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
                                        source={require('./../assets/images/chair_example.jpg')}
                                    />
                                </View>


                                <View style={{
                                    width: '55%',
                                    height: 120,
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
                                        height: 120,
                                        // backgroundColor: 'black',
                                        justifyContent: 'center',
                                        flexDirection: 'row'
                                    }}>
                                        <View style={{
                                            height: 120,
                                            width: '75%',
                                            // backgroundColor: 'red',
                                            justifyContent: 'center'
                                        }}>
                                            <View style={{ paddingLeft: 15 }}>

                                                <Text style={{ fontSize: 12, color: 'red' }}>1974937873B6B</Text>
                                                <Text style={{ fontSize: 15, paddingTop: 5, fontWeight: 'bold' }}>Elegant Table</Text>
                                                <Text style={{ fontSize: 10, paddingTop: 5 }}>Dipesan Dari :
                                             <Text style={{ color: 'red', fontSize: 10, paddingTop: 3 }}>Market</Text>
                                                </Text>


                                            </View>

                                        </View>
                                        <View style={{
                                            height: 50,
                                            width: '25%',
                                            // backgroundColor: 'skyblue',
                                            justifyContent: 'center'
                                        }}>
                                            <Image
                                                style={{
                                                    width: 30,
                                                    height: 30,
                                                    borderRadius: 0,

                                                    alignSelf: 'center',
                                                    marginTops: 20
                                                }}
                                                source={require('./../assets/images/cross_red.png')}
                                            />
                                        </View>
                                    </View>



                                </View>

                            </View>
                        </TouchableOpacity>
                    </View>

                </ScrollView>




            </View >
        )
    }

}

const styles = StyleSheet.create({


});

export default HistoryOnMyOrderPage

