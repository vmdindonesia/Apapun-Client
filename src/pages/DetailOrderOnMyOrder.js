import React, { Component } from 'react';
import { View, Text, ImageBackground, Image, AsyncStorage, TouchableOpacity, ScrollView, StyleSheet, TouchableHighlight, TouchableWithoutFeedback, StatusBar, Modal } from 'react-native'
import { Container, ContainerSection, Button, Input, InputSearch, InputDate } from '../components/common';
// import axios from 'axios';
import { COLOR } from '../shared/config';
import Icon from 'react-native-vector-icons/Ionicons';



export class DetailOrderPage extends React.Component {

    static navigationOptions = ({ navigation }) => ({
        headerLeft:
            <TouchableOpacity
                onPress={() => { navigation.goBack(); console.log(navigation.goBack(), 'Props Order') }}
            >
                <Icon size={30} style={{ marginLeft: 25, color: '#EF1C25' }} name='ios-arrow-back' />
            </TouchableOpacity>,
        headerTitle: 'My Order'
    });

    render() {
        return (
            <View style={{
                flex: 1,
                flexDirection: 'column',
                // backgroundColor: 'skyblue'
            }}>

                <ScrollView style={{
                    width: '100%',
                    height: '100%',
                    // backgroundColor:'skyblue'
                }}>

                    <View style={{
                        // backgroundColor: 'red',
                        height: 20,
                        width: '90%',
                        flexDirection: 'row',
                        marginTop: 8,
                        alignSelf: 'center'
                    }}>
                        <Text style={{ fontWeight: 'bold', color: 'black' }} >Pesanan : <Text style={{ color: 'red' }}>1982SAD8KJAS</Text></Text>
                    </View>

                    <View style={{
                        // backgroundColor: 'red',
                        height: 300,
                        width: '90%',
                        flexDirection: 'row',
                        marginTop: 8,
                        alignSelf: 'center'
                    }}>

                        <View style={{
                            // backgroundColor: 'skyblue',
                            height: '100%',
                            width: '42%',
                            flexDirection: 'row',
                            alignSelf: 'center'
                        }}>

                            <View style={{
                                width: '100%',
                                height: 140,
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

                        </View>

                        <View style={{
                            // backgroundColor: 'yellow',
                            height: '100%',
                            width: '58%',
                            flexDirection: 'column',
                            alignSelf: 'center',
                            justifyContent: 'center'
                        }}>

                            <View style={{
                                paddingLeft: 7,
                                height: 70,
                                width: '100%',
                                // backgroundColor: 'red'
                            }}>
                                <View >
                                    <Text style={{
                                        color: 'black',
                                        marginLeft: 5,
                                        fontSize: 12,
                                        fontWeight: 'bold',
                                        fontFamily: 'Quicksand-Regular'
                                    }}>Product Name</Text>
                                </View>
                                <View>
                                    <ContainerSection>
                                        <Input
                                            placeholder=' '
                                        />
                                    </ContainerSection>
                                </View>
                            </View>

                            <View style={{
                                paddingLeft: 7,
                                height: 70,
                                width: '100%',
                                // backgroundColor: 'red'
                            }}>
                                <View >
                                    <Text style={{
                                        color: 'black',
                                        marginLeft: 5,
                                        fontSize: 12,
                                        fontWeight: 'bold',
                                        fontFamily: 'Quicksand-Regular'
                                    }}>Made By</Text>
                                </View>
                                <View>
                                    <ContainerSection>
                                        <Input
                                            placeholder=' '
                                        />
                                    </ContainerSection>
                                </View>
                            </View>

                            <View style={{
                                paddingLeft: 7,
                                height: 70,
                                width: '100%',
                                // backgroundColor: 'red'
                            }}>
                                <View >
                                    <Text style={{
                                        color: 'black',
                                        marginLeft: 5,
                                        fontSize: 12,
                                        fontWeight: 'bold',
                                        fontFamily: 'Quicksand-Regular'
                                    }}>Category</Text>
                                </View>
                                <View>
                                    <ContainerSection>
                                        <Input
                                            placeholder=' '
                                        />
                                    </ContainerSection>
                                </View>
                            </View>

                            <View style={{
                                paddingLeft: 7,
                                height: 70,
                                width: '100%',
                                // backgroundColor: 'red'
                            }}>
                                <View >
                                    <Text style={{
                                        color: 'black',
                                        marginLeft: 5,
                                        fontSize: 12,
                                        fontWeight: 'bold',
                                        fontFamily: 'Quicksand-Regular'
                                    }}>Time Estimate</Text>
                                </View>
                                <View>
                                    <ContainerSection>
                                        <Input
                                            placeholder=' '
                                        />
                                    </ContainerSection>
                                </View>
                            </View>
                        </View>


                    </View>

                    <View style={{
                        // backgroundColor: 'red',
                        height: 20,
                        width: '90%',
                        flexDirection: 'row',
                        marginTop: 10,
                        alignSelf: 'center',
                        // marginTop: 10
                    }}>
                        <Text style={{ fontWeight: 'bold', color: 'black' }} >Crafter</Text>
                    </View>

                    <View style={{
                        backgroundColor: 'white',
                        height: 120,
                        width: '100%',
                        flexDirection: 'row',
                        // marginTop: 10
                    }}>

                        <View style={{
                            // backgroundColor: 'skyblue',
                            height: 100,
                            width: '35%',
                            justifyContent: 'center',
                            alignSelf: 'center'
                        }}>
                            <Image
                                style={{
                                    height: 90,
                                    width: 90,
                                    borderRadius: 100,
                                    alignSelf: 'center',
                                }}
                                source={require('./../assets/images/profile.png')}
                            />
                        </View>

                        <View style={{
                            // backgroundColor: 'yellow',
                            height: 100,
                            width: '65%',
                            flexDirection: 'row',
                            alignSelf: 'center',
                            // justifyContent:'center'
                        }}>
                            <View style={{ alignSelf: 'center' }}>
                                <Text style={{ fontWeight: 'bold', fontSize: 15 }}>Gal Gadot</Text>

                                <View style={{ flexDirection: 'row', paddingTop: 8 }} >
                                    <View style={{ width: 15, height: 15, justifyContent: 'center' }}>
                                        <Image
                                            style={{
                                                height: 15,
                                                width: 10,
                                                alignSelf: 'center'
                                            }}
                                            source={require('./../assets/images/location_icon.png')}
                                        />
                                    </View>
                                    <View style={{ paddingLeft: 10 }}>
                                        <Text style={{ fontSize: 12 }}>Jakarta Barat, Daerah Khusus Ibukota Jakarta</Text>
                                    </View>
                                </View>

                                <View style={{ flexDirection: 'row', paddingTop: 8 }} >
                                    <View style={{ width: 15, height: 15, }}>
                                        <Image
                                            style={{
                                                height: 15,
                                                width: 15,
                                            }}
                                            source={require('./../assets/images/Cukup.png')}
                                        />
                                    </View>
                                    <View style={{ paddingLeft: 10 }}>
                                        <Text style={{ fontSize: 12 }}>Rating :<Text style={{ fontSize: 12, color: 'red' }}>Excelent (35%)</Text></Text>
                                    </View>
                                </View>

                            </View>



                        </View>
                    </View>



                    <View style={{
                        // backgroundColor: 'red',
                        height: 20,
                        width: '90%',
                        flexDirection: 'row',
                        marginTop: 15,
                        alignSelf: 'center'
                    }}>
                        <Text style={{ fontWeight: 'bold', color: 'black' }} >Sending Services</Text>
                    </View>

                    <View style={{
                        backgroundColor: 'white',
                        height: 120,
                        width: '100%',
                        flexDirection: 'row',
                        justifyContent: 'center',
                        // marginTop: 10
                    }}>


                        <View style={{
                            // backgroundColor: 'skyblue',
                            height: 100,
                            width: '35%',
                            alignSelf: 'center',
                            justifyContent: 'center'
                        }}>

                            <Image
                                style={{
                                    height: 45,
                                    width: 70,
                                    // borderRadius: 100,
                                    alignSelf: 'center',
                                }}
                                source={require('./../assets/images/ic_pos.png')}
                            />
                        </View>

                        <View style={{
                            // backgroundColor: 'yellow',
                            height: 100,
                            width: '35%',
                            alignSelf: 'center',
                            justifyContent: 'center'
                        }}>
                            <Text style={{ fontWeight: 'bold', fontSize: 15 }}>Pos Indonesia</Text>
                        </View>
                    </View>


                    <View style={{
                        // backgroundColor: 'red',
                        height: 20,
                        width: '90%',
                        flexDirection: 'row',
                        alignSelf: 'center',
                        marginTop: 15
                    }}>
                        <Text style={{ fontWeight: 'bold', color: 'black' }} >Sending Address</Text>
                    </View>

                    <View style={{
                        backgroundColor: 'white',
                        height: 120,
                        width: '100%',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}>

                        <View style={{
                            height: 120,
                            width: '90%',
                            justifyContent: 'center'
                        }}>
                            <Text style={{ fontWeight: 'bold', fontSize: 13, paddingTop: 5, color: 'black' }}>Home 1</Text>

                            <Text style={{ fontSize: 13, color: 'black', paddingTop: 8 }}>Penerima :  <Text style={{ fontWeight: 'bold', fontSize: 13, color: 'black' }}>Judy  </Text> </Text>

                            <Text style={{ fontWeight: 'bold', fontSize: 12, paddingTop: 15, color: 'black' }}>(+62)81457683344</Text>
                            <Text style={{ fontSize: 12, paddingTop: 5, color: 'black' }}>Jl. Duri Kepa Tiga No. 19. Komplek Hj. Sadelih - Jakarta Barat, DKI Jakarta</Text>

                        </View>

                    </View>


                    <View style={{
                        // backgroundColor: 'red',
                        height: 20,
                        width: '90%',
                        flexDirection: 'row',
                        alignSelf: 'center',
                        marginTop: 15
                    }}>
                        <Text style={{ fontWeight: 'bold', color: 'black' }} >Cost</Text>
                    </View>



                    <View style={{
                        backgroundColor: 'white',
                        height: 100,
                        width: '100%',
                        flexDirection: 'column',
                        alignContent: 'center',
                        justifyContent: 'center'
                    }}>

                        <View style={{
                            width: '90%',
                            height: 30,
                            // backgroundColor: 'yellow',
                            flexDirection: 'row',
                            alignContent: 'center',
                            borderBottomWidth: 1,
                            alignSelf: 'center',
                            alignContent: 'center'
                        }}>
                            <View style={{
                                height: 30,
                                width: '50%',
                                flexDirection: 'row',
                                justifyContent: 'flex-start',

                            }}>
                                <Text style={{ alignSelf: 'center', fontSize: 12, color: 'black' }}>Product Price</Text>
                            </View>
                            <View style={{
                                width: '50%',
                                height: 30,
                                flexDirection: 'row',
                                justifyContent: 'flex-end',
                                // backgroundColor:'red'
                            }}>
                                <Text style={{ alignSelf: 'center', fontSize: 12, color: 'black' }}>Rp. 100.000</Text>
                            </View>
                        </View>

                        <View style={{
                            width: '90%',
                            height: 30,
                            // backgroundColor: 'yellow',
                            flexDirection: 'row',
                            alignContent: 'center',
                            borderBottomWidth: 1,
                            alignSelf: 'center'
                        }}>
                            <View style={{
                                height: 30,
                                width: '50%',
                                flexDirection: 'row',
                                justifyContent: 'flex-start',
                            }}>
                                <Text style={{ alignSelf: 'center', fontSize: 12, color: 'black' }}>Sending Pay Service</Text>
                            </View>
                            <View style={{
                                width: '50%',
                                height: 30,
                                flexDirection: 'row',
                                justifyContent: 'flex-end',
                                // backgroundColor:'red'
                            }}>
                                <Text style={{ alignSelf: 'center', fontSize: 12, color: 'black' }}>Rp. 20.000</Text>
                            </View>
                        </View>

                        <View style={{
                            width: '90%',
                            height: 30,
                            // backgroundColor: 'yellow',
                            flexDirection: 'row',
                            alignContent: 'center',
                            borderBottomWidth: 1,
                            alignSelf: 'center'
                        }}>
                            <View style={{
                                height: 30,
                                width: '50%',
                                flexDirection: 'row',
                                justifyContent: 'flex-start',
                            }}>
                                <Text style={{ alignSelf: 'center', fontSize: 12, color: 'black' }}>Order Quantity</Text>
                            </View>
                            <View style={{
                                width: '50%',
                                height: 30,
                                flexDirection: 'row',
                                justifyContent: 'flex-end',
                                // backgroundColor:'red'
                            }}>
                                <Text style={{ alignSelf: 'center', fontSize: 12, color: 'black' }}>1 PCS</Text>
                            </View>
                        </View>

                    </View>


                    <View style={{
                        backgroundColor: 'white',
                        height: 50,
                        width: '100%',
                        flexDirection: 'row',
                        alignContent: 'center',
                        justifyContent: 'center'
                    }}>

                        <View style={{
                            width: '90%',
                            height: 30,
                            // backgroundColor: 'yellow',
                            flexDirection: 'row',
                            alignContent: 'center',
                            borderBottomWidth: 1,
                            alignSelf: 'center'
                        }}>
                            <View style={{
                                height: 30,
                                width: '50%',
                                flexDirection: 'row',
                                justifyContent: 'flex-start',
                            }}>
                                <Text style={{ alignSelf: 'center', fontSize: 14, fontWeight: 'bold', color: 'black' }}>TOTAL</Text>
                            </View>
                            <View style={{
                                width: '50%',
                                height: 30,
                                flexDirection: 'row',
                                justifyContent: 'flex-end',
                                // backgroundColor:'red'
                            }}>
                                <Text style={{ alignSelf: 'center', fontSize: 14, fontWeight: 'bold', color: 'black', }}>Rp. 120.000</Text>
                            </View>
                        </View>


                    </View>
















                </ScrollView>






                <View style={{
                    flexDirection: 'row',
                    width: '100%',
                    height: 60,
                    backgroundColor: '#1f2021',
                    justifyContent: 'center'
                }}>
                    <View style={{
                        height: '100%',
                        width: '20%',
                        // backgroundColor: 'skyblue'
                        justifyContent: 'center'
                    }}>

                        <Image
                            style={{
                                width: 35,
                                height: 40,
                                borderRadius: 0,
                                alignSelf: 'center'
                            }}
                            source={require('./../assets/images/ic_lock.png')}
                        />


                    </View>

                    <View style={{
                        height: '100%',
                        width: '40%',
                        // backgroundColor: 'red',
                        justifyContent: 'center'
                    }}>

                        <Text style={{
                            color: 'white',
                            fontSize: 12
                        }}>Pesanan akan terkunci setelah menekan tombol PRESS</Text>

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
                        height: '100%',
                        width: '40%',
                        // backgroundColor: 'yellow',
                        justifyContent: 'center',
                    }}>
                        <TouchableOpacity style={{
                            backgroundColor: 'red',
                            borderRadius: 20,
                            height: '80%',
                            width: '80%',
                            justifyContent: 'center',
                            alignSelf: 'center',
                            marginLeft: -15
                        }}>
                            <Text style={{ color: 'white', fontWeight: 'bold', alignSelf: 'center', fontSize: 17.5 }}>PRESS</Text>
                        </TouchableOpacity>

                    </View>
                </View>




            </View >
        )
    }

}

const styles = StyleSheet.create({


});

export default DetailOrderPage

