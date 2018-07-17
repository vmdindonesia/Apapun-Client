import React, { Component } from 'react';
import { StyleSheet, ScrollView, FlatList, Text, View, Image } from 'react-native';
import { Input } from '../components/common';
import Swiper from 'react-native-swiper';


export class MyOrderPage extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            photo: [
                'http://animaster.com/wp-content/uploads/2018/02/after-10-12-art-design-college.jpg',
                'http://animaster.com/wp-content/uploads/2018/02/after-10-12-art-design-college.jpg',
                'http://animaster.com/wp-content/uploads/2018/02/after-10-12-art-design-college.jpg',
                'http://animaster.com/wp-content/uploads/2018/02/after-10-12-art-design-college.jpg',
                'http://animaster.com/wp-content/uploads/2018/02/after-10-12-art-design-college.jpg',
                'http://animaster.com/wp-content/uploads/2018/02/after-10-12-art-design-college.jpg'



            ],
        }
    }

    renderProductItem = (data) => {
        console.log(data, '098');
        return (
            <View
                style={{
                    borderRadius: 4,
                    elevation: 2,
                    backgroundColor: '#fff',
                    marginRight: 5,
                    height: 110
                }}
            >
                <Image
                    style={styles.item}
                    source={{ uri: data.item }}
                />
            </View>
        )
    }

    render() {
        return (
            <ScrollView>
                <View style={styles.container}>
                    <View style={styles.containerSlide}>
                        <Swiper
                            style={styles.wrapper}
                            showsButtons={false}
                            dot={<View style={{ backgroundColor: '#FFFFFF', width: 5, height: 5, borderRadius: 4, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3 }} />}
                        >
                            <View style={styles.slide1}>
                                <Image
                                    style={styles.imageStyle}
                                    source={require('./../assets/images/swiperFirst.png')}
                                    resizeMode='cover'
                                />
                            </View>
                            <View style={styles.slide2}>
                                <Image
                                    style={styles.imageStyle}
                                    source={require('./../assets/images/swiperSecond.png')}
                                    resizeMode='cover'
                                />
                            </View>
                        </Swiper>
                    </View>
                </View>
                <View style={{ height: 110 }}>
                    <View style={{ flex: 1, marginLeft: 5 }}>
                        <FlatList
                            data={this.state.photo}
                            horizontal
                            renderItem={this.renderProductItem.bind(this)}
                            showsHorizontalScrollIndicator={false}
                        />
                    </View>
                </View>
                <View style={styles.containerForText}>
                    <View style={styles.containerText}>
                        <Text style={{
                            fontFamily: 'Quicksand-Bold',
                            marginTop: 15
                        }}>
                            Nama Produk </Text>
                        <View style={{ flex: 1, marginTop: 3 }}>
                            <Input
                                editable={false}
                                value='ciputat'
                            // onChangeText={v => this.onChangeInput('nameProduct', v)}
                            />
                        </View>
                    </View>
                    <View style={[styles.containerText, { marginLeft: 4 }]}>
                        <Text style={{
                            fontFamily: 'Quicksand-Bold',
                            marginTop: 15
                        }}>
                            Kategori </Text>
                        <View style={{ flex: 1, marginTop: 3, marginRight: 10 }}>
                            <Input
                                editable={false}
                                value='ciledug'
                            // onChangeText={v => this.onChangeInput('nameProduct', v)}
                            />
                        </View>
                    </View>
                </View>
                <View style={[styles.containerProduction, { marginLeft: 5 }]}>
                    <Text style={{
                        fontFamily: 'Quicksand-Bold',
                        marginTop: 20
                    }}>
                        Jumlah Produksi </Text>
                    <View style={{ marginTop: 10, marginLeft: 5, height: 40, width: '10%' }}>
                        <Input
                            editable={false}
                            value='1'
                        // onChangeText={v => this.onChangeInput('nameProduct', v)}
                        />
                    </View>
                </View>
                <Text style={{
                    fontFamily: 'Quicksand-Bold',
                    marginTop: 10, marginLeft: 5
                }}>
                    Material </Text>

                <View style={styles.containerForText}>
                    <View style={{
                        marginTop: 3, height: 45, padding: 10, marginRight: 5,
                        borderWidth: 1, borderRadius: 35
                    }}>
                        <Text style={{ textAlign: 'center' }}>Plastik : Kresek</Text>
                    </View>
                    <View style={{
                        marginTop: 3, height: 45, padding: 10, marginRight: 5,
                        borderWidth: 1, borderRadius: 35
                    }}>
                        <Text style={{ textAlign: 'center' }}>Plastik : Kresek</Text>
                    </View>
                    <View style={{
                        marginTop: 3, height: 45, padding: 10, marginRight: 5,
                        borderWidth: 1, borderRadius: 35
                    }}>
                        <Text style={{ textAlign: 'center' }}>Plastik : Kresek</Text>
                    </View>
                    <View style={{
                        marginTop: 3, height: 45, padding: 10, marginRight: 5,
                        borderWidth: 1, borderRadius: 35
                    }}>
                        <Text style={{ textAlign: 'center' }}>Plastik : Kresek</Text>
                    </View>
                </View>
                <Text style={{
                    fontFamily: 'Quicksand-Bold',
                    marginTop: 10, marginLeft: 5
                }}>
                    Catatan Tambahan </Text>
                <View style={{ marginLeft: 5, marginRight: 5, backgroundColor: '#fff' }}>
                    <Text style={{ fontFamily: 'Quicksand-Regular', marginLeft: 5, marginTop: 5, marginRight: 5 }}>
                        Di bagian atas meja tolong diberikan ukiran "CEMARA", bentuk tulisan saya percayakan kepada anda
                        </Text>
                </View>
                <Text style={{
                    fontFamily: 'Quicksand-Bold',
                    marginTop: 10, marginLeft: 5
                }}>
                    Jasa Pengiriman </Text>
                <View
                    style={{ marginLeft: 5, marginRight: 5, flex: 1, flexDirection: 'row', backgroundColor: '#fff' }}>
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
                <Text style={{
                    fontFamily: 'Quicksand-Bold',
                    marginTop: 10, marginLeft: 5
                }}>
                    Alamat Pengiriman </Text>
                <View style={{ height: 120, backgroundColor: '#fff', marginLeft: 5, marginRight: 5, marginTop: 5 }}>
                    <Text style={{ fontFamily: 'Quicksand-Bold', marginTop: 8, marginLeft: 5 }}>Home 1 {'\n'}</Text>
                    <Text style={{ fontFamily: 'Quicksand-Regular', marginLeft: 5 }}>Penerima: <Text style={{ fontFamily: 'Quicksand-Bold' }}>Judy {'\n'}{'\n'}</Text>
                        <Text style={{ fontFamily: 'Quicksand-Regular', marginLeft: 5}}>(+62) 8129676388 {'\n'}Jl. Kembang Ayu III blok E5 no.20 Perumahan Puri Indah,{'\n'}
                            DKI Jakarta, JAKARTA BARAT, KEMBANGAN </Text></Text>
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    item: {
        height: 90,
        width: 120,
        borderRadius: 4,
        alignSelf: 'stretch',
        resizeMode: 'cover'
    },
    container: {
        flex: 1,
        width: '100%',
        height: '100%',
        alignItems: 'center'
    },
    containerSlide: {
        width: '100%',
        height: 250,
        padding: 5
    },
    slide1: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    slide2: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    wrapper: {
    },
    containerSmallImage: {
        flexDirection: 'row',
        flex: 1
    },
    smallImage: {
        flex: 1,
        width: 80,
        height: 80
    },
    containerForText: {
        flex: 3,
        flexDirection: 'row',
        width: '100%',
        marginTop: 5,
        marginLeft: 5
    },
    containerText: {
        flex: 1
    },
    containerProduction: {
        flex: 1,
        flexDirection: 'row'
    }
});

export default MyOrderPage;