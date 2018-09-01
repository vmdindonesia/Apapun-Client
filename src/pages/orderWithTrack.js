import React, { Component } from 'react';
import { StyleSheet, ScrollView, Text, TouchableOpacity, View, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
// import Icon from 'react-native-elements'

export class OrderWithTrackPage extends React.Component {


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
        super(props);
        this.state = {
            trackingnotification: false,
            listbox: false
        }
    }

    render() {
        const {
            trackingnotification,
            listbox
        } = this.state

        return (
            <View style={{ flex: 1, flexDirection: 'column', backgroundColor: '#eaeaea' }}>
                <View style={{ width: '100%', height: '88%' }}>
                    <ScrollView showsVerticalScrollIndicator={false}>
                        <View style={styles.container}>
                            <Text style={{ fontFamily: 'Quicksand-Bold', fontSize: 15, color: 'black', marginLeft: 15, marginRight: 15 }}>Pesanan: <Text style={{ fontFamily: 'Quicksand-Regular', fontSize: 15, color: 'red' }}>171227155OPQ</Text></Text>
                            <View style={{ flexDirection: 'row', marginTop: 15, height: 180, marginLeft: 10, marginRight: 10 }}>
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
                                        width: '63%', height: 150, flexDirection: 'column', marginLeft: 5
                                    }}
                                >
                                    <Text style={{ fontFamily: 'Quicksand-Bold', fontSize: 15, color: 'black', paddingTop: 2 }}>Nama Produk</Text>
                                    <View style={{ width: '100%', borderWidth: 0, height: 20, paddingLeft: 2, marginTop: 5, backgroundColor: '#fff', justifyContent: 'center', }}>
                                        <Text style={{
                                            fontFamily: 'Quicksand-Regular', alignSelf: 'auto', fontSize: 13, color: 'black'
                                        }}
                                        >My Own Table</Text>
                                    </View>
                                    <Text style={{ fontFamily: 'Quicksand-Bold', fontSize: 15, color: 'black', paddingTop: 5 }}>Dibuat dari</Text>
                                    <View style={{ width: '100%', borderWidth: 0, height: 20, paddingLeft: 2, marginTop: 5, backgroundColor: '#fff', justifyContent: 'center' }}>
                                        <Text style={{
                                            fontFamily: 'Quicksand-Regular', alignSelf: 'auto', fontSize: 13, color: 'black'
                                        }}
                                        >Workshop
                        </Text>
                                    </View>
                                    <Text style={{ fontFamily: 'Quicksand-Bold', fontSize: 15, color: 'black', paddingTop: 5 }}>Kategori</Text>
                                    <View style={{ width: '100%', borderWidth: 0, height: 20, paddingLeft: 2, marginTop: 5, backgroundColor: '#fff', justifyContent: 'center' }}>
                                        <Text style={{
                                            fontFamily: 'Quicksand-Regular', alignSelf: 'auto', fontSize: 13, color: 'black'
                                        }}
                                        >Furniture
                        </Text>
                                    </View>
                                    <Text style={{ fontFamily: 'Quicksand-Bold', fontSize: 15, color: 'black', paddingTop: 5 }}>Estimasi Selesai</Text>
                                    <View style={{ width: '100%', borderWidth: 0, height: 20, paddingLeft: 5, marginTop: 5, backgroundColor: '#fff', justifyContent: 'center' }}>
                                        <Text style={{
                                            fontFamily: 'Quicksand-Regular', alignSelf: 'auto', fontSize: 13, color: 'black'
                                        }}
                                        >10 hari
                        </Text>
                                    </View>
                                </View>
                            </View>




                            <Text style={{ fontFamily: 'Quicksand-Bold', color: 'black', marginLeft: 10, marginRight: 20, marginTop: 20, fontSize: 15 }}>Crafter</Text>
                            <View style={{ flex: 1, height: 120, flexDirection: 'row', backgroundColor: '#fff', marginTop: 5 }}>
                                <View style={{ width: '40%', justifyContent: 'center' }}>
                                    <Image
                                        style={{ height: 100, width: 100, borderRadius: 100, borderColor: 'white', alignSelf: 'center' }}
                                        source={require('./../assets/images/gal-gadot.jpg')}
                                    />
                                </View>



                                <View style={{ width: '60%', flexDirection: 'column', justifyContent: 'center' }}>
                                    <View style={{ width: '100%', }} >
                                        <Text style={{ fontFamily: 'Quicksand-Bold', color: 'black', fontSize: 15 }}>Gal Gadot</Text>
                                    </View>
                                    <View style={{ flexDirection: 'row', marginTop: 5, alignContent: 'center', }}>
                                        <Image
                                            style={{ height: 22, width: 11, marginLeft: 7 }}
                                            source={require('./../assets/images/location_icon.png')}
                                            resizeMode='contain'
                                        />
                                        <View style={{ flex: 1 }}>
                                            <Text style={{ marginLeft: 15, fontSize: 13, color: 'black', fontFamily: 'Quicksand-Regular', paddingTop: 2.5 }}>Indonesia, Banten</Text>
                                        </View>
                                    </View>
                                    <View style={{ width: '100%', flexDirection: 'row', marginTop: 5 }}>
                                        <Image
                                            style={{ height: 18, width: 26, }}
                                            source={require('./../assets/images/Cukup.png')}
                                            resizeMode='contain'
                                        />
                                        < View style={{ flex: 1 }}>
                                            <Text style={{ marginLeft: 7, fontSize: 13, color: 'black', fontFamily: 'Quicksand-Regular' }}>Rating:<Text style={{ fontFamily: 'Quicksand-Regular', color: 'red', fontSize: 13 }}> Cukup (35)</Text></Text>
                                        </View>
                                    </View>
                                </View>

                            </View>











                            <Text style={{ fontFamily: 'Quicksand-Bold', color: 'black', marginLeft: 10, marginRight: 20, marginTop: 20, fontSize: 15 }}>Deskripsi Produk</Text>
                            <View style={{ flex: 1, backgroundColor: '#fff', marginTop: 5, marginLeft: 12, marginRight: 12 }}>
                                <Text style={{ fontFamily: 'Quicksand-Regular', color: 'black', fontSize: 13, padding: 10 }}
                                >Dibagian atas meja tolong diberikan ukiran "CEMARA", bentuk tulisan saya percayakan kepada anda.
                                </Text>
                            </View>



                            {/* <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', marginTop: 20 }}>

                                <View
                                    style={{ borderWidth: 2, borderColor: '#c1bfbf', width: 40, height: 40, borderRadius: 100, backgroundColor: '#fff', }}
                                />
                                <View style={{ marginLeft: 8.5, marginRight: 8.5 }}>
                                    <Image
                                        style={{ height: 40, width: 40, }}
                                        source={require('./../assets/images/line.png')}
                                    />
                                </View>

                                <View
                                    style={{ borderWidth: 2, borderColor: '#c1bfbf', width: 40, height: 40, borderRadius: 100, backgroundColor: '#fff', }}
                                />
                                <View style={{ marginLeft: 8.5, marginRight: 8.5 }}>
                                    <Image
                                        style={{ height: 40, width: 40, }}
                                        source={require('./../assets/images/line.png')}
                                    />
                                </View>
                                <View
                                    style={{ borderWidth: 2, borderColor: '#c1bfbf', width: 40, height: 40, borderRadius: 100, backgroundColor: '#fff', }}
                                />
                                <View style={{ marginLeft: 8.5, marginRight: 8.5 }}>
                                    <Image
                                        style={{ height: 40, width: 40, }}
                                        source={require('./../assets/images/line.png')}
                                    />
                                </View>
                                <View
                                    style={{ borderWidth: 2, borderColor: '#c1bfbf', width: 40, height: 40, borderRadius: 50, backgroundColor: '#fff', }}
                                />
                            </View> */}

                            <View style={{ flexDirection: 'row', marginTop: 20, marginRight: 17, marginLeft: 17 }}>

                                <View style={{ flex: 1, }}>
                                    <View
                                        style={{ borderWidth: 2, borderColor: '#c1bfbf', width: 40, height: 40, borderRadius: 100, backgroundColor: '#fff', alignSelf: 'center' }}
                                    />
                                    <Text style={{ fontFamily: 'Quicksand-Regular', fontSize: 13, textAlign: 'center', color: 'black', paddingTop: 7 }}>Proses Transaksi</Text>
                                </View>

                                <Image
                                    style={{ height: 25, width: 25, marginTop: 5 }}
                                    source={require('./../assets/images/line.png')}
                                />

                                <View style={{ flex: 1, }}>
                                    <View
                                        style={{ borderWidth: 2, borderColor: '#c1bfbf', width: 40, height: 40, borderRadius: 100, backgroundColor: '#fff', alignSelf: 'center' }}
                                    />
                                    <Text style={{ fontFamily: 'Quicksand-Regular', fontSize: 13, textAlign: 'center', color: 'black', paddingTop: 7 }}>Memproses Barang</Text>
                                </View>

                                <Image
                                    style={{ height: 25, width: 25, marginTop: 5 }}
                                    source={require('./../assets/images/line.png')}
                                />

                                <View style={{ flex: 1, }}>
                                    <View
                                        style={{ borderWidth: 2, borderColor: '#c1bfbf', width: 40, height: 40, borderRadius: 100, backgroundColor: '#fff', alignSelf: 'center' }}
                                    />
                                    <Text style={{ fontFamily: 'Quicksand-Regular', fontSize: 13, textAlign: 'center', color: 'black', paddingTop: 7 }}>Pengiriman</Text>
                                </View>

                                <Image
                                    style={{ height: 25, width: 25, marginTop: 5 }}
                                    source={require('./../assets/images/line.png')}
                                />

                                <View style={{ flex: 1, }}>
                                    <View
                                        style={{ borderWidth: 2, borderColor: '#c1bfbf', width: 40, height: 40, borderRadius: 100, backgroundColor: '#fff', alignSelf: 'center' }}
                                    />
                                    <Text style={{ fontFamily: 'Quicksand-Regular', fontSize: 13, textAlign: 'center', color: 'black', paddingTop: 7 }}>Barang Diterima</Text>
                                </View>
                            </View>



                            <View style={{ flex: 1, backgroundColor: 'white', height: 90, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginLeft: 25, marginRight: 25, marginTop: 15 }}>
                                <TouchableOpacity
                                    onPress={() => this.setState({ trackingnotification: !this.state.trackingnotification })}
                                    style={{ height: 80, flex: 1, padding: 5, }}
                                >
                                    <View style={{ flex: 1, backgroundColor: 'white', height: 80, flexDirection: 'row', alignItems: 'center', }}>
                                        <View style={{ width: '30%', height: '100%', justifyContent: 'center' }}>
                                            <Text style={{ fontFamily: 'Quicksand-Bold', color: 'black', fontSize: 13, textAlign: 'left', paddingLeft: 10 }}>28 Feb 2018</Text>
                                            <Text style={{ fontFamily: 'Quicksand-Regular', color: 'black', fontSize: 13, textAlign: 'left', paddingLeft: 10 }}>1.30 pm</Text>
                                        </View>

                                        <View style={{ flexDirection: 'column', borderColor: '#e5e5e5', borderWidth: 1, height: '80%', alignSelf: 'center', margin: 10 }} />

                                        <View style={{ width: '60%', height: '100%', justifyContent: 'center' }}>
                                            <Text style={{ fontFamily: 'Quicksand-Bold', color: 'black', fontSize: 13, textAlign: 'left' }}>Barang anda sudah sampai!</Text>
                                            <Text style={{ FontFamily: 'Quicksand-Regular', color: 'black', fontSize: 13, textAlign: 'left' }}>Terima kasih telah menggunakan APAPUN</Text>
                                        </View>
                                    </View>
                                    {
                                        trackingnotification === false ?
                                            <View style={{ marginBottom: -7.5, }}>
                                                <Icon size={17.5} style={{ alignSelf: 'center', color: '#eaeaea' }} name='md-list-box' />

                                            </View>
                                            :
                                            <View />
                                    }

                                </TouchableOpacity>
                            </View>
                            {

                                trackingnotification === true ?
                                    <View style={{ flex: 1, backgroundColor: 'white', height: 80, padding: 5, marginLeft: 25, marginRight: 25, flexDirection: 'row', alignItems: 'center' }}>
                                        <View style={{ width: '30%', height: '100%', justifyContent: 'center' }}>
                                            <Text style={{ fontFamily: 'Quicksand-Bold', color: 'black', fontSize: 13, textAlign: 'left', paddingLeft: 10 }}>28 Feb 2018</Text>
                                            <Text style={{ fontFamily: 'Quicksand-Regular', color: 'black', fontSize: 13, textAlign: 'left', paddingLeft: 10 }}>1.30 pm</Text>
                                        </View>

                                        <View style={{ flexDirection: 'column', borderColor: '#e5e5e5', borderWidth: 1, height: '80%', alignSelf: 'center', margin: 10 }} />

                                        <View style={{ width: '60%', height: '100%', justifyContent: 'center' }}>
                                            <Text style={{ fontFamily: 'Quicksand-Bold', color: 'black', fontSize: 13, textAlign: 'left' }}>Barang anda sudah sampai!</Text>
                                            <Text style={{ FontFamily: 'Quicksand-Regular', color: 'black', fontSize: 13, textAlign: 'left' }}>Terima kasih telah menggunakan APAPUN</Text>
                                        </View>
                                    </View>
                                    :
                                    <View />
                            }




                            <Text style={{ fontFamily: 'Quicksand-Bold', color: 'black', marginLeft: 10, marginRight: 20, marginTop: 20, fontSize: 15 }}>Jasa Pengiriman</Text>
                            <View
                                style={{ marginLeft: 10, marginRight: 10, flexDirection: 'row', backgroundColor: '#fff', marginTop: 10 }}>
                                <Image
                                    style={{ marginTop: 10, marginBottom: 10, width: '40%', height: 70 }}
                                    source={require('../assets/images/pos-indonesia.png')}
                                    resizeMode='contain'
                                />
                                <Text style={{
                                    marginLeft: 10, marginTop: 35, flex: 1, fontFamily: 'Quicksand-Bold', color: 'black'
                                }}>
                                    Pos Indonesia</Text>
                            </View>



                            <Text style={{ fontFamily: 'Quicksand-Bold', color: 'black', marginLeft: 10, marginRight: 20, marginTop: 20, fontSize: 15 }}>Alamat Pengiriman</Text>
                            <View style={{ flex: 1, height: 130, backgroundColor: '#fff', marginLeft: 10, marginRight: 10, padding: 7.5, marginTop: 5 }}>
                                <Text style={{ fontFamily: 'Quicksand-Bold', marginLeft: 5, fontSize: 13, color: 'black' }}>Home 1 {'\n'}</Text>
                                <Text style={{ fontFamily: 'Quicksand-Regular', marginLeft: 5, fontSize: 13, color: 'black' }}>Penerima: <Text style={{ fontFamily: 'Quicksand-Bold', fontSize: 13, color: 'black' }}>Judy {'\n'}{'\n'}</Text>
                                    <Text style={{ fontFamily: 'Quicksand-Regular', marginLeft: 5, fontSize: 13, color: 'black' }}>(+62) 8129676388 {'\n'}Jl. Kembang Ayu III blok E5 no.20 Perumahan Puri Indah,{'\n'}
                                        DKI Jakarta, JAKARTA BARAT, KEMBANGAN </Text></Text>
                            </View>


                            <Text style={{ fontFamily: 'Quicksand-Bold', color: 'black', marginLeft: 10, marginRight: 20, marginTop: 20, fontSize: 15 }}>Jumlah Biaya</Text>
                            <View style={{ width: '100%', height: 210, backgroundColor: '#fff', padding: 10, marginTop: 7 }}>

                                <View style={{ flexDirection: 'row', height: 25, borderBottomColor: '#e5e5e5', borderBottomWidth: 1, alignItems: 'center' }}>
                                    <Text style={{ fontFamily: 'Quicksand-Regular', color: 'black', fontSize: 13 }}>Harga Produk</Text>
                                    <View style={{ flex: 1, }}>
                                        <Text style={{ fontFamily: 'Quicksand-Bold', color: 'black', fontSize: 13, alignSelf: 'flex-end' }}>Rp 840.000</Text>
                                    </View>
                                </View>

                                <View style={{ flexDirection: 'row', height: 25, borderBottomColor: '#e5e5e5', borderBottomWidth: 1, alignItems: 'center' }}>
                                    <Text style={{ fontFamily: 'Quicksand-Regular', color: 'black', fontSize: 13 }}>Pengiriman</Text>
                                    <View style={{ flex: 1, }}>
                                        <Text style={{ fontFamily: 'Quicksand-Bold', color: 'black', fontSize: 13, textAlign: 'right' }}>Rp 20.000</Text>
                                    </View>
                                </View>

                                <View style={{ flexDirection: 'row', height: 25, borderBottomColor: '#e5e5e5', borderBottomWidth: 1, alignItems: 'center' }}>
                                    <Text style={{ fontFamily: 'Quicksand-Regular', color: 'black', fontSize: 13 }}>Jumlah yang dipesan</Text>
                                    <View style={{ flex: 1, }}>
                                        <Text style={{ fontFamily: 'Quicksand-Bold', color: 'black', fontSize: 13, textAlign: 'right' }}>1 PCS</Text>
                                    </View>
                                </View>

                                <View style={{ flexDirection: 'row', height: 50, borderBottomColor: '#e5e5e5', borderBottomWidth: 1, alignItems: 'center' }}>
                                    <Text style={{ fontFamily: 'Quicksand-Bold', color: 'black', fontSize: 15 }}>TOTAL</Text>
                                    <View style={{ flex: 1, }}>
                                        <Text style={{ fontFamily: 'Quicksand-Bold', color: 'red', fontSize: 15, textAlign: 'right' }}>Rp 860.000</Text>
                                    </View>
                                </View>

                                <View style={{ flexDirection: 'row', justifyContent: 'flex-end', marginTop: 15 }}>
                                    <Text style={{ flex: 1, fontFamily: 'Quicksand-Regular', color: 'black', fontSize: 13 }}>Pembayaran</Text>
                                    <View style={{ flexDirection: 'column', paddingRight: 15 }}>
                                        <Text style={{ fontFamily: 'Quicksand-Bold', color: 'black', fontSize: 13 }}>**** **** **** 4557</Text>
                                        <Text style={{ fontFamily: 'Quicksand-Regular', color: 'black', fontSize: 13 }}>Credit Card</Text>
                                    </View>
                                    <View>
                                        <Image
                                            style={{ width: 50, height: 30 }}
                                            source={require('../assets/images/logo_visa.png')}
                                            resizeMode='cover'
                                        />
                                    </View>
                                </View>
                            </View>
                        </View>
                        <View style={{ flex: 1, height: 50, backgroundColor: 'eaeaea' }} />
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
                    <View style={{ width: '35%', height: '100%', flexDirection: 'column', }}>
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

                    <View style={{ flexDirection: 'column', height: '85%', borderColor: 'black', borderWidth: 1, marginLeft: 10 }} />

                    <View style={{ width: '45%', height: '100%', alignItems: 'center', alignContent: 'center' }}>
                        <TouchableOpacity
                            style={{
                                height: 50, width: 50, marginRight: 50
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
            </View >
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // marginLeft: 10,
        // marginRight: 10,
        marginTop: 20,
        // backgroundColor: 'red'
    }
});


export default OrderWithTrackPage;

