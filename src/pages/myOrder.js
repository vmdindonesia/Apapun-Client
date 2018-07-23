import React, { Component } from 'react';
import { StyleSheet, ScrollView, FlatList, Text, View, Image } from 'react-native';
import { Input } from '../components/common';
import Carousel from 'react-native-snap-carousel';
import { sliderWidth, itemWidth } from './../shared/slider.styles';

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
            material: [
                'Plastik - Kresek',
                'Plastik - Kresek',
                'Plastik - Kresek',
                'Plastik - Kresek',
                'Plastik - Kresek'
            ]
        }
    }

    renderProductItem = (data) => {
        console.log(data, '098');
        return (
            <View style={{ borderRadius: 4 }} >
                <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 10, marginLeft: 5 }} >
                    <Image
                        style={styles.item}
                        source={{ uri: data.item }}
                    />
                </View>
            </View >
        )
    }

    renderMaterialItem = (data) => {
        console.log(data, '098');
        return (
            <View style={{ marginTop: 5, height: 45, padding: 10, marginRight: 5, borderWidth: 1, borderRadius: 35 }}>
                <Text style={{ textAlign: 'center' }}>Plastik : Kresek</Text>
            </View>
        )
    }

    renderProductItemHead = (data) => {
        console.log(data, '098');
        return (
            <View>
                <Image
                    style={styles.item}
                    source={{ uri: data.item }}
                />
            </View>
        )
    }

    _renderItem = (item, index) => {
        console.log(item, 'Item');
        const number = parseInt(item.index) + 1;
        return (
            <View>
                <Image
                    source={{ uri: item.item }}
                    style={{ width: '100%', height: 200 }}
                    resizeMode='contain'
                />
                <View style={{ position: 'absolute', backgroundColor: 'rgba(22, 22, 22, 0.5)', width: 40, height: 40, borderRadius: 50, marginLeft: 15, marginTop: 10 }}>
                    <Text style={{ textAlign: 'center', fontFamily: 'Quicksand-Bold', color: 'white', fontSize: 20, paddingTop: 8 }}>{number}</Text>
                </View>
            </View>
        )
    }

    render() {
        return (
            <ScrollView>
                <Carousel
                    ref={(c) => { this._carousel = c; }}
                    data={this.state.photo}
                    extraData={this.state}
                    renderItem={this._renderItem}
                    sliderWidth={sliderWidth}
                    itemWidth={itemWidth}
                />
                <View style={{ flexDirection: 'row', width: '100%', alignItems: 'center', paddingRight: 10, paddingLeft: 5 }}>
                    <FlatList
                        data={this.state.photo}
                        horizontal
                        renderItem={this.renderProductItem.bind(this)}
                        showsHorizontalScrollIndicator={false}
                    />
                </View>
                <View style={styles.containerForText}>
                    <View style={styles.containerText}>
                        <View style={{ flex: 1, marginTop: 3 }}>
                            <Input
                                label='Nama Produk'
                                editable={false}
                                value='Meja'
                            // onChangeText={v => this.onChangeInput('nameProduct', v)}
                            />
                        </View>
                    </View>
                    <View style={[styles.containerText, { marginLeft: 4 }]}>
                        <View style={{ flex: 1, marginTop: 3, marginRight: 10 }}>
                            <Input
                                label="Kategori"
                                editable={false}
                                value='LifeStyle'
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
                        Jumlah yang Dipesan </Text>
                    <View style={{ marginTop: 10, marginLeft: 5, height: 40, width: '20%' }}>
                        <Input
                            editable={false}
                            value='1'
                        // onChangeText={v => this.onChangeInput('nameProduct', v)}
                        />
                    </View>
                    <View style={{ marginTop: 10, marginLeft: 5, height: 40, width: '25%' }}>
                        <Input
                            editable={false}
                            value='PCS'
                        // onChangeText={v => this.onChangeInput('nameProduct', v)}
                        />
                    </View>
                </View>
                <Text style={{ fontFamily: 'Quicksand-Bold', marginTop: 10, marginBottom: 10, marginLeft: 5 }}>
                    Material
                </Text>
                <View>
                    <FlatList
                        data={this.state.material}
                        horizontal
                        renderItem={this.renderMaterialItem.bind(this)}
                        showsHorizontalScrollIndicator={false}
                        numColumns={3}
                        horizontal={false}
                    />
                </View>
                <Text style={{
                    fontFamily: 'Quicksand-Bold',
                    marginTop: 10, marginBottom: 10, marginLeft: 5
                }}>
                    Catatan Tambahan </Text>
                <View style={{ margin: 10, padding: 4, backgroundColor: '#fff' }}>
                    <Text style={{ fontFamily: 'Quicksand-Regular', marginLeft: 5, marginTop: 5, marginRight: 5 }}>
                        Di bagian atas meja tolong diberikan ukiran "CEMARA", bentuk tulisan saya percayakan kepada anda
                    </Text>
                </View>
                <Text style={{
                    fontFamily: 'Quicksand-Bold',
                    marginTop: 10, marginBottom: 10, marginLeft: 5
                }}>
                    Jasa Pengiriman </Text>
                <View style={{ margin: 10, flex: 1, flexDirection: 'row', backgroundColor: '#fff' }}>
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
                    marginTop: 10, marginBottom: 10, marginLeft: 5
                }}>
                    Alamat Pengiriman </Text>
                <View style={{ backgroundColor: '#fff', marginLeft: 5, marginRight: 5, marginTop: 5, marginBottom: 5 }}>
                    <View style={{ margin: 10, padding: 4 }}>
                        <Text style={{ fontFamily: 'Quicksand-Bold', marginTop: 8, marginLeft: 5 }}>
                            Home 1 {'\n'}
                        </Text>
                        <Text style={{ fontFamily: 'Quicksand-Regular', marginLeft: 5 }}>
                            Penerima: Judy
                    </Text>
                    </View>
                    <View style={{ margin: 10, padding: 4 }}>
                        <Text style={{ fontFamily: 'Quicksand-Regular', marginLeft: 5, marginTop: 5, marginRight: 5 }}>
                            (+62) 8129676388 {'\n'}Jl. Kembang Ayu III blok E5 no.20 Perumahan Puri Indah,{'\n'}DKI Jakarta, JAKARTA BARAT, KEMBANGAN
                    </Text>
                    </View>
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    item: {
        alignSelf: 'stretch',
        height: 90,
        width: 100,
        resizeMode: 'cover',
        borderRadius: 4
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