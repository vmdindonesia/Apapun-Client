import React, { component } from 'react';
import { StyleSheet, ScrollView, Text, TouchableOpacity, View, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export class OrderWithTrackPage extends React.Component {

    static navigationOptions = {
        headerTitle: 'Detail Pesanan'
    }

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <View style={{ flexDirection: 'column' }}>
                <View style={{ width: '100%', height: '88%' }}>
                    <ScrollView>
                        <View style={styles.container}>
                            <Text style={{ fontFamily: 'Quicksand-Bold', fontSize: 15 }}>Pesanan: <Text style={{ fontFamily: 'Quicksand-Regular', fontSize: 15, color: 'red' }}>171227155OPQ</Text></Text>
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
                            <Text style={{ fontFamily: 'Quicksand-Bold', marginTop: 10, fontSize: 15 }}>Crafter</Text>
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
                                            <Text style={{ marginLeft: 10, fontSize: 13, fontFamily: 'Quicksand-Regular' }}>Indonesia, Kalimantan Selatan</Text>
                                        </View>
                                    </View>
                                    <View style={{ width: '100%', flexDirection: 'row', marginTop: 3 }}>
                                        <Image
                                            style={{ height: 15, width: 15, }}
                                            source={require('./../assets/images/smiley.png')}
                                        />
                                        < View style={{ flex: 1 }}>
                                            <Text style={{ marginLeft: 7, fontSize: 13, fontFamily: 'Quicksand-Regular' }}>Rating: Sempurna (35)</Text>
                                        </View>
                                    </View>
                                </View>
                            </View>
                            <Text style={{ fontFamily: 'Quicksand-Bold', marginTop: 5, fontSize: 15 }}>Deskripsi Produk</Text>
                            <View style={{ floex: 1, backgroundColor: '#fff' }}>
                                <Text style={{ fontFamily: 'Quicksand-Regular', fontSize: 13, padding: 10 }}
                                >Dibagian atas meja tolong diberikan ukiran "CEMARA", bentuk tulisan saya percayakan kepada anda.
                                </Text>
                            </View>

                            <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', marginTop: 10 }}>
                                <View
                                    style={{ borderWidth: 2, borderColor: '#c1bfbf', width: 40, height: 40, borderRadius: 100, backgroundColor: '#fff', marginLeft: 3 }}
                                />
                                <View style={{ paddingLeft: 5, paddingRight: 5 }}>
                                    <Image
                                        style={{ height: 40, width: 40, }}
                                        source={require('./../assets/images/line.png')}
                                    />
                                </View>
                                <View
                                    style={{ borderWidth: 2, borderColor: '#c1bfbf', width: 40, height: 40, borderRadius: 100, backgroundColor: '#fff' }}
                                />
                                <View style={{ paddingLeft: 5, paddingRight: 5 }}>
                                    <Image
                                        style={{ height: 40, width: 40, }}
                                        source={require('./../assets/images/line.png')}
                                    />
                                </View>
                                <View
                                    style={{ borderWidth: 2, borderColor: '#c1bfbf', width: 40, height: 40, borderRadius: 100, backgroundColor: '#fff', marginRight: 5 }}
                                />
                                <View style={{ paddingLeft: 5, paddingRight: 5 }}>
                                    <Image
                                        style={{ height: 40, width: 40, }}
                                        source={require('./../assets/images/line.png')}
                                    />
                                </View>
                                <View
                                    style={{ borderWidth: 2, borderColor: '#c1bfbf', width: 40, height: 40, borderRadius: 100, backgroundColor: '#fff' }}
                                />
                            </View>
                            <View style={{ flexDirection: 'row' }}>
                                <View style={{ width: 60, height: 30, marginLeft: 5 }}>
                                    <Text style={{ fontFamily: 'Quicksand-Regular', fontSize: 13, textAlign: 'center' }}>Proses Transaksi</Text>
                                </View>
                                <View style={{ width: 80, height: 30, marginLeft: 20 }}>
                                    <Text style={{ fontFamily: 'Quicksand-Regular', fontSize: 13, textAlign: 'center' }}>Memproses Barang</Text>
                                </View>
                                <View style={{ width: 80, height: 40, marginLeft: 10 }}>
                                    <Text style={{ fontFamily: 'Quicksand-Regular', fontSize: 13, textAlign: 'center' }}>Pengiriman</Text>
                                </View>
                                <View style={{ width: 60, height: 50, marginLeft: 25 }}>
                                    <Text style={{ fontFamily: 'Quicksand-Regular', fontSize: 13, textAlign: 'center' }}>Barang Diterima</Text>
                                </View>
                            </View>
                            <View style={{ flexDirection: 'row', backgroundColor: '#fff', padding: 15, justifyContent: 'center', alignContent: 'center' }}>
                                <View style={{ flex: 1, borderRightWidth: 0.5 }}>
                                    <Text style={{ fontFamily: 'Quicksand-Bold', fontSize: 13, textAlign: 'center' }}>28 Feb 2018</Text>
                                    <Text style={{ fontFamily: 'Quicksand-Regular', fontSize: 13, textAlign: 'center' }}>1.30 pm</Text>
                                </View>
                                <View style={{ flex: 2 }}>
                                    <Text style={{ fontFamily: 'Quicksand-Bold', fontSize: 13, textAlign: 'center' }}>Barang anda sudah sampai!</Text>
                                    <Text style={{ fontFamily: 'Quicksand-Regular', fontSize: 13, textAlign: 'center' }}>Terima kasih telah menggunakan APAPUN</Text>
                                </View>
                            </View>

                            <Text style={{ fontFamily: 'Quicksand-Bold', marginTop: 5, fontSize: 15 }}>Jasa Pengiriman</Text>
                            <View
                                style={{ marginLeft: 5, marginRight: 5, flexDirection: 'row', backgroundColor: '#fff' }}>
                                <Image
                                    style={{ marginTop: 10, marginBottom: 10, width: '40%', height: 70 }}
                                    source={require('../assets/images/pos-indonesia.png')}
                                    resizeMode='contain'
                                />
                                <Text style={{
                                    marginLeft: 10, marginTop: 35, flex: 1, fontFamily: 'Quicksand-Bold'
                                }}>
                                    Pos Indonesia</Text>
                            </View>
                            <Text style={{ fontFamily: 'Quicksand-Bold', marginTop: 5, fontSize: 15 }}>Alamat Pengiriman</Text>
                            <View style={{ height: 120, backgroundColor: '#fff', marginLeft: 5, marginRight: 5, marginTop: 5 }}>
                                <Text style={{ fontFamily: 'Quicksand-Bold', marginTop: 8, marginLeft: 5, fontSize: 13 }}>Home 1 {'\n'}</Text>
                                <Text style={{ fontFamily: 'Quicksand-Regular', marginLeft: 5, fontSize: 13 }}>Penerima: <Text style={{ fontFamily: 'Quicksand-Bold', fontSize: 13 }}>Judy {'\n'}{'\n'}</Text>
                                    <Text style={{ fontFamily: 'Quicksand-Regular', marginLeft: 5, fontSize: 13 }}>(+62) 8129676388 {'\n'}Jl. Kembang Ayu III blok E5 no.20 Perumahan Puri Indah,{'\n'}
                                        DKI Jakarta, JAKARTA BARAT, KEMBANGAN </Text></Text>
                            </View>
                            <Text style={{ fontFamily: 'Quicksand-Bold', marginTop: 5, fontSize: 15 }}>Jumlah Biaya</Text>
                            <View style={{ width: '100%', height: 150, backgroundColor: '#fff', padding: 10 }}>
                                <View style={{ flexDirection: 'row' }}>
                                    <View style={{ width: '60%', borderRightWidth: 0.3, }}>
                                        <Text style={{ fontFamily: 'Quicksand-Regular', fontSize: 13 }}>Harga Produk</Text>
                                    </View>
                                    <View style={{ marginLeft: 5, flex: 1 }}>
                                        <Text style={{ fontFamily: 'Quicksand-Bold', fontSize: 13, alignSelf: 'flex-end' }}>Rp 840.000</Text>
                                    </View>
                                </View>
                                <View style={{ flexDirection: 'row', marginTop: 3 }}>
                                    <View style={{ width: '60%', borderRightWidth: 0.3, }}>
                                        <Text style={{ fontFamily: 'Quicksand-Regular', fontSize: 13 }}>Pengiriman</Text>
                                    </View>
                                    <View style={{ marginLeft: 5, flex: 1 }}>
                                        <Text style={{ fontFamily: 'Quicksand-Bold', fontSize: 13, textAlign: 'right' }}>Rp 20.000</Text>
                                    </View>
                                </View>
                                <View style={{ flexDirection: 'row', marginTop: 3 }}>
                                    <View style={{ width: '60%', borderRightWidth: 0.3 }}>
                                        <Text style={{ fontFamily: 'Quicksand-Regular', fontSize: 13 }}>Jumlah yang dipesan</Text>
                                    </View>
                                    <View style={{ marginLeft: 5, flex: 1 }}>
                                        <Text style={{ fontFamily: 'Quicksand-Bold', fontSize: 13, textAlign: 'right' }}>1 PCS</Text>
                                    </View>
                                </View>
                                <View style={{ flexDirection: 'row', marginTop: 6 }}>
                                    <View style={{ width: '60%', borderRightWidth: 0.3 }}>
                                        <Text style={{ fontFamily: 'Quicksand-Bold', fontSize: 15 }}>TOTAL</Text>
                                    </View>
                                    <View style={{ marginLeft: 5, flex: 1 }}>
                                        <Text style={{ fontFamily: 'Quicksand-Bold', color: 'red', fontSize: 15, textAlign: 'right' }}>Rp 860.000</Text>
                                    </View>
                                </View>
                                <View style={{ flexDirection: 'row', justifyContent: 'flex-end', marginTop: 15 }}>
                                    <View style={{ flexDirection: 'column', paddingRight: 15 }}>
                                        <Text style={{ fontFamily: 'Quicksand-Bold', fontSize: 13 }}>**** **** **** 4557</Text>
                                        <Text style={{ fontFamily: 'Quicksand-Regular', fontSize: 13 }}>Credit Card</Text>
                                    </View>
                                    <View>
                                        <Image
                                            style={{ width: 40, height: 20 }}
                                            source={require('../assets/images/logo_visa.png')}
                                            resizeMode='cover'
                                        />
                                    </View>
                                </View>
                                <Text style={{ flex: 1, fontFamily: 'Quicksand-Regular', fontSize: 13 }}>Pembayaran</Text>
                            </View>
                        </View>
                    </ScrollView>
                </View>
                <View style={{
                    width: '100%', height: '12%', backgroundColor: 'rgba(0, 0, 0, 0.9)', flexDirection: 'row', paddingTop: 20, paddingBottom: 10
                }} >
                    <View style={{ width: '35%', height: '100%', flexDirection: 'column' }}>
                        <View>
                            <Text style={{ color: 'white', textAlign: 'center', fontSize: 13 }}>Crafter</Text>
                        </View>
                        <View style={{ flex: 1 }}>
                            <Text
                                style={{
                                    color: 'red', fontFamily: 'Quicksand-Bold', textAlign: 'center',
                                    fontSize: 15
                                }}
                            >Song Ji Hye
                                </Text>
                        </View>
                    </View>
                    <View style={{ width: '35%', height: '100%', flexDirection: 'column', borderRightWidth: 1 }}>
                        <View>
                            <Text style={{ color: 'white', textAlign: 'center', fontSize: 13 }}>Estimasi Selesai</Text>
                        </View>
                        <View style={{ flex: 1 }}>
                            <Text
                                style={{
                                    color: 'red', fontFamily: 'Quicksand-Bold', textAlign: 'center',
                                    fontSize: 15
                                }}
                            >27 Feb 18
                                </Text>
                        </View>
                    </View>
                    <View style={{ width: '45%', height: '100%', alignItems: 'center' }}>
                        <TouchableOpacity
                            style={{
                                height: 50, width: 50, marginRight: 25
                            }}
                        >
                            <Image
                                style={{ width: 30, height: 30 }}
                                source={require('../assets/images/Chat.png')}
                                resizeMode='cover'
                            />
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


export default OrderWithTrackPage;

