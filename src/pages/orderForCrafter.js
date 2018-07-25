import React, { Component } from 'react';
import { StyleSheet, ScrollView, FlatList, Text, View, Image, TouchableOpacity } from 'react-native';
import { Input, InputNumber, ContainerSection, InputDate, Button } from '../components/common';
import Swiper from 'react-native-swiper';
import DatePicker from 'react-native-datepicker'
import { NavigationActions, StackActions } from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons';

export class OrderForCrafterPage extends React.Component {

    static navigationOptions = ({ navigation }) => ({
        headerLeft:
            <TouchableOpacity
                onPress={() => { navigation.goBack(); console.log(navigation.goBack(), 'Props Order') }}
            >
                <Icon size={30} style={{ marginLeft: 25, color: '#EF1C25' }} name='ios-arrow-back' />
            </TouchableOpacity>,
        headerTitle: 'Rancangan Pesanan'
    });

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
            // estimationTime: '',
            date: ""
        }
    }

    renderButton = () => {
        if (this.state.loading) {
            return <Spinner size="small" />
        }
        return (
            <Button
                style={{
                    backgroundColor: '#FF1000',
                    justifyContent: 'center',
                    borderRadius: 30,
                    marginTop: 30,
                    marginLeft: '15%',
                    marginRight: '15%',
                    marginBottom: 20
                }}
            // onPress={() => this.onValidation()}
            >
                <Text style={{ color: '#FFFFFF', fontFamily: 'Quicksand-Bold' }}>Ambil Pesanan</Text>
            </Button>
        )
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

        // const {
        //     estimationTime
        // } = this.state

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
                    <View style={{ marginTop: 10, marginLeft: 5, height: 40, width: '15%' }}>
                        <Input
                            editable={false}
                            value='PCS'
                        />

                    </View>
                </View>
                <Text style={{ fontFamily: 'Quicksand-Bold', marginTop: 5, fontSize: 15, marginLeft: 5 }}>Material</Text>
                <View style={styles.containerForText}>
                    <View style={{
                        marginTop: 3, height: 30, padding: 10, marginRight: 5,
                        borderWidth: 1, borderRadius: 35, justifyContent: 'center'
                    }}>
                        <Text style={{ textAlign: 'center', fontFamily: 'Quicksand-Regular', fontSize: 13 }}>Plastik : Kresek</Text>
                    </View>
                    <View style={{
                        marginTop: 3, height: 30, padding: 10, marginRight: 5,
                        borderWidth: 1, borderRadius: 35, justifyContent: 'center'
                    }}>
                        <Text style={{ textAlign: 'center', fontFamily: 'Quicksand-Regular', fontSize: 13 }}>Plastik : Kresek</Text>
                    </View>
                    <View style={{
                        marginTop: 3, height: 30, padding: 10, marginRight: 5,
                        borderWidth: 1, borderRadius: 35, justifyContent: 'center'
                    }}>
                        <Text style={{ textAlign: 'center', fontFamily: 'Quicksand-Regular', fontSize: 13 }}>Plastik : Kresek</Text>
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
                        <Text style={{ fontFamily: 'Quicksand-Regular', marginLeft: 5 }}>(+62) 8129676388 {'\n'}Jl. Kembang Ayu III blok E5 no.20 Perumahan Puri Indah,{'\n'}
                            DKI Jakarta, JAKARTA BARAT, KEMBANGAN </Text></Text>
                </View>
                <View style={{ flex: 1, marginTop: 10, marginLeft: 5, paddingRight: 5, paddingLeft: 5, backgroundColor: '#fff' }}>
                    <Text style={{ fontFamily: 'Quicksand-Bold', fontSize: 15 }}>Harga</Text>
                    <View style={{ flex: 1, flexDirection: 'row', marginTop: 5 }}>
                        <View
                            style={{
                                borderRadius: 100, backgroundColor: 'black', width: 30, height: 30,
                                justifyContent: 'center', flexDirection: 'row', marginTop: 3
                            }}
                        >
                            <Text style={{ fontFamily: 'Quicksand-Bold', fontSize: 20, color: 'white', textAlign: 'center' }}>Rp</Text>
                        </View>
                        <View style={{ flex: 1, marginLeft: 10, marginRight: 5 }}>
                            <InputNumber
                                // value={numberPcs.toString()}
                                // onChangeText={val => this.onChange('numberPcs', val)}
                                keyboardType='numeric'
                            />
                        </View>
                    </View>
                    <Text style={{ fontFamily: 'Quicksand-Bold', fontSize: 15, marginTop: 5 }}>Selesai Pembuatan</Text>
                    <ContainerSection>
                        <DatePicker
                            style={{ flex: 1, fontSize: 15, fontFamily: 'Quicksand-Bold'}}
                            date={this.state.date}
                            showIcon={false}
                            androidMode='spinner'
                            placeholder="select date"
                            format="DD-MM-YYYY"
                            confirmBtnText="Confirm"
                            cancelBtnText="Cancel"
                            onDateChange={(date) => { this.setState({ date: date }) }}
                        />
                    </ContainerSection>

                    <ContainerSection>
                        {this.renderButton()}
                    </ContainerSection>
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
        flex: 1,
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

export default OrderForCrafterPage;