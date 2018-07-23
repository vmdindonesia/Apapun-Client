import React, { Component } from 'react';
import { View, Text, ImageBackground, Image, AsyncStorage, TouchableOpacity, ScrollView, StyleSheet, TouchableHighlight, TouchableWithoutFeedback, StatusBar, Modal } from 'react-native'
import { COLOR } from '../shared/config';
import { Container, ContainerSection, Button, Input, InputDate } from '../components/common';
import Icon from 'react-native-vector-icons/Ionicons';


export class PageDesignPage extends React.Component {
    static navigationOptions = {
        header: null
    }

    render() {
        return (


            <ScrollView
                keyboardShouldPersistTaps="always"
                ref={ref => this.scrollView = ref}
            >

                <View>
                    <View style={styles.containerImage}>
                        <Image style={styles.containerPhoto}
                            source={require('./../assets/images/lala.jpg')}
                        />
                    </View>
                    <TouchableOpacity style={{
                        borderRadius: 300, backgroundColor: 'rgb(0, 0, 0)', width: 40, height: 40,
                        position: 'relative', bottom: 470, left: 350, justifyContent: 'center'
                    }}>
                        <Image
                            style={{ width: 20, height: 20, alignSelf: 'center' }}
                            source={require('./../assets/images/pen_mainprof.png')}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity style={{
                        borderRadius: 300, backgroundColor: 'rgb(0, 0, 0)', width: 40, height: 40,
                        position: 'relative', bottom: 510, left: 20, justifyContent: 'center'
                    }}>
                        <Image
                            style={{ width: 20, height: 20, alignSelf: 'center' }}
                            source={require('./../assets/images/arrow.png')}
                        />
                    </TouchableOpacity>
                </View>


                <View style={styles.containerSecondForm}>
                    <View style={{ flex: 1, flexDirection: 'row', height: '100%', width: '100%', }}>

                        <View style={{
                            flexDirection: 'column',
                            height: '100%', width: '50%',
                            justifyContent: 'center'
                        }}>
                            <Text style={{ fontSize: 15, paddingLeft: 20, textAlign: 'left', fontWeight: 'bold', fontFamily: 'Quicksand-Reguler' }}>
                                Elegant Plain
                            </Text>
                            <Text style={{ fontSize: 15, paddingLeft: 20, textAlign: 'left', fontWeight: 'bold', fontFamily: 'Quicksand-Reguler' }}>
                                T-Shirt
                            </Text>
                            <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                                <Image
                                    style={{ width: 30, height: 30, marginTop: 10 }}
                                    source={require('./../assets/images/smiley.png')}
                                />
                                <Text style={{ fontSize: 13, paddingLeft: 2, paddingTop: 20, textAlign: 'center', fontSize: 13, fontFamily: 'Quicksand-Reguler' }}>
                                    (9) review
                            </Text>
                            </View>
                        </View>


                        <View style={{
                            flexDirection: 'column',
                            height: '100%', width: '50%',
                            justifyContent: 'center'
                        }}>
                            <Text style={{ fontSize: 13, textAlign: 'center', fontSize: 13, fontFamily: 'Quicksand-Reguler' }}>
                                Total Apresisasi
                            </Text>
                            <Text style={{ fontSize: 13, textAlign: 'center', fontSize: 13, fontFamily: 'Quicksand-Reguler' }}>
                                Design
                            </Text>
                            <Text style={{ fontSize: 13, textAlign: 'center', fontSize: 13, fontFamily: 'Quicksand-Reguler' }}>
                                10.000
                            </Text>
                            <Text style={{ fontSize: 13, paddingLeft: 2, paddingTop: 20, textAlign: 'center', fontSize: 13, fontFamily: 'Quicksand-Reguler' }}>
                                Terjual
                                10
                            </Text>
                        </View>

                    </View>
                </View>



                <View style={{
                    width: '100%',
                    height: '5%',
                    backgroundColor: 'white',
                    marginTop: 20,
                    flexDirection: 'row'
                }}>

                    <View style={{
                        width: '50%',
                        height: '100%',
                        justifyContent: 'center',
                        alignContent: 'center',
                        flexDirection: 'column'
                    }}>

                        <TouchableOpacity style={{ alignSelf: 'center' }}
                            onPress={() => this.props.navigation.navigate('ProductDetailProf')}>

                            <Text style={{ paddingTop: 5, fontFamily: 'Quicksand-Reguler' }}>Detail</Text>
                        </TouchableOpacity>
                    </View>

                    {/* <Image
                        style={{
                            width: 18,
                            height: 35,
                            borderRadius: 0,
                            alignSelf: 'center'
                        }}
                        source={require('./../assets/images/line_vertical.png')}
                    /> */}

                    <View style={{
                        width: '50%',
                        height: '100%',
                        // backgroundColor: 'blue',
                        justifyContent: 'center',
                        alignContent: 'center',
                        flexDirection: 'column'
                    }}>
                        <TouchableOpacity style={{ alignSelf: 'center' }}>
                            <Text style={{ paddingTop: 5, fontFamily: 'Quicksand-Reguler' }}>Review</Text>
                        </TouchableOpacity>

                    </View>
                </View>

                <View style={styles.containerMain}>
                    <View style={{
                        width: '100%',
                        height: 50,
                        backgroundColor: '',
                        flexDirection: 'row'
                    }}>

                        <View style={{
                            width: '50%',
                            flexDirection: 'column',
                            marginTop: 10,
                            backgroundColor: '',
                            height: 50
                        }}>
                            <Text style={{ fontFamily: 'Quicksand-Bold', fontSize: 15 }}>Kategori</Text>
                            <View style={{ width: '50%', borderWidth: 0, height: 30, paddingLeft: 2, backgroundColor: 'white' }}>
                                <Text style={{
                                    fontFamily: 'Quicksand-Regular', paddingTop: 10, fontSize: 13
                                }}
                                >Fashion</Text>
                            </View>

                        </View>

                        <View style={{
                            width: '50%',
                            marginTop: 10,
                            justifyContent: 'center',
                            backgroundColor: '',
                            flexDirection: 'column',
                            height: 50
                        }}>
                            <Text style={{ fontFamily: 'Quicksand-Bold', fontSize: 15, }}>Sub-Kategori</Text>
                            <View style={{ width: '50%', borderWidth: 0, height: 30, paddingLeft: 2, paddingTop: 2, backgroundColor: 'white' }}>
                                <Text style={{
                                    fontFamily: 'Quicksand-Regular', alignSelf: 'auto', paddingTop: 10, fontSize: 13
                                }}
                                >Kaos (Pria)</Text>
                            </View>
                        </View>


                    </View>

                </View>





            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    containerImage: {
        // flex: 1,
        // justifyContent: 'center',
        alignItems: 'center',
        // zIndex: 0,
        // backgroundColor: 'yellow'

    },
    containerPhoto: {
        height: 500,
        width: 450,
    },
    containerSecondForm: {
        // flex: 1,
        borderRadius: 20,
        backgroundColor: '#ffffff',
        shadowColor: 'black',
        shadowOffset: { width: 10, heigth: 10 },
        shadowRadius: 5,
        shadowOpacity: 1.0,
        elevation: 3,
        flexDirection: 'row',
        marginTop: -120,
        height: 140,
        width: '90%',
        // justifyContent: 'center',
        alignSelf: 'center',
        zIndex: 3,
        borderWidth: 0.5,
        borderColor: '#d6d7da'
    },
    containerMainAddress: {
        // flex: 1,
        backgroundColor: '#ffffff',
        shadowRadius: 5,
        shadowOpacity: 1.0,
        elevation: 3,
        flexDirection: 'row',
        marginTop: 5,
        height: 250,
        width: '90%',
        alignSelf: 'center',
        borderWidth: 0.5,
        borderColor: '#d6d7da'
    },
    anzz: {
        backgroundColor: '#ffffff',
        flexDirection: 'row',
        height: 50,
        width: '100%'
    },
    containerMain: {
        // flex: 1,
        flexDirection: 'column',
        marginTop: 5,
        height: 70,
        width: '90%',
        marginBottom: 15,
        // alignItems: 'center',
        // justifyContent: 'center',
        alignSelf: 'center'
    }



})
export default PageDesignPage