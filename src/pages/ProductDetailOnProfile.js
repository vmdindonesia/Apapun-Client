import React, { Component } from 'react';
import { View, Text, ImageBackground, Image, AsyncStorage, ToastAndroid, TouchableOpacity, ScrollView, StyleSheet, TouchableHighlight, TouchableWithoutFeedback, StatusBar, Modal } from 'react-native'
import { Container, ContainerSection, Button, Input, InputDate } from '../components/common';
// import axios from 'axios';
import { COLOR } from '../shared/config';
import Icon from 'react-native-vector-icons/Ionicons';


export class ProductDetailOnProfilePage extends React.Component {

    static navigationOptions = ({ navigation }) => ({
        headerLeft:
            <TouchableOpacity
                onPress={() => { navigation.goBack(); console.log(navigation.goBack(), 'Props Order') }}
            >
                <Icon size={30} style={{ marginLeft: 25, color: '#EF1C25' }} name='ios-arrow-back' />
            </TouchableOpacity>,
        headerTitle: 'Detail',

    });


    render() {
        return (

            // <View style={{ flex: 1 }}>

            <ScrollView style={{ flex: 1, marginLeft: 10, marginRight: 10, }}>

                <View style={{ flex: 1, height: 80, flexDirection: 'row', marginTop: 10, }}>
                    <View style={{ flex: 1, paddingRight: 20 }}>
                        <View>
                            <Text style={{ paddingLeft: 5, fontSize: 15, fontFamily: 'Quicksand-Regular', color: 'black', fontWeight: 'bold' }}>Kategori</Text>
                        </View>
                        <View style={{ flex: 1, backgroundColor: 'white', justifyContent: 'center' }}>
                            <Text style={{ paddingLeft: 15, fontSize: 15, fontFamily: 'Quicksand-Regular', color: 'black', }}>
                                Fashion Pria
                                </Text>
                            {/* <ContainerSection>
                                    <Input
                                        placeholder='Fashio (Pria)'
                                        editable={false}
                                    />
                                </ContainerSection> */}
                        </View>
                    </View>
                    <View style={{ flex: 1 }}>
                        <View >
                            <Text style={{ paddingLeft: 5, fontSize: 15, fontFamily: 'Quicksand-Regular', color: 'black', fontWeight: 'bold' }}>Sub-Kategori</Text>
                        </View>
                        <View style={{ flex: 1, backgroundColor: 'white', justifyContent: 'center' }}>
                            <Text style={{ paddingLeft: 5, fontSize: 15, fontFamily: 'Quicksand-Regular', color: 'black', }}>
                                Kaos (Pria)
                                </Text>
                            {/* <ContainerSection>
                                    <Input
                                        placeholder='Kaos (Pria)'
                                        editable={false}
                                    />
                                </ContainerSection> */}
                        </View>
                    </View>
                </View>

                <View style={{ flex: 1, height: 200, }}>

                    <View>
                        <Text style={{ paddingLeft: 5, fontSize: 15, fontFamily: 'Quicksand-Regular', color: 'black', fontWeight: 'bold' }}>Deskripsi Produk</Text>
                    </View>
                    <View style={{ flex: 1, backgroundColor: 'white', marginTop: 20, marginLeft: 10 }}>
                        <Text style={{ paddingLeft: 5, fontSize: 13, fontFamily: 'Quicksand-Regular', color: 'black', fontWeight: 'bold' }}>Ukuran</Text>
                        <Text style={{ paddingTop: 5, paddingLeft: 5, fontSize: 13, fontFamily: 'Quicksand-Regular', color: 'black', }}>Bahu : 15 Cm</Text>
                        <Text style={{ paddingLeft: 5, fontSize: 13, fontFamily: 'Quicksand-Regular', color: 'black', }}>Panjang Lengan : 22 Cm</Text>
                        <Text style={{ paddingLeft: 5, fontSize: 13, fontFamily: 'Quicksand-Regular', color: 'black', }}>Lingkar Dada : 106 Cm</Text>
                        <Text style={{ paddingLeft: 5, fontSize: 13, fontFamily: 'Quicksand-Regular', color: 'black', }}>Panjang Bahu : 70 Cm</Text>

                        <Text style={{ paddingTop: 5, paddingLeft: 5, paddingTop: 10, fontSize: 13, fontFamily: 'Quicksand-Regular', color: 'black', fontWeight: 'bold' }}>Deskripsi</Text>
                        <Text style={{ paddingLeft: 5, fontSize: 13, fontFamily: 'Quicksand-Regular', color: 'black', }}>Kaos pria yang simpel tapi fasionabel. Bahan menyerap keringan dan nyaman dipakai</Text>

                    </View>

                </View>



            </ScrollView>






            // </View>

        )
    }

}

const styles = StyleSheet.create({

});

export default ProductDetailOnProfilePage

