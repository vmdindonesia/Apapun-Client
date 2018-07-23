import React, { Component } from 'react';
import { View, Text, ImageBackground, Image, AsyncStorage, TouchableOpacity, ScrollView, StyleSheet, TouchableHighlight, TouchableWithoutFeedback, StatusBar, Modal } from 'react-native'
import { Container, ContainerSection, Button, Input, InputSearch, InputDate } from '../components/common';
// import axios from 'axios';
import { COLOR } from '../shared/config';
import Icon from 'react-native-vector-icons/Ionicons';

export class ProductDetailNyaPage extends React.Component {
    static navigationOptions = ({ navigation }) => ({
        headerLeft:
            <TouchableOpacity
                onPress={() => { navigation.goBack(); console.log(navigation.goBack(), 'Props Order') }}
            >
                <Icon size={30} style={{ marginLeft: 25, color: '#EF1C25' }} name='ios-arrow-back' />
            </TouchableOpacity>,
        headerTitle: 'Produk Detail',
        headerStyle: {
            elevation: 0
        }
    });

    render() {
        return (
            <ScrollView
                keyboardShouldPersistTaps="always"
                ref={ref => this.scrollView = ref}
            >

                <View style={{
                    width: '100%',
                    height: 50,
                    backgroundColor: 'white',
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

                            <Text style={{ paddingTop: 5, fontSize: 15, fontFamily: 'Quicksand-Reguler' }}>Detail</Text>
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
                            <Text style={{ paddingTop: 5, fontSize: 15, fontFamily: 'Quicksand-Reguler' }}>Review</Text>
                        </TouchableOpacity>

                    </View>
                </View>


                <View style={ styles.containerMain }>
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
                            backgroundColor:'',
                            height: 50
                        }}>
                            <Text style={{ fontFamily: 'Quicksand-Bold', fontSize: 15 }}>Kategori</Text>
                            <View style={{ marginTop: 10, marginLeft: 5, width: 150, borderWidth: 0, height: 30, paddingLeft: 2, backgroundColor: 'white' }}>
                                <Text style={{
                                    fontFamily: 'Quicksand-Regular', paddingTop: 10, fontSize: 13
                                }}
                                >Fashion</Text>
                            </View>

                        </View>

                          <View style={{
                            width: '50%',
                            marginTop: 10,
                            backgroundColor: '',
                            flexDirection: 'column',
                            height: 50
                        }}>
                            <Text style={{ fontFamily: 'Quicksand-Bold', fontSize: 15, }}>Sub-Kategori</Text>
                            <View style={{ marginTop: 10, marginLeft:5, width: 150, borderWidth: 0, height: 30, paddingLeft: 2, backgroundColor: 'white' }}>
                                <Text style={{
                                    fontFamily: 'Quicksand-Regular', paddingTop: 10, fontSize: 13
                                }}
                                >Kaos (Pria)</Text>
                            </View>
                        </View>


                    </View>

                        </View>

                    <View style={ styles.containerTi }>
                    <View style={{
                        width: '100%',
                        height: 200,
                        backgroundColor: '',
                        flexDirection: 'row'
                    }}>

                        <View style={{
                            width: '50%',
                            flexDirection: 'column',
                            marginTop: 10,
                            backgroundColor:'',
                            height: 50
                        }}>
                            <Text style={{ fontFamily: 'Quicksand-Bold', fontSize: 15 }}>Deskripsi Produk</Text>
                            <View style={{ marginTop: 10, marginLeft: 5, width: 339, borderWidth: 0, height: 230, paddingLeft: 2, backgroundColor: 'white' }}>
                                <Text style={{
                                    fontFamily: 'Quicksand-Bold', paddingTop: 10, fontSize: 13
                                }}
                                >Ukuran</Text>
                                <Text style={{
                                    fontFamily: 'Quicksand-Regular', fontSize: 13
                                }}
                                >Bahu : 15</Text>
                                <Text style={{
                                    fontFamily: 'Quicksand-Regular', fontSize: 13
                                }}
                                >Panjang Lengan : 22cm</Text>
                                <Text style={{
                                    fontFamily: 'Quicksand-Regular', fontSize: 13
                                }}
                                >Lingkar Dada : 106cm</Text>
                                <Text style={{
                                    fontFamily: 'Quicksand-Regular', fontSize: 13
                                }}
                                >Panjang Bahu : 70cm</Text>
                                 <Text style={{
                                    fontFamily: 'Quicksand-Regular', fontSize: 13, paddingTop: 30, fontFamily: 'Quiksand-Bold'
                                }}
                                >Deskripsi</Text>
                                 <Text style={{
                                    fontFamily: 'Quicksand-Regular', fontSize: 13
                                }}
                                >Kaos pria yang simpel tapi fashionable, Bahan menyarap</Text>
                                 <Text style={{
                                    fontFamily: 'Quicksand-Regular', fontSize: 13
                                }}
                                >keringat dan nyaman dipakai</Text>
                            </View>

                        </View>
                    </View>
                    </View>

                        


            </ScrollView>

        )
    }
}
const styles = StyleSheet.create({
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
    },
    containerTi: {
        flex: 1,
        flexDirection: 'column',
        height: 300,
        width: '90%',
        marginBottom: 15,
        // alignItems: 'center',
        // justifyContent: 'center',
        alignSelf: 'center'
    }


})

export default ProductDetailNyaPage;