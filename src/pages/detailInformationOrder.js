import React, { Component } from 'react';
import { StyleSheet, ScrollView, Text, TouchableOpacity, View, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export class DetailInformationOrderPage extends React.Component {

    static navigationOptions = ({ navigation }) => ({
        headerLeft:
            <TouchableOpacity
                onPress={() => { navigation.goBack(); console.log(navigation.goBack(), 'Props Order') }}
            >
                <Icon size={30} style={{ marginLeft: 25, color: '#EF1C25' }} name='ios-arrow-back' />
            </TouchableOpacity>,
        headerTitle: 'Detail Pesanan'
    });

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <ScrollView>
                    <View style={styles.container}>
                        <Text style={{ fontFamily: 'Quicksand-Bold' }}>Pesanan: 171227155OPQ</Text>
                        <View style={{ flexDirection: 'row', marginTop: 10 }}>
                            <View
                                style={{
                                    width: '35%', justifyContent: 'center',
                                }}
                            >
                                <Image
                                    style={{ width: 110, height: 110, alignSelf: 'center' }}
                                    source={require('./../assets/images/design1.jpg')}
                                    resizeMode='contain'
                                />
                            </View>
                            <View
                                style={{
                                    width: '60%', flexDirection: 'column'
                                }}
                            >
                                <Text style={{ fontFamily: 'Quicksand-Bold', fontSize: 15 }}>Nama Produk</Text>
                                <View style={{ width: '100%', borderWidth: 0, height: 20, paddingLeft: 2, paddingTop: 2, backgroundColor: '#fff' }}>
                                    <Text style={{
                                        fontFamily: 'Quicksand-Regular', alignSelf: 'auto', fontSize: 13
                                    }}
                                    >My Own Table</Text>
                                </View>
                                <Text style={{ fontFamily: 'Quicksand-Bold', fontSize: 15 }}>Dibuat dari</Text>
                                <View style={{ width: '100%', borderWidth: 0, height: 20, paddingLeft: 2, paddingTop: 2, backgroundColor: '#fff' }}>
                                    <Text style={{
                                        fontFamily: 'Quicksand-Regular', alignSelf: 'auto', fontSize: 13
                                    }}
                                    >Workshop
                        </Text>
                                </View>
                                <Text style={{ fontFamily: 'Quicksand-Bold', fontSize: 15 }}>Kategori</Text>
                                <View style={{ width: '100%', borderWidth: 0, height: 20, paddingLeft: 2, paddingTop: 2, backgroundColor: '#fff' }}>
                                    <Text style={{
                                        fontFamily: 'Quicksand-Regular', alignSelf: 'auto', fontSize: 13
                                    }}
                                    >Furniture
                        </Text>
                                </View>
                                <Text style={{ fontFamily: 'Quicksand-Bold', fontSize: 15 }}>Estimasi Selesai</Text>
                                <View style={{ width: '100%', borderWidth: 0, height: 20, paddingLeft: 2, paddingTop: 2, backgroundColor: '#fff' }}>
                                    <Text style={{
                                        fontFamily: 'Quicksand-Regular', alignSelf: 'auto', fontSize: 13
                                    }}
                                    >10 hari
                        </Text>
                                </View>
                            </View>
                        </View>
                        <Text style={{ fontFamily: 'Quicksand-Bold', marginTop: 10 }}>Crafter</Text>
                        <View style={{ width: '100%', height: 120, flexDirection: 'row', backgroundColor: '#fff' }}>
                            <View style={{ width: '40%', justifyContent: 'center' }}>
                                <Image
                                    style={{ height: 100, width: 100, borderRadius: 100, borderColor: 'white', alignSelf: 'center' }}
                                    source={require('./../assets/images/gal-gadot.jpg')}
                                />
                            </View>
                            <View style={{ width: '60%', flexDirection: 'column', justifyContent: 'center' }}>
                                <View style={{ width: '100%', alignSelf: 'auto' }} >
                                    <Text style={{ fontFamily: 'Quicksand-Bold', fontSize: 15 }}>Juminten Rahmawati Bunga Lestari</Text>
                                </View>
                                <View style={{ flexDirection: 'row', marginTop: 3 }}>
                                    <Image
                                        style={{ height: 15, width: 10 }}
                                        source={require('./../assets/images/location_icon.png')}
                                    />
                                    <View style={{ flex: 1 }}>
                                        <Text style={{ marginLeft: 10, fontSize: 13, fontFamily: 'Quicksand-Regular' }}>Kalimantan Selatan</Text>
                                    </View>
                                </View>
                                <View style={{ width: '100%', flexDirection: 'row', marginTop: 3 }}>
                                    <Image
                                        style={{ height: 15, width: 15, }}
                                        source={require('./../assets/images/Cukup.png')}
                                    />
                                    < View style={{ flex: 1 }}>
                                        <Text style={{ marginLeft: 7, fontSize: 13, fontFamily: 'Quicksand-Regular' }}>Rating: Cukup (35)</Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                        <Text style={{ fontFamily: 'Quicksand-Bold', marginTop: 5 }}>Jasa Pengiriman</Text>
                        <View
                            style={{ marginLeft: 5, marginRight: 5, flexDirection: 'row', backgroundColor: '#fff' }}>
                            <Image
                                style={{ marginTop: 10, marginBottom: 10, width: '40%', height: 70 }}
                                source={require('../assets/images/pos-indonesia.png')}
                                resizeMode='contain'
                            />
                            <Text style={{
                                marginLeft: 10, marginTop: 35, flex: 1, fontFamily: 'Quicksand-Bold', fontSize: 13
                            }}>
                                Pos Indonesia</Text>
                        </View>
                        <Text style={{ fontFamily: 'Quicksand-Bold', marginTop: 5 }}>Alamat Pengiriman</Text>
                        <View style={{ height: 120, backgroundColor: '#fff', marginLeft: 5, marginRight: 5, marginTop: 5 }}>
                            <Text style={{ fontFamily: 'Quicksand-Bold', marginTop: 8, marginLeft: 5, fontSize: 13 }}>Home 1 {'\n'}</Text>
                            <Text style={{ fontFamily: 'Quicksand-Regular', marginLeft: 5, fontSize: 13 }}>Penerima: <Text style={{ fontFamily: 'Quicksand-Bold', fontSize: 13 }}>Judy {'\n'}{'\n'}</Text>
                                <Text style={{ fontFamily: 'Quicksand-Regular', marginLeft: 5, fontSize: 13 }}>(+62) 8129676388 {'\n'}Jl. Kembang Ayu III blok E5 no.20 Perumahan Puri Indah,{'\n'}
                                    DKI Jakarta, JAKARTA BARAT, KEMBANGAN </Text></Text>
                        </View>
                        <Text style={{ fontFamily: 'Quicksand-Bold', marginTop: 5 }}>Jumlah Biaya</Text>
                        <View style={{ width: '100%', height: 90, backgroundColor: '#fff', padding: 10 }}>
                            <View style={{ flexDirection: 'row' }}>
                                <View style={{ width: '60%', borderRightWidth: 0.3, }}>
                                    <Text style={{ fontFamily: 'Quicksand-Regular', fontSize: 13 }}>Harga Produk</Text>
                                </View>
                                <View style={{ marginLeft: 5 }}>
                                    <Text style={{ fontFamily: 'Quicksand-Bold', fontSize: 13 }}>Rp 840.000</Text>
                                </View>
                            </View>
                            <View style={{ flexDirection: 'row', marginTop: 3 }}>
                                <View style={{ width: '60%', borderRightWidth: 0.3, }}>
                                    <Text style={{ fontFamily: 'Quicksand-Regular', fontSize: 13 }}>Pengiriman</Text>
                                </View>
                                <View style={{ marginLeft: 5 }}>
                                    <Text style={{ fontFamily: 'Quicksand-Bold', fontSize: 13 }}>Rp 20.000</Text>
                                </View>
                            </View>
                            <View style={{ flexDirection: 'row', marginTop: 3 }}>
                                <View style={{ width: '60%', borderRightWidth: 0.3 }}>
                                    <Text style={{ fontFamily: 'Quicksand-Regular', fontSize: 13 }}>Jumlah yang dipesan</Text>
                                </View>
                                <View style={{ marginLeft: 5 }}>
                                    <Text style={{ fontFamily: 'Quicksand-Bold', fontSize: 12 }}>1 PCS</Text>
                                </View>
                            </View>
                            <View style={{ flexDirection: 'row', marginTop: 6 }}>
                                <View style={{ width: '60%', borderRightWidth: 0.3 }}>
                                    <Text style={{ fontFamily: 'Quicksand-Bold', fontSize: 15 }}>TOTAL</Text>
                                </View>
                                <View style={{ marginLeft: 5 }}>
                                    <Text style={{ fontFamily: 'Quicksand-Bold', color: 'red', fontSize: 15 }}>Rp 860.000</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </ScrollView>
                <View style={{ width: '100%', height: '10%', flexDirection: 'row', backgroundColor: 'rgba(0,0,0,0.9)' }}>
                    <View style={{ width: '15%', height: '100%', justifyContent: 'center' }}>
                        <Icon size={30} style={{ alignSelf: 'center', color: 'red' }} name='md-lock' />
                    </View>
                    <View style={{ width: '50%', height: '100%', justifyContent: 'center', paddingRight: 20 }}>
                        <Text style={{ color: 'white', fontSize: 13, textAlign: 'justify', fontFamily: 'Quicksand-Regular' }}>Pesanan akan terkunci setelah menekan tombol PROSES</Text>
                    </View>
                    <View style={{ borderRightWidth: 0.7, height: 30, alignSelf: 'center' }} />
                    <View style={{ width: '35%', height: '100%', justifyContent: 'center', alignItems: 'center' }}>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('FinalProcessOrder')}
                            style={{
                                borderWidth: 0, borderRadius: 25, backgroundColor: 'red',
                                height: 40, width: 100, justifyContent: 'center'
                            }}
                        >
                            <Text style={{
                                color: 'white', fontFamily: 'Quicksand-Bold', textAlign: 'center',
                                fontSize: 15
                            }}>Proses</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginLeft: 10,
        marginRight: 10,
        marginTop: 5
    }
});


export default DetailInformationOrderPage;

