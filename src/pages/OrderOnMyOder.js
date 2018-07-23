import React, { Component } from 'react';
import { ToastAndroid, View, Text, ImageBackground, Image, AsyncStorage, TouchableOpacity, ScrollView, StyleSheet, TouchableHighlight, TouchableWithoutFeedback, StatusBar, Modal } from 'react-native'
// import axios from 'axios';

export class OrderOnMyOrderPage extends React.Component {

    pressBUtton() {
        console.log('Press!');
        console.log(this.props, 'Props')
        this.props.navi.navigate('DetailOrder')
    }

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
                    backgroundColor:'white'
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
                        onPress={() => this.props.navi.navigate('OrderWithTrack')}
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

                                            <Text style={{ fontSize: 13, color: 'red', fontFamily: 'Quicksand-Regular' }}>19749373437D</Text>
                                            <Text style={{ fontSize: 15, paddingTop: 5, fontFamily: 'Quicksand-Bold' }}>My Own Table</Text>
                                            <Text style={{ fontSize: 13, paddingTop: 5, fontFamily: 'Quicksand-Regular' }}>Dipesan Dari : </Text>
                                            <Text style={{ color: 'red', fontSize: 13, paddingTop: 3, fontFamily: 'Quicksand-Regular' }}>Workshop</Text>

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
                                        <Text style={{ fontSize: 13, textAlign: 'center', fontFamily: 'Quicksand-Regular' }}>Jumlah : (2)</Text>
                                    </View>
                                    <View style={{
                                        height: 50,
                                        width: '50%',
                                        // backgroundColor: 'blue',
                                        justifyContent: 'center',
                                    }}>
                                        <Text style={{ fontSize: 13, textAlign: 'center', fontFamily: 'Quicksand-Bold' }} >Rp. 1.500.000 </Text>
                                    </View>
                                </View>


                            </View>

                        </View>
                    </TouchableOpacity>


                    <TouchableOpacity
                        onPress={() => this.props.navi.navigate('OrderWithTrack')}
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
                                            <Text style={{ fontSize: 13, color: 'red', fontFamily: 'Quicksand-Regular' }}>1934378UDJA9</Text>
                                            <Text style={{ fontSize: 13, paddingTop: 5, fontFamily: 'Quicksand-Bold' }}>Vans Shoes</Text>
                                            <Text style={{ fontSize: 13, paddingTop: 5, fontFamily: 'Quicksand-Regular' }}>Dipesan Dari : </Text>
                                            <Text style={{ color: 'red', fontSize: 13, paddingTop: 3, fontFamily: 'Quicksand-Regular' }}>Seija Company</Text>
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
                                        <Text style={{ fontSize: 13, textAlign: 'center', fontFamily: 'Quicksand-Regular' }}>Jumlah : (1)</Text>
                                    </View>
                                    <View style={{
                                        height: 50,
                                        width: '50%',
                                        // backgroundColor: 'blue',
                                        justifyContent: 'center',
                                    }}>
                                        <Text style={{ fontSize: 13, textAlign: 'center', fontFamily: 'Quicksand-Bold' }} >Rp. 900.000 </Text>
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

