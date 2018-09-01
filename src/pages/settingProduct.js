import React, { Component } from 'react';
import { StyleSheet, Text, Image, TouchableOpacity, View, FlatList, ScrollView, Picker, TextInput } from 'react-native';
import Swiper from 'react-native-swiper';
import { Container, ContainerSection, Button, Input, InputDate, InputNumber } from '../components/common';
import Icon from 'react-native-vector-icons/Ionicons';

export class SettingProductPage extends React.Component {

    static navigationOptions = ({ navigation }) => ({
        headerLeft:
            <TouchableOpacity
                onPress={() => { navigation.goBack(); console.log(navigation.goBack(), 'Props Order') }}
            >
                <Icon size={30} style={{ marginLeft: 25, color: '#EF1C25' }} name='ios-arrow-back' />
            </TouchableOpacity>,
        headerTitle: 'Pengaturan Produk'
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
            dataCategory: '',
        }
    }

    onChangePicker = (name, value) => {
        this.setState({ [name]: value }, () => {
            console.log('Kategori Picker');
        })
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

    renderKategori = () => {
        const resultKategori = this.state.dataCategory;
        if (resultKategori) {
            return resultKategori.map((data, index) => {
                return <Picker.Item label={data.name} value={data.id} key={index} />
            })
        }
        return <Picker.Item label='Tidak ada Kategori' value='0' />
    }

    render() {
        return (
            <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
                <View style={{ flex: 1, marginLeft: 10, marginRight: 10, marginTop: 10 }}>
                    <View style={{ paddingLeft: 5 }}>
                        <Text style={{ fontFamily: 'Quicksand-Bold', color: 'black', fontSize: 15 }}>Upload Gambar</Text>
                        <View style={{
                            flexDirection: 'row', marginTop: 10, height: 30,
                            paddingTop: 5, paddingBottom: 5, alignContent: 'center'
                        }}>
                            <TouchableOpacity>
                                <Image
                                    style={{ width: 25, height: 20 }}
                                    source={require('../assets/images/logo-image.png')}
                                />
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Text
                                    style={{
                                        fontFamily: 'Quicksand-Regular', color: 'red', borderRightWidth: 0.5,
                                        marginLeft: 5, textAlign: 'center', paddingTop: 2, paddingRight: 10
                                    }}>Tambah Gambar</Text>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Image
                                    style={{ width: 25, height: 20, marginLeft: 15 }}
                                    source={require('../assets/images/trash_address.png')}
                                    resizeMode='center'
                                />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.containerSwiper}>
                        <Swiper
                            style={styles.wrapper}
                            showsButtons={false}
                            dot={<View style={{ backgroundColor: '#FFFFFF', width: 5, height: 5, borderRadius: 4, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3 }} />}
                        >
                            <View style={styles.slide1}>
                                <Image
                                    // style={styles.imageStyle}
                                    source={require('./../assets/images/swiperFirst.png')}
                                    resizeMode='cover'
                                />
                            </View>
                            <View style={styles.slide2}>
                                <Image
                                    // style={styles.imageStyle}
                                    source={require('./../assets/images/swiperSecond.png')}
                                    resizeMode='cover'
                                />
                            </View>
                        </Swiper>
                    </View>
                    <View style={{ height: 90, marginTop: 5 }}>
                        <View style={{ flex: 1 }}>
                            <FlatList
                                data={this.state.photo}
                                horizontal
                                renderItem={this.renderProductItem.bind(this)}
                                showsHorizontalScrollIndicator={false}
                            />
                        </View>
                    </View>
                    <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'flex-end', marginTop: 10 }}>
                        <Text style={{ fontFamily: 'Quicksand-Regular', fontSize: 12 }}>Maksimal upload 5 gambar</Text>
                    </View>
                    <View style={{ marginLeft: 5, marginTop: 10 }}>
                        <Text style={{ fontFamily: 'Quicksand-Bold', color: 'black', fontSize: 15 }}>Nama Produk</Text>
                        <View style={{ width: '100%', marginTop: 5 }}>
                            <Text
                                style={{
                                    fontFamily: 'Quicksand-Regular', fontSize: 15, color: 'grey', backgroundColor: '#eee',
                                }}>My Own Table</Text>
                        </View>
                    </View>
                    <View style={{ marginLeft: 5, marginTop: 10, flexDirection: 'row' }}>
                        <View style={{ flex: 1 }}>
                            <Text style={{ fontFamily: 'Quicksand-Bold', color: 'black', fontSize: 15 }}>Kategori</Text>
                            <View style={{ width: '100%', marginTop: 5 }}>
                                <Text
                                    style={{
                                        fontFamily: 'Quicksand-Regular', fontSize: 15, color: 'grey', backgroundColor: '#eee',
                                    }}>Furniture</Text>
                            </View>
                        </View>
                        <View style={{ flex: 1, marginLeft: 15, height: '10%' }}>
                            <Text style={{ fontFamily: 'Quicksand-Bold', color: 'black', fontSize: 15 }}>Sub-Kategori</Text>
                            <View style={styles.subCategoryPicker}>
                                <Picker style={{ flex: 1 }}>
                                    <Picker.Item label='Meja' value='Meja' />
                                </Picker>
                            </View>
                        </View>
                    </View>
                    <View style={{ flex: 1 }}>
                        <Text style={{ fontFamily: 'Quicksand-Bold', color: 'black', fontSize: 15 }}>
                            Deskripsi Produk</Text>
                        <View style={{ width: '100%', height: '10%', marginTop: 5 }}>
                            <TextInput
                                style={{ height: 100, textAlignVertical: 'top', borderWidth: 1 }}
                                multiline={true}
                                underlineColorAndroid='transparent'
                                maxLength={5000}
                            />
                            <Text
                                style={{ fontFamily: 'Quicksand-Regular', fontSize: 11, textAlign: 'right', marginTop: 5 }}
                            >Batas karakter 5000</Text>
                        </View>
                    </View>
                    <View style={{ flex: 1 }}>
                        <Text style={{ fontFamily: 'Quicksand-Bold', color: 'black', fontSize: 15 }}>Apresiasi Anda</Text>
                        <View style={{ flexDirection: 'row', }}>
                            <View
                                style={{
                                    borderRadius: 100, backgroundColor: 'black', width: 35, height: 35,
                                    justifyContent: 'center', flexDirection: 'row', marginTop: 12
                                }}
                            >
                                <Text style={{ fontFamily: 'Quicksand-Bold', fontSize: 18, color: 'white', textAlign: 'center', paddingTop: 5 }}>Rp</Text>
                            </View>
                            <View style={{ flex: 1, marginLeft: 10 }}>
                                <ContainerSection>
                                    <Input

                                        placeholder='silakan isi harga apresiasi'
                                    />
                                </ContainerSection>
                            </View>
                        </View>

                        <TouchableOpacity
                            style={{
                                borderRadius: 25, height: 40, width: '85%', backgroundColor: '#ef1c25', justifyContent: 'center',
                                margin: 25
                            }}>
                            <Text style={{ fontFamily: 'Quicksand-Bold', textAlign: 'center', color: 'white' }}>Simpan</Text>
                        </TouchableOpacity>
                    </View>


                </View >
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
    containerSwiper: {
        width: '100%',
        height: 250,
        marginTop: 5
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
    subCategoryPicker: {
        borderWidth: 1,
        justifyContent: 'center',
        marginTop: 5
    },
});

export default SettingProductPage;