import React, { Component } from 'react';
import { NavigationActions } from 'react-navigation'
import { StatusBar, StyleSheet, ScrollView, BackHandler, Text, Picker, Alert, Keyboard, ToastAndroid, TouchableOpacity, View, Image } from 'react-native'
import { Container, ContainerSection, Input, Button, Spinner, InputNumber } from '../components/common'
import AutoComplete from '../components/AutoComplete'
import { COLOR } from './../shared/config';
import Icon from 'react-native-vector-icons/Ionicons';

export class OrderPage extends React.Component {
    static navigationOptions = {
        headerTitle: 'Pengaturan Pesanan'
    }

    constructor(props) {
        super(props)

        this.state = {
            nameProduct: '',
            categoryProduct: '',
            uploadDesign: null,
            uploadMaterial: null,
            serveDelivery: '',
            addressDelivery: '',
            catatanTambahan: ''
        }
    }

    render() {

        const { nameProduct, categoryProduct, uploadDesign, uploadMaterial, serveDelivery, addressDelivery, catatanTambahan } = this.state;

        return (
            <ScrollView
                style={styles.containerStyle}
                keyboardShouldPersistTaps="always"
                ref={ref => this.scrollView = ref}
            >
                <StatusBar
                    backgroundColor={COLOR.primary}
                    barStyle="light-content"
                />
                <ContainerSection>
                    <Input
                        label='Nama Produk'
                        value={nameProduct}
                        onChangeText={v => this.onChangeInput('nameProduct', v)}
                    />
                </ContainerSection>
                <ContainerSection>
                    <View style={styles.pickerContainer}>
                        <Text style={styles.pickerTextStyle}>Kategori Produk</Text>
                        <View style={styles.pickerStyle}>
                            <Picker
                                selectedValue={categoryProduct}
                                onValueChange={v => this.onChangeInput('categoryProduct', v)}
                            >
                                <Picker.Item label='Pilih Kategori Produk' value='0' />
                                <Picker.Item label='Fashion' value='Fashion' />
                                <Picker.Item label='Lifestyle' value='Lifestyle' />
                                <Picker.Item label='Lainnya' value='Lainnya' />
                            </Picker>
                        </View>
                    </View>
                </ContainerSection>
                <Text style={[styles.pickerTextStyle, { marginLeft: 5, marginTop: 10 }]}>Upload Design Anda</Text>
                <ContainerSection>
                    <View style={{ flex: 1, width: '100%' }}>
                        <View>
                            {
                                uploadDesign === null ?
                                    <View>
                                        <Image
                                            source={require('../assets/images/create-design.jpg')}
                                            style={{ width: '100%' }}
                                            resizeMode='stretch'
                                        />
                                        <View style={[styles.textBackground, { flex: 1, flexDirection: 'row' }]}>
                                            <Text style={{ color: 'white', marginTop: 30, textAlign: 'center', fontWeight: 'bold' }}>Semakin detail desain Anda, semakin besar kemungkinan crafter kami untuk lebih mudah mengerti dalam memenuhi permintaan Anda.</Text>
                                        </View>
                                        <TouchableOpacity
                                            // onPress={() => this.onItemSelected(item)}
                                            style={styles.button}
                                        >
                                            <View style={{ flex: 1, flexDirection: 'row' }}>
                                                <View style={{ flex: 1 }}>
                                                    <Icon size={30} style={{ alignSelf: 'center', marginLeft: 60 }} name='md-images' />
                                                </View>
                                                <View>
                                                    <Text style={{ fontWeight: 'bold', fontSize: 14, flex: 1, textAlign: 'center', marginRight: 50, marginTop: 4 }}>Tambah Gambar</Text>
                                                </View>
                                            </View>
                                        </TouchableOpacity>
                                    </View>
                                    :
                                    <Image source={uploadDesign} />
                            }
                        </View>
                    </View>
                </ContainerSection>

                <Text style={[styles.pickerTextStyle, { marginLeft: 5, marginTop: 10 }]}>Jumlah yang dipesan</Text>
                <ContainerSection>
                    <View style={{ flex: 1 }}>
                        <InputNumber
                            placeholder='Unit'
                            icon="minus"
                            icons="plus"
                        // value={bidAmount ? numeral(parseInt(bidAmount, 0)).format('0,0') : ''}
                        // onChangeText={v => this.onChangeInput('bidAmount', v.replace(/\./g, ''))}
                        />
                    </View>

                    <View style={{ marginLeft: 10, flex: 1 }}>
                        <View style={styles.pickerUnitStyle}>
                            <Picker
                            // selectedValue={unitFish}
                            // onValueChange={v => this.onChangeInput('unitFish', v)}
                            >
                                <Picker.Item label='Pilih Ukuran' value='' />
                                <Picker.Item label='PCS' value='Kg' />
                                <Picker.Item label='LUSIN' value='Cm' />
                            </Picker>
                        </View>
                    </View>
                </ContainerSection>

                <Text style={[styles.pickerTextStyle, { marginLeft: 5, marginTop: 10 }]}>Material</Text>
                <ContainerSection>
                    <View style={{ flex: 1, width: '100%' }}>
                        <View>
                            {
                                uploadMaterial === null ?
                                    <View>
                                        <Image
                                            source={require('../assets/images/create-material.jpg')}
                                            style={{ width: '100%', height: 130 }}
                                            resizeMode='cover'
                                        />
                                        <View style={[styles.textBackground, { flex: 1, flexDirection: 'row' }]}>
                                            <Text style={{ color: 'white', marginTop: 10, marginLeft: 30, marginRight: 30, textAlign: 'center', fontWeight: 'bold' }}>Pilih material yang sesuai dengan desain Anda.</Text>
                                        </View>
                                        <TouchableOpacity
                                            // onPress={() => this.onItemSelected(item)}
                                            style={styles.buttons}
                                        >
                                            <View style={{ flex: 1, flexDirection: 'row' }}>
                                                <View style={{ flex: 1 }}>
                                                    <Icon size={30} style={{ alignSelf: 'center', marginLeft: 60 }} name='md-paper' />
                                                </View>
                                                <View>
                                                    <Text style={{ fontWeight: 'bold', fontSize: 14, flex: 1, textAlign: 'center', marginRight: 33, marginTop: 4 }}>Pemilihan Material</Text>
                                                </View>
                                            </View>
                                        </TouchableOpacity>
                                    </View>
                                    :
                                    <Image source={uploadMaterial} />
                            }
                        </View>
                    </View>
                </ContainerSection>
                <ContainerSection>
                    <View style={styles.pickerContainer}>
                        <Text style={styles.pickerTextStyle}>Jasa Pengiriman</Text>
                        <View style={styles.pickerStyle}>
                            <Picker
                                selectedValue={serveDelivery}
                                onValueChange={v => this.onChangeInput('serveDelivery', v)}
                            >
                                <Picker.Item label='Pilih Jasa Pengiriman' value='0' />
                                <Picker.Item label='JNE' value='JNE' />
                                <Picker.Item label='TIKI' value='TIKI' />
                                <Picker.Item label='Pos Indonesia' value='Pos Indonesia' />
                                <Picker.Item label='Gojek' value='Gojek' />
                            </Picker>
                        </View>
                    </View>
                </ContainerSection>
                <ContainerSection>
                    <View style={styles.pickerContainer}>
                        <Text style={styles.pickerTextStyle}>Alamat Pengiriman</Text>
                        <View style={styles.pickerStyle}>
                            <Picker
                                selectedValue={addressDelivery}
                                onValueChange={v => this.onChangeInput('addressDelivery', v)}
                            >
                                <Picker.Item label='Pilih Alamat Pengiriman' value='0' />
                                <Picker.Item label='Home' value='Home' />
                                <Picker.Item label='Office' value='Offic' />
                            </Picker>
                        </View>
                    </View>
                </ContainerSection>
                <ContainerSection>
                    <Input
                        label='Catatan Tambahan'
                        value={catatanTambahan}
                        onChangeText={v => this.onChangeInput('catatanTambahan', v)}
                    />
                </ContainerSection>
                <ContainerSection>
                    <Button
                        style={{
                            backgroundColor: '#FF1000',
                            justifyContent: 'center',
                            borderRadius: 30,
                            marginTop: 30,
                            marginLeft: '15%',
                            marginRight: '15%',
                            marginBottom: 50
                        }}>
                        Mencari Crafter
                    </Button>
                </ContainerSection>
            </ScrollView>
        );
    }

}
const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    pickerContainer: {
        flex: 1,
        marginBottom: 5
    },
    pickerStyle: {
        borderColor: '#a9a9a9',
        borderRadius: 3,
        paddingLeft: 5,
        borderWidth: 1
    },
    pickerTextStyle: {
        color: '#5e5e5e',
        fontSize: 14,
        fontWeight: 'bold',
        flex: 1,
        marginTop: 10,
        marginBottom: 10
    },
    pickerUnitStyle: {
        borderColor: '#a9a9a9',
        borderRadius: 5,
        paddingLeft: 7,
        borderWidth: 1,
        height: 47,
        backgroundColor: '#fff'
    },
    button: {
        backgroundColor: 'rgb(220, 220, 220)',
        borderColor: 'red',
        borderWidth: 1,
        borderRadius: 30,
        width: '80%',
        height: 35,
        position: 'absolute',
        marginTop: 120,
        marginLeft: 30,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttons: {
        backgroundColor: 'rgb(220, 220, 220)',
        borderColor: 'red',
        borderWidth: 1,
        borderRadius: 30,
        width: '80%',
        height: 35,
        position: 'absolute',
        marginTop: 70,
        marginLeft: 30,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textBackground: {
        position: 'absolute'
    }
});

export default OrderPage;