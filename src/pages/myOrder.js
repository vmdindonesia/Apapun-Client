import React, { Component } from 'react';
import { StyleSheet, ScrollView, FlatList, Text, TextInput, Alert, Keyboard, ToastAndroid, TouchableOpacity, View, Image } from 'react-native';
import { Input } from '../components/common';
import { COLOR } from './../shared/config';
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