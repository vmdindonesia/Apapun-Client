import React, { Component } from 'react'
import { View, Text, ImageBackground, Image, AsyncStorage, TouchableOpacity, ScrollView, StyleSheet, TouchableHighlight, TouchableWithoutFeedback, StatusBar, Modal } from 'react-native'
import { COLOR } from './../shared/config';
import { Container, ContainerSection, Button, Input, InputDate } from '../components/common';
import Icon from 'react-native-vector-icons/Ionicons';


export class PageDesignPage extends React.Component {

    static navigationOptions = ({ navigation }) => ({
        headerLeft:
            <TouchableOpacity
                onPress={() => { navigation.goBack(); console.log(navigation.goBack(), 'Props Order') }}
            >
                <Icon size={30} style={{ marginLeft: 25, color: '#EF1C25' }} name='ios-arrow-back' />
            </TouchableOpacity>,
        headerTitle: 'Page Design'
    });

    render() {
        return (


            <ScrollView
                style={styles.containerStyle}
                keyboardShouldPersistTaps="always"
                ref={ref => this.scrollView = ref}
            >

                <View>
                    <View style={{ flex: 1 }}>
                        <Image style={styles.containerPhoto}
                            source={require('./../assets/images/kaos.jpg')}
                        />
                    </View>
                    <TouchableOpacity style={{
                        borderRadius: 100, backgroundColor: 'rgba {0, 0, 0, 0.5}', width: 40, height: 40,
                        position: 'relative', bottom: 300, left: 300, justifyContent: 'center'
                    }}>
                        <Image
                            style={{ width: 20, height: 20, alignSelf: 'center', }}
                            source={require('./../assets/images/pen_mainprof.png')}
                        />
                    </TouchableOpacity>
                </View>


                <View style={styles.containerSecondForm}>


                    <View style={{ flexDirection: 'row', height: '100%', width: '100%', }}>

                        <View style={{
                            flexDirection: 'column',
                            height: '100%', width: '50%',
                            justifyContent: 'center'
                        }}>
                            <Text style={{ fontSize: 15, paddingLeft: 2, textAlign: 'left', fontWeight: 'bold' }}>
                                Elegant Plain
                            </Text>
                            <Text style={{ fontSize: 15, paddingLeft: 2, textAlign: 'left', fontWeight: 'bold' }}>
                                T-Shirt
                            </Text>
                            <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                                <Image
                                    style={{ width: 30, height: 30, marginTop: 10 }}
                                    source={require('./../assets/images/smiley.png')}
                                />
                                <Text style={{ fontSize: 13, paddingLeft: 2, paddingTop: 20, textAlign: 'center' }}>
                                    (9) review
                            </Text>
                            </View>
                        </View>


                        <View style={{
                            flexDirection: 'column',
                            height: '100%', width: '50%',
                            justifyContent: 'center'
                        }}>
                            <Text style={{ fontSize: 13, textAlign: 'right', paddingRight: 5 }}>
                                Total Apresisasi
                            </Text>
                            <Text style={{ fontSize: 13, paddingRight: 30, textAlign: 'right' }}>
                                Design
                            </Text>
                            <Text style={{ fontSize: 13, paddingRight: 30, textAlign: 'right' }}>
                                10.000
                            </Text>
                            <Text style={{ fontSize: 13, paddingLeft: 2, paddingTop: 20, textAlign: 'center' }}>
                                Terjual
                                10
                            </Text>
                        </View>

                    </View>
                </View>



                <View style={{
                    width: '100%',
                    height: '12.5%',
                    flexDirection: 'row'
                }}>

                    <View style={{
                        width: '50%',
                        height: '100%',
                        justifyContent: 'center',
                        alignContent: 'center',
                        flexDirection: 'column'
                    }}>

                        <TouchableOpacity style={{ alignSelf: 'center' }}>

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
                            <Text style={{ paddingTop: 5 }}>Filter</Text>
                        </TouchableOpacity>

                    </View>
                </View>


                <ContainerSection>
                    <Input
                        placeholder='fashion'
                        label='Kategori'
                    />
                </ContainerSection>

                <ContainerSection>
                    <Input
                        placeholder='Kaos(pria)'
                        label='Sub-Kategori'
                    />
                </ContainerSection>

                <View style={styles.containerMainAddress}>


                    <View style={{
                        paddingTop: 10
                    }}>

                    </View>

                    <View>
                        <Text style={{ fontWeight: 'bold', fontSize: 15, paddingTop: 10, fontFamily: 'Quicksand-Bold' }}> Ukuran</Text>

                        <Text style={{ fontSize: 12, paddingTop: 3, fontFamily: 'Quicksand-Bold' }}> Bahu Jalan : 12cm </Text>

                        <Text style={{ fontSize: 12, fontFamily: 'Quicksand-Bold' }}>Panjang Lengan : 11cm </Text>

                        <Text style={{ fontSize: 12, fontFamily: 'Quicksand-Bold' }}>Lingkar Dada : 99cm</Text>

                        <Text style={{ fontSize: 12, fontFamily: 'Quicksand-Bold' }} >Panjang Bahu : 35cm </Text>

                        <Text style={{ fontWeight: 'bold', fontFamily: 'Quicksand-Bold', fontSize: 15, paddingTop: 10 }}> Deskripsi</Text>

                        <Text style={{ fontSize: 12, fontFamily: 'Quicksand-Bold' }}> kaos pria yang simple tapi fashionable, Bahan menyerap keringat dan nyaman dipakai </Text>

                    </View>


                </View>





            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    containerPhoto: {
        height: 320,
        width: 370
    },
    containerSecondForm: {
        borderRadius: 20,
        backgroundColor: '#ffffff',
        shadowColor: 'black',
        shadowOffset: { width: 10, heigth: 10 },
        shadowRadius: 5,
        shadowOpacity: 1.0,
        elevation: 3,
        flexDirection: 'row',
        marginTop: -30,
        height: 170,
        width: '90%',
        // alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        // zIndex: 1,
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
    }


})
export default PageDesignPage