import React, { Component } from 'react'
import { View, Text, ImageBackground, Image, AsyncStorage, TouchableOpacity, ScrollView, StyleSheet, TouchableHighlight, TouchableWithoutFeedback, StatusBar, Modal } from 'react-native'
import { Container, ContainerSection, Button, Input, InputDate, InputSearch } from '../components/common';
// import axios from 'axios';

import { COLOR } from './../shared/config';



export class BerandaCrafterPage extends React.Component {

    // static navigationOptions = {
    //     headerTitle: 'Crafter List'
    // }

    render() {
        return (
            <View style={{
                flex: 1,
            }}>


                <View style={{
                    backgroundColor: '#e5e5e5',
                    width: '100%',
                    height: 70,
                    flexDirection: 'row',
                    // flex:4,
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    <View style={{
                        width: '90%',
                        height: 50,
                        //   backgroundColor:'red',
                        justifyContent: 'center'
                    }}>
                        <InputSearch
                            // onFocus={() => navigate('FilterBefore')}
                            placeholder="Cari Crafter..."
                            icon="ic_search"
                        />
                    </View>
                </View>


                <ScrollView style={{ width: '100%', height: '100%', flexDirection: 'column', }}>

                    <View style={{
                        flex: 4,
                        height: '100%',
                        width: '100%',
                        // backgroundColor: 'yellow',
                        alignItems: 'center',
                        flexDirection: 'column'
                    }}>


                        <View style={{
                            flex: 1,
                            width: '90%',
                            height: 250,
                            // backgroundColor: 'skyblue',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                            // borderBottomWidth: 1
                        }}>

                            <View style={{
                                // backgroundColor:'skyblue',
                                width: '100%',
                                height: '85%',
                                // backgroundColor: 'white',
                                borderRadius: 15
                            }}>
                                <Image style={styles.imageCommercial}
                                    source={require('./../assets/images/crafter_pic.jpg')}
                                />
                            </View>

                        </View>


                        <View style={{ borderBottomWidth: 1.3, borderColor: '#e5e5e5', width: '90%' }} />


                        <View style={{
                            flex: 1,
                            // backgroundColor: 'skyblue',
                            height: 80,
                            width: '95%',
                            marginTop: 17,
                            flexDirection: 'row',
                            justifyContent: 'center'
                        }}>

                            <View style={{
                                height: '10%',
                                width: '75%'
                            }}>
                                <Text style={{ fontWeight: 'bold', fontSize: 15, }}>Profesional Crafter</Text>
                                <Text style={{ color: 'red', fontSize: 13, paddingTop: 2, }}>Crafter ini sudah memiliki sejarah dalam keahlian crafting dibidangnya masing-masing</Text>
                            </View>

                            <View style={{
                                height: '10%',
                                width: '20%'
                            }}>
                                <TouchableWithoutFeedback>
                                    <Text style={{ color: 'red', fontSize: 13, fontWeight: 'bold', paddingLeft: 15, }}>See All</Text>
                                </TouchableWithoutFeedback>
                            </View>
                        </View>



                        <View style={{
                            // backgroundColor: 'yellow',
                            height: 150,
                            width: '100%',
                            marginTop: 5,
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            // borderBottomWidth: 2,
                            borderColor: 'gray',
                            flex: 1
                        }}>

                            <View style={{
                                // backgroundColor: 'skyblue',
                                width: '33%',
                                height: '100%',

                            }}>
                                <View style={{
                                    // backgroundColor: 'black',
                                    width: '100%',
                                    height: '65%',
                                    // justifyContent: 'center',
                                    alignSelf: 'center'

                                }}>
                                    <Image
                                        style={{
                                            height: 90,
                                            width: 90,
                                            borderRadius: 100,
                                            alignSelf: 'center'
                                        }}
                                        source={require('./../assets/images/profile.png')}
                                    />
                                </View>

                                <View>
                                    <Text style={{ textAlign: 'center', fontWeight: 'bold', fontSize: 13 }}>Gal Gadot</Text>
                                </View>

                                <View style={{ paddingTop: 5 }}>
                                    <Image
                                        style={{
                                            height: 20,
                                            width: 20,
                                            borderRadius: 0,
                                            alignSelf: 'center'
                                        }}
                                        source={require('./../assets/images/kiss_icon.jpg')}
                                    />

                                </View>

                            </View>


                            <View style={{
                                // backgroundColor: 'skyblue',
                                width: '33%',
                                height: '100%',
                            }}>
                                <View style={{
                                    // backgroundColor: 'black',
                                    width: '100%',
                                    height: '65%',
                                    // justifyContent: 'center',
                                    alignSelf: 'center'

                                }}>
                                    <Image
                                        style={{
                                            height: 90,
                                            width: 90,
                                            borderRadius: 100,
                                            alignSelf: 'center'
                                        }}
                                        source={require('./../assets/images/chelsea_islan.jpg')}
                                    />
                                </View>

                                <View>
                                    <Text style={{ textAlign: 'center', fontWeight: 'bold', fontSize: 13 }}>Chelsea Islan</Text>
                                </View>

                                <View style={{ paddingTop: 5 }}>
                                    <Image
                                        style={{
                                            height: 20,
                                            width: 20,
                                            borderRadius: 0,
                                            alignSelf: 'center'
                                        }}
                                        source={require('./../assets/images/loveeye_icon.png')}
                                    />

                                </View>

                            </View>



                            <View style={{
                                // backgroundColor: 'skyblue',
                                width: '33%',
                                height: '100%',
                            }}>
                                <View style={{
                                    // backgroundColor: 'black',
                                    width: '100%',
                                    height: '65%',
                                    // justifyContent: 'center',
                                    alignSelf: 'center'

                                }}>
                                    <Image
                                        style={{
                                            height: 90,
                                            width: 90,
                                            borderRadius: 100,
                                            alignSelf: 'center'
                                        }}
                                        source={require('./../assets/images/pev_pearce.png')}
                                    />
                                </View>

                                <View>
                                    <Text style={{ textAlign: 'center', fontWeight: 'bold', fontSize: 13 }}>Pevita Pearce</Text>
                                </View>

                                <View style={{ paddingTop: 5 }}>
                                    <Image
                                        style={{
                                            height: 20,
                                            width: 20,
                                            borderRadius: 0,
                                            alignSelf: 'center'
                                        }}
                                        source={require('./../assets/images/smile_icon.jpg')}
                                    />

                                </View>

                            </View>


                        </View>

                        <View style={{ borderBottomWidth: 1.3, borderColor: '#e5e5e5', width: '90%', marginTop: 5 }} />


                        <View style={{
                            flex: 1,
                            // backgroundColor: 'skyblue',
                            height: 30,
                            width: '95%',
                            marginTop: 17,
                            flexDirection: 'row',
                            justifyContent: 'center'
                        }}>

                            <View style={{
                                height: '5%',
                                width: '75%'
                            }}>
                                <Text style={{ paddingLeft: 5, fontSize: 15, fontWeight: 'bold' }}>Crafter On Debut</Text>
                                {/* <Text style={{ color: 'red', fontSize: 10, paddingTop: 2 }}>Crafter ini sudah memiliki sejarah dalam keahlian crafting dibidangnya masing-masing</Text> */}
                            </View>

                            <View style={{
                                height: '10%',
                                width: '20%',
                            }}>
                                <TouchableWithoutFeedback>
                                    <Text style={{ color: 'red', fontSize: 13, fontWeight: 'bold', paddingLeft: 15 }}>See All</Text>
                                </TouchableWithoutFeedback>
                            </View>
                        </View>

                        <View style={{
                            // backgroundColor: 'yellow',
                            height: 150,
                            width: '100%',
                            marginTop: 5,
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            borderBottomWidth: 2,
                            borderColor: 'gray',
                            flex: 1
                        }}>

                            <View style={{
                                // backgroundColor: 'skyblue',
                                width: '33%',
                                height: '100%',

                            }}>
                                <View style={{
                                    // backgroundColor: 'black',
                                    width: '100%',
                                    height: '65%',
                                    // justifyContent: 'center',
                                    alignSelf: 'center'

                                }}>
                                    <Image
                                        style={{
                                            height: 90,
                                            width: 90,
                                            borderRadius: 100,
                                            alignSelf: 'center'
                                        }}
                                        source={require('./../assets/images/raisa.jpg')}
                                    />
                                </View>

                                <View>
                                    <Text style={{ textAlign: 'center', fontWeight: 'bold', fontSize: 15 }}>Raisa</Text>
                                </View>

                                <View style={{ paddingTop: 5 }}>
                                    <Image
                                        style={{
                                            height: 20,
                                            width: 20,
                                            borderRadius: 0,
                                            alignSelf: 'center'
                                        }}
                                        source={require('./../assets/images/kiss_icon.jpg')}
                                    />

                                </View>

                            </View>


                            <View style={{
                                // backgroundColor: 'skyblue',
                                width: '33%',
                                height: '100%',
                            }}>
                                <View style={{
                                    // backgroundColor: 'black',
                                    width: '100%',
                                    height: '65%',
                                    // justifyContent: 'center',
                                    alignSelf: 'center'

                                }}>
                                    <Image
                                        style={{
                                            height: 90,
                                            width: 90,
                                            borderRadius: 100,
                                            alignSelf: 'center'
                                        }}
                                        source={require('./../assets/images/nia.jpg')}
                                    />
                                </View>

                                <View>
                                    <Text style={{ textAlign: 'center', fontWeight: 'bold', fontSize: 15 }}>Nia Ramadhani</Text>
                                </View>

                                <View style={{ paddingTop: 5 }}>
                                    <Image
                                        style={{
                                            height: 20,
                                            width: 20,
                                            borderRadius: 0,
                                            alignSelf: 'center'
                                        }}
                                        source={require('./../assets/images/loveeye_icon.png')}
                                    />

                                </View>

                            </View>



                            <View style={{
                                // backgroundColor: 'skyblue',
                                width: '33%',
                                height: '100%',
                            }}>
                                <View style={{
                                    // backgroundColor: 'black',
                                    width: '100%',
                                    height: '65%',
                                    // justifyContent: 'center',
                                    alignSelf: 'center'

                                }}>
                                    <Image
                                        style={{
                                            height: 90,
                                            width: 90,
                                            borderRadius: 100,
                                            alignSelf: 'center'
                                        }}
                                        source={require('./../assets/images/ariel.jpg')}
                                    />
                                </View>

                                <View>
                                    <Text style={{ textAlign: 'center', fontWeight: 'bold', fontSize: 15 }}>Ariel Tatum</Text>
                                </View>

                                <View style={{ paddingTop: 5 }}>
                                    <Image
                                        style={{
                                            height: 20,
                                            width: 20,
                                            borderRadius: 0,
                                            alignSelf: 'center'
                                        }}
                                        source={require('./../assets/images/smile_icon.jpg')}
                                    />

                                </View>

                            </View>


                        </View>








                    </View>

                </ScrollView>



            </View>
        )
    }

}

const styles = StyleSheet.create({
    imageCommercial: {
        width: '100%',
        height: '100%',
        borderRadius: 10
    },

});

export default BerandaCrafterPage

