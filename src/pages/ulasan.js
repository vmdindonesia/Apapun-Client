import React, { Component } from 'react';
import { View, Text, Image, AsyncStorage, TouchableOpacity, ScrollView, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';

export class UlasanPage extends React.Component {

    static navigationOptions = ({ navigation }) => ({
        headerLeft:
            <TouchableOpacity
                onPress={() => { navigation.goBack(); console.log(navigation.goBack(), 'Props Order') }}
            >
                <Icon size={30} style={{ marginLeft: 25, color: '#EF1C25' }} name='ios-arrow-back' />
            </TouchableOpacity>,
        headerTitle: 'Ulasan'
    });

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <View style={{ width: '90%', height: '15%', alignSelf: 'center', marginTop: 20, flexDirection: 'row', justifyContent: 'space-between' }}>
                    <View>
                        <Image
                            style={{ width: 60, height: 60, backgroundColor: 'red' }}
                            source={require('./../assets/images/Buruk.png')}
                            resizeMode='contain'
                        />
                        <Text style={{ fontFamily: 'Quicksand-Regular', fontSize: 13, textAlign: 'center' }}>Buruk</Text>
                        <Text style={{ fontFamily: 'Quicksand-Bold', fontSize: 13, textAlign: 'center' }}>(1)</Text>
                    </View>
                    <View>
                        <Image
                            style={{ width: 60, height: 60, backgroundColor: 'red' }}
                            source={require('./../assets/images/Cukup.png')}
                            resizeMode='contain'
                        />
                        <Text style={{ fontFamily: 'Quicksand-Regular', fontSize: 13, textAlign: 'center' }}>Cukup</Text>
                        <Text style={{ fontFamily: 'Quicksand-Bold', fontSize: 13, textAlign: 'center' }}>(0)</Text>
                    </View>
                    <View>
                        <Image
                            style={{ width: 60, height: 60, backgroundColor: 'red' }}
                            source={require('./../assets/images/Bagus.png')}
                            resizeMode='contain'
                        />
                        <Text style={{ fontFamily: 'Quicksand-Regular', fontSize: 13, textAlign: 'center' }}>Bagus</Text>
                        <Text style={{ fontFamily: 'Quicksand-Bold', fontSize: 13, textAlign: 'center' }}>(0)</Text>
                    </View>
                    <View>
                        <Image
                            style={{ width: 60, height: 60, backgroundColor: 'red' }}
                            source={require('./../assets/images/Cukup.png')}
                            resizeMode='contain'
                        />
                        <Text style={{ fontFamily: 'Quicksand-Regular', fontSize: 13, textAlign: 'center' }}>Cukup</Text>
                        <Text style={{ fontFamily: 'Quicksand-Bold', fontSize: 13, textAlign: 'center' }}>(0)</Text>
                    </View>
                </View>

                <View style={{ flex: 1 }}>
                    <View style={{ height: 150, margin: 10, backgroundColor: '#fff' }}>
                        <View style={{ height: '40%', flexDirection: 'row', alignItems: 'center' }}>
                            <Image
                                style={{ width: 50, height: 50, borderRadius: 100, marginLeft: 5 }}
                                source={require('./../assets/images/roy-kiyoshi.jpg')}
                                resizeMode='contain'
                            />
                            <View style={{ flexDirection: 'column', flex: 1, marginLeft: 5 }}>
                                <Text style={{ fontFamily: 'Quicksand-Bold', fontSize: 15 }}>Roy Kiyoshi</Text>
                                <Text style={{ fontFamily: 'Quicksand-Regular', fontSize: 13 }}>26 Jan 2018, 18.04</Text>
                            </View>
                            <View style={{ flex: 1 }}>
                                <Image
                                    style={{ width: 50, height: 50, backgroundColor: 'green', marginLeft: 20 }}
                                    source={require('./../assets/images/Cukup.png')}
                                />
                            </View>
                        </View>
                        <View style={{ padding: 5 }}>
                            <Text style={{ fontFamily: 'Quicksand-Bold', fontSize: 15 }}>REKOMEN BANGET</Text>
                        </View>
                        <View style={{ paddingLeft: 5, paddingRight: 5, flex: 1 }}>
                            <Text syle={{
                                fontFamily: 'Quicksand-Regular', fontSize: 13
                            }}>Kecocokan desain barang dengan yang saya buat cukup memuaskan, yang sangat saya takjubkan adalah pemilihan dan kerapihan crafter dalam membuat produk saya</Text>
                        </View>
                    </View>
                    <View style={{ height: 150, margin: 10, backgroundColor: '#fff' }}>
                        <View style={{ height: '40%', flexDirection: 'row', alignItems: 'center' }}>
                            <Image
                                style={{ width: 50, height: 50, borderRadius: 100, marginLeft: 5 }}
                                source={require('./../assets/images/nia.jpg')}
                                resizeMode='contain'
                            />
                            <View style={{ flexDirection: 'column', flex: 1, marginLeft: 5 }}>
                                <Text style={{ fontFamily: 'Quicksand-Bold', fontSize: 15 }}>Nia Ramadhani</Text>
                                <Text style={{ fontFamily: 'Quicksand-Regular', fontSize: 13 }}>26 Jan 2018, 18.04</Text>
                            </View>
                            <View style={{ flex: 1 }}>
                                <Image
                                    style={{ width: 50, height: 50, backgroundColor: 'green', marginLeft: 20 }}
                                    source={require('./../assets/images/Cukup.png')}
                                />
                            </View>
                        </View>
                        <View style={{ padding: 5 }}>
                            <Text style={{ fontFamily: 'Quicksand-Bold', fontSize: 15 }}>CAKEP</Text>
                        </View>
                        <View style={{ paddingLeft: 5, paddingRight: 5, flex: 1 }}>
                            <Text syle={{
                                fontFamily: 'Quicksand-Regular', fontSize: 13
                            }}>Crafter yang handal dan bisa dipercaya</Text>
                        </View>
                    </View>

                </View>
            </View>
        );
    }
}

export default UlasanPage;
